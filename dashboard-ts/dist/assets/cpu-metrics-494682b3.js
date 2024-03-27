import{p as _,r as i,a4 as y,j as e,T as b,W as T}from"./index-c1be743a.js";import{S as c,A as o,b as C}from"./app-widget-summary-e89f0e69.js";import{B as k}from"./index-fbe56cf4.js";import{C as A}from"./Container-c4415724.js";import{G as r}from"./Grid-5556d8af.js";import"./_isIterateeCall-f9565446.js";import"./Card-3aa4196d.js";import"./numeral-f1857c3e.js";const w=()=>{const a=_(),[s,d]=i.useState({}),[S,u]=i.useState([]),[U,m]=i.useState([]),[n,g]=i.useState({});return y(()=>{const l=k;fetch(l+"get-recent-transactions/",{method:"GET",headers:{"Content-Type":"application/json"}}).then(async t=>await t.json()).then(t=>{d(t[0]),u(t);const p=t.filter((x,h,j)=>h===j.findIndex(f=>f.id===x.id));m(p),console.log("unique transactions",p),console.log(t[0]),console.log(t)}).catch(t=>{console.log(t)}),fetch(l+"get-cputemp-blockdifficulty/",{method:"GET",headers:{"Content-Type":"application/json"}}).then(async t=>await t.json()).then(t=>{g(t),console.log("cpu temp and block difficulty arr",n)})},1e3),e.jsxs(A,{maxWidth:"xl",children:[e.jsx(b,{variant:"h4",sx:{mb:5},children:"CPU Metrics 👋"}),e.jsxs(r,{container:!0,spacing:3,children:[e.jsx(r,{xs:12,sm:6,md:3,children:s.cpu_temperature===null?e.jsx(e.Fragment,{children:e.jsx(c,{variant:"rectangular",width:"100%",height:"100%",sx:{borderRadius:"13px"}})}):e.jsx(e.Fragment,{children:e.jsx(o,{title:"CPU Temperature",total:s.cpu_temperature,color:"success",icon:e.jsx("img",{alt:"icon",src:"/assets/icons/glass/ic_glass_users.png"})})})}),e.jsx(r,{xs:12,sm:6,md:3,children:s.created_at===null?e.jsx(e.Fragment,{children:e.jsx(c,{variant:"rectangular",width:"100%",height:"100%",sx:{borderRadius:"13px"}})}):e.jsx(e.Fragment,{children:e.jsx(o,{title:"Created At",total:new Date(s.created_at).toString().split("GMT")[0],color:"info",icon:e.jsx("img",{alt:"icon",src:"/assets/icons/glass/ic_glass_bag.png"})})})}),e.jsx(r,{xs:12,sm:6,md:3,children:s.ram_usage?e.jsx(e.Fragment,{children:e.jsx(o,{title:"RAM Usage",total:s.ram_usage,color:"warning",icon:e.jsx("img",{alt:"icon",src:"/assets/icons/glass/ic_glass_buy.png"})})}):e.jsx(e.Fragment,{children:e.jsx(c,{variant:"rectangular",width:"100%",height:"100%",sx:{borderRadius:"13px"}})})}),e.jsx(r,{xs:12,sm:6,md:3,children:s.transaction_type===null?e.jsx(e.Fragment,{children:e.jsx(c,{variant:"rectangular",width:"100%",height:"100%",sx:{borderRadius:"13px"}})}):e.jsx(e.Fragment,{children:e.jsx(o,{title:"Txn Type",total:s.transaction_type,color:s.transaction_type?"success":"error",sx:{backgroundColor:s.transaction_type?a.palette.success.lighter:a.palette.error.lighter,borderColor:s.transaction_type?a.palette.success.light:a.palette.error.light,borderWidth:"1px",borderStyle:"dashed"},icon:e.jsx("img",{alt:"icon",src:"/assets/icons/glass/ic_glass_message.png"})})})}),e.jsx(r,{item:!0,xs:12,md:6,lg:8,children:e.jsx(C,{title:"Block Difficulty vs CPU Temperature",subheader:"Each block difficulty vs CPU temperature per transaction",chart:{labels:n.cpu_temperature_arr,series:[{name:"Bar",type:"column",fill:"solid",data:n.block_difficulty_arr},{name:"Line",type:"area",fill:"gradient",data:n.block_difficulty_arr}]}})})]})]})},F=w;function W(){return e.jsxs(e.Fragment,{children:[e.jsx(T,{children:e.jsx("title",{children:" Cpu Metrics | Minimal UI "})}),e.jsx(F,{})]})}export{W as default};
