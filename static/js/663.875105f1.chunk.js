"use strict";(self.webpackChunkreact_router=self.webpackChunkreact_router||[]).push([[663],{663:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});var c=a(791),r=a(689),s=a(160),n=(a(182),a(184));const o=()=>{const[e,t]=(0,c.useState)({items:[],isLoading:!1,error:null}),{id:a}=(0,r.UO)();(0,c.useEffect)((()=>{(async()=>{t((e=>({...e,isLoading:!0})));try{const e=await(0,s.tx)(a);console.log("Result:",e),t((t=>({...t,items:e.results})))}catch(d){t((t=>({...t,error:d.message})))}finally{t((e=>({...e,isLoading:!1})))}})()}),[a]);const{items:o,isLoading:i,error:d}=e;return(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)("h2",{children:"Reviews"}),i&&(0,n.jsx)("p",{children:"Loading..."}),d&&(0,n.jsxs)("p",{children:["Error: ",d]}),o.length>0?o.map(((e,t)=>(0,n.jsxs)("div",{children:[(0,n.jsxs)("p",{children:["User: ",e.author]}),(0,n.jsx)("p",{children:e.content})]},t))):(0,n.jsx)("p",{children:"Sorry, no comments yet..."})]})}},160:(e,t,a)=>{a.d(t,{M1:()=>h,cl:()=>o,l2:()=>n,tx:()=>d});var c=a(294);const r="03bc4a4901e556f9924acb8dbfb5d03a",s="https://api.themoviedb.org/3",n=async e=>{try{const{data:t}=await c.Z.get("".concat(s,"/movie/").concat(e),{params:{api_key:r}});return t}catch(t){throw new Error("Failed to fetch data: ".concat(t.message))}},o=async e=>{try{return(await c.Z.get("".concat(s,"/search/movie"),{params:{api_key:r,query:e}})).data.results}catch(t){throw t}},i={method:"GET",headers:{accept:"application/json"}};async function d(e){const t="".concat(s,"/movie/").concat(e,"/reviews?api_key=").concat(r,"&language=en-US&page=1");try{const e=await fetch(t,i);if(!e.ok)throw new Error("Network response was not ok");return await e.json()}catch(a){console.error(a)}}const h=async e=>await fetch("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(r,"&include_adult=false")).then((e=>(e.ok,e.json())))}}]);
//# sourceMappingURL=663.875105f1.chunk.js.map