"use strict";(self.webpackChunkreact_router=self.webpackChunkreact_router||[]).push([[138],{138:(t,e,a)=>{a.r(e),a.d(e,{default:()=>i});var s=a(791),r=a(160),c=a(689),o=a(87),n=(a(182),a(184));const i=()=>{var t;const[e,a]=(0,s.useState)({items:{},isLoading:!1,error:null}),{id:i}=(0,c.UO)(),d=(0,c.s0)(),h=(0,c.TH)(),{from:l}=h.state;(0,s.useEffect)((()=>{(async()=>{a((t=>({...t,isLoading:!0})));try{const t=await(0,r.l2)(i);a((e=>({...e,items:t})))}catch(v){a((e=>({...e,error:v.message})))}finally{a((t=>({...t,isLoading:!1})))}})()}),[i]);const{items:p,isLoading:m,error:v}=e,u=null===(t=p.genres)||void 0===t?void 0:t.map((t=>t.name)).join(", ");return(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)("button",{onClick:()=>{const t=h.state?h.state.from:"/";d(t)},children:"Go Back"}),m?(0,n.jsx)("p",{children:"Loading..."}):v?(0,n.jsx)("p",{children:v}):(0,n.jsxs)(n.Fragment,{children:[p.poster_path&&(0,n.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(p.poster_path),alt:p.title}),(0,n.jsx)("h2",{children:p.title}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("span",{children:"Genres:"})," ",u||"no information"]}),(0,n.jsx)("p",{children:p.overview}),(0,n.jsxs)("p",{children:["Rating: ",p.vote_average]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{children:(0,n.jsx)(o.rU,{state:{from:l},to:"/movies/".concat(i,"/reviews"),children:"Reviews"})}),(0,n.jsx)("div",{children:(0,n.jsx)(o.rU,{state:{from:l},to:"/movies/".concat(i,"/cast"),children:"Cast"})}),(0,n.jsx)(c.j3,{})]})]})]})}},160:(t,e,a)=>{a.d(e,{M1:()=>l,cl:()=>i,l2:()=>n,tx:()=>h,vw:()=>o});var s=a(294);const r="03bc4a4901e556f9924acb8dbfb5d03a",c="https://api.themoviedb.org/3",o=async()=>{try{const{data:t}=await s.Z.get("".concat(c,"/movie/popular"),{params:{api_key:r,page:12}});return t}catch(t){throw new Error("Failed to fetch data: ".concat(t.message))}},n=async t=>{try{const{data:e}=await s.Z.get("".concat(c,"/movie/").concat(t),{params:{api_key:r}});return e}catch(e){throw new Error("Failed to fetch data: ".concat(e.message))}},i=async t=>{try{return(await s.Z.get("".concat(c,"/search/movie"),{params:{api_key:r,query:t}})).data.results}catch(e){throw e}},d={method:"GET",headers:{accept:"application/json"}};async function h(t){const e="".concat(c,"/movie/").concat(t,"/reviews?api_key=").concat(r,"&language=en-US&page=1");try{const t=await fetch(e,d);if(!t.ok)throw new Error("Network response was not ok");return await t.json()}catch(a){console.error(a)}}const l=async t=>await fetch("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(r,"&include_adult=false")).then((t=>(t.ok,t.json())))}}]);
//# sourceMappingURL=138.19170f2c.chunk.js.map