import{as as l,a1 as o,j as e,B as c,T as h,S as u,m as t,Q as a,W as x}from"./index-c1be743a.js";import{C as d}from"./Container-c4415724.js";const j=()=>{const{sellerOrBuyer:g,updateSellerOrBuyer:r}=l(),s=o(),n=()=>{r({isSeller:!0}),s.push("/")},i=()=>{r({isSeller:!1}),s.push("/")};return e.jsx(d,{sx:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:e.jsxs(c,{children:[e.jsx(h,{variant:"h3",align:"center",sx:{fontWeight:"bold",mb:3},children:"Are you Seller or Buyer?"}),e.jsxs(u,{direction:"row",alignItems:"center",justifyContent:"space-evenly",spacing:2,children:[e.jsx(t,{variant:"contained",color:"inherit",size:"large",onClick:i,sx:{width:150},startIcon:e.jsx(a,{sx:{width:45,height:45},alt:"Ethereum",src:"/assets/images/avatars/avatar_4.jpg"}),children:"Buyer"}),e.jsx(t,{variant:"contained",color:"inherit",size:"large",onClick:n,sx:{width:150},startIcon:e.jsx(a,{sx:{width:45,height:45},alt:"Buyer",src:"/assets/images/avatars/avatar_2.jpg"}),children:"Seller"})]})]})})},y=j;function B(){return e.jsxs(e.Fragment,{children:[e.jsx(x,{children:e.jsx("title",{children:" Are you Seller or Buyer "})}),e.jsx(y,{})]})}export{B as default};
