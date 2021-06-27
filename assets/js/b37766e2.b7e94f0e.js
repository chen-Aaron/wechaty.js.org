(self.webpackChunk=self.webpackChunk||[]).push([[313],{5318:function(t,e,n){"use strict";n.d(e,{Zo:function(){return p},kt:function(){return y}});var r=n(7378);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},c=Object.keys(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var i=r.createContext({}),l=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},p=function(t){var e=l(t.components);return r.createElement(i.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,c=t.originalType,i=t.parentName,p=a(t,["components","mdxType","originalType","parentName"]),f=l(n),y=o,m=f["".concat(i,".").concat(y)]||f[y]||u[y]||c;return n?r.createElement(m,s(s({ref:e},p),{},{components:n})):r.createElement(m,s({ref:e},p))}));function y(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var c=n.length,s=new Array(c);s[0]=f;var a={};for(var i in e)hasOwnProperty.call(e,i)&&(a[i]=e[i]);a.originalType=t,a.mdxType="string"==typeof t?t:o,s[1]=a;for(var l=2;l<c;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6474:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return a},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var r=n(9603),o=n(120),c=(n(7378),n(5318)),s=["components"],a={},i=void 0,l={unversionedId:"polyglot/typescript/transclusions/shortest-chatbot",id:"polyglot/typescript/transclusions/shortest-chatbot",isDocsHomePage:!1,title:"shortest-chatbot",description:"`ts",source:"@site/docs/polyglot/typescript/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/typescript/transclusions",slug:"/polyglot/typescript/transclusions/shortest-chatbot",permalink:"/docs/polyglot/typescript/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/typescript/transclusions/shortest-chatbot.mdx",version:"current",lastUpdatedBy:"ninetailskim",lastUpdatedAt:1624805720,formattedLastUpdatedAt:"6/27/2021",frontMatter:{}},p=[],u={toc:p};function f(t){var e=t.components,n=(0,o.Z)(t,s);return(0,c.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ts"},"import { Wechaty } from 'wechaty'\n\nasync function main () {\n  const bot = new Wechaty()\n  bot\n    .on('scan', (qrcode, status) => console.log(`Scan QR Code to login: ${status}\\nhttps://wechaty.js.org/qrcode/${encodeURIComponent(qrcode)}`))\n    .on('login',            user => console.log(`User ${user} logged in`))\n    .on('message',       message => console.log(`Message: ${message}`))\n  await bot.start()\n}\n\nmain()\n  .catch(console.error)\n")))}f.isMDXComponent=!0}}]);