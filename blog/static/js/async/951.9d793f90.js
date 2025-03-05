/*! For license information please see 951.9d793f90.js.LICENSE.txt */
"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([["951"],{2038:function(e,t,r){let l;r.d(t,{Z:()=>W});var a=r(1750),o=r(5271),n=r(9981),i=r.n(n),s=r(8051),d=r(9761);let c=o.createContext({siderHook:{addSider:()=>null,removeSider:()=>null}});var g=r(1626),u=r(2163);let f={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"bars",theme:"outlined"};var p=r(6400),h=o.forwardRef(function(e,t){return o.createElement(p.Z,(0,u.Z)({},e,{ref:t,icon:f}))}),m=r(2083),b=r(9635),x=r(1821),$=r(3561);let y=e=>{let{antCls:t,componentCls:r,colorText:l,footerBg:a,headerHeight:o,headerPadding:n,headerColor:i,footerPadding:s,fontSize:d,bodyBg:c,headerBg:g}=e;return{[r]:{display:"flex",flex:"auto",flexDirection:"column",minHeight:0,background:c,"&, *":{boxSizing:"border-box"},[`&${r}-has-sider`]:{flexDirection:"row",[`> ${r}, > ${r}-content`]:{width:0}},[`${r}-header, &${r}-footer`]:{flex:"0 0 auto"},"&-rtl":{direction:"rtl"}},[`${r}-header`]:{height:o,padding:n,color:i,lineHeight:(0,x.bf)(o),background:g,[`${t}-menu`]:{lineHeight:"inherit"}},[`${r}-footer`]:{padding:s,color:l,fontSize:d,background:a},[`${r}-content`]:{flex:"auto",color:l,minHeight:0}}},v=e=>{let{colorBgLayout:t,controlHeight:r,controlHeightLG:l,colorText:a,controlHeightSM:o,marginXXS:n,colorTextLightSolid:i,colorBgContainer:s}=e,d=1.25*l;return{colorBgHeader:"#001529",colorBgBody:t,colorBgTrigger:"#002140",bodyBg:t,headerBg:"#001529",headerHeight:2*r,headerPadding:`0 ${d}px`,headerColor:a,footerPadding:`${o}px ${d}px`,footerBg:t,siderBg:"#001529",triggerHeight:l+2*n,triggerBg:"#002140",triggerColor:i,zeroTriggerWidth:l,zeroTriggerHeight:l,lightSiderBg:s,lightTriggerBg:s,lightTriggerColor:a}},w=[["colorBgBody","bodyBg"],["colorBgHeader","headerBg"],["colorBgTrigger","triggerBg"]],C=(0,$.I$)("Layout",e=>[y(e)],v,{deprecatedTokens:w}),N=e=>{let{componentCls:t,siderBg:r,motionDurationMid:l,motionDurationSlow:a,antCls:o,triggerHeight:n,triggerColor:i,triggerBg:s,headerHeight:d,zeroTriggerWidth:c,zeroTriggerHeight:g,borderRadiusLG:u,lightSiderBg:f,lightTriggerColor:p,lightTriggerBg:h,bodyBg:m}=e;return{[t]:{position:"relative",minWidth:0,background:r,transition:`all ${l}, background 0s`,"&-has-trigger":{paddingBottom:n},"&-right":{order:1},[`${t}-children`]:{height:"100%",marginTop:-.1,paddingTop:.1,[`${o}-menu${o}-menu-inline-collapsed`]:{width:"auto"}},[`&-zero-width ${t}-children`]:{overflow:"hidden"},[`${t}-trigger`]:{position:"fixed",bottom:0,zIndex:1,height:n,color:i,lineHeight:(0,x.bf)(n),textAlign:"center",background:s,cursor:"pointer",transition:`all ${l}`},[`${t}-zero-width-trigger`]:{position:"absolute",top:d,insetInlineEnd:e.calc(c).mul(-1).equal(),zIndex:1,width:c,height:g,color:i,fontSize:e.fontSizeXL,display:"flex",alignItems:"center",justifyContent:"center",background:r,borderRadius:`0 ${(0,x.bf)(u)} ${(0,x.bf)(u)} 0`,cursor:"pointer",transition:`background ${a} ease`,"&::after":{position:"absolute",inset:0,background:"transparent",transition:`all ${a}`,content:'""'},"&:hover::after":{background:"rgba(255, 255, 255, 0.2)"},"&-right":{insetInlineStart:e.calc(c).mul(-1).equal(),borderRadius:`${(0,x.bf)(u)} 0 0 ${(0,x.bf)(u)}`}},"&-light":{background:f,[`${t}-trigger`]:{color:p,background:h},[`${t}-zero-width-trigger`]:{color:p,background:h,border:`1px solid ${m}`,borderInlineStart:0}}}}},k=(0,$.I$)(["Layout","Sider"],e=>[N(e)],v,{deprecatedTokens:w});var E=function(e,t){var r={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&0>t.indexOf(l)&&(r[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,l=Object.getOwnPropertySymbols(e);a<l.length;a++)0>t.indexOf(l[a])&&Object.prototype.propertyIsEnumerable.call(e,l[a])&&(r[l[a]]=e[l[a]]);return r};let O={xs:"479.98px",sm:"575.98px",md:"767.98px",lg:"991.98px",xl:"1199.98px",xxl:"1599.98px"},S=e=>!Number.isNaN(Number.parseFloat(e))&&isFinite(e),B=o.createContext({}),z=(l=0,function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return l+=1,`${e}${l}`}),j=o.forwardRef((e,t)=>{let{prefixCls:r,className:l,trigger:a,children:n,defaultCollapsed:g=!1,theme:u="dark",style:f={},collapsible:p=!1,reverseArrow:x=!1,width:$=200,collapsedWidth:y=80,zeroWidthTriggerStyle:v,breakpoint:w,onCollapse:C,onBreakpoint:N}=e,j=E(e,["prefixCls","className","trigger","children","defaultCollapsed","theme","style","collapsible","reverseArrow","width","collapsedWidth","zeroWidthTriggerStyle","breakpoint","onCollapse","onBreakpoint"]),{siderHook:H}=(0,o.useContext)(c),[T,I]=(0,o.useState)("collapsed"in e?e.collapsed:g),[Z,P]=(0,o.useState)(!1);(0,o.useEffect)(()=>{"collapsed"in e&&I(e.collapsed)},[e.collapsed]);let L=(t,r)=>{"collapsed"in e||I(t),null==C||C(t,r)},{getPrefixCls:R,direction:F}=(0,o.useContext)(d.E_),W=R("layout-sider",r),[M,_,q]=k(W),A=(0,o.useRef)(null);A.current=e=>{P(e.matches),null==N||N(e.matches),T!==e.matches&&L(e.matches,"responsive")},(0,o.useEffect)(()=>{let e;function t(e){return A.current(e)}if("undefined"!=typeof window){let{matchMedia:r}=window;if(r&&w&&w in O){e=r(`screen and (max-width: ${O[w]})`);try{e.addEventListener("change",t)}catch(r){e.addListener(t)}t(e)}}return()=>{try{null==e||e.removeEventListener("change",t)}catch(r){null==e||e.removeListener(t)}}},[w]),(0,o.useEffect)(()=>{let e=z("ant-sider-");return H.addSider(e),()=>H.removeSider(e)},[]);let D=()=>{L(!T,"clickTrigger")},X=(0,s.Z)(j,["collapsed"]),G=T?y:$,J=S(G)?`${G}px`:String(G),K=0===parseFloat(String(y||0))?o.createElement("span",{onClick:D,className:i()(`${W}-zero-width-trigger`,`${W}-zero-width-trigger-${x?"right":"left"}`),style:v},a||o.createElement(h,null)):null,Q="rtl"===F==!x,U={expanded:Q?o.createElement(b.Z,null):o.createElement(m.Z,null),collapsed:Q?o.createElement(m.Z,null):o.createElement(b.Z,null)}[T?"collapsed":"expanded"],V=null!==a?K||o.createElement("div",{className:`${W}-trigger`,onClick:D,style:{width:J}},a||U):null,Y=Object.assign(Object.assign({},f),{flex:`0 0 ${J}`,maxWidth:J,minWidth:J,width:J}),ee=i()(W,`${W}-${u}`,{[`${W}-collapsed`]:!!T,[`${W}-has-trigger`]:p&&null!==a&&!K,[`${W}-below`]:!!Z,[`${W}-zero-width`]:0===parseFloat(J)},l,_,q),et=o.useMemo(()=>({siderCollapsed:T}),[T]);return M(o.createElement(B.Provider,{value:et},o.createElement("aside",Object.assign({className:ee},X,{style:Y,ref:t}),o.createElement("div",{className:`${W}-children`},n),p||Z&&K?V:null)))});var H=function(e,t){var r={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&0>t.indexOf(l)&&(r[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,l=Object.getOwnPropertySymbols(e);a<l.length;a++)0>t.indexOf(l[a])&&Object.prototype.propertyIsEnumerable.call(e,l[a])&&(r[l[a]]=e[l[a]]);return r};function T(e){let{suffixCls:t,tagName:r,displayName:l}=e;return e=>o.forwardRef((l,a)=>o.createElement(e,Object.assign({ref:a,suffixCls:t,tagName:r},l)))}let I=o.forwardRef((e,t)=>{let{prefixCls:r,suffixCls:l,className:a,tagName:n}=e,s=H(e,["prefixCls","suffixCls","className","tagName"]),{getPrefixCls:c}=o.useContext(d.E_),g=c("layout",r),[u,f,p]=C(g),h=l?`${g}-${l}`:g;return u(o.createElement(n,Object.assign({className:i()(r||h,a,f,p),ref:t},s)))}),Z=o.forwardRef((e,t)=>{let{direction:r}=o.useContext(d.E_),[l,n]=o.useState([]),{prefixCls:u,className:f,rootClassName:p,children:h,hasSider:m,tagName:b,style:x}=e,$=H(e,["prefixCls","className","rootClassName","children","hasSider","tagName","style"]),y=(0,s.Z)($,["suffixCls"]),{getPrefixCls:v,className:w,style:N}=(0,d.dj)("layout"),k=v("layout",u),E="boolean"==typeof m?m:!!l.length||(0,g.Z)(h).some(e=>e.type===j),[O,S,B]=C(k),z=i()(k,{[`${k}-has-sider`]:E,[`${k}-rtl`]:"rtl"===r},w,f,p,S,B),T=o.useMemo(()=>({siderHook:{addSider:e=>{n(t=>[].concat((0,a.Z)(t),[e]))},removeSider:e=>{n(t=>t.filter(t=>t!==e))}}}),[]);return O(o.createElement(c.Provider,{value:T},o.createElement(b,Object.assign({ref:t,className:z,style:Object.assign(Object.assign({},N),x)},y),h)))}),P=T({tagName:"div",displayName:"Layout"})(Z),L=T({suffixCls:"header",tagName:"header",displayName:"Header"})(I),R=T({suffixCls:"footer",tagName:"footer",displayName:"Footer"})(I),F=T({suffixCls:"content",tagName:"main",displayName:"Content"})(I);P.Header=L,P.Footer=R,P.Content=F,P.Sider=j,P._InternalSiderContext=B;let W=P}}]);