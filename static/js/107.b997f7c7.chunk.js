"use strict";(self.webpackChunkreact_router=self.webpackChunkreact_router||[]).push([[107],{503:(t,e,a)=>{a.d(e,{Z:()=>i});var c=a(689),s=a(87),o=a(630),r=a(184);const n=t=>{let{items:e}=t;const a=(0,c.TH)(),n=e.map((t=>{let{id:e,title:c}=t;return(0,r.jsx)("li",{className:o.Z.list,children:(0,r.jsx)(s.rU,{state:{from:a},to:"/movies/".concat(e),style:{textDecoration:"none"},children:c})},e)}));return(0,r.jsx)("ul",{className:o.Z.container2,children:n})};n.defaultProps={items:[]};const i=n},107:(t,e,a)=>{a.r(e),a.d(e,{default:()=>i});var c=a(791),s=a(160),o=a(503),r=a(630),n=a(184);const i=()=>{const[t,e]=(0,c.useState)({items:[],isLoading:!1,error:null,page:1});(0,c.useEffect)((()=>{(async()=>{e((t=>({...t,isLoading:!0})));try{const a=await(0,s.vw)(t.page);e((t=>({...t,items:[...t.items,...a.results]})))}catch(l){e((e=>({...e,error:l})))}finally{e((t=>({...t,isLoading:!1})))}})()}),[t.page]);const{items:a,isLoading:i,error:l}=t;return(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)("h1",{className:r.Z.homeTitle,children:"Movie List"}),a.length>0&&(0,n.jsx)(o.Z,{items:a}),i&&(0,n.jsx)("p",{children:"Loading..."}),l&&(0,n.jsx)("p",{children:l}),(0,n.jsx)("button",{type:"button",onClick:()=>{e((t=>({...t,page:t.page+1})))},children:"Load more"})]})}},160:(t,e,a)=>{a.d(e,{M1:()=>h,cl:()=>i,l2:()=>n,tx:()=>d,vw:()=>r});var c=a(294);const s="03bc4a4901e556f9924acb8dbfb5d03a",o="https://api.themoviedb.org/3",r=async()=>{try{const{data:t}=await c.Z.get("".concat(o,"/movie/popular"),{params:{api_key:s,page:12}});return t}catch(t){throw new Error("Failed to fetch data: ".concat(t.message))}},n=async t=>{try{const{data:e}=await c.Z.get("".concat(o,"/movie/").concat(t),{params:{api_key:s}});return e}catch(e){throw new Error("Failed to fetch data: ".concat(e.message))}},i=async t=>{try{return(await c.Z.get("".concat(o,"/search/movie"),{params:{api_key:s,query:t}})).data.results}catch(e){throw e}},l={method:"GET",headers:{accept:"application/json"}};async function d(t){const e="".concat(o,"/movie/").concat(t,"/reviews?api_key=").concat(s,"&language=en-US&page=1");try{const t=await fetch(e,l);if(!t.ok)throw new Error("Network response was not ok");return await t.json()}catch(a){console.error(a)}}const h=async t=>await fetch("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(s,"&include_adult=false")).then((t=>(t.ok,t.json())))}}]);
//# sourceMappingURL=107.b997f7c7.chunk.js.map