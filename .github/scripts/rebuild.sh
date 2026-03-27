#!/usr/bin/env bash
set -euo pipefail

# rebuild.sh for elastic/eui
# Runs on existing source tree (no clone). CWD should be packages/website.
# Navigates to repo root for install + workspace builds, then builds Docusaurus site.

echo "=== rebuild.sh: elastic/eui ==="

# CWD is packages/website; repo root is two levels up
DOCUSAURUS_DIR="$(pwd)"
REPO_ROOT="$(cd ../.. && pwd)"
YARN_BIN="$REPO_ROOT/.yarn/releases/yarn-4.6.0.cjs"

if [ ! -f "$YARN_BIN" ]; then
    echo "[ERROR] Cannot locate yarn-4.6.0.cjs at $YARN_BIN"
    exit 1
fi

# --- Node version: require Node 22+ ---
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

# Set CI=true to bypass the exact Node version check in the Yarn plugin
export CI=true

# --- Install dependencies from repo root ---
echo "=== Installing dependencies ==="
cd "$REPO_ROOT"
node "$YARN_BIN" install --immutable

# --- Pre-build: build workspace dependencies of eui-website ---
echo "=== Building workspace dependencies ==="
cd "$DOCUSAURUS_DIR"
node "$YARN_BIN" workspaces foreach -Rpi --topological-dev --from @elastic/eui-website --exclude @elastic/eui-website run build

# --- Build Docusaurus site ---
echo "=== Building Docusaurus site ==="
cd "$DOCUSAURUS_DIR"
# Increase heap for the large EUI workspace + Docusaurus build
NODE_OPTIONS="--max-old-space-size=4096" node "$YARN_BIN" build

echo "[DONE] Build complete."
