import{u}from"./o5-9xCJ9.js";import{h as l}from"./Bs1LcKuE.js";const a=({authTokenKey:e,authUserKey:t}={authTokenKey:"auth.token",authUserKey:"auth.user"})=>{const o=u(t),s=u(e);return{store:(r,n)=>{s.value=r,o.value=n},clear:()=>{o.value=null,s.value=""},user:o,token:s}},v=l({id:"auth",state:()=>{const{token:e,user:t}=a();return{loggedIn:!!e.value,user:t.value,loading:!1}},actions:{logout(){const{clear:e}=a();e(),this.loggedIn=!1,this.user=null}}});export{v as u};
