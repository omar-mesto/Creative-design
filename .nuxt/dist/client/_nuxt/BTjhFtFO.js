import{m as Ct,s as st,a9 as Ht,A as Qt,y as E,j as Ut,aa as Vt,i as y,o as F,c as it,S as ct,ab as Gt,t as Kt,X as Jt,G as Wt,_ as Xt}from"./Bs1LcKuE.js";import{u as Yt}from"./DxRwwYQL.js";const kt=Object.freeze({left:0,top:0,width:16,height:16}),jt=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),X=Object.freeze({...kt,...jt});Object.freeze({...X,body:"",hidden:!1});({...kt});const Tt=Object.freeze({width:null,height:null}),Pt=Object.freeze({...Tt,...jt});function Zt(t,e){const n={...t};for(const r in e){const o=e[r],s=typeof o;r in Tt?(o===null||o&&(s==="string"||s==="number"))&&(n[r]=o):s===typeof n[r]&&(n[r]=r==="rotate"?o%4:o)}return n}const te=/[\s,]+/;function ee(t,e){e.split(te).forEach(n=>{switch(n.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}function ne(t,e=0){const n=t.replace(/^-?[0-9.]*/,"");function r(o){for(;o<0;)o+=4;return o%4}if(n===""){const o=parseInt(t);return isNaN(o)?0:r(o)}else if(n!==t){let o=0;switch(n){case"%":o=25;break;case"deg":o=90}if(o){let s=parseFloat(t.slice(0,t.length-n.length));return isNaN(s)?0:(s=s/o,s%1===0?r(s):0)}}return e}const oe=/(-?[0-9.]*[0-9]+[0-9.]*)/g,re=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function lt(t,e,n){if(e===1)return t;if(n=n||100,typeof t=="number")return Math.ceil(t*e*n)/n;if(typeof t!="string")return t;const r=t.split(oe);if(r===null||!r.length)return t;const o=[];let s=r.shift(),i=re.test(s);for(;;){if(i){const c=parseFloat(s);isNaN(c)?o.push(s):o.push(Math.ceil(c*e*n)/n)}else o.push(s);if(s=r.shift(),s===void 0)return o.join("");i=!i}}const se=t=>t==="unset"||t==="undefined"||t==="none";function ie(t,e){const n={...X,...t},r={...Pt,...e},o={left:n.left,top:n.top,width:n.width,height:n.height};let s=n.body;[n,r].forEach(b=>{const h=[],d=b.hFlip,v=b.vFlip;let w=b.rotate;d?v?w+=2:(h.push("translate("+(o.width+o.left).toString()+" "+(0-o.top).toString()+")"),h.push("scale(-1 1)"),o.top=o.left=0):v&&(h.push("translate("+(0-o.left).toString()+" "+(o.height+o.top).toString()+")"),h.push("scale(1 -1)"),o.top=o.left=0);let S;switch(w<0&&(w-=Math.floor(w/4)*4),w=w%4,w){case 1:S=o.height/2+o.top,h.unshift("rotate(90 "+S.toString()+" "+S.toString()+")");break;case 2:h.unshift("rotate(180 "+(o.width/2+o.left).toString()+" "+(o.height/2+o.top).toString()+")");break;case 3:S=o.width/2+o.left,h.unshift("rotate(-90 "+S.toString()+" "+S.toString()+")");break}w%2===1&&(o.left!==o.top&&(S=o.left,o.left=o.top,o.top=S),o.width!==o.height&&(S=o.width,o.width=o.height,o.height=S)),h.length&&(s='<g transform="'+h.join(" ")+'">'+s+"</g>")});const i=r.width,c=r.height,l=o.width,a=o.height;let f,u;i===null?(u=c===null?"1em":c==="auto"?a:c,f=lt(u,l/a)):(f=i==="auto"?l:i,u=c===null?lt(f,a/l):c==="auto"?a:c);const m={},p=(b,h)=>{se(h)||(m[b]=h.toString())};return p("width",f),p("height",u),m.viewBox=o.left.toString()+" "+o.top.toString()+" "+l.toString()+" "+a.toString(),{attributes:m,body:s}}const ce=/\sid="(\S+)"/g,le="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let ae=0;function fe(t,e=le){const n=[];let r;for(;r=ce.exec(t);)n.push(r[1]);if(!n.length)return t;const o="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(s=>{const i=typeof e=="function"?e(s):e+(ae++).toString(),c=s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+c+')([")]|\\.[a-z])',"g"),"$1"+i+o+"$3")}),t=t.replace(new RegExp(o,"g"),""),t}function ue(t,e){let n=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in e)n+=" "+r+'="'+e[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}function de(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function pe(t){return"data:image/svg+xml,"+de(t)}function he(t){return'url("'+pe(t)+'")'}const at={...Pt,inline:!1},ge={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},me={display:"inline-block"},Q={backgroundColor:"currentColor"},Ot={backgroundColor:"transparent"},ft={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},ut={webkitMask:Q,mask:Q,background:Ot};for(const t in ut){const e=ut[t];for(const n in ft)e[t+n]=ft[n]}const z={};["horizontal","vertical"].forEach(t=>{const e=t.slice(0,1)+"Flip";z[t+"-flip"]=e,z[t.slice(0,1)+"-flip"]=e,z[t+"Flip"]=e});function dt(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}const ye=(t,e)=>{const n=Zt(at,e),r={...ge},o=e.mode||"svg",s={},i=e.style,c=typeof i=="object"&&!(i instanceof Array)?i:{};for(let h in e){const d=e[h];if(d!==void 0)switch(h){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":n[h]=d===!0||d==="true"||d===1;break;case"flip":typeof d=="string"&&ee(n,d);break;case"color":s.color=d;break;case"rotate":typeof d=="string"?n[h]=ne(d):typeof d=="number"&&(n[h]=d);break;case"ariaHidden":case"aria-hidden":d!==!0&&d!=="true"&&delete r["aria-hidden"];break;default:{const v=z[h];v?(d===!0||d==="true"||d===1)&&(n[v]=!0):at[h]===void 0&&(r[h]=d)}}}const l=ie(t,n),a=l.attributes;if(n.inline&&(s.verticalAlign="-0.125em"),o==="svg"){r.style={...s,...c},Object.assign(r,a);let h=0,d=e.id;return typeof d=="string"&&(d=d.replace(/-/g,"_")),r.innerHTML=fe(l.body,d?()=>d+"ID"+h++:"iconifyVue"),st("svg",r)}const{body:f,width:u,height:m}=t,p=o==="mask"||(o==="bg"?!1:f.indexOf("currentColor")!==-1),b=ue(f,{...a,width:u+"",height:m+""});return r.style={...s,"--svg":he(b),width:dt(a.width),height:dt(a.height),...me,...p?Q:Ot,...c},st("span",r)},be=Object.create(null),we=Ct({inheritAttrs:!1,render(){const t=this.$attrs,e=t.icon,n=typeof e=="string"?be[e]:typeof e=="object"?e:null;return n===null||typeof n!="object"||typeof n.body!="string"?this.$slots.default?this.$slots.default():null:ye({...X,...n},t)}}),T=/^[a-z0-9]+(-[a-z0-9]+)*$/,D=(t,e,n,r="")=>{const o=t.split(":");if(t.slice(0,1)==="@"){if(o.length<2||o.length>3)return null;r=o.shift().slice(1)}if(o.length>3||!o.length)return null;if(o.length>1){const c=o.pop(),l=o.pop(),a={provider:o.length>0?o[0]:r,prefix:l,name:c};return e&&!L(a)?null:a}const s=o[0],i=s.split("-");if(i.length>1){const c={provider:r,prefix:i.shift(),name:i.join("-")};return e&&!L(c)?null:c}if(n&&r===""){const c={provider:r,prefix:"",name:s};return e&&!L(c,n)?null:c}return null},L=(t,e)=>t?!!((t.provider===""||t.provider.match(T))&&(e&&t.prefix===""||t.prefix.match(T))&&t.name.match(T)):!1,At=Object.freeze({left:0,top:0,width:16,height:16}),$=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),Y=Object.freeze({...At,...$}),U=Object.freeze({...Y,body:"",hidden:!1});function Se(t,e){const n={};!t.hFlip!=!e.hFlip&&(n.hFlip=!0),!t.vFlip!=!e.vFlip&&(n.vFlip=!0);const r=((t.rotate||0)+(e.rotate||0))%4;return r&&(n.rotate=r),n}function pt(t,e){const n=Se(t,e);for(const r in U)r in $?r in t&&!(r in n)&&(n[r]=$[r]):r in e?n[r]=e[r]:r in t&&(n[r]=t[r]);return n}function xe(t,e){const n=t.icons,r=t.aliases||Object.create(null),o=Object.create(null);function s(i){if(n[i])return o[i]=[];if(!(i in o)){o[i]=null;const c=r[i]&&r[i].parent,l=c&&s(c);l&&(o[i]=[c].concat(l))}return o[i]}return(e||Object.keys(n).concat(Object.keys(r))).forEach(s),o}function ve(t,e,n){const r=t.icons,o=t.aliases||Object.create(null);let s={};function i(c){s=pt(r[c]||o[c],s)}return i(e),n.forEach(i),pt(t,s)}function Et(t,e){const n=[];if(typeof t!="object"||typeof t.icons!="object")return n;t.not_found instanceof Array&&t.not_found.forEach(o=>{e(o,null),n.push(o)});const r=xe(t);for(const o in r){const s=r[o];s&&(e(o,ve(t,o,s)),n.push(o))}return n}const Ie={provider:"",aliases:{},not_found:{},...At};function B(t,e){for(const n in e)if(n in t&&typeof t[n]!=typeof e[n])return!1;return!0}function Ft(t){if(typeof t!="object"||t===null)return null;const e=t;if(typeof e.prefix!="string"||!t.icons||typeof t.icons!="object"||!B(t,Ie))return null;const n=e.icons;for(const o in n){const s=n[o];if(!o.match(T)||typeof s.body!="string"||!B(s,U))return null}const r=e.aliases||Object.create(null);for(const o in r){const s=r[o],i=s.parent;if(!o.match(T)||typeof i!="string"||!n[i]&&!r[i]||!B(s,U))return null}return e}const ht=Object.create(null);function Ce(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:new Set}}function C(t,e){const n=ht[t]||(ht[t]=Object.create(null));return n[e]||(n[e]=Ce(t,e))}function Z(t,e){return Ft(e)?Et(e,(n,r)=>{r?t.icons[n]=r:t.missing.add(n)}):[]}function ke(t,e,n){try{if(typeof n.body=="string")return t.icons[e]={...n},!0}catch{}return!1}let P=!1;function Mt(t){return typeof t=="boolean"&&(P=t),P}function je(t){const e=typeof t=="string"?D(t,!0,P):t;if(e){const n=C(e.provider,e.prefix),r=e.name;return n.icons[r]||(n.missing.has(r)?null:void 0)}}function Te(t,e){const n=D(t,!0,P);if(!n)return!1;const r=C(n.provider,n.prefix);return ke(r,n.name,e)}function Pe(t,e){if(typeof t!="object")return!1;if(typeof e!="string"&&(e=t.provider||""),P&&!e&&!t.prefix){let o=!1;return Ft(t)&&(t.prefix="",Et(t,(s,i)=>{i&&Te(s,i)&&(o=!0)})),o}const n=t.prefix;if(!L({provider:e,prefix:n,name:"a"}))return!1;const r=C(e,n);return!!Z(r,t)}const Oe=Object.freeze({width:null,height:null}),Ae=Object.freeze({...Oe,...$});""+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);const V=Object.create(null);function Ee(t,e){V[t]=e}function G(t){return V[t]||V[""]}function tt(t){let e;if(typeof t.resources=="string")e=[t.resources];else if(e=t.resources,!(e instanceof Array)||!e.length)return null;return{resources:e,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:t.random===!0,index:t.index||0,dataAfterTimeout:t.dataAfterTimeout!==!1}}const et=Object.create(null),j=["https://api.simplesvg.com","https://api.unisvg.com"],_=[];for(;j.length>0;)j.length===1||Math.random()>.5?_.push(j.shift()):_.push(j.pop());et[""]=tt({resources:["https://api.iconify.design"].concat(_)});function Fe(t,e){const n=tt(e);return n===null?!1:(et[t]=n,!0)}function nt(t){return et[t]}const Me=()=>{let t;try{if(t=fetch,typeof t=="function")return t}catch{}};let gt=Me();function ze(t,e){const n=nt(t);if(!n)return 0;let r;if(!n.maxURL)r=0;else{let o=0;n.resources.forEach(i=>{o=Math.max(o,i.length)});const s=e+".json?icons=";r=n.maxURL-o-n.path.length-s.length}return r}function Le(t){return t===404}const _e=(t,e,n)=>{const r=[],o=ze(t,e),s="icons";let i={type:s,provider:t,prefix:e,icons:[]},c=0;return n.forEach((l,a)=>{c+=l.length+1,c>=o&&a>0&&(r.push(i),i={type:s,provider:t,prefix:e,icons:[]},c=l.length),i.icons.push(l)}),r.push(i),r};function $e(t){if(typeof t=="string"){const e=nt(t);if(e)return e.path}return"/"}const De=(t,e,n)=>{if(!gt){n("abort",424);return}let r=$e(e.provider);switch(e.type){case"icons":{const s=e.prefix,c=e.icons.join(","),l=new URLSearchParams({icons:c});r+=s+".json?"+l.toString();break}case"custom":{const s=e.uri;r+=s.slice(0,1)==="/"?s.slice(1):s;break}default:n("abort",400);return}let o=503;gt(t+r).then(s=>{const i=s.status;if(i!==200){setTimeout(()=>{n(Le(i)?"abort":"next",i)});return}return o=501,s.json()}).then(s=>{if(typeof s!="object"||s===null){setTimeout(()=>{s===404?n("abort",s):n("next",o)});return}setTimeout(()=>{n("success",s)})}).catch(()=>{n("next",o)})},Ne={prepare:_e,send:De};function Re(t){const e={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort((o,s)=>o.provider!==s.provider?o.provider.localeCompare(s.provider):o.prefix!==s.prefix?o.prefix.localeCompare(s.prefix):o.name.localeCompare(s.name));let r={provider:"",prefix:"",name:""};return t.forEach(o=>{if(r.name===o.name&&r.prefix===o.prefix&&r.provider===o.provider)return;r=o;const s=o.provider,i=o.prefix,c=o.name,l=n[s]||(n[s]=Object.create(null)),a=l[i]||(l[i]=C(s,i));let f;c in a.icons?f=e.loaded:i===""||a.missing.has(c)?f=e.missing:f=e.pending;const u={provider:s,prefix:i,name:c};f.push(u)}),e}function zt(t,e){t.forEach(n=>{const r=n.loaderCallbacks;r&&(n.loaderCallbacks=r.filter(o=>o.id!==e))})}function Be(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout(()=>{t.pendingCallbacksFlag=!1;const e=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!e.length)return;let n=!1;const r=t.provider,o=t.prefix;e.forEach(s=>{const i=s.icons,c=i.pending.length;i.pending=i.pending.filter(l=>{if(l.prefix!==o)return!0;const a=l.name;if(t.icons[a])i.loaded.push({provider:r,prefix:o,name:a});else if(t.missing.has(a))i.missing.push({provider:r,prefix:o,name:a});else return n=!0,!0;return!1}),i.pending.length!==c&&(n||zt([t],s.id),s.callback(i.loaded.slice(0),i.missing.slice(0),i.pending.slice(0),s.abort))})}))}let qe=0;function He(t,e,n){const r=qe++,o=zt.bind(null,n,r);if(!e.pending.length)return o;const s={id:r,icons:e,callback:t,abort:o};return n.forEach(i=>{(i.loaderCallbacks||(i.loaderCallbacks=[])).push(s)}),o}function Qe(t,e=!0,n=!1){const r=[];return t.forEach(o=>{const s=typeof o=="string"?D(o,e,n):o;s&&r.push(s)}),r}var Ue={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function Ve(t,e,n,r){const o=t.resources.length,s=t.random?Math.floor(Math.random()*o):t.index;let i;if(t.random){let g=t.resources.slice(0);for(i=[];g.length>1;){const x=Math.floor(Math.random()*g.length);i.push(g[x]),g=g.slice(0,x).concat(g.slice(x+1))}i=i.concat(g)}else i=t.resources.slice(s).concat(t.resources.slice(0,s));const c=Date.now();let l="pending",a=0,f,u=null,m=[],p=[];typeof r=="function"&&p.push(r);function b(){u&&(clearTimeout(u),u=null)}function h(){l==="pending"&&(l="aborted"),b(),m.forEach(g=>{g.status==="pending"&&(g.status="aborted")}),m=[]}function d(g,x){x&&(p=[]),typeof g=="function"&&p.push(g)}function v(){return{startTime:c,payload:e,status:l,queriesSent:a,queriesPending:m.length,subscribe:d,abort:h}}function w(){l="failed",p.forEach(g=>{g(void 0,f)})}function S(){m.forEach(g=>{g.status==="pending"&&(g.status="aborted")}),m=[]}function qt(g,x,k){const A=x!=="success";switch(m=m.filter(I=>I!==g),l){case"pending":break;case"failed":if(A||!t.dataAfterTimeout)return;break;default:return}if(x==="abort"){f=k,w();return}if(A){f=k,m.length||(i.length?R():w());return}if(b(),S(),!t.random){const I=t.resources.indexOf(g.resource);I!==-1&&I!==t.index&&(t.index=I)}l="completed",p.forEach(I=>{I(k)})}function R(){if(l!=="pending")return;b();const g=i.shift();if(g===void 0){if(m.length){u=setTimeout(()=>{b(),l==="pending"&&(S(),w())},t.timeout);return}w();return}const x={status:"pending",resource:g,callback:(k,A)=>{qt(x,k,A)}};m.push(x),a++,u=setTimeout(R,t.rotate),n(g,e,x.callback)}return setTimeout(R),v}function Lt(t){const e={...Ue,...t};let n=[];function r(){n=n.filter(c=>c().status==="pending")}function o(c,l,a){const f=Ve(e,c,l,(u,m)=>{r(),a&&a(u,m)});return n.push(f),f}function s(c){return n.find(l=>c(l))||null}return{query:o,find:s,setIndex:c=>{e.index=c},getIndex:()=>e.index,cleanup:r}}function mt(){}const q=Object.create(null);function Ge(t){if(!q[t]){const e=nt(t);if(!e)return;const n=Lt(e),r={config:e,redundancy:n};q[t]=r}return q[t]}function Ke(t,e,n){let r,o;if(typeof t=="string"){const s=G(t);if(!s)return n(void 0,424),mt;o=s.send;const i=Ge(t);i&&(r=i.redundancy)}else{const s=tt(t);if(s){r=Lt(s);const i=t.resources?t.resources[0]:"",c=G(i);c&&(o=c.send)}}return!r||!o?(n(void 0,424),mt):r.query(e,o,n)().abort}const yt="iconify2",O="iconify",_t=O+"-count",bt=O+"-version",$t=36e5,Je=168;function K(t,e){try{return t.getItem(e)}catch{}}function ot(t,e,n){try{return t.setItem(e,n),!0}catch{}}function wt(t,e){try{t.removeItem(e)}catch{}}function J(t,e){return ot(t,_t,e.toString())}function W(t){return parseInt(K(t,_t))||0}const N={local:!0,session:!0},Dt={local:new Set,session:new Set};let rt=!1;function We(t){rt=t}let M=typeof window>"u"?{}:window;function Nt(t){const e=t+"Storage";try{if(M&&M[e]&&typeof M[e].length=="number")return M[e]}catch{}N[t]=!1}function Rt(t,e){const n=Nt(t);if(!n)return;const r=K(n,bt);if(r!==yt){if(r){const c=W(n);for(let l=0;l<c;l++)wt(n,O+l.toString())}ot(n,bt,yt),J(n,0);return}const o=Math.floor(Date.now()/$t)-Je,s=c=>{const l=O+c.toString(),a=K(n,l);if(typeof a=="string"){try{const f=JSON.parse(a);if(typeof f=="object"&&typeof f.cached=="number"&&f.cached>o&&typeof f.provider=="string"&&typeof f.data=="object"&&typeof f.data.prefix=="string"&&e(f,c))return!0}catch{}wt(n,l)}};let i=W(n);for(let c=i-1;c>=0;c--)s(c)||(c===i-1?(i--,J(n,i)):Dt[t].add(c))}function Bt(){if(!rt){We(!0);for(const t in N)Rt(t,e=>{const n=e.data,r=e.provider,o=n.prefix,s=C(r,o);if(!Z(s,n).length)return!1;const i=n.lastModified||-1;return s.lastModifiedCached=s.lastModifiedCached?Math.min(s.lastModifiedCached,i):i,!0})}}function Xe(t,e){const n=t.lastModifiedCached;if(n&&n>=e)return n===e;if(t.lastModifiedCached=e,n)for(const r in N)Rt(r,o=>{const s=o.data;return o.provider!==t.provider||s.prefix!==t.prefix||s.lastModified===e});return!0}function Ye(t,e){rt||Bt();function n(r){let o;if(!N[r]||!(o=Nt(r)))return;const s=Dt[r];let i;if(s.size)s.delete(i=Array.from(s).shift());else if(i=W(o),!J(o,i+1))return;const c={cached:Math.floor(Date.now()/$t),provider:t.provider,data:e};return ot(o,O+i.toString(),JSON.stringify(c))}e.lastModified&&!Xe(t,e.lastModified)||Object.keys(e.icons).length&&(e.not_found&&(e=Object.assign({},e),delete e.not_found),n("local")||n("session"))}function St(){}function Ze(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout(()=>{t.iconsLoaderFlag=!1,Be(t)}))}function tn(t,e){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(e).sort():t.iconsToLoad=e,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout(()=>{t.iconsQueueFlag=!1;const{provider:n,prefix:r}=t,o=t.iconsToLoad;delete t.iconsToLoad;let s;if(!o||!(s=G(n)))return;s.prepare(n,r,o).forEach(c=>{Ke(n,c,l=>{if(typeof l!="object")c.icons.forEach(a=>{t.missing.add(a)});else try{const a=Z(t,l);if(!a.length)return;const f=t.pendingIcons;f&&a.forEach(u=>{f.delete(u)}),Ye(t,l)}catch(a){console.error(a)}Ze(t)})})}))}const en=(t,e)=>{const n=Qe(t,!0,Mt()),r=Re(n);if(!r.pending.length){let l=!0;return e&&setTimeout(()=>{l&&e(r.loaded,r.missing,r.pending,St)}),()=>{l=!1}}const o=Object.create(null),s=[];let i,c;return r.pending.forEach(l=>{const{provider:a,prefix:f}=l;if(f===c&&a===i)return;i=a,c=f,s.push(C(a,f));const u=o[a]||(o[a]=Object.create(null));u[f]||(u[f]=[])}),r.pending.forEach(l=>{const{provider:a,prefix:f,name:u}=l,m=C(a,f),p=m.pendingIcons||(m.pendingIcons=new Set);p.has(u)||(p.add(u),o[a][f].push(u))}),s.forEach(l=>{const{provider:a,prefix:f}=l;o[a][f].length&&tn(l,o[a][f])}),e?He(e,r,s):St},nn=t=>new Promise((e,n)=>{const r=typeof t=="string"?D(t,!0):t;if(!r){n(t);return}en([r||t],o=>{if(o.length&&r){const s=je(r);if(s){e({...Y,...s});return}}n(t)})});({...Ae});const xt={backgroundColor:"currentColor"},on={backgroundColor:"transparent"},vt={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},It={webkitMask:xt,mask:xt,background:on};for(const t in It){const e=It[t];for(const n in vt)e[t+n]=vt[n]}const H={};["horizontal","vertical"].forEach(t=>{const e=t.slice(0,1)+"Flip";H[t+"-flip"]=e,H[t.slice(0,1)+"-flip"]=e,H[t+"Flip"]=e});Mt(!0);Ee("",Ne);if(typeof document<"u"&&typeof window<"u"){Bt();const t=window;if(t.IconifyPreload!==void 0){const e=t.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof e=="object"&&e!==null&&(e instanceof Array?e:[e]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!Pe(r))&&console.error(n)}catch{console.error(n)}})}if(t.IconifyProviders!==void 0){const e=t.IconifyProviders;if(typeof e=="object"&&e!==null)for(let n in e){const r="IconifyProviders["+n+"] is invalid.";try{const o=e[n];if(typeof o!="object"||!o||o.resources===void 0)continue;Fe(n,o)||console.error(r)}catch{console.error(r)}}}}({...Y});const rn=["width","height"],sn=Ct({__name:"Icon",props:{name:{type:String,required:!0},size:{type:String,default:""}},async setup(t){let e,n;const r=Wt(),o=Ht().nuxtIcon,s=t,i=Yt("icons",()=>({})),c=Qt(!1),l=E(()=>((o==null?void 0:o.aliases)||{})[s.name]||s.name),a=E(()=>{var p;return(p=i.value)==null?void 0:p[l.value]}),f=E(()=>r.vueApp.component(l.value)),u=E(()=>{const p=s.size||(o==null?void 0:o.size)||"1em";return String(Number(p))===p?`${p}px`:p});async function m(){var p;f.value||(p=i.value)!=null&&p[l.value]||(c.value=!0,i.value[l.value]=await nn(l.value).catch(()=>{}),c.value=!1)}return Ut(()=>l.value,m),!f.value&&([e,n]=Vt(()=>m()),e=await e,n()),(p,b)=>y(c)?(F(),it("span",{key:0,class:"icon",width:y(u),height:y(u)},null,8,rn)):y(a)?(F(),ct(y(we),{key:1,icon:y(a),class:"icon",width:y(u),height:y(u)},null,8,["icon","width","height"])):y(f)?(F(),ct(Gt(y(f)),{key:2,class:"icon",width:y(u),height:y(u)},null,8,["width","height"])):(F(),it("span",{key:3,class:"icon",style:Jt({fontSize:y(u),lineHeight:y(u),width:y(u),height:y(u)})},Kt(t.name),5))}}),an=Xt(sn,[["__scopeId","data-v-ca945699"]]);export{an as default};
