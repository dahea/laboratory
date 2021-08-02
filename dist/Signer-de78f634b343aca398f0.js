(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{620:function(e,t,n){var a=n(173),r=n(64);e.exports=function(e,t){return a(t,(function(t){return r(e[t])}))}},625:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return p}));var a=n(3),r=n(17),s=n.n(r),i=n(14),o=n.n(i),c=n(626),l=n.n(c),u=n(627),m=n.n(u),d=n(628),g=n.n(d);function p(e,t){let n;try{n=a.xdr[t].fromXDR(e,"base64")}catch(e){throw new Error("Input XDR could not be parsed")}let r=[{}];return f(n,r[0],t),r}function f(t,n,r){n.type=r,s()(t)?function(e,t){e.value=`Array[${t.length}]`,e.nodes=[];for(var n=0;n<t.length;n++)e.nodes.push({}),f(t[n],e.nodes[e.nodes.length-1],"["+n+"]")}(n,t):function(e){if(o()(e))return!1;if(e&&e._isBuffer)return!1;var t=l()(e);if(0==t.length)return!1;if(m()(t,"getLowBits")&&m()(t,"getHighBits"))return!1;return!0}(t)?t.switch?function(e,t){e.value="["+t.switch().name+"]",o()(t.arm())&&(e.nodes=[{}],f(t[t.arm()](),e.nodes[e.nodes.length-1],t.arm()))}(n,t):function(e,t){e.nodes=[],g()(l()(t),"toXDR").forEach((function(n){e.nodes.push({}),f(t[n](),e.nodes[e.nodes.length-1],n)}))}(n,t):n.value=function(t,n){if(m()(h,n))return{type:"amount",value:{parsed:a.Operation._fromXDRAmount(t),raw:t.toString()}};if("hint"===n){let n=new e(t,"base64"),r=e.concat([new e(28).fill(0),n]),s=new a.Keypair({type:"ed25519",publicKey:r});return{type:"code",value:"G"+new e(46).fill("_").toString()+s.publicKey().substr(47,5)+new e(4).fill("_").toString()}}if("ed25519"===n||"sourceAccountEd25519"===n){return{type:"code",value:a.StrKey.encodeEd25519PublicKey(t)}}if("assetCode"===n||"assetCode4"===n||"assetCode12"===n)return t.toString();if(t&&t._isBuffer)return{type:"code",raw:t,value:new e(t).toString("base64")};if(void 0===t)return;if("function"==typeof t.toString)return t.toString();throw new Error("Internal laboratory bug: Encountered value type in XDR viewer that does not have a toString method")}(t,r)}const h=["amount","startingBalance","sendMax","sendAmount","destMin","destAmount","limit"]}).call(this,n(2).Buffer)},626:function(e,t,n){var a=n(620),r=n(58);e.exports=function(e){return null==e?[]:a(e,r(e))}},627:function(e,t,n){var a=n(172),r=n(41),s=n(14),i=n(123),o=n(304),c=Math.max;e.exports=function(e,t,n,l){e=r(e)?e:o(e),n=n&&!l?i(n):0;var u=e.length;return n<0&&(n=c(u+n,0)),s(e)?n<=u&&e.indexOf(t,n)>-1:!!u&&a(e,t,n)>-1}},628:function(e,t,n){var a=n(629),r=n(300),s=n(305),i=r((function(e,t){return s(e)?a(e,t):[]}));e.exports=i},629:function(e,t,n){var a=n(302),r=n(630),s=n(631),i=n(125),o=n(124),c=n(303);e.exports=function(e,t,n,l){var u=-1,m=r,d=!0,g=e.length,p=[],f=t.length;if(!g)return p;n&&(t=i(t,o(n))),l?(m=s,d=!1):t.length>=200&&(m=c,d=!1,t=new a(t));e:for(;++u<g;){var h=e[u],v=null==n?h:n(h);if(h=l||0!==h?h:0,d&&v==v){for(var b=f;b--;)if(t[b]===v)continue e;p.push(h)}else m(t,v,l)||p.push(h)}return p}},630:function(e,t,n){var a=n(172);e.exports=function(e,t){return!!(null==e?0:e.length)&&a(e,t,0)>-1}},631:function(e,t){e.exports=function(e,t,n){for(var a=-1,r=null==e?0:e.length;++a<r;)if(n(t,e[a]))return!0;return!1}},671:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(46),i=n(3),o=n(90),c=n(25),l=n.n(c),u=n(93),m=n.n(u),d=n(645),g=n(12),p=n(616),f=n(1),h=n(4);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function b(e){return r.a.createElement(h.a,v({},e,{placeholder:e.placeholder||"Secret key (starting with S) or hash preimage (in hex)",validator:e=>{if("S"==e.charAt(0)){if(!i.StrKey.isValidEd25519SecretSeed(e))return"Invalid secret key."}else if(!e.match(/^[0-9a-f]{2,128}$/gi)||e.length%2==1)return"Invalid hex value. Please provide up to 64 bytes in hexadecimal format."},className:e.className}))}var E=n(13),_=n.n(E),w=n(17),S=n.n(w);function T(e){let{onUpdate:t,component:n}=e,a=e.value;S()(a)||(a=[]);let s=function(e){(e=e.slice()).push(null);for(;e.length>1&&y(e);)e.pop();return e}(a),i=e.component;return r.a.createElement("div",null,m()(s,(e,n)=>r.a.createElement(i,{onUpdate:e=>t(function(e,t,n){return(e=e.slice())[t]=n,e}(s,n,e)),value:e,className:"picker--spaceBottom",key:n})))}function N(e){return null===e||l()(e)||""===e}function y(e){return N(e[e.length-1])&&N(e[e.length-2])}function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function k(e){return r.a.createElement(h.a,x({},e,{placeholder:e.placeholder||"BIP path in format: 44'/148'/0'",validator:e=>{let t=/44'\/148'\/(\d+)'/.exec(e);if(!(t&&t[1].length>0))return"Invalid BIP path. Please provide it in format 44'/148'/x'. We call 44'/148'/0' the primary account"},className:e.className}))}T.propTypes={value:_.a.array.isRequired};var O=n(621),j=n(617),I=n(618),R=n(619),B=(n(625),n(181)),P=(n(31),n(651)),C=n(40),K=n(7);const D="transaction signer: ledger signature: begin",X="transaction signer: ledger signature: success",q="transaction signer: ledger signature: failed",z="transaction signer: trezor signature: begin",F="transaction signer: trezor signature: success",A="transaction signer: trezor signature: failed",U="transaction signer: add secret",H="transaction signer: begin submitting transaction";const{signTransaction:L}=P.a;Object(C.a)((function(e,t){const{type:n,...a}=t;switch(n){case g.g:return void Object(C.c)(D);case g.h:return void Object(C.c)(X);case g.f:return void Object(C.c)(q,{error:a.error});case g.l:return void Object(C.c)(z);case g.m:return void Object(C.c)(F);case g.k:return void Object(C.c)(A,{error:a.error});case g.j:return void Object(C.c)(U,{secretCount:a.secrets.length});case K.a:{const{location:t}=e.routing;"txsigner"===t&&"xdr-viewer"===a.slug&&Object(C.c)(H)}}}));class M extends r.a.Component{render(){let e,{dispatch:t,networkPassphrase:n}=this.props,{xdr:a,signers:s,bipPath:c,hardwarewalletStatus:u,freighterwalletStatus:h}=this.props.state;if("success"!==Object(B.a)(a,n).result)e=r.a.createElement("div",{className:"so-back"},r.a.createElement("div",{className:"so-chunk"},r.a.createElement("div",{className:"TxSignerImport TransactionSigner__import"},r.a.createElement("p",{className:"TxSignerImport__title"},"Import a transaction envelope in XDR format:"),r.a.createElement(d.a,{networkPassphrase:n,onImport:e=>t(Object(g.o)(e))}))));else{let d,v,E,_,w,S,N=u.signatures,y=L(a,s,n,N),x=i.TransactionBuilder.fromXDR(a,n),B={"Signing for":r.a.createElement("pre",{className:"so-code so-code__wrap"},r.a.createElement("code",null,n)),"Transaction Envelope XDR":r.a.createElement(p.a,{plain:!0},r.a.createElement("pre",{className:"so-code so-code__wrap"},r.a.createElement("code",null,a))),"Transaction Hash":r.a.createElement(p.a,{plain:!0},r.a.createElement("pre",{className:"so-code so-code__wrap"},r.a.createElement("code",null,x.hash().toString("hex"))))};B=x instanceof i.FeeBumpTransaction?{...B,"Fee source account":x.feeSource,"Transaction Fee (stroops)":x.fee,"Number of existing signatures":x.signatures.length,"Inner transaction hash":r.a.createElement(p.a,{plain:!0},r.a.createElement("pre",{className:"so-code so-code__wrap"},r.a.createElement("code",null,x.innerTransaction.hash().toString("hex")))),"Inner transaction source account":x.innerTransaction.source,"Inner transaction sequence number":x.innerTransaction.sequence,"Inner transaction fee (stroops)":x.innerTransaction.fee,"Inner transaction number of operations":x.innerTransaction.operations.length,"Inner transaction number of existing signatures":x.innerTransaction.signatures.length}:{...B,"Source account":x.source,"Sequence number":x.sequence,"Transaction Fee (stroops)":x.fee,"Number of operations":x.operations.length,"Number of existing signatures":x.signatures.length};const P=h.signedTx||y.xdr;let C,K;if(l()(P)||(d=r.a.createElement("pre",{className:"TxSignerResult__xdr so-code so-code__wrap",onClick:I.a},r.a.createElement("code",null,P)),v=r.a.createElement("a",{className:"s-button TxSignerResult__submit",href:Object(O.d)(P),onClick:R.a},"Submit in Transaction Submitter"),E=r.a.createElement("a",{className:"s-button TxSignerResult__submit",href:Object(O.f)(P,"TransactionEnvelope"),onClick:R.a},"View in XDR Viewer"),S=r.a.createElement("a",{className:"s-button TxSignerResult__submit",href:Object(O.a)(P),onClick:R.a},"Wrap with Fee Bump"),_=r.a.createElement("h3",{className:"TxSignerResult__title"},"Transaction signed!"),w=r.a.createElement("p",{className:"TxSignerResult__instructions"},"Now that this transaction is signed, you can submit it to the network. Horizon provides an endpoint called Post Transaction that will relay your transaction to the network and inform you of the result.")),u.message){let e;"loading"===u.status?e="s-alert--info":"success"===u.status?e="s-alert--success":"failure"===u.status&&(e="s-alert--alert"),C=r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("div",{className:"s-alert TxSignerKeys__ledgerwallet_message "+e}," ",u.message," "))}if(h.message){let e;"loading"===h.status?e="s-alert--info":"success"===h.status?e="s-alert--success":"failure"===h.status&&(e="s-alert--alert"),K=r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("div",{className:"s-alert TxSignerKeys__ledgerwallet_message "+e}," ",h.message," "))}e=r.a.createElement("div",null,r.a.createElement("div",{className:"so-back"},r.a.createElement("div",{className:"so-chunk"},r.a.createElement("div",{className:"TxSignerOverview TransactionSigner__overview"},r.a.createElement("div",{className:"TxSignerOverview__titleBar"},r.a.createElement("p",{className:"TxSignerOverview__titleBar__title"},"Transaction overview"),r.a.createElement("a",{className:"TxSignerOverview__titleBar__reset",onClick:()=>t(Object(g.n)())},"Clear and import new transaction")),r.a.createElement("div",{className:"simpleTable"},m()(B,(e,t)=>r.a.createElement("div",{className:"simpleTable__row",key:t},r.a.createElement("div",{className:"simpleTable__row__label"},t),r.a.createElement("div",{className:"simpleTable__row__content"},e)))))),r.a.createElement("div",{className:"so-chunk"},r.a.createElement("div",{className:"TxSignerKeys TransactionSigner__keys"},r.a.createElement("p",{className:"TxSignerKeys__title"},"Signatures ",r.a.createElement(j.a,{href:"https://developers.stellar.org/docs/glossary/multisig/"})),r.a.createElement("div",{className:"optionsTable"},r.a.createElement(f.a,{label:"Add Signer"},r.a.createElement(T,{component:b,value:s,onUpdate:e=>t(Object(g.q)(e))})),r.a.createElement(f.a,{label:"BIP Path"},r.a.createElement(k,{value:c,onUpdate:e=>t(Object(g.p)(e))}),r.a.createElement("div",{className:"TxSignerKeys__signBipPath"},r.a.createElement("button",{className:"s-button",onClick:()=>{t(Object(g.s)(a,c,n))}},"Sign with Ledger"),r.a.createElement("button",{className:"s-button",onClick:()=>{t(Object(g.t)(a,c,n))}},"Sign with Trezor")),r.a.createElement("p",{className:"optionsTable__pair__content__note"},"NOTE: Trezor devices require upper time bounds to be set (non-zero), otherwise the signature will not be verified."),C),Object(o.isConnected)()&&r.a.createElement(f.a,{label:"Freighter"},r.a.createElement("button",{className:"s-button",onClick:()=>{t(Object(g.r)(a,n===i.Networks.TESTNET?"TESTNET":"PUBLIC"))}},"Sign with Freighter"),K))))),r.a.createElement("div",{className:"so-back TxSignerResult TransactionSigner__result"},r.a.createElement("div",{className:"so-chunk"},_,r.a.createElement("p",{className:"TxSignerResult__summary"},y.message),d,w,v," ",E," ",S)))}return r.a.createElement("div",{className:"TransactionSigner"},r.a.createElement("div",{className:"so-back"},r.a.createElement("div",{className:"so-chunk"},r.a.createElement("div",{className:"pageIntro"},r.a.createElement("p",null,"The transaction signer lets you add signatures to a Stellar transaction. Signatures are used in the network to prove that the account is authorized to perform the operations in the transaction."),r.a.createElement("p",null,"For simple transactions, you only need one signature from the correct account. Some advanced signatures may require more than one signature if there are multiple source accounts or signing keys."),r.a.createElement("p",null,r.a.createElement("a",{href:"https://developers.stellar.org/docs/glossary/multisig/",target:"_blank"},"Read more about signatures on the developer's site."))))),e)}}t.default=Object(s.b)((function(e){return{state:e.transactionSigner,networkPassphrase:e.network.current.networkPassphrase}}))(M)}}]);