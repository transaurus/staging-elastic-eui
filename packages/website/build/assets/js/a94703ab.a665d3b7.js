"use strict";(self.webpackChunk_elastic_eui_website=self.webpackChunk_elastic_eui_website||[]).push([[79048],{7974:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ge});var i=n(14041),a=n(54357),o=n(31307),r=n(6558),s=n(33132),c=n(75984),l=n(54380),d=n(15428),u=n(91310),m=n(5141),h=n(55245),b=n(49227);const p={backToTopButton:"backToTopButton_z1FD",backToTopButtonShow:"backToTopButtonShow_w1wE"};function f(){const{shown:e,scrollToTop:t}=function({threshold:e}){const[t,n]=(0,i.useState)(!1),a=(0,i.useRef)(!1),{startScroll:o,cancelScroll:r}=(0,h.gk)();return(0,h.Mq)((({scrollY:t},i)=>{const o=i?.scrollY;o&&(a.current?a.current=!1:t>=o?(r(),n(!1)):t<e?n(!1):t+window.innerHeight<document.documentElement.scrollHeight&&n(!0))})),(0,b.$)((e=>{e.location.hash&&(a.current=!0,n(!1))})),{shown:t,scrollToTop:()=>o(0)}}({threshold:300});return(0,l.Y)("button",{"aria-label":(0,m.T)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,a.A)("clean-btn",r.G.common.backToTopButton,p.backToTopButton,e&&p.backToTopButtonShow),type:"button",onClick:t})}var g=n(87366),v=n(86090),_=n(96640),k=n(94293),Y=n(8751);function w(e){return(0,l.Y)("svg",{width:"20",height:"20","aria-hidden":"true",...e,children:(0,l.FD)("g",{fill:"#7a7a7a",children:[(0,l.Y)("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),(0,l.Y)("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})]})})}const A={collapseSidebarButton:"collapseSidebarButton_Ftvb",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_c4WT"};function C({onClick:e}){return(0,l.Y)("button",{type:"button",title:(0,m.T)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,m.T)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,a.A)("button button--secondary button--outline",A.collapseSidebarButton),onClick:e,children:(0,l.Y)(w,{className:A.collapseSidebarButtonIcon})})}var x=n(78218),S=n(73815);const T=Symbol("EmptyContext"),I=i.createContext(T);function N({children:e}){const[t,n]=(0,i.useState)(null),a=(0,i.useMemo)((()=>({expandedItem:t,setExpandedItem:n})),[t]);return(0,l.Y)(I.Provider,{value:a,children:e})}const y={menuHtmlItem:"menuHtmlItem_anEq"};function B({item:e,level:t,index:n}){const{value:i,defaultStyle:o,className:s}=e;return(0,l.Y)("li",{className:(0,a.A)(r.G.docs.docSidebarItemLink,r.G.docs.docSidebarItemLinkLevel(t),o&&[y.menuHtmlItem,"menu__list-item"],s),dangerouslySetInnerHTML:{__html:i}},n)}var L=n(9741),E=n(55612),D=n(16279),F=n(17687),M=n(81912);const H=({euiTheme:e})=>({listItem:d.css`
    --ifm-menu-color-background-hover: var(--eui-background-color-primary);
    --ifm-menu-color-background-active: var(--eui-background-color-primary);

    --ifm-menu-link-padding-horizontal: ${e.size.s};
    --ifm-menu-link-padding-vertical: calc(${e.size.xs} + 2px);

    .menu__link--sublist {
      color: ${e.colors.text};
      font-size: var(--eui-font-size-s);
      line-height: var(--eui-line-height-s);
      font-weight: ${e.font.weight.bold};
    }

    .menu__link--active {
      border-radius: ${e.border.radius.small};
      color: ${e.colors.primary};
    }
  `,button:d.css`
    padding: ${e.size.s};
  `});function z({collapsed:e,categoryLabel:t,onClick:n,...i}){return(0,l.Y)("button",{"aria-label":e?(0,m.T)({id:"theme.DocSidebarItem.expandCategoryAriaLabel",message:"Expand sidebar category '{label}'",description:"The ARIA label to expand the sidebar category"},{label:t}):(0,m.T)({id:"theme.DocSidebarItem.collapseCategoryAriaLabel",message:"Collapse sidebar category '{label}'",description:"The ARIA label to collapse the sidebar category"},{label:t}),"aria-expanded":!e,type:"button",className:"clean-btn",onClick:n,...i,children:(0,l.Y)(F.BJ,{size:"s",type:e?"chevronSingleRight":"chevronSingleDown"})})}function G({item:e,onItemClick:t,activePath:n,level:o,index:c,...d}){const{items:m,label:h,collapsible:b,className:p,href:f}=e,{docs:{sidebar:{autoCollapseCategories:g}}}=(0,k.p)(),v=function(e){const t=(0,u.A)();return(0,i.useMemo)((()=>e.href&&!e.linkUnlisted?e.href:!t&&e.collapsible?(0,s.Nr)(e):void 0),[e,t])}(e),_=(0,s.w8)(e,n),Y=(0,E.ys)(f,n),w=(0,M.Nh)(H),{collapsed:A,setCollapsed:C}=(0,L.u)({initialState:()=>!!b&&(!_&&e.collapsed)}),{expandedItem:x,setExpandedItem:N}=function(){const e=(0,i.useContext)(I);if(e===T)throw new S.dV("DocSidebarItemsExpandedStateProvider");return e}(),y=(e=!A)=>{N(e?null:c),C(e)};return function({isActive:e,collapsed:t,updateCollapsed:n}){const a=(0,S.ZC)(e);(0,i.useEffect)((()=>{e&&!a&&t&&n(!1)}),[e,a,t,n])}({isActive:_,collapsed:A,updateCollapsed:y}),(0,i.useEffect)((()=>{b&&null!=x&&x!==c&&g&&C(!0)}),[b,x,c,C,g]),(0,l.FD)("li",{className:(0,a.A)(r.G.docs.docSidebarItemCategory,r.G.docs.docSidebarItemCategoryLevel(o),"menu__list-item",{"menu__list-item--collapsed":A},p),css:w.listItem,children:[(0,l.FD)("div",{className:(0,a.A)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":Y&&!A}),children:[(0,l.Y)(D.A,{className:(0,a.A)("menu__link",{"menu__link--sublist":b,"menu__link--active":Y&&!A&&_}),onClick:b?n=>{t?.(e),f?y(!1):(n.preventDefault(),y())}:()=>{t?.(e)},"aria-current":Y?"page":void 0,role:b&&!f?"button":void 0,"aria-expanded":b&&!f?!A:void 0,href:b?v??"#":v,...d,children:h}),b&&(0,l.Y)(z,{collapsed:A,categoryLabel:h,onClick:e=>{e.preventDefault(),y()},css:w.button})]}),(0,l.Y)(L.N,{lazy:!0,as:"ul",className:"menu__list",collapsed:A,children:(0,l.Y)(U,{items:m,tabIndex:A?-1:0,onItemClick:t,activePath:n,level:o+1})})]})}var R=n(95797),$=n(56985);const P=({euiTheme:e})=>({menuListItem:d.css`
    .menu__link {
      color: ${e.colors.text};
      font-size: var(--eui-font-size-s);
      line-height: var(--eui-line-height-s);
    }

    .menu__link--active {
      border-radius: ${e.border.radius.small};
      color: ${e.colors.primary};
      font-weight: ${e.font.weight.bold};
    }
  `,menuExternalLink:d.css`
    align-items: center;
  `});function W({item:e,onItemClick:t,activePath:n,level:i,index:o,...c}){const{href:d,label:u,className:m,autoAddBaseUrl:h}=e,b=(0,s.w8)(e,n),p=(0,R.A)(d),f=(0,M.Nh)(P);return(0,l.Y)("li",{className:(0,a.A)(r.G.docs.docSidebarItemLink,r.G.docs.docSidebarItemLinkLevel(i),"menu__list-item",m),css:f.menuListItem,children:(0,l.FD)(D.A,{className:(0,a.A)("menu__link",!p&&f.menuExternalLink,{"menu__link--active":b}),autoAddBaseUrl:h,"aria-current":b?"page":void 0,to:d,...p&&{onClick:t?()=>t(e):void 0},...c,children:[u,!p&&(0,l.Y)($.A,{})]})},u)}function V({item:e,...t}){switch(e.type){case"category":return(0,l.Y)(G,{item:e,...t});case"html":return(0,l.Y)(B,{item:e,...t});default:return(0,l.Y)(W,{item:e,...t})}}function q({items:e,...t}){const n=(0,s.Y)(e,t.activePath);return(0,l.Y)(N,{children:n.map(((e,n)=>(0,l.Y)(V,{item:e,index:n,...t},n)))})}const U=(0,i.memo)(q),J={menu:"menu_qiME",menuWithAnnouncementBar:"menuWithAnnouncementBar_hRfJ"};function K({path:e,sidebar:t,className:n}){const o=function(){const{isActive:e}=(0,x.M)(),[t,n]=(0,i.useState)(e);return(0,h.Mq)((({scrollY:t})=>{e&&n(0===t)}),[e]),e&&t}();return(0,l.Y)("nav",{"aria-label":(0,m.T)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,a.A)("menu thin-scrollbar",J.menu,o&&J.menuWithAnnouncementBar,n),children:(0,l.Y)("ul",{className:(0,a.A)(r.G.docs.docSidebarMenu,"menu__list"),children:(0,l.Y)(U,{items:t,activePath:e,level:1})})})}const O="sidebar_vJCc",Z="sidebarWithHideableNavbar_Fo4g",X="sidebarHidden_vBKa",j="sidebarLogo_nlll";function Q({path:e,sidebar:t,onCollapse:n,isHidden:i}){const{navbar:{hideOnScroll:o},docs:{sidebar:{hideable:r}}}=(0,k.p)();return(0,l.FD)("div",{className:(0,a.A)(O,o&&Z,i&&X),children:[o&&(0,l.Y)(Y.A,{tabIndex:-1,className:j}),(0,l.Y)(K,{path:e,sidebar:t}),r&&(0,l.Y)(C,{onClick:n})]})}const ee=i.memo(Q);var te=n(37171),ne=n(20109);const ie=({sidebar:e,path:t})=>{const n=(0,ne.M)();return(0,l.Y)("ul",{className:(0,a.A)(r.G.docs.docSidebarMenu,"menu__list"),children:(0,l.Y)(U,{items:e,activePath:t,onItemClick:e=>{"category"===e.type&&e.href&&n.toggle(),"link"===e.type&&n.toggle()},level:1})})};function ae(e){return(0,l.Y)(te.GX,{component:ie,props:e})}const oe=i.memo(ae);function re(e){const t=(0,_.l)(),n="desktop"===t||"ssr"===t,i="mobile"===t;return(0,l.FD)(l.FK,{children:[n&&(0,l.Y)(ee,{...e}),i&&(0,l.Y)(oe,{...e})]})}const se={expandButton:"expandButton_SZY_",expandButtonIcon:"expandButtonIcon_CMLm"};function ce({toggleSidebar:e}){return(0,l.Y)("div",{className:se.expandButton,title:(0,m.T)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,m.T)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:e,onClick:e,children:(0,l.Y)(w,{className:se.expandButtonIcon})})}const le={docSidebarContainer:d.css`
    display: none;

    @media (min-width: 997px) {
      // ensure scrolling still works
      display: flex;
      width: var(--doc-sidebar-width);
      margin-top: calc(-1 * var(--ifm-navbar-height));
      border-right: 1px solid var(--ifm-toc-border-color);
      will-change: width;
      transition: width var(--ifm-transition-fast) ease;
      clip-path: inset(0);
    }

    .theme-doc-sidebar-menu.menu__list {
      padding-inline-end: var(--eui-size-s);
    }
  `,docSidebarContainerHidden:d.css`
    width: var(--doc-sidebar-hidden-width);
    cursor: pointer;
  `,sidebarViewport:d.css`
    top: 0;
    position: sticky;
    height: 100%;
    max-height: 100vh;
  `};function de({children:e}){const t=(0,c.t)();return(0,l.Y)(i.Fragment,{children:e},t?.name??"noSidebar")}function ue({sidebar:e,hiddenSidebarContainer:t,setHiddenSidebarContainer:n}){const{pathname:o}=(0,v.zy)(),[s,c]=(0,i.useState)(!1),d=(0,i.useCallback)((()=>{s&&c(!1),!s&&(0,g.O)()&&c(!0),n((e=>!e))}),[n,s]);return(0,l.Y)("aside",{className:(0,a.A)(r.G.docs.docSidebarContainer,le.docSidebarContainer.name),css:[le.docSidebarContainer,t&&le.docSidebarContainerHidden],onTransitionEnd:e=>{e.currentTarget.classList.contains(le.docSidebarContainer.name)&&t&&c(!0)},children:(0,l.Y)(de,{children:(0,l.FD)("div",{className:(0,a.A)(s&&"sidebarViewportHidden"),css:le.sidebarViewport,children:[(0,l.Y)(re,{sidebar:e,path:o,onCollapse:d,isHidden:s}),s&&(0,l.Y)(ce,{toggleSidebar:d})]})})})}const me={docMainContainer:d.css`
    display: flex;
    width: 100%;

    @media (min-width: 997px) {
      flex-grow: 1;
      max-width: calc(100% - var(--doc-sidebar-width));
    }
  `,docMainContainerEnhanced:d.css`
    @media (min-width: 997px) {
      max-width: calc(100% - var(--doc-sidebar-hidden-width));
    }
  `,docItemWrapperEnhanced:d.css`
    @media (min-width: 997px) {
      max-width: calc(
        var(--ifm-container-width) + var(--doc-sidebar-width)
      ) !important;
    }
  `};function he({hiddenSidebarContainer:e,children:t}){const n=(0,c.t)();return(0,l.Y)("main",{className:(0,a.A)(me.docMainContainer),css:[me.docMainContainer,(e||!n)&&me.docMainContainerEnhanced],children:(0,l.Y)("div",{className:"container padding-top--md padding-bottom--lg",css:[e&&me.docItemWrapperEnhanced],children:t})})}const be={docRoot:d.css`
    display: flex;
    width: 100%;
  `,docsWrapper:d.css`
    display: flex;
    flex: 1 0 auto;
  `};function pe({children:e}){const t=(0,u.A)(),n=(0,c.t)(),[a,o]=(0,i.useState)(!1);return(0,i.useEffect)((()=>{t&&window.location.hash&&setTimeout((()=>{const e=document.getElementById(window.location.hash.substring(1));e?.scrollIntoView(!0)}),100)}),[t]),(0,l.FD)("div",{css:be.docsWrapper,children:[(0,l.Y)(f,{}),(0,l.FD)("div",{css:be.docRoot,children:[n&&(0,l.Y)(ue,{sidebar:n.items,hiddenSidebarContainer:a,setHiddenSidebarContainer:o}),(0,l.Y)(he,{hiddenSidebarContainer:a,children:e})]})]})}var fe=n(46030);function ge(e){const t=(0,s.B5)(e);if(!t)return(0,l.Y)(fe.A,{});const{docElement:n,sidebarName:i,sidebarItems:d}=t;return(0,l.Y)(o.e3,{className:(0,a.A)(r.G.page.docsDocPage),children:(0,l.Y)(c.V,{name:i,items:d,children:(0,l.Y)(pe,{children:n})})})}},46030:(e,t,n)=>{n.d(t,{A:()=>s});n(14041);var i=n(54357),a=n(5141),o=n(35814),r=n(54380);function s({className:e}){return(0,r.Y)("main",{className:(0,i.A)("container margin-vert--xl",e),children:(0,r.Y)("div",{className:"row",children:(0,r.FD)("div",{className:"col col--6 col--offset-3",children:[(0,r.Y)(o.A,{as:"h1",className:"hero__title",children:(0,r.Y)(a.A,{id:"theme.NotFound.title",description:"The title of the 404 page",children:"Page Not Found"})}),(0,r.Y)("p",{children:(0,r.Y)(a.A,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page",children:"We could not find what you were looking for."})}),(0,r.Y)("p",{children:(0,r.Y)(a.A,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page",children:"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."})})]})})})}}}]);