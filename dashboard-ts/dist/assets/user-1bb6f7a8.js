import{a as H,g as z,s as w,r as v,u as E,b as D,_ as h,j as e,e as k,h as K,x as q,p as Ce,I as M,ab as be,M as W,y as Y,ac as Ie,ad as Re,ae as Le,c as me,w as _,af as J,q as ke,T as F,P as d,S as xe,Q as Me,i as A,k as Ae,B as Ne,V as $e,ag as Z,m as Be,l as Ue,W as Fe}from"./index-c1be743a.js";import{T as De,a as m,b as V,c as _e,d as He}from"./TableRow-11bc06b9.js";import{L as ee,F as te,a as ze}from"./label-f8954abf.js";import{C as fe}from"./Checkbox-ea929652.js";import{S as Ee,O as Ke}from"./Select-e8dfc0e9.js";import{C as Ve}from"./Container-c4415724.js";import{C as Oe}from"./Card-3aa4196d.js";function We(t){return H("MuiTableContainer",t)}z("MuiTableContainer",["root"]);const qe=["className","component"],Xe=t=>{const{classes:n}=t;return K({root:["root"]},We,n)},Ge=w("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(t,n)=>n.root})({width:"100%",overflowX:"auto"}),Qe=v.forwardRef(function(n,o){const r=E({props:n,name:"MuiTableContainer"}),{className:s,component:i="div"}=r,l=D(r,qe),p=h({},r,{component:i}),a=Xe(p);return e.jsx(Ge,h({ref:o,as:i,className:k(a.root,s),ownerState:p},l))}),Ye=Qe;function Je(t){return H("MuiTableHead",t)}z("MuiTableHead",["root"]);const Ze=["className","component"],et=t=>{const{classes:n}=t;return K({root:["root"]},Je,n)},tt=w("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(t,n)=>n.root})({display:"table-header-group"}),nt={variant:"head"},ne="thead",ot=v.forwardRef(function(n,o){const r=E({props:n,name:"MuiTableHead"}),{className:s,component:i=ne}=r,l=D(r,Ze),p=h({},r,{component:i}),a=et(p);return e.jsx(De.Provider,{value:nt,children:e.jsx(tt,h({as:i,className:k(a.root,s),ref:o,role:i===ne?null:"rowgroup",ownerState:p},l))})}),at=ot,oe=q(e.jsx("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft"),ae=q(e.jsx("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight");var se,re,ie,le,ce,de,pe,ue;const st=["backIconButtonProps","count","getItemAriaLabel","nextIconButtonProps","onPageChange","page","rowsPerPage","showFirstButton","showLastButton"],rt=v.forwardRef(function(n,o){const{backIconButtonProps:r,count:s,getItemAriaLabel:i,nextIconButtonProps:l,onPageChange:p,page:a,rowsPerPage:c,showFirstButton:x,showLastButton:f}=n,S=D(n,st),L=Ce(),N=g=>{p(g,0)},$=g=>{p(g,a-1)},I=g=>{p(g,a+1)},C=g=>{p(g,Math.max(0,Math.ceil(s/c)-1))};return e.jsxs("div",h({ref:o},S,{children:[x&&e.jsx(M,{onClick:N,disabled:a===0,"aria-label":i("first",a),title:i("first",a),children:L.direction==="rtl"?se||(se=e.jsx(ee,{})):re||(re=e.jsx(te,{}))}),e.jsx(M,h({onClick:$,disabled:a===0,color:"inherit","aria-label":i("previous",a),title:i("previous",a)},r,{children:L.direction==="rtl"?ie||(ie=e.jsx(ae,{})):le||(le=e.jsx(oe,{}))})),e.jsx(M,h({onClick:I,disabled:s!==-1?a>=Math.ceil(s/c)-1:!1,color:"inherit","aria-label":i("next",a),title:i("next",a)},l,{children:L.direction==="rtl"?ce||(ce=e.jsx(oe,{})):de||(de=e.jsx(ae,{}))})),f&&e.jsx(M,{onClick:C,disabled:a>=Math.ceil(s/c)-1,"aria-label":i("last",a),title:i("last",a),children:L.direction==="rtl"?pe||(pe=e.jsx(te,{})):ue||(ue=e.jsx(ee,{}))})]}))}),it=rt;function lt(t){return H("MuiTablePagination",t)}const ct=z("MuiTablePagination",["root","toolbar","spacer","selectLabel","selectRoot","select","selectIcon","input","menuItem","displayedRows","actions"]),U=ct;var he;const dt=["ActionsComponent","backIconButtonProps","className","colSpan","component","count","getItemAriaLabel","labelDisplayedRows","labelRowsPerPage","nextIconButtonProps","onPageChange","onRowsPerPageChange","page","rowsPerPage","rowsPerPageOptions","SelectProps","showFirstButton","showLastButton"],pt=w(m,{name:"MuiTablePagination",slot:"Root",overridesResolver:(t,n)=>n.root})(({theme:t})=>({overflow:"auto",color:(t.vars||t).palette.text.primary,fontSize:t.typography.pxToRem(14),"&:last-child":{padding:0}})),ut=w(be,{name:"MuiTablePagination",slot:"Toolbar",overridesResolver:(t,n)=>h({[`& .${U.actions}`]:n.actions},n.toolbar)})(({theme:t})=>({minHeight:52,paddingRight:2,[`${t.breakpoints.up("xs")} and (orientation: landscape)`]:{minHeight:52},[t.breakpoints.up("sm")]:{minHeight:52,paddingRight:2},[`& .${U.actions}`]:{flexShrink:0,marginLeft:20}})),ht=w("div",{name:"MuiTablePagination",slot:"Spacer",overridesResolver:(t,n)=>n.spacer})({flex:"1 1 100%"}),gt=w("p",{name:"MuiTablePagination",slot:"SelectLabel",overridesResolver:(t,n)=>n.selectLabel})(({theme:t})=>h({},t.typography.body2,{flexShrink:0})),bt=w(Ee,{name:"MuiTablePagination",slot:"Select",overridesResolver:(t,n)=>h({[`& .${U.selectIcon}`]:n.selectIcon,[`& .${U.select}`]:n.select},n.input,n.selectRoot)})({color:"inherit",fontSize:"inherit",flexShrink:0,marginRight:32,marginLeft:8,[`& .${U.select}`]:{paddingLeft:8,paddingRight:24,textAlign:"right",textAlignLast:"right"}}),mt=w(W,{name:"MuiTablePagination",slot:"MenuItem",overridesResolver:(t,n)=>n.menuItem})({}),xt=w("p",{name:"MuiTablePagination",slot:"DisplayedRows",overridesResolver:(t,n)=>n.displayedRows})(({theme:t})=>h({},t.typography.body2,{flexShrink:0}));function ft({from:t,to:n,count:o}){return`${t}–${n} of ${o!==-1?o:`more than ${n}`}`}function jt(t){return`Go to ${t} page`}const vt=t=>{const{classes:n}=t;return K({root:["root"],toolbar:["toolbar"],spacer:["spacer"],selectLabel:["selectLabel"],select:["select"],input:["input"],selectIcon:["selectIcon"],menuItem:["menuItem"],displayedRows:["displayedRows"],actions:["actions"]},lt,n)},Tt=v.forwardRef(function(n,o){const r=E({props:n,name:"MuiTablePagination"}),{ActionsComponent:s=it,backIconButtonProps:i,className:l,colSpan:p,component:a=m,count:c,getItemAriaLabel:x=jt,labelDisplayedRows:f=ft,labelRowsPerPage:S="Rows per page:",nextIconButtonProps:L,onPageChange:N,onRowsPerPageChange:$,page:I,rowsPerPage:C,rowsPerPageOptions:g=[10,25,50,100],SelectProps:T={},showFirstButton:u=!1,showLastButton:b=!1}=r,y=D(r,dt),j=r,P=vt(j),X=T.native?"option":mt;let G;(a===m||a==="td")&&(G=p||1e3);const we=Y(T.id),Q=Y(T.labelId),Se=()=>c===-1?(I+1)*C:C===-1?c:Math.min(c,(I+1)*C);return e.jsx(pt,h({colSpan:G,ref:o,as:a,ownerState:j,className:k(P.root,l)},y,{children:e.jsxs(ut,{className:P.toolbar,children:[e.jsx(ht,{className:P.spacer}),g.length>1&&e.jsx(gt,{className:P.selectLabel,id:Q,children:S}),g.length>1&&e.jsx(bt,h({variant:"standard"},!T.variant&&{input:he||(he=e.jsx(Ie,{}))},{value:C,onChange:$,id:we,labelId:Q},T,{classes:h({},T.classes,{root:k(P.input,P.selectRoot,(T.classes||{}).root),select:k(P.select,(T.classes||{}).select),icon:k(P.selectIcon,(T.classes||{}).icon)}),children:g.map(R=>v.createElement(X,h({},!Re(X)&&{ownerState:j},{className:P.menuItem,key:R.label?R.label:R,value:R.value?R.value:R}),R.label?R.label:R))})),e.jsx(xt,{className:P.displayedRows,children:f({from:c===0?0:I*C+1,to:Se(),count:c===-1?-1:c,page:I})}),e.jsx(s,{className:P.actions,backIconButtonProps:i,count:c,nextIconButtonProps:L,onPageChange:N,page:I,rowsPerPage:C,showFirstButton:u,showLastButton:b,getItemAriaLabel:x})]})}))}),yt=Tt,Pt=q(e.jsx("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward");function wt(t){return H("MuiTableSortLabel",t)}const St=z("MuiTableSortLabel",["root","active","icon","iconDirectionDesc","iconDirectionAsc"]),O=St,Ct=["active","children","className","direction","hideSortIcon","IconComponent"],It=t=>{const{classes:n,direction:o,active:r}=t,s={root:["root",r&&"active"],icon:["icon",`iconDirection${me(o)}`]};return K(s,wt,n)},Rt=w(Le,{name:"MuiTableSortLabel",slot:"Root",overridesResolver:(t,n)=>{const{ownerState:o}=t;return[n.root,o.active&&n.active]}})(({theme:t})=>({cursor:"pointer",display:"inline-flex",justifyContent:"flex-start",flexDirection:"inherit",alignItems:"center","&:focus":{color:(t.vars||t).palette.text.secondary},"&:hover":{color:(t.vars||t).palette.text.secondary,[`& .${O.icon}`]:{opacity:.5}},[`&.${O.active}`]:{color:(t.vars||t).palette.text.primary,[`& .${O.icon}`]:{opacity:1,color:(t.vars||t).palette.text.secondary}}})),Lt=w("span",{name:"MuiTableSortLabel",slot:"Icon",overridesResolver:(t,n)=>{const{ownerState:o}=t;return[n.icon,n[`iconDirection${me(o.direction)}`]]}})(({theme:t,ownerState:n})=>h({fontSize:18,marginRight:4,marginLeft:4,opacity:0,transition:t.transitions.create(["opacity","transform"],{duration:t.transitions.duration.shorter}),userSelect:"none"},n.direction==="desc"&&{transform:"rotate(0deg)"},n.direction==="asc"&&{transform:"rotate(180deg)"})),kt=v.forwardRef(function(n,o){const r=E({props:n,name:"MuiTableSortLabel"}),{active:s=!1,children:i,className:l,direction:p="asc",hideSortIcon:a=!1,IconComponent:c=Pt}=r,x=D(r,Ct),f=h({},r,{active:s,direction:p,hideSortIcon:a,IconComponent:c}),S=It(f);return e.jsxs(Rt,h({className:k(S.root,l),component:"span",disableRipple:!0,ownerState:f,ref:o},x,{children:[i,a&&!s?null:e.jsx(Lt,{as:c,className:k(S.icon),ownerState:f})]}))}),Mt=kt,B=[...Array(24)].map((t,n)=>({id:_.string.uuid(),avatarUrl:`/assets/images/avatars/avatar_${n+1}.jpg`,name:_.person.fullName(),company:_.company.name(),isVerified:_.datatype.boolean(),status:J.sample(["active","banned"]),role:J.sample(["Leader","Hr Manager","UI Designer","UX Designer","UI/UX Designer","Project Manager","Backend Developer","Full Stack Designer","Front End Developer","Full Stack Developer"])}));function je({query:t}){return e.jsx(V,{children:e.jsx(m,{align:"center",colSpan:6,sx:{py:3},children:e.jsxs(ke,{sx:{textAlign:"center"},children:[e.jsx(F,{variant:"h6",paragraph:!0,children:"Not found"}),e.jsxs(F,{variant:"body2",children:["No results found for  ",e.jsxs("strong",{children:['"',t,'"']}),".",e.jsx("br",{})," Try checking for typos or using complete words."]})]})})})}je.propTypes={query:d.string};function ve({selected:t,name:n,avatarUrl:o,company:r,role:s,isVerified:i,status:l,handleClick:p}){const[a,c]=v.useState(null),x=S=>{c(S.currentTarget)},f=()=>{c(null)};return e.jsxs(e.Fragment,{children:[e.jsxs(V,{hover:!0,tabIndex:-1,role:"checkbox",selected:t,children:[e.jsx(m,{padding:"checkbox",children:e.jsx(fe,{disableRipple:!0,checked:t,onChange:p})}),e.jsx(m,{component:"th",scope:"row",padding:"none",children:e.jsxs(xe,{direction:"row",alignItems:"center",spacing:2,children:[e.jsx(Me,{alt:n,src:o}),e.jsx(F,{variant:"subtitle2",noWrap:!0,children:n})]})}),e.jsx(m,{children:r}),e.jsx(m,{children:s}),e.jsx(m,{align:"center",children:i?"Yes":"No"}),e.jsx(m,{children:e.jsx(ze,{color:l==="banned"&&"error"||"success",children:l})}),e.jsx(m,{align:"right",children:e.jsx(M,{onClick:x,children:e.jsx(A,{icon:"eva:more-vertical-fill"})})})]}),e.jsxs(Ae,{open:!!a,anchorEl:a,onClose:f,anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"right"},PaperProps:{sx:{width:140}},children:[e.jsxs(W,{onClick:f,children:[e.jsx(A,{icon:"eva:edit-fill",sx:{mr:2}}),"Edit"]}),e.jsxs(W,{onClick:f,sx:{color:"error.main"},children:[e.jsx(A,{icon:"eva:trash-2-outline",sx:{mr:2}}),"Delete"]})]})]})}ve.propTypes={avatarUrl:d.any,company:d.any,handleClick:d.func,isVerified:d.any,name:d.any,role:d.any,selected:d.any,status:d.string};const At={border:0,margin:-1,padding:0,width:"1px",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",clip:"rect(0 0 0 0)"};function Nt(t,n,o){return t?Math.max(0,(1+t)*n-o):0}function ge(t,n,o){return t[o]===null?1:n[o]===null||n[o]<t[o]?-1:n[o]>t[o]?1:0}function $t(t,n){return t==="desc"?(o,r)=>ge(o,r,n):(o,r)=>-ge(o,r,n)}function Bt({inputData:t,comparator:n,filterName:o}){const r=t.map((s,i)=>[s,i]);return r.sort((s,i)=>{const l=n(s[0],i[0]);return l!==0?l:s[1]-i[1]}),t=r.map(s=>s[0]),o&&(t=t.filter(s=>s.name.toLowerCase().indexOf(o.toLowerCase())!==-1)),t}function Te({order:t,orderBy:n,rowCount:o,headLabel:r,numSelected:s,onRequestSort:i,onSelectAllClick:l}){const p=a=>c=>{i(c,a)};return e.jsx(at,{children:e.jsxs(V,{children:[e.jsx(m,{padding:"checkbox",children:e.jsx(fe,{indeterminate:s>0&&s<o,checked:o>0&&s===o,onChange:l})}),r.map(a=>e.jsx(m,{align:a.align||"left",sortDirection:n===a.id?t:!1,sx:{width:a.width,minWidth:a.minWidth},children:e.jsxs(Mt,{hideSortIcon:!0,active:n===a.id,direction:n===a.id?t:"asc",onClick:p(a.id),children:[a.label,n===a.id?e.jsx(Ne,{sx:{...At},children:t==="desc"?"sorted descending":"sorted ascending"}):null]})},a.id))]})})}Te.propTypes={order:d.oneOf(["asc","desc"]),orderBy:d.string,rowCount:d.number,headLabel:d.array,numSelected:d.number,onRequestSort:d.func,onSelectAllClick:d.func};function ye({emptyRows:t,height:n}){return t?e.jsx(V,{sx:{...n&&{height:n*t}},children:e.jsx(m,{colSpan:9})}):null}ye.propTypes={emptyRows:d.number,height:d.number};function Pe({numSelected:t,filterName:n,onFilterName:o}){return e.jsxs(be,{sx:{height:96,display:"flex",justifyContent:"space-between",p:r=>r.spacing(0,1,0,3),...t>0&&{color:"primary.main",bgcolor:"primary.lighter"}},children:[t>0?e.jsxs(F,{component:"div",variant:"subtitle1",children:[t," selected"]}):e.jsx(Ke,{value:n,onChange:o,placeholder:"Search user...",startAdornment:e.jsx($e,{position:"start",children:e.jsx(A,{icon:"eva:search-fill",sx:{color:"text.disabled",width:20,height:20}})})}),t>0?e.jsx(Z,{title:"Delete",children:e.jsx(M,{children:e.jsx(A,{icon:"eva:trash-2-fill"})})}):e.jsx(Z,{title:"Filter list",children:e.jsx(M,{children:e.jsx(A,{icon:"ic:round-filter-list"})})})]})}Pe.propTypes={numSelected:d.number,filterName:d.string,onFilterName:d.func};function Ut(){const[t,n]=v.useState(0),[o,r]=v.useState("asc"),[s,i]=v.useState([]),[l,p]=v.useState("name"),[a,c]=v.useState(""),[x,f]=v.useState(5),S=(u,b)=>{b!==""&&(r(l===b&&o==="asc"?"desc":"asc"),p(b))},L=u=>{if(u.target.checked){const b=B.map(y=>y.name);i(b);return}i([])},N=(u,b)=>{const y=s.indexOf(b);let j=[];y===-1?j=j.concat(s,b):y===0?j=j.concat(s.slice(1)):y===s.length-1?j=j.concat(s.slice(0,-1)):y>0&&(j=j.concat(s.slice(0,y),s.slice(y+1))),i(j)},$=(u,b)=>{n(b)},I=u=>{n(0),f(parseInt(u.target.value,10))},C=u=>{n(0),c(u.target.value)},g=Bt({inputData:B,comparator:$t(o,l),filterName:a}),T=!g.length&&!!a;return e.jsxs(Ve,{children:[e.jsxs(xe,{direction:"row",alignItems:"center",justifyContent:"space-between",mb:5,children:[e.jsx(F,{variant:"h4",children:"Users"}),e.jsx(Be,{variant:"contained",color:"inherit",startIcon:e.jsx(A,{icon:"eva:plus-fill"}),children:"New User"})]}),e.jsxs(Oe,{children:[e.jsx(Pe,{numSelected:s.length,filterName:a,onFilterName:C}),e.jsx(Ue,{children:e.jsx(Ye,{sx:{overflow:"unset"},children:e.jsxs(_e,{sx:{minWidth:800},children:[e.jsx(Te,{order:o,orderBy:l,rowCount:B.length,numSelected:s.length,onRequestSort:S,onSelectAllClick:L,headLabel:[{id:"name",label:"Name"},{id:"company",label:"Company"},{id:"role",label:"Role"},{id:"isVerified",label:"Verified",align:"center"},{id:"status",label:"Status"},{id:""}]}),e.jsxs(He,{children:[g.slice(t*x,t*x+x).map(u=>e.jsx(ve,{name:u.name,role:u.role,status:u.status,company:u.company,avatarUrl:u.avatarUrl,isVerified:u.isVerified,selected:s.indexOf(u.name)!==-1,handleClick:b=>N(b,u.name)},u.id)),e.jsx(ye,{height:77,emptyRows:Nt(t,x,B.length)}),T&&e.jsx(je,{query:a})]})]})})}),e.jsx(yt,{page:t,component:"div",count:B.length,rowsPerPage:x,onPageChange:$,rowsPerPageOptions:[5,10,25],onRowsPerPageChange:I})]})]})}function Vt(){return e.jsxs(e.Fragment,{children:[e.jsx(Fe,{children:e.jsx("title",{children:" User | Minimal UI "})}),e.jsx(Ut,{})]})}export{Vt as default};
