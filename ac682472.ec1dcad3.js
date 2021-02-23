(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{166:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(11),c=(n(0),n(174)),i={id:"registry",title:"nxpm registry",sidebar_label:"registry"},o={id:"commands/registry",title:"nxpm registry",description:"The `registry` command helps you run a local npm registry and configure `npm` and `yarn` to use it.",source:"@site/docs/commands/registry.md",permalink:"/docs/commands/registry",editUrl:"https://github.com/nxpm/nxpm/edit/master/apps/docs/docs/commands/registry.md",sidebar_label:"registry",sidebar:"someSidebar",previous:{title:"nxpm projects",permalink:"/docs/commands/projects"},next:{title:"nxpm release",permalink:"/docs/commands/release"}},s=[{value:"Start a local registry",id:"start-a-local-registry",children:[]},{value:"Configure npm and yarn",id:"configure-npm-and-yarn",children:[]},{value:"Check npm and yarn status",id:"check-npm-and-yarn-status",children:[]},{value:"Disable npm and yarn",id:"disable-npm-and-yarn",children:[]},{value:"Credits",id:"credits",children:[]}],l={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"registry")," command helps you run a local npm registry and configure ",Object(c.b)("inlineCode",{parentName:"p"},"npm")," and ",Object(c.b)("inlineCode",{parentName:"p"},"yarn")," to use it.\nThis can be very useful if you are developing packages and don't want to pollute the official npm registry."),Object(c.b)("p",null,"It works by executing the command ",Object(c.b)("inlineCode",{parentName:"p"},"npx verdaccio"),". If it's not installed globally, ",Object(c.b)("inlineCode",{parentName:"p"},"npx")," will handle that for you. If you want to speed up this process, make sure to install ",Object(c.b)("inlineCode",{parentName:"p"},"verdaccio")," globally."),Object(c.b)("h2",{id:"start-a-local-registry"},"Start a local registry"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"nxpm registry:start\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"NXPM  RUNNING npx verdaccio\nwarn --- config file  - ~/.config/verdaccio/config.yaml\nwarn --- Verdaccio started\nwarn --- Plugin successfully loaded: verdaccio-htpasswd\nwarn --- Plugin successfully loaded: verdaccio-audit\nwarn --- http address - http://localhost:4873/ - verdaccio/4.5.1\n")),Object(c.b)("h2",{id:"configure-npm-and-yarn"},"Configure npm and yarn"),Object(c.b)("p",null,"Configure npm and yarn to use the local registry"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"nxpm registry:enable\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),' NXPM  RUNNING npm config set registry http://localhost:4873/\n NXPM  RUNNING yarn config set registry http://localhost:4873/\nyarn config v1.22.4\nsuccess Set "registry" to "http://localhost:4873/".\n')),Object(c.b)("h2",{id:"check-npm-and-yarn-status"},"Check npm and yarn status"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"nxpm registry:status\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{})," NXPM  RUNNING npm config get registry\nhttp://localhost:4873/\n NXPM  RUNNING yarn config get registry\nhttp://localhost:4873/\n")),Object(c.b)("h2",{id:"disable-npm-and-yarn"},"Disable npm and yarn"),Object(c.b)("p",null,"Disable yarn and npm from using local npm registry"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"nxpm registry:disable\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),' NXPM  RUNNING npm config delete registry\n NXPM  RUNNING yarn config delete registry\nyarn config v1.22.4\nsuccess Deleted "registry".\n')),Object(c.b)("h2",{id:"credits"},"Credits"),Object(c.b)("p",null,"This command is based on ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/nrwl/nx/blob/master/scripts/local-registry.sh"}),"this script"),"."))}p.isMDXComponent=!0},174:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},d=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,m=d["".concat(i,".").concat(u)]||d[u]||b[u]||c;return n?a.a.createElement(m,o({ref:t},l,{components:n})):a.a.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<c;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);