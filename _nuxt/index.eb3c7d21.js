import{_ as f}from"./nuxt-link.d155cdec.js";import{_ as a,o as l,c as d,b as o,p as m,e as h,a as e,i as b,t as S,j as $,v as k,w as p,d as u}from"./entry.4153e465.js";const g={};function y(t,c){return l(),d("button",null,"click")}const I=a(g,[["render",y]]);const v=t=>(m("data-v-2883b69b"),t=t(),h(),t),M={class:"card"},w=v(()=>e("span",null,"Component card",-1)),C=v(()=>e("br",null,null,-1)),B={__name:"index",setup(t){return(c,n)=>(l(),d("div",M,[w,C,o(I)]))}},N=a(B,[["__scopeId","data-v-2883b69b"]]),V=()=>b("color-mode").value;const _=t=>(m("data-v-d75c4791"),t=t(),h(),t),D=_(()=>e("option",{value:"system"},"System",-1)),L=_(()=>e("option",{value:"light"},"Light",-1)),j=_(()=>e("option",{value:"dark"},"Dark",-1)),z=_(()=>e("option",{value:"sepia"},"Sepia",-1)),E=[D,L,j,z],H={__name:"index",setup(t){const c=V();return console.log(c.preference),(n,r)=>{const i=f,s=N;return l(),d("div",null,[e("h1",null,"Color mode: "+S(n.$colorMode.value),1),$(e("select",{"onUpdate:modelValue":r[0]||(r[0]=x=>n.$colorMode.preference=x)},E,512),[[k,n.$colorMode.preference]]),e("ul",null,[e("li",null,[o(i,{to:"/about",title:"關於我們"},{default:p(()=>[u("關於我們")]),_:1})]),e("li",null,[o(i,{to:"https://store.line.me/stickershop/product/24123123/zh-Hant",title:"另開新視窗 前往line貼圖",target:"_blank",external:""},{default:p(()=>[u("line貼圖")]),_:1})])]),o(s),o(s),o(s),o(s)])}}},q=a(H,[["__scopeId","data-v-d75c4791"]]);export{q as default};
