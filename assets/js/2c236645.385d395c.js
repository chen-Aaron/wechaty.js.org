(self.webpackChunk=self.webpackChunk||[]).push([[8167,5863,2775,2076,9725,4562,9842,7574,313,196,9685,2826],{5318:function(t,e,n){"use strict";n.d(e,{Zo:function(){return u},kt:function(){return m}});var o=n(7378);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},s=Object.keys(t);for(o=0;o<s.length;o++)n=s[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(o=0;o<s.length;o++)n=s[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=o.createContext({}),i=function(t){var e=o.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},u=function(t){var e=i(t.components);return o.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var n=t.components,a=t.mdxType,s=t.originalType,c=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),d=i(n),m=a,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||s;return n?o.createElement(h,r(r({ref:e},u),{},{components:n})):o.createElement(h,r({ref:e},u))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var s=n.length,r=new Array(s);r[0]=d;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:a,r[1]=l;for(var i=2;i<s;i++)r[i]=n[i];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},517:function(t,e,n){"use strict";var o=n(7378);e.Z=function(t){var e=t.children,n=t.hidden,a=t.className;return o.createElement("div",{role:"tabpanel",hidden:n,className:a},e)}},4535:function(t,e,n){"use strict";n.d(e,{Z:function(){return p}});var o=n(7378),a=n(4956);var s=function(){var t=(0,o.useContext)(a.Z);if(null==t)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return t},r=n(8944),l="tabItem_c0e5",c="tabItemActive_28AG";var i=37,u=39;var p=function(t){var e=t.lazy,n=t.block,a=t.defaultValue,p=t.values,d=t.groupId,m=t.className,h=s(),g=h.tabGroupChoices,y=h.setTabGroupChoices,f=(0,o.useState)(a),b=f[0],v=f[1],k=o.Children.toArray(t.children),w=[];if(null!=d){var N=g[d];null!=N&&N!==b&&p.some((function(t){return t.value===N}))&&v(N)}var x=function(t){var e=t.currentTarget,n=w.indexOf(e),o=p[n].value;v(o),null!=d&&(y(d,o),setTimeout((function(){var t,n,o,a,s,r,l,i;(t=e.getBoundingClientRect(),n=t.top,o=t.left,a=t.bottom,s=t.right,r=window,l=r.innerHeight,i=r.innerWidth,n>=0&&s<=i&&a<=l&&o>=0)||(e.scrollIntoView({block:"center",behavior:"smooth"}),e.classList.add(c),setTimeout((function(){return e.classList.remove(c)}),2e3))}),150))},T=function(t){var e,n;switch(t.keyCode){case u:var o=w.indexOf(t.target)+1;n=w[o]||w[0];break;case i:var a=w.indexOf(t.target)-1;n=w[a]||w[w.length-1]}null==(e=n)||e.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},m)},p.map((function(t){var e=t.value,n=t.label;return o.createElement("li",{role:"tab",tabIndex:b===e?0:-1,"aria-selected":b===e,className:(0,r.Z)("tabs__item",l,{"tabs__item--active":b===e}),key:e,ref:function(t){return w.push(t)},onKeyDown:T,onFocus:x,onClick:x},n)}))),e?(0,o.cloneElement)(k.filter((function(t){return t.props.value===b}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},k.map((function(t,e){return(0,o.cloneElement)(t,{key:e,hidden:t.props.value!==b})}))))}},4956:function(t,e,n){"use strict";var o=(0,n(7378).createContext)(void 0);e.Z=o},4480:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return m},default:function(){return g}});var o=n(9603),a=n(120),s=(n(7378),n(5318)),r=n(4535),l=n(517),c=n(1645),i=["components"],u={title:"Running locally"},p=void 0,d={unversionedId:"getting-started/hard-way",id:"getting-started/hard-way",isDocsHomePage:!1,title:"Running locally",description:"You can setup your own server for running locally. Just follow the steps below:",source:"@site/docs/getting-started/hard-way.mdx",sourceDirName:"getting-started",slug:"/getting-started/hard-way",permalink:"/docs/getting-started/hard-way",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/getting-started/hard-way.mdx",version:"current",lastUpdatedBy:"ninetailskim",lastUpdatedAt:1624805720,formattedLastUpdatedAt:"6/27/2021",frontMatter:{title:"Running locally"},sidebar:"docs",previous:{title:"Quick start",permalink:"/docs/getting-started/quick-start"},next:{title:"Video tutorial",permalink:"/docs/tutorials/video-tutorial"}},m=[{value:"Requirements",id:"requirements",children:[]},{value:"1. Install build tools",id:"1-install-build-tools",children:[{value:"Install Node.js (&gt;=12)",id:"install-nodejs-12",children:[]},{value:"Install make",id:"install-make",children:[]}]},{value:"2. Clone repository",id:"2-clone-repository",children:[]},{value:"3. Install dependencies",id:"3-install-dependencies",children:[]},{value:"4. Run the bot",id:"4-run-the-bot",children:[]},{value:"Showcase",id:"showcase",children:[]},{value:"Contact us",id:"contact-us",children:[]}],h={toc:m};function g(t){var e=t.components,u=(0,a.Z)(t,i);return(0,s.kt)("wrapper",(0,o.Z)({},h,u,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"You can setup your own server for running locally. Just follow the steps below:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Install build tools"),(0,s.kt)("li",{parentName:"ol"},"Clone the ",(0,s.kt)("strong",{parentName:"li"},"Wechaty Getting Started")," repository"),(0,s.kt)("li",{parentName:"ol"},"Install dependencies"),(0,s.kt)("li",{parentName:"ol"},"Run the bot")),(0,s.kt)(c.default,{mdxType:"ShortestChatbots"}),(0,s.kt)("h2",{id:"requirements"},"Requirements"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"https://nodejs.dev/"},"Node.js")," v12+"),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"https://wechaty.js.org/docs/puppet-services/"},"Wechaty Puppet Service TOKEN")," (if you want to use RPA protocols other than Web)")),(0,s.kt)("h2",{id:"1-install-build-tools"},"1. Install build tools"),(0,s.kt)("h3",{id:"install-nodejs-12"},"Install Node.js (>=12)"),(0,s.kt)("p",null,"You will need ",(0,s.kt)("inlineCode",{parentName:"p"},"Node.js")," for running the bot. If you do not have ",(0,s.kt)("inlineCode",{parentName:"p"},"Node.js")," installed (or have a version below 12),\nthen you need to install the latest version of ",(0,s.kt)("inlineCode",{parentName:"p"},"Node.js")," by following the links below:"),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Node.js installation docs")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("ul",{parentName:"div"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/package-manager/#windows"},"Windows")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions"},"Linux","(","Debian/Ubuntu",")")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/package-manager/#macos"},"macOS"))),(0,s.kt)("blockquote",{parentName:"div"},(0,s.kt)("p",{parentName:"blockquote"},"Installation guide for ",(0,s.kt)("inlineCode",{parentName:"p"},"Node.js")," in other platforms can be found ",(0,s.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/package-manager/"},"here"),".")))),(0,s.kt)("h3",{id:"install-make"},"Install make"),(0,s.kt)("p",null,"You will need ",(0,s.kt)("inlineCode",{parentName:"p"},"make")," for running the ",(0,s.kt)("strong",{parentName:"p"},"Makefile"),", use the command below to install:"),(0,s.kt)(r.Z,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"linux",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt install build-essential\n"))),(0,s.kt)(l.Z,{value:"mac",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"brew install make\n"))),(0,s.kt)(l.Z,{value:"windows",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"choco install make\n")))),(0,s.kt)("h2",{id:"2-clone-repository"},"2. Clone repository"),(0,s.kt)("p",null,"You can clone the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-getting-started"},"Wechaty Getting Started")," repository by following the below command, and navigate to the directory:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/wechaty/wechaty-getting-started\ncd wechaty-getting-started\n")),(0,s.kt)("h2",{id:"3-install-dependencies"},"3. Install dependencies"),(0,s.kt)("p",null,"For installing the required ",(0,s.kt)("inlineCode",{parentName:"p"},"npm")," dependencies run the following:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# npm install\nmake install\n")),(0,s.kt)("h2",{id:"4-run-the-bot"},"4. Run the bot"),(0,s.kt)("p",null,"First, you have to ",(0,s.kt)("inlineCode",{parentName:"p"},"export/set")," the environment variables, and then you can run the bot:"),(0,s.kt)(r.Z,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"linux",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"export WECHATY_LOG=verbose\nexport WECHATY_PUPPET=wechaty-puppet-wechat\nmake bot\n# the above is equals to the below command:\n# npm start\n#   or, npx ts-node examples/ding-dong-bot.ts\n"))),(0,s.kt)(l.Z,{value:"mac",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"export WECHATY_LOG=verbose\nexport WECHATY_PUPPET=wechaty-puppet-wechat\nmake bot\n# the above is equals to the below command:\n# npm start\n#   or, npx ts-node examples/ding-dong-bot.ts\n"))),(0,s.kt)(l.Z,{value:"windows",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"set WECHATY_LOG=verbose\nset WECHATY_PUPPET=wechaty-puppet-wechat\nmake bot\n# the above is equals to the below command:\n# npm start\n#   or, npx ts-node examples/ding-dong-bot.ts\n")))),(0,s.kt)("p",null,"You can install ",(0,s.kt)("inlineCode",{parentName:"p"},"npx")," by using this command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -g npx\n")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"There are various ",(0,s.kt)("strong",{parentName:"p"},"Wechaty puppets")," available, you can know more about them ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-getting-started#working-with-different-puppets"},"here"),".")),(0,s.kt)("p",null,"You can see the following result after running:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"demo",src:n(3102).Z})),(0,s.kt)("p",null,"This demo will show all message on the bot."),(0,s.kt)("h2",{id:"showcase"},"Showcase"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Wechaty Developers&#39; Home",src:n(7617).Z})),(0,s.kt)("p",null,"Scan the following QR Code in WeChat with secret code ",(0,s.kt)("em",{parentName:"p"},"wechaty"),", join our ",(0,s.kt)("strong",{parentName:"p"},"Wechaty Developers' Home"),". This group is only for developers."),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Friday BOT")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Learn more about our open-sourced Friday BOT from our ",(0,s.kt)("a",{parentName:"p",href:"/docs/showcases/friday-bot"},"showcases")))),(0,s.kt)("h2",{id:"contact-us"},"Contact us"),(0,s.kt)("p",null,"You can ",(0,s.kt)("a",{parentName:"p",href:"https://gitter.im/wechaty/wechaty"},"join our Gitter")," network if you aren\u2019t already a member."))}g.isMDXComponent=!0},3171:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return i},toc:function(){return u},default:function(){return d}});var o=n(9603),a=n(120),s=(n(7378),n(5318)),r=["components"],l={},c=void 0,i={unversionedId:"polyglot/dotnet/transclusions/shortest-chatbot",id:"polyglot/dotnet/transclusions/shortest-chatbot",isDocsHomePage:!1,title:"shortest-chatbot",description:"`csharp",source:"@site/docs/polyglot/dotnet/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/dotnet/transclusions",slug:"/polyglot/dotnet/transclusions/shortest-chatbot",permalink:"/docs/polyglot/dotnet/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/dotnet/transclusions/shortest-chatbot.mdx",version:"current",lastUpdatedBy:"ninetailskim",lastUpdatedAt:1624805720,formattedLastUpdatedAt:"6/27/2021",frontMatter:{}},u=[],p={toc:u};function d(t){var e=t.components,n=(0,a.Z)(t,r);return(0,s.kt)("wrapper",(0,o.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},'var wechaty = new Wechaty(options, logger).onScan((qrcode, status) => {\n  Console.WriteLine($"Scan QR Code to login: {status} https://wechaty.js.org/qrcode/{(qrcode)}`");\n}).OnLogin( user => {\n  Console.WriteLine("User {user} logined");\n}).OnMessage( message => {\n  Console.WriteLine($"Message: {message}");\n}).Start();\n')))}d.isMDXComponent=!0},2641:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return i},toc:function(){return u},default:function(){return d}});var o=n(9603),a=n(120),s=(n(7378),n(5318)),r=["components"],l={},c=void 0,i={unversionedId:"polyglot/go/transclusions/shortest-chatbot",id:"polyglot/go/transclusions/shortest-chatbot",isDocsHomePage:!1,title:"shortest-chatbot",description:"`go",source:"@site/docs/polyglot/go/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/go/transclusions",slug:"/polyglot/go/transclusions/shortest-chatbot",permalink:"/docs/polyglot/go/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/go/transclusions/shortest-chatbot.mdx",version:"current",lastUpdatedBy:"ninetailskim",lastUpdatedAt:1624805720,formattedLastUpdatedAt:"6/27/2021",frontMatter:{}},u=[],p={toc:u};function d(t){var e=t.components,n=(0,a.Z)(t,r);return(0,s.kt)("wrapper",(0,o.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n "fmt"\n\n  "github.com/wechaty/go-wechaty/wechaty"\n)\n\nfunc main() {\n  _ = wechaty.NewWechaty().\n    OnScan(func(qrCode, status string) {\n      fmt.Printf("Scan QR Code to login: %s\\nhttps://wechaty.js.org/qrcode/%s\\n", status, qrCode)\n    }).\n    OnLogin(func(user string) { fmt.Printf("User %s logged in\\n", user) }).\n    OnMessage(func(message string) { fmt.Printf("Message: %s\\n", message) }).\n    Start()\n}\n')))}d.isMDXComponent=!0},2928:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return i},toc:function(){return u},default:function(){return d}});var o=n(9603),a=n(120),s=(n(7378),n(5318)),r=["components"],l={},c=void 0,i={unversionedId:"polyglot/java/transclusions/shortest-chatbot",id:"polyglot/java/transclusions/shortest-chatbot",isDocsHomePage:!1,title:"shortest-chatbot",description:"`java",source:"@site/docs/polyglot/java/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/java/transclusions",slug:"/polyglot/java/transclusions/shortest-chatbot",permalink:"/docs/polyglot/java/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/java/transclusions/shortest-chatbot.mdx",version:"current",lastUpdatedBy:"ninetailskim",lastUpdatedAt:1624805720,formattedLastUpdatedAt:"6/27/2021",frontMatter:{}},u=[],p={toc:u};function d(t){var e=t.components,n=(0,a.Z)(t,r);return(0,s.kt)("wrapper",(0,o.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'package io.github.wechaty;\n\nclass Bot{\n  public static void main(String args[]){\n    Wechaty bot = Wechaty.instance()\n      .onScan((qrcode, statusScanStatus, data) -> System.out.println(QrcodeUtils.getQr(qrcode)))\n      .onLogin(user -> System.out.println("User logged in :" + user))\n      .onMessage(message -> System.out.println("Message:" + message))\n      .start(true);\n  }\n}\n')))}d.isMDXComponent=!0},1797:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return i},toc:function(){return u},default:function(){return d}});var o=n(9603),a=n(120),s=(n(7378),n(5318)),r=["components"],l={},c=void 0,i={unversionedId:"polyglot/openapi/transclusions/shortest-chatbot",id:"polyglot/openapi/transclusions/shortest-chatbot",isDocsHomePage:!1,title:"shortest-chatbot",description:"`sh",source:"@site/docs/polyglot/openapi/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/openapi/transclusions",slug:"/polyglot/openapi/transclusions/shortest-chatbot",permalink:"/docs/polyglot/openapi/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/openapi/transclusions/shortest-chatbot.mdx",version:"current",lastUpdatedBy:"ninetailskim",lastUpdatedAt:1624805720,formattedLastUpdatedAt:"6/27/2021",frontMatter:{}},u=[],p={toc:u};function d(t){var e=t.components,n=(0,a.Z)(t,r);return(0,s.kt)("wrapper",(0,o.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"# To be add: curl ...\n")))}d.isMDXComponent=!0},9826:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return i},toc:function(){return u},default:function(){return d}});var o=n(9603),a=n(120),s=(n(7378),n(5318)),r=["components"],l={},c=void 0,i={unversionedId:"polyglot/php/transclusions/shortest-chatbot",id:"polyglot/php/transclusions/shortest-chatbot",isDocsHomePage:!1,title:"shortest-chatbot",description:"`php",source:"@site/docs/polyglot/php/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/php/transclusions",slug:"/polyglot/php/transclusions/shortest-chatbot",permalink:"/docs/polyglot/php/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/php/transclusions/shortest-chatbot.mdx",version:"current",lastUpdatedBy:"ninetailskim",lastUpdatedAt:1624805720,formattedLastUpdatedAt:"6/27/2021",frontMatter:{}},u=[],p={toc:u};function d(t){var e=t.components,n=(0,a.Z)(t,r);return(0,s.kt)("wrapper",(0,o.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},'$wechaty = \\IO\\Github\\Wechaty\\Wechaty::getInstance($token, $endPoint);\n$wechaty->onScan(function($qrcode, $status, $data) {\n    $qr = \\IO\\Github\\Wechaty\\Util\\QrcodeUtils::getQr($qrcode);\n    echo "$qr\\n\\nOnline Image: https://wechaty.js.org/qrcode/$qrcode\\n";\n})->onLogin(function(\\IO\\Github\\Wechaty\\User\\ContactSelf $user) {\n})->onMessage(function(\\IO\\Github\\Wechaty\\User\\Message $message) {\n    $message->say("hello from PHP7.4");\n})->start();\n')))}d.isMDXComponent=!0},9845:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return i},toc:function(){return u},default:function(){return d}});var o=n(9603),a=n(120),s=(n(7378),n(5318)),r=["components"],l={},c=void 0,i={unversionedId:"polyglot/python/transclusions/shortest-chatbot",id:"polyglot/python/transclusions/shortest-chatbot",isDocsHomePage:!1,title:"shortest-chatbot",description:"`py",source:"@site/docs/polyglot/python/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/python/transclusions",slug:"/polyglot/python/transclusions/shortest-chatbot",permalink:"/docs/polyglot/python/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/python/transclusions/shortest-chatbot.mdx",version:"current",lastUpdatedBy:"ninetailskim",lastUpdatedAt:1624805720,formattedLastUpdatedAt:"6/27/2021",frontMatter:{}},u=[],p={toc:u};function d(t){var e=t.components,n=(0,a.Z)(t,r);return(0,s.kt)("wrapper",(0,o.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},"from wechaty import Wechaty\nimport asyncio\n\nasync def main():\n    bot = Wechaty()\n    bot.on('scan', lambda status, qrcode, data: print('Scan QR Code to login: {}\\nhttps://wechaty.js.org/qrcode/{}'.format(status, qrcode)))\n    bot.on('login', lambda user: print('User {} logged in'.format(user)))\n    bot.on('message', lambda message: print('Message: {}'.format(message)))\n    await bot.start()\n\nasyncio.run(main())\n")))}d.isMDXComponent=!0},4732:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return i},toc:function(){return u},default:function(){return d}});var o=n(9603),a=n(120),s=(n(7378),n(5318)),r=["components"],l={},c=void 0,i={unversionedId:"polyglot/rust/transclusions/shortest-chatbot",id:"polyglot/rust/transclusions/shortest-chatbot",isDocsHomePage:!1,title:"shortest-chatbot",description:"`rust",source:"@site/docs/polyglot/rust/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/rust/transclusions",slug:"/polyglot/rust/transclusions/shortest-chatbot",permalink:"/docs/polyglot/rust/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/rust/transclusions/shortest-chatbot.mdx",version:"current",lastUpdatedBy:"ninetailskim",lastUpdatedAt:1624805720,formattedLastUpdatedAt:"6/27/2021",frontMatter:{}},u=[],p={toc:u};function d(t){var e=t.components,n=(0,a.Z)(t,r);return(0,s.kt)("wrapper",(0,o.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"let bot = Wechaty::new(PuppetService::new(options).await.unwrap());\n\nbot.on_scan(handle_scan)\n    .on_login(handle_login)\n    .on_logout(handle_logout)\n    .on_message(handle_message)\n    .start()\n    .await;\n")))}d.isMDXComponent=!0},2489:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return i},toc:function(){return u},default:function(){return d}});var o=n(9603),a=n(120),s=(n(7378),n(5318)),r=["components"],l={},c=void 0,i={unversionedId:"polyglot/scala/transclusions/shortest-chatbot",id:"polyglot/scala/transclusions/shortest-chatbot",isDocsHomePage:!1,title:"shortest-chatbot",description:"`scala",source:"@site/docs/polyglot/scala/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/scala/transclusions",slug:"/polyglot/scala/transclusions/shortest-chatbot",permalink:"/docs/polyglot/scala/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/scala/transclusions/shortest-chatbot.mdx",version:"current",lastUpdatedBy:"ninetailskim",lastUpdatedAt:1624805720,formattedLastUpdatedAt:"6/27/2021",frontMatter:{}},u=[],p={toc:u};function d(t){var e=t.components,n=(0,a.Z)(t,r);return(0,s.kt)("wrapper",(0,o.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala"},'package wechaty\n\nobject DingDongBot {\n  def main(args: Array[String]): Unit = {\n    Wechaty.instance()\n      .onScan(payload     => { println("Scan QR Code to login: %s\\nhttps://wechaty.js.org/qrcode/%s\\n".format(payload.status, payload.qrcode)) })\n      .onLogin(payload    => { println("User %s logged in\\n".format(payload.id)) })\n      .onMessage(message  => { println(message) })\n      .start()\n    Thread.currentThread().join()\n  }\n}\n')))}d.isMDXComponent=!0},1645:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return v},contentTitle:function(){return k},metadata:function(){return w},toc:function(){return N},default:function(){return T}});var o=n(9603),a=n(120),s=(n(7378),n(5318)),r=n(4535),l=n(517),c=n(6474),i=n(1797),u=n(5297),p=n(9845),d=n(2641),m=n(2928),h=n(9826),g=n(2489),y=n(3171),f=n(4732),b=["components"],v={},k=void 0,w={unversionedId:"polyglot/transclusions/shortest-chatbots",id:"polyglot/transclusions/shortest-chatbots",isDocsHomePage:!1,title:"shortest-chatbots",description:"<Tabs",source:"@site/docs/polyglot/transclusions/shortest-chatbots.mdx",sourceDirName:"polyglot/transclusions",slug:"/polyglot/transclusions/shortest-chatbots",permalink:"/docs/polyglot/transclusions/shortest-chatbots",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/transclusions/shortest-chatbots.mdx",version:"current",lastUpdatedBy:"ninetailskim",lastUpdatedAt:1624805720,formattedLastUpdatedAt:"6/27/2021",frontMatter:{}},N=[],x={toc:N};function T(t){var e=t.components,n=(0,a.Z)(t,b);return(0,s.kt)("wrapper",(0,o.Z)({},x,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)(r.Z,{groupId:"programming-languages",defaultValue:"ts",values:[{label:"OpenAPI",value:"openapi"},{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Go",value:"go"},{label:"Java",value:"java"},{label:"PHP",value:"php"},{label:"Scala",value:"scala"},{label:"C#",value:"csharp"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"openapi",mdxType:"TabItem"},(0,s.kt)(i.default,{mdxType:"ShortestChatbotOpenApi"})),(0,s.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)(c.default,{mdxType:"ShortestChatbotTypeScript"})),(0,s.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)(u.default,{mdxType:"ShortestChatbotJavaScript"})),(0,s.kt)(l.Z,{value:"py",mdxType:"TabItem"},(0,s.kt)(p.default,{mdxType:"ShortestChatbotPython"})),(0,s.kt)(l.Z,{value:"go",mdxType:"TabItem"},(0,s.kt)(d.default,{mdxType:"ShortestChatbotGo"})),(0,s.kt)(l.Z,{value:"java",mdxType:"TabItem"},(0,s.kt)(m.default,{mdxType:"ShortestChatbotJava"})),(0,s.kt)(l.Z,{value:"php",mdxType:"TabItem"},(0,s.kt)(h.default,{mdxType:"ShortestChatbotPhp"})),(0,s.kt)(l.Z,{value:"scala",mdxType:"TabItem"},(0,s.kt)(g.default,{mdxType:"ShortestChatbotScala"})),(0,s.kt)(l.Z,{value:"csharp",mdxType:"TabItem"},(0,s.kt)(y.default,{mdxType:"ShortestChatbotDotnet"})),(0,s.kt)(l.Z,{value:"rust",mdxType:"TabItem"},(0,s.kt)(f.default,{mdxType:"ShortestChatbotRust"}))))}T.isMDXComponent=!0},5297:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return i},toc:function(){return u},default:function(){return d}});var o=n(9603),a=n(120),s=(n(7378),n(5318)),r=["components"],l={},c=void 0,i={unversionedId:"polyglot/typescript/transclusions/shortest-chatbot-js",id:"polyglot/typescript/transclusions/shortest-chatbot-js",isDocsHomePage:!1,title:"shortest-chatbot-js",description:"`js",source:"@site/docs/polyglot/typescript/transclusions/shortest-chatbot-js.mdx",sourceDirName:"polyglot/typescript/transclusions",slug:"/polyglot/typescript/transclusions/shortest-chatbot-js",permalink:"/docs/polyglot/typescript/transclusions/shortest-chatbot-js",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/typescript/transclusions/shortest-chatbot-js.mdx",version:"current",lastUpdatedBy:"ninetailskim",lastUpdatedAt:1624805720,formattedLastUpdatedAt:"6/27/2021",frontMatter:{}},u=[],p={toc:u};function d(t){var e=t.components,n=(0,a.Z)(t,r);return(0,s.kt)("wrapper",(0,o.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const { Wechaty } = require('wechaty')\n\nasync function main () {\n  const bot = new Wechaty()\n  bot\n    .on('scan', (qrcode, status) => console.log(`Scan QR Code to login: ${status}\\nhttps://wechaty.js.org/qrcode/${encodeURIComponent(qrcode)}`))\n    .on('login',            user => console.log(`User ${user} logged in`))\n    .on('message',       message => console.log(`Message: ${message}`))\n  await bot.start()\n}\n\nmain()\n  .catch(console.error)\n")))}d.isMDXComponent=!0},6474:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return i},toc:function(){return u},default:function(){return d}});var o=n(9603),a=n(120),s=(n(7378),n(5318)),r=["components"],l={},c=void 0,i={unversionedId:"polyglot/typescript/transclusions/shortest-chatbot",id:"polyglot/typescript/transclusions/shortest-chatbot",isDocsHomePage:!1,title:"shortest-chatbot",description:"`ts",source:"@site/docs/polyglot/typescript/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/typescript/transclusions",slug:"/polyglot/typescript/transclusions/shortest-chatbot",permalink:"/docs/polyglot/typescript/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/typescript/transclusions/shortest-chatbot.mdx",version:"current",lastUpdatedBy:"ninetailskim",lastUpdatedAt:1624805720,formattedLastUpdatedAt:"6/27/2021",frontMatter:{}},u=[],p={toc:u};function d(t){var e=t.components,n=(0,a.Z)(t,r);return(0,s.kt)("wrapper",(0,o.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { Wechaty } from 'wechaty'\n\nasync function main () {\n  const bot = new Wechaty()\n  bot\n    .on('scan', (qrcode, status) => console.log(`Scan QR Code to login: ${status}\\nhttps://wechaty.js.org/qrcode/${encodeURIComponent(qrcode)}`))\n    .on('login',            user => console.log(`User ${user} logged in`))\n    .on('message',       message => console.log(`Message: ${message}`))\n  await bot.start()\n}\n\nmain()\n  .catch(console.error)\n")))}d.isMDXComponent=!0},8944:function(t,e,n){"use strict";function o(t){var e,n,a="";if("string"==typeof t||"number"==typeof t)a+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=o(t[e]))&&(a&&(a+=" "),a+=n);else for(e in t)t[e]&&(a&&(a+=" "),a+=e);return a}function a(){for(var t,e,n=0,a="";n<arguments.length;)(t=arguments[n++])&&(e=o(t))&&(a&&(a+=" "),a+=e);return a}n.d(e,{Z:function(){return a}})},3102:function(t,e,n){"use strict";e.Z=n.p+"assets/images/getting-started-qrcode-c178853175d38f44e44b0a6f9b36532d.png"},7617:function(t,e,n){"use strict";e.Z=n.p+"assets/images/friday-qrcode-5cc2eb406423df2d76ccc0b3543f94b7.svg"}}]);