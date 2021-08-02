(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{619:function(e,t,a){"use strict";function n(e){(function(e,t){if("A"!==e.target.tagName)return!1;if(""!==e.target.target)return!1;if("string"!=typeof e.target.href)return!1;if(e.metaKey||e.shiftKey||e.ctrlKey)return!1;return!0})(e)&&(window.scrollTo(0,0),e.target.blur())}a.d(t,"a",(function(){return n}))},621:function(e,t,a){"use strict";a.d(t,"e",(function(){return _})),a.d(t,"d",(function(){return y})),a.d(t,"f",(function(){return w})),a.d(t,"a",(function(){return k})),a.d(t,"c",(function(){return E})),a.d(t,"b",(function(){return x}));var n=a(174),r=a(53),s=a.n(r),o=a(6),i=a(623),c=a.n(i),l=a(52),u=a.n(l),d=a(22),p=a.n(d),g=a(122),m=a.n(g);let h=new c.a;function f(e,t,a,n){if(m()(e,t)){if(m()(e,a)){if("object"!=typeof e[a])return void console.error("Non object already exists in key. This is likely due to tampering of the values in the url")}else e[a]={};e[a][n]=e[t],delete e[t]}}u()({"/ledgers":{r:"ledgers",e:"all"},"/ledgers/:ledger":{r:"ledgers",e:"single"},"/ledgers/:ledger/transactions":{r:"transactions",e:"for_ledger"},"/ledgers/:ledger/operations":{r:"operations",e:"for_ledger"},"/ledgers/:ledger/payments":{r:"payments",e:"for_ledger"},"/ledgers/:ledger/effects":{r:"effects",e:"for_ledger"},"/accounts/:account_id":{r:"accounts",e:"single"},"/accounts/:account_id/transactions":{r:"transactions",e:"for_account"},"/accounts/:account_id/operations":{r:"operations",e:"for_account"},"/accounts/:account_id/payments":{r:"payments",e:"for_account"},"/accounts/:account_id/effects":{r:"effects",e:"for_account"},"/accounts/:account_id/offers":{r:"offers",e:"for_account"},"/accounts/:account_id/trades":{r:"trades",e:"for_account"},"/transactions":{r:"transactions",e:"all"},"/transactions/:transaction":{r:"transactions",e:"single"},"/transactions/:transaction/operations":{r:"operations",e:"for_transaction"},"/transactions/:transaction/payments":{r:"payments",e:"for_transaction"},"/transactions/:transaction/effects":{r:"effects",e:"for_transaction"},"/operations":{r:"operations",e:"all"},"/operations/:operation":{r:"operations",e:"single"},"/operations/:operation/effects":{r:"effects",e:"for_operation"},"/payments":{r:"payments",e:"all"},"/effects":{r:"effects",e:"all"},"/order_book":{r:"order_book",e:"details"},"/order_book/trades":{r:"order_book",e:"trades"},"/paths":{r:"paths",e:"all"}},(e,t)=>{h.add([{path:t,handler:e}])});var v=function(e){let t=s.a.parse(function(e){return e.replace(/\{.+\}$/,"")}(e)).path;if(null===t)return;let a=h.recognize(t);if(void 0===a||0===a.length)return;let n=p()({},a.queryParams,a[0].params);return function(e){f(e,"selling_asset_type","selling_asset","type"),f(e,"selling_asset_code","selling_asset","code"),f(e,"selling_asset_issuer","selling_asset","issuer"),f(e,"buying_asset_type","buying_asset","type"),f(e,"buying_asset_code","buying_asset","code"),f(e,"buying_asset_issuer","buying_asset","issuer"),f(e,"destination_asset_type","buying_asset","type"),f(e,"destination_asset_code","buying_asset","code"),f(e,"destination_asset_issuer","buying_asset","issuer")}(n),{resource:a[0].handler.r,endpoint:a[0].handler.e,params:n}},b=a(55);function _(e){let t=Object(n.a)(o.a.TXSIGNER,{transactionSigner:{xdr:e}});return N(o.a.TXSIGNER,t)}function y(e){let t=Object(n.a)(o.a.TXSUBMITTER,{xdrViewer:{input:e}});return N(o.a.TXSUBMITTER,t)}function w(e,t){let a=Object(n.a)(o.a.XDRVIEWER,{xdrViewer:{input:e,type:t}});return N(o.a.XDRVIEWER,a)}function k(e){let t=Object(n.a)(o.a.TXBUILDER,{transactionBuilder:{feeBumpAttributes:{innerTxXDR:e},txType:b.a.FEE_BUMP}});return N(o.a.TXBUILDER,t)}function A(e,t,a){let r=Object(n.a)(o.a.EXPLORER,{endpointExplorer:{currentResource:e,currentEndpoint:t,pendingRequest:{values:a}}});return N(o.a.EXPLORER,r)}function E(e){return A("accounts","single",{account_id:e})}function x(e){let t=v(e);if(void 0!==t)return A(t.resource,t.endpoint,t.params)}function N(e,t){let a={pathname:e,query:t};return"#"+s.a.format(a)}},622:function(e,t,a){(function(t){var a="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},n=function(){var e=/\blang(?:uage)?-(\w+)\b/i,t=0,n=a.Prism={util:{encode:function(e){return e instanceof r?new r(e.type,n.util.encode(e.content),e.alias):"Array"===n.util.type(e)?e.map(n.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function(e){switch(n.util.type(e)){case"Object":var t={};for(var a in e)e.hasOwnProperty(a)&&(t[a]=n.util.clone(e[a]));return t;case"Array":return e.map&&e.map((function(e){return n.util.clone(e)}))}return e}},languages:{extend:function(e,t){var a=n.util.clone(n.languages[e]);for(var r in t)a[r]=t[r];return a},insertBefore:function(e,t,a,r){var s=(r=r||n.languages)[e];if(2==arguments.length){for(var o in a=arguments[1])a.hasOwnProperty(o)&&(s[o]=a[o]);return s}var i={};for(var c in s)if(s.hasOwnProperty(c)){if(c==t)for(var o in a)a.hasOwnProperty(o)&&(i[o]=a[o]);i[c]=s[c]}return n.languages.DFS(n.languages,(function(t,a){a===r[e]&&t!=e&&(this[t]=i)})),r[e]=i},DFS:function(e,t,a,r){for(var s in r=r||{},e)e.hasOwnProperty(s)&&(t.call(e,s,e[s],a||s),"Object"!==n.util.type(e[s])||r[n.util.objId(e[s])]?"Array"!==n.util.type(e[s])||r[n.util.objId(e[s])]||(r[n.util.objId(e[s])]=!0,n.languages.DFS(e[s],t,s,r)):(r[n.util.objId(e[s])]=!0,n.languages.DFS(e[s],t,null,r)))}},plugins:{},highlightAll:function(e,t){var a={callback:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};n.hooks.run("before-highlightall",a);for(var r,s=a.elements||document.querySelectorAll(a.selector),o=0;r=s[o++];)n.highlightElement(r,!0===e,a.callback)},highlightElement:function(t,r,s){for(var o,i,c=t;c&&!e.test(c.className);)c=c.parentNode;c&&(o=(c.className.match(e)||[,""])[1],i=n.languages[o]),t.className=t.className.replace(e,"").replace(/\s+/g," ")+" language-"+o,c=t.parentNode,/pre/i.test(c.nodeName)&&(c.className=c.className.replace(e,"").replace(/\s+/g," ")+" language-"+o);var l=t.textContent,u={element:t,language:o,grammar:i,code:l};if(l&&i)if(n.hooks.run("before-highlight",u),r&&a.Worker){var d=new Worker(n.filename);d.onmessage=function(e){u.highlightedCode=e.data,n.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,s&&s.call(u.element),n.hooks.run("after-highlight",u),n.hooks.run("complete",u)},d.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else u.highlightedCode=n.highlight(u.code,u.grammar,u.language),n.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,s&&s.call(t),n.hooks.run("after-highlight",u),n.hooks.run("complete",u);else n.hooks.run("complete",u)},highlight:function(e,t,a){var s=n.tokenize(e,t);return r.stringify(n.util.encode(s),a)},tokenize:function(e,t){var a=n.Token,r=[e],s=t.rest;if(s){for(var o in s)t[o]=s[o];delete t.rest}e:for(var o in t)if(t.hasOwnProperty(o)&&t[o]){var i=t[o];i="Array"===n.util.type(i)?i:[i];for(var c=0;c<i.length;++c){var l=i[c],u=l.inside,d=!!l.lookbehind,p=!!l.greedy,g=0,m=l.alias;l=l.pattern||l;for(var h=0;h<r.length;h++){var f=r[h];if(r.length>e.length)break e;if(!(f instanceof a)){l.lastIndex=0;var v=1;if(!(A=l.exec(f))&&p&&h!=r.length-1){var b=r[h+1].matchedStr||r[h+1],_=f+b;if(h<r.length-2&&(_+=r[h+2].matchedStr||r[h+2]),l.lastIndex=0,!(A=l.exec(_)))continue;if((k=A.index+(d?A[1].length:0))>=f.length)continue;var y=A.index+A[0].length,w=f.length+b.length;v=3,w>=y&&(v=2,_=_.slice(0,w)),f=_}if(A){d&&(g=A[1].length);y=(k=A.index+g)+(A=A[0].slice(g)).length;var k,A,E=f.slice(0,k),x=f.slice(y),N=[h,v];E&&N.push(E);var C=new a(o,u?n.tokenize(A,u):A,m,A);N.push(C),x&&N.push(x),Array.prototype.splice.apply(r,N)}}}}}return r},hooks:{all:{},add:function(e,t){var a=n.hooks.all;a[e]=a[e]||[],a[e].push(t)},run:function(e,t){var a=n.hooks.all[e];if(a&&a.length)for(var r,s=0;r=a[s++];)r(t)}}},r=n.Token=function(e,t,a,n){this.type=e,this.content=t,this.alias=a,this.matchedStr=n||null};if(r.stringify=function(e,t,a){if("string"==typeof e)return e;if("Array"===n.util.type(e))return e.map((function(a){return r.stringify(a,t,e)})).join("");var s={type:e.type,content:r.stringify(e.content,t,a),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:a};if("comment"==s.type&&(s.attributes.spellcheck="true"),e.alias){var o="Array"===n.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(s.classes,o)}n.hooks.run("wrap",s);var i="";for(var c in s.attributes)i+=(i?" ":"")+c+'="'+(s.attributes[c]||"")+'"';return"<"+s.tag+' class="'+s.classes.join(" ")+'" '+i+">"+s.content+"</"+s.tag+">"},!a.document)return a.addEventListener?(a.addEventListener("message",(function(e){var t=JSON.parse(e.data),r=t.language,s=t.code,o=t.immediateClose;a.postMessage(n.highlight(s,n.languages[r],r)),o&&a.close()}),!1),a.Prism):a.Prism;var s=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return s&&(n.filename=s.src,document.addEventListener&&!s.hasAttribute("data-manual")&&document.addEventListener("DOMContentLoaded",n.highlightAll)),a.Prism}();e.exports&&(e.exports=n),void 0!==t&&(t.Prism=n),n.languages.markup={comment:/<!--[\w\W]*?-->/,prolog:/<\?[\w\W]+?\?>/,doctype:/<!DOCTYPE[\w\W]+?>/,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=.$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,inside:{punctuation:/[=>"']/}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},n.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))})),n.languages.xml=n.languages.markup,n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.css={comment:/\/\*[\w\W]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*?(?=\s*\{)/,string:/("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},n.languages.css.atrule.inside.rest=n.util.clone(n.languages.css),n.languages.markup&&(n.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,lookbehind:!0,inside:n.languages.css,alias:"language-css"}}),n.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:n.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:n.languages.css}},alias:"language-css"}},n.languages.markup.tag)),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:{pattern:/(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{keyword:/\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,function:/[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i}),n.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0,greedy:!0}}),n.languages.insertBefore("javascript","class-name",{"template-string":{pattern:/`(?:\\\\|\\?[^\\])*?`/,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}}}),n.languages.markup&&n.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,lookbehind:!0,inside:n.languages.javascript,alias:"language-javascript"}}),n.languages.js=n.languages.javascript,n.languages.json={property:/".*?"(?=\s*:)/gi,string:/"(?!:)(\\?[^"])*?"(?!:)/g,number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/g,punctuation:/[{}[\]);,]/g,operator:/:/g,boolean:/\b(true|false)\b/gi,null:/\bnull\b/gi},n.languages.jsonp=n.languages.json}).call(this,a(18))},623:function(e,t,a){var n;(function(){"use strict";function r(e,t,a){this.path=e,this.matcher=t,this.delegate=a}function s(e){this.routes={},this.children={},this.target=e}function o(e,t,a){return function(n,s){var i=e+n;if(!s)return new r(e+n,t,a);s(o(i,t,a))}}function i(e,t,a){for(var n=0,r=0;r<e.length;r++)n+=e[r].path.length;var s={path:t=t.substr(n),handler:a};e.push(s)}r.prototype={to:function(e,t){var a=this.delegate;if(a&&a.willAddRoute&&(e=a.willAddRoute(this.matcher.target,e)),this.matcher.add(this.path,e),t){if(0===t.length)throw new Error("You must have an argument in the function passed to `to`");this.matcher.addChild(this.path,e,t,this.delegate)}return this}},s.prototype={add:function(e,t){this.routes[e]=t},addChild:function(e,t,a,n){var r=new s(t);this.children[e]=r;var i=o(e,r,n);n&&n.contextEntered&&n.contextEntered(t,i),a(i)}};var c=new RegExp("(\\"+["/",".","*","+","?","|","(",")","[","]","{","}","\\"].join("|\\")+")","g");function l(e){this.string=e}function u(e){this.name=e}function d(e){this.name=e}function p(){}function g(e,t,a){"/"===e.charAt(0)&&(e=e.substr(1));var n=e.split("/"),r=new Array(n.length);a.val="";for(var s=0;s<n.length;s++){var o,i=n[s];(o=i.match(/^:([^\/]+)$/))?(r[s]=new u(o[1]),t.push(o[1]),a.val+="3"):(o=i.match(/^\*([^\/]+)$/))?(r[s]=new d(o[1]),a.val+="1",t.push(o[1])):""===i?(r[s]=new p,a.val+="2"):(r[s]=new l(i),a.val+="4")}return a.val=+a.val,r}function m(e){this.charSpec=e,this.nextStates=[],this.charSpecs={},this.regex=void 0,this.handlers=void 0,this.specificity=void 0}function h(e,t){for(var a=[],n=0,r=e.length;n<r;n++){var s=e[n];a=a.concat(s.match(t))}return a}l.prototype={eachChar:function(e){for(var t,a=this.string,n=0;n<a.length;n++)t=a.charAt(n),e=e.put({invalidChars:void 0,repeat:!1,validChars:t});return e},regex:function(){return this.string.replace(c,"\\$1")},generate:function(){return this.string}},u.prototype={eachChar:function(e){return e.put({invalidChars:"/",repeat:!0,validChars:void 0})},regex:function(){return"([^/]+)"},generate:function(e){return e[this.name]}},d.prototype={eachChar:function(e){return e.put({invalidChars:"",repeat:!0,validChars:void 0})},regex:function(){return"(.+)"},generate:function(e){return e[this.name]}},p.prototype={eachChar:function(e){return e},regex:function(){return""},generate:function(){return""}},m.prototype={get:function(e){if(this.charSpecs[e.validChars])return this.charSpecs[e.validChars];for(var t=this.nextStates,a=0;a<t.length;a++){var n=t[a],r=n.charSpec.validChars===e.validChars;if(r=r&&n.charSpec.invalidChars===e.invalidChars)return this.charSpecs[e.validChars]=n,n}},put:function(e){var t;return(t=this.get(e))||(t=new m(e),this.nextStates.push(t),e.repeat&&t.nextStates.push(t)),t},match:function(e){for(var t,a,n,r=this.nextStates,s=[],o=0;o<r.length;o++)void 0!==(n=(a=(t=r[o]).charSpec).validChars)?-1!==n.indexOf(e)&&s.push(t):void 0!==(n=a.invalidChars)&&-1===n.indexOf(e)&&s.push(t);return s}};var f=Object.create||function(e){function t(){}return t.prototype=e,new t};function v(e){this.queryParams=e||{}}function b(e){var t;e=e.replace(/\+/gm,"%20");try{t=decodeURIComponent(e)}catch(e){t=""}return t}v.prototype=f({splice:Array.prototype.splice,slice:Array.prototype.slice,push:Array.prototype.push,length:0,queryParams:null});var _=function(){this.rootState=new m,this.names={}};(_.prototype={add:function(e,t){for(var a,n=this.rootState,r="^",s={},o=new Array(e.length),i=[],c=!0,l=0;l<e.length;l++){var u=e[l],d=[],m=g(u.path,d,s);i=i.concat(m);for(var h=0;h<m.length;h++){var f=m[h];f instanceof p||(c=!1,n=n.put({invalidChars:void 0,repeat:!1,validChars:"/"}),r+="/",n=f.eachChar(n),r+=f.regex())}var v={handler:u.handler,names:d};o[l]=v}c&&(n=n.put({invalidChars:void 0,repeat:!1,validChars:"/"}),r+="/"),n.handlers=o,n.regex=new RegExp(r+"$"),n.specificity=s,(a=t&&t.as)&&(this.names[a]={segments:i,handlers:o})},handlersFor:function(e){var t=this.names[e];if(!t)throw new Error("There is no route named "+e);for(var a=new Array(t.handlers.length),n=0;n<t.handlers.length;n++)a[n]=t.handlers[n];return a},hasRoute:function(e){return!!this.names[e]},generate:function(e,t){var a=this.names[e],n="";if(!a)throw new Error("There is no route named "+e);for(var r=a.segments,s=0;s<r.length;s++){var o=r[s];o instanceof p||(n+="/",n+=o.generate(t))}return"/"!==n.charAt(0)&&(n="/"+n),t&&t.queryParams&&(n+=this.generateQueryString(t.queryParams,a.handlers)),n},generateQueryString:function(e,t){var a,n=[],r=[];for(var s in e)e.hasOwnProperty(s)&&r.push(s);r.sort();for(var o=0;o<r.length;o++){var i=e[s=r[o]];if(null!=i){var c=encodeURIComponent(s);if(a=i,"[object Array]"===Object.prototype.toString.call(a))for(var l=0;l<i.length;l++){var u=s+"[]="+encodeURIComponent(i[l]);n.push(u)}else c+="="+encodeURIComponent(i),n.push(c)}}return 0===n.length?"":"?"+n.join("&")},parseQueryString:function(e){for(var t=e.split("&"),a={},n=0;n<t.length;n++){var r,s=t[n].split("="),o=b(s[0]),i=o.length,c=!1;1===s.length?r="true":(i>2&&"[]"===o.slice(i-2)&&(c=!0,a[o=o.slice(0,i-2)]||(a[o]=[])),r=s[1]?b(s[1]):""),c?a[o].push(r):a[o]=r}return a},recognize:function(e){var t,a,n,r=[this.rootState],s={},o=!1;if(-1!==(n=e.indexOf("?"))){var i=e.substr(n+1,e.length);e=e.substr(0,n),s=this.parseQueryString(i)}for("/"!==(e=decodeURI(e)).charAt(0)&&(e="/"+e),(t=e.length)>1&&"/"===e.charAt(t-1)&&(e=e.substr(0,t-1),o=!0),a=0;a<e.length&&(r=h(r,e.charAt(a))).length;a++);var c=[];for(a=0;a<r.length;a++)r[a].handlers&&c.push(r[a]);r=function(e){return e.sort((function(e,t){return t.specificity.val-e.specificity.val}))}(c);var l=c[0];if(l&&l.handlers)return o&&"(.+)$"===l.regex.source.slice(-5)&&(e+="/"),function(e,t,a){var n=e.handlers,r=e.regex,s=t.match(r),o=1,i=new v(a);i.length=n.length;for(var c=0;c<n.length;c++){for(var l=n[c],u=l.names,d={},p=0;p<u.length;p++)d[u[p]]=s[o++];i[c]={handler:l.handler,params:d,isDynamic:!!u.length}}return i}(l,e,s)}}).map=function(e,t){var a=new s;e(o("",a,this.delegate)),function e(t,a,n,r){var s=a.routes;for(var o in s)if(s.hasOwnProperty(o)){var c=t.slice();i(c,o,s[o]),a.children[o]?e(c,a.children[o],n,r):n.call(r,c)}}([],a,(function(e){t?t(this,e):this.add(e)}),this)},_.VERSION="0.1.11";var y=_;void 0===(n=function(){return y}.call(t,a,t,e))||(e.exports=n)}).call(this)},632:function(e,t,a){"use strict";a.d(t,"a",(function(){return k}));var n=a(0),r=a.n(n),s=a(13),o=a.n(s),i=a(622),c=a.n(i),l=a(52),u=a.n(l),d=a(122),p=a.n(d),g=a(621);let m=e=>{if(56===e.length)return Object(g.c)(e)};var h={envelope_xdr:e=>Object(g.f)(e,"TransactionEnvelope"),result_xdr:e=>Object(g.f)(e,"TransactionResult"),result_meta_xdr:e=>Object(g.f)(e,"TransactionMeta"),fee_meta_xdr:e=>Object(g.f)(e,"OperationMeta"),id:m,public_key:m,account_id:m,funder:m,account:m,source_account:m,destination_account:m,href:g.b};function f(e){let t=(new DOMParser).parseFromString(e,"text/html").childNodes[0].childNodes[1];return u()(t.children,(e,t)=>{e.className.indexOf("property")>0&&function(e){!function(e){let t=e.nextElementSibling,a=t.nextElementSibling;if("token operator"!==t.className)throw new Error("Prism jsonLinkHighlighter: Unexpected first sibling to property token with class: "+t.className);if(!p()(b,a.className))throw new Error("Prism jsonLinkHighlighter: Unexpected second sibling to property token with class: "+a.className)}(e);let t=e.nextElementSibling.nextElementSibling;if(!p()(v,t.className))return;let a=h[_(e.innerHTML)];if(void 0===a)return;let n=t.innerHTML.replace(/\&amp;/g,"&"),r=a(_(n));if(void 0===r)return;!function(e,t){e.outerHTML=`<a href="${t}" class="${e.className}">${e.innerHTML}</a>`}(t,r)}(e)}),t.innerHTML}let v={"token string":!0,"token boolean":!0,"token number":!0};let b={"token punctuation":!0,"token string":!0,"token boolean":!0,"token number":!0,"token null":!0,"token property":!0};function _(e){return e.substring(1,e.length-1)}var y=a(619),w=a(176);class k extends r.a.Component{shouldComponentUpdate(e,t){return e.code!==this.props.code||e.language!==this.props.language}getHighlightedCode(){let e=c.a.highlight(this.props.code,c.a.languages[this.props.language]);return"json"===this.props.language?f(e):e}render(){let e="CodeBlock__code language-"+this.props.language,t=this.getHighlightedCode();return r.a.createElement("pre",{className:"CodeBlock "+this.props.className,onClick:y.a},r.a.createElement("code",{className:e},Object(w.a)(t)))}}k.propTypes={code:o.a.string.isRequired,language:o.a.string}},672:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(46),o=(a(3),a(4)),i=a(255),c=a(167);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function u({placeholder:e,value:t,onUpdate:a,...n}){const s=Object(c.b)();return r.a.createElement("div",{className:"PubKeyPicker"},r.a.createElement(o.a,l({},n,{value:t,onUpdate:a,placeholder:e||"Example: MBRWSVNURRYVIYSWLRFQ5AAAUWPKOZZNZVVVIXHFGUSGIRVKLVIDYAAAAAAAAAAD5GJ4U",validator:e=>{if(!e.startsWith("M")||69!==e.length)return"Muxed account address is invalid."}})),s&&r.a.createElement("button",{type:"button",onClick:()=>Object(c.a)(a),className:"s-button__icon PubKeyPicker__activator"},r.a.createElement(i.a,{width:24})))}var d=a(8),p=a(11),g=a(44),m=a(31),h=a(632),f=a(40);const v="account creator: generated new account",b="account creator: funded test account: begin",_="account creator: funded test account: success",y="account creator: funded test account: failed",w="account creator: generated new muxed account",k="account creator: parsed muxed account";Object(f.a)((function(e,t){const{type:a,...n}=t;switch(a){case g.c:return void Object(f.c)(v);case g.e:return void Object(f.c)(b);case g.a:{if("success"===n.status)return void Object(f.c)(_);const{message:e,code:t}=n;return void Object(f.c)(y,{message:e,code:t})}case g.b:return void Object(f.c)(w);case g.d:return void Object(f.c)(k)}}));const A="Base Account G Address",E="Muxed Account ID",x="Muxed Account M Address";class N extends r.a.Component{render(){let e,t,a,{state:n,dispatch:s}=this.props;const o=this.props.baseURL===m.a.available.test.horizonURL;let i;if(null!==n.keypairGeneratorResult&&(e=r.a.createElement("div",{className:"simpleTable AccountCreator__generator__table"},r.a.createElement("div",{className:"simpleTable__row"},r.a.createElement("div",{className:"simpleTable__row__label"},"Public Key"),r.a.createElement("div",{className:"simpleTable__row__content"},n.keypairGeneratorResult.pubKey)),r.a.createElement("div",{className:"simpleTable__row"},r.a.createElement("div",{className:"simpleTable__row__label"},"Secret Key"),r.a.createElement("div",{className:"simpleTable__row__content"},n.keypairGeneratorResult.secretKey)))),""!==n.keypairGeneratorPubKey&&o&&(t=r.a.createElement("a",{onClick:()=>s(Object(g.m)(n.keypairGeneratorPubKey))},"Fund this account on the test network using the friendbot tool below")),n.friendbotStatus.code&&(a=r.a.createElement(h.a,{className:"AccountCreator__spaceTop",code:n.friendbotStatus.code,language:"json"})),n.friendbotStatus.message){let e;"loading"===n.friendbotStatus.status?e="s-alert--info":"success"===n.friendbotStatus.status?e="s-alert--success":"failure"===n.friendbotStatus.status&&(e="s-alert--alert"),i=r.a.createElement("div",{className:"s-alert AccountCreator__friendbot__alert "+e},n.friendbotStatus.message)}return r.a.createElement("div",{className:"AccountCreator"},r.a.createElement("div",{className:"so-back AccountCreator__section"},r.a.createElement("div",{className:"so-chunk"},r.a.createElement("h3",null,"Keypair generator"),r.a.createElement("p",null,"These keypairs can be used on the Stellar network where one is required. For example, it can be used as an account master key, account signer, and/or as a stellar-core node key."),r.a.createElement("button",{className:"s-button",onClick:()=>{s(Object(g.j)())}},"Generate keypair"),e,t)),o&&r.a.createElement("div",null,r.a.createElement("div",{className:"so-back AccountCreator__separator"}),r.a.createElement("div",{className:"so-back AccountCreator__section"},r.a.createElement("div",{className:"so-chunk"},r.a.createElement("h3",null,"Friendbot: Fund a test network account"),r.a.createElement("p",null,"The friendbot is a horizon API endpoint that will fund an account with 10,000 lumens on the test network."),r.a.createElement(d.a,{className:"picker--spaceBottom",value:n.friendbotTarget,onUpdate:e=>{s(Object(g.m)(e))}}),r.a.createElement("button",{className:"s-button",disabled:0===n.friendbotTarget.length,onClick:()=>s(Object(g.l)(n.friendbotTarget))},"Get test network lumens"),i,a))),r.a.createElement("div",{className:"so-back AccountCreator__separator"}),r.a.createElement("div",{className:"so-back AccountCreator__section"},r.a.createElement("div",{className:"so-chunk"},r.a.createElement("h3",null,"Muxed Account"),r.a.createElement("p",{className:"AccountCreator__note--alert"},"Muxed Account types are not yet widely adopted. Don’t use in a production environment unless you know what you’re doing."),r.a.createElement("p",null,"A muxed (or multiplexed) account (defined in ",r.a.createElement("a",{href:"https://stellar.org/protocol/cap-27",target:"_blank",rel:"noreferrer"},"CAP-27")," and briefly ",r.a.createElement("a",{href:"https://stellar.org/protocol/sep-23",target:"_blank",rel:"noreferrer"},"SEP-23"),") is one that resolves a single Stellar G...account to many different underlying IDs."),r.a.createElement("div",{className:"AccountCreator__spaceTop"},r.a.createElement("h4",{className:"picker--spaceBottom"},"Create Multiplexed Account"),r.a.createElement("div",{className:"picker--spaceBottom"},r.a.createElement("p",{className:"AccountCreator__label"},A,":"),r.a.createElement(d.a,{value:n.muxedAccountGenerated.gAddress,onUpdate:e=>{s(Object(g.n)({gAddress:e}))}})),r.a.createElement("div",{className:"picker--spaceBottom"},r.a.createElement("p",{className:"AccountCreator__label"},E,":"),r.a.createElement(p.a,{value:n.muxedAccountGenerated.mAccountId,onUpdate:e=>{s(Object(g.n)({mAccountId:e}))}})),r.a.createElement("button",{className:"s-button",disabled:!(n.muxedAccountGenerated.gAddress&&n.muxedAccountGenerated.mAccountId),onClick:()=>{s(Object(g.i)(n.muxedAccountGenerated.gAddress,n.muxedAccountGenerated.mAccountId))}},"Create"),n.muxedAccountGenerated.errorMessage?r.a.createElement("p",{className:"picker__errorMessage"},n.muxedAccountGenerated.errorMessage):null,n.muxedAccountGenerated.mAddress?r.a.createElement("div",{className:"simpleTable AccountCreator__generator__table"},r.a.createElement("div",{className:"simpleTable__row"},r.a.createElement("div",{className:"simpleTable__row__label"},A),r.a.createElement("div",{className:"simpleTable__row__content"},n.muxedAccountGenerated.gAddress)),r.a.createElement("div",{className:"simpleTable__row"},r.a.createElement("div",{className:"simpleTable__row__label"},E),r.a.createElement("div",{className:"simpleTable__row__content"},n.muxedAccountGenerated.mAccountId)),r.a.createElement("div",{className:"simpleTable__row"},r.a.createElement("div",{className:"simpleTable__row__label"},x),r.a.createElement("div",{className:"simpleTable__row__content"},n.muxedAccountGenerated.mAddress))):null),r.a.createElement("div",{className:"AccountCreator__spaceTop"},r.a.createElement("h4",{className:"picker--spaceBottom"},"Get Muxed Account from M address"),r.a.createElement("div",{className:"picker--spaceBottom"},r.a.createElement(u,{value:n.muxedAccountParsed.mAddress,onUpdate:e=>{s(Object(g.o)(e))}})),r.a.createElement("button",{className:"s-button",disabled:!n.muxedAccountParsed.mAddress,onClick:()=>{s(Object(g.k)(n.muxedAccountParsed.mAddress))}},"Parse"),n.muxedAccountParsed.errorMessage?r.a.createElement("p",{className:"picker__errorMessage"},n.muxedAccountParsed.errorMessage):null,n.muxedAccountParsed.gAddress&&n.muxedAccountParsed.mAccountId?r.a.createElement("div",{className:"simpleTable AccountCreator__generator__table"},r.a.createElement("div",{className:"simpleTable__row"},r.a.createElement("div",{className:"simpleTable__row__label"},x),r.a.createElement("div",{className:"simpleTable__row__content"},n.muxedAccountParsed.mAddress)),r.a.createElement("div",{className:"simpleTable__row"},r.a.createElement("div",{className:"simpleTable__row__label"},A),r.a.createElement("div",{className:"simpleTable__row__content"},n.muxedAccountParsed.gAddress)),r.a.createElement("div",{className:"simpleTable__row"},r.a.createElement("div",{className:"simpleTable__row__label"},E),r.a.createElement("div",{className:"simpleTable__row__content"},n.muxedAccountParsed.mAccountId))):null))))}}t.default=Object(s.b)((function(e){return{state:e.accountCreator,baseURL:e.network.current.horizonURL}}))(N)}}]);