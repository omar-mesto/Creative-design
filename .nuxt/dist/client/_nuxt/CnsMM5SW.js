function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./CmrXy0Ne.js","./Bs1LcKuE.js","./DN4DxX95.js","./o5-9xCJ9.js","./CiaMA1eR.js","./BsYmvPZw.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{q as f,w as c,e as v,s as g,j as l,u as d,a as h}from"./DN4DxX95.js";import{l as _,v as y,m as C,x as w,y as P,q as $,s as r}from"./Bs1LcKuE.js";import{h as m}from"./o5-9xCJ9.js";import{u as N}from"./CiaMA1eR.js";import{u as j}from"./DxRwwYQL.js";import{_ as T}from"./DvwadZc9.js";const x=async e=>{const{content:t}=_().public;typeof(e==null?void 0:e.params)!="function"&&(e=f(e));const a=e.params(),s=t.experimental.stripQueryParameters?c(`/navigation/${`${m(a)}.${t.integrity}`}/${v(a)}.json`):c(`/navigation/${m(a)}.${t.integrity}.json`);if(g())return(await y(()=>import("./CmrXy0Ne.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url).then(o=>o.generateNavigation))(a);const n=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:l(a),previewToken:N().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n},D=C({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=w(e),a=P(()=>{var n;return typeof((n=t.value)==null?void 0:n.params)=="function"?t.value.params():t.value});if(!a.value&&j("dd-navigation").value){const{navigation:n}=d();return{navigation:n}}const{data:s}=await h(`content-navigation-${m(a.value)}`,()=>x(a.value));return{navigation:s}},render(e){const t=$(),{navigation:a}=e,s=o=>r(T,{to:o._path},()=>o.title),n=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),n(i.children,u+1)]):r("li",null,s(i)))),p=o=>n(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):p(a)}}),S=D;export{S as default};
