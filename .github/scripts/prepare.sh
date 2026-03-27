#!/usr/bin/env bash
set -euo pipefail

REPO_URL="https://github.com/elastic/eui.git"
BRANCH="main"
REPO_DIR="source-repo"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# --- Clone (skip if already exists) ---
if [ ! -d "$REPO_DIR" ]; then
    echo "=== Cloning elastic/eui ==="
    git clone --depth 1 --branch "$BRANCH" "$REPO_URL" "$REPO_DIR"
fi

cd "$REPO_DIR"
REPO_ROOT="$(pwd)"

# --- Node version: require Node 22+ (repo uses 22.22.0 per .nvmrc) ---
NODE_22_PATH="/opt/hostedtoolcache/node/22.22.1/x64/bin"
if [ -d "$NODE_22_PATH" ]; then
    export PATH="$NODE_22_PATH:$PATH"
fi

export NVM_DIR="$HOME/.nvm"
if [ -s "$NVM_DIR/nvm.sh" ]; then
    # shellcheck source=/dev/null
    . "$NVM_DIR/nvm.sh"
    nvm use 22 2>/dev/null || nvm install 22
fi

NODE_MAJOR=$(node --version | sed 's/v//' | cut -d. -f1)
echo "[INFO] Using Node $(node --version)"
if [ "$NODE_MAJOR" -lt 20 ]; then
    echo "[ERROR] Need Node >=20 but have $(node --version)"
    exit 1
fi

# --- Yarn 4.6.0 bundled in repo ---
YARN_BIN="$REPO_ROOT/.yarn/releases/yarn-4.6.0.cjs"

# Set CI=true to bypass the exact Node version check in the Yarn plugin
# (plugin throws unless CI=true when version doesn't match .nvmrc exactly)
export CI=true

echo "=== Installing dependencies ==="
node "$YARN_BIN" install --immutable

# --- Apply fixes.json if present ---
FIXES_JSON="$SCRIPT_DIR/fixes.json"
if [ -f "$FIXES_JSON" ]; then
    echo "[INFO] Applying content fixes..."
    node -e "
    const fs = require('fs');
    const path = require('path');
    const fixes = JSON.parse(fs.readFileSync('$FIXES_JSON', 'utf8'));
    for (const [file, ops] of Object.entries(fixes.fixes || {})) {
        if (!fs.existsSync(file)) { console.log('  skip (not found):', file); continue; }
        let content = fs.readFileSync(file, 'utf8');
        for (const op of ops) {
            if (op.type === 'replace' && content.includes(op.find)) {
                content = content.split(op.find).join(op.replace || '');
                console.log('  fixed:', file, '-', op.comment || '');
            }
        }
        fs.writeFileSync(file, content);
    }
    for (const [file, cfg] of Object.entries(fixes.newFiles || {})) {
        const c = typeof cfg === 'string' ? cfg : cfg.content;
        fs.mkdirSync(path.dirname(file), {recursive: true});
        fs.writeFileSync(file, c);
        console.log('  created:', file);
    }
    "
fi

# --- Pre-build: build workspace dependencies of eui-website ---
echo "=== Building workspace dependencies ==="
# Build all transitive workspace deps of eui-website (excluding eui-website itself)
cd "$REPO_ROOT/packages/website"
node "$YARN_BIN" workspaces foreach -Rpi --topological-dev --from @elastic/eui-website --exclude @elastic/eui-website run build

echo "[DONE] Repository is ready for docusaurus commands."
