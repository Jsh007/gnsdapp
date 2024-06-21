import{r as p,j as e}from"./react-eX7k_oyb.js";import{u as B,c as T,s as W}from"./index-DOsJMCEx.js";import{d as P,c as U}from"./@web3modal-BnXlkWgH.js";import{t as I,i as F,e as R,a as k}from"./@wagmi-Cwopbt2N.js";import{y as O,A as L,B as H}from"./viem-DO_zHWKk.js";import{u as D,C as n}from"./react-hook-form-BVuS_7ec.js";import{t as G}from"./@hookform-B4uZ5eeB.js";import{u as M,w as _,B as q,x as m,y as l,z as v,E as z,H as J,J as K,K as Q,M as V,N as X,O as Y,Q as Z,G as E}from"./@mui-X-K-t_pU.js";import{c as $}from"./react-router-zaz7yv4n.js";import{u as ee}from"./react-router-dom-DIdm3YiL.js";import"./@babel-BTUyE5mg.js";import"./react-redux-B2ydUXa7.js";import"./use-sync-external-store-o46NS6CO.js";import"./react-dom-BE5TJDhq.js";import"./scheduler-CzFDRTuY.js";import"./@reduxjs-9R9LrHOH.js";import"./redux-DITMfSWq.js";import"./immer-BkdjC0q7.js";import"./reselect-BEFkisvr.js";import"./redux-thunk-ClJT1hhx.js";import"./react-copy-to-clipboard-CVAzxf6m.js";import"./copy-to-clipboard-BvYTofsP.js";import"./toggle-selection-BHUZwh74.js";import"./jwt-decode-VWaDGczM.js";import"./lucide-react-CUEWfaAn.js";import"./uuid-D8aEg3BZ.js";import"./boxicons-DYxgBJvX.js";import"./zod-dIKOytT1.js";import"./@fvilers-C36Jf4Wd.js";import"./zustand-BxVvYF66.js";import"./eventemitter3-B2QLvKQr.js";import"./mipd-CIcDX0W7.js";import"./@remix-run-CAT8zpu_.js";import"./clsx-B-dksMZM.js";import"./@emotion-CTR4nhAa.js";import"./hoist-non-react-statics-Buxaj0Kl.js";import"./react-is-8JwjhRSi.js";import"./stylis-NkKAe6Bn.js";import"./react-transition-group-BwIbI4gd.js";import"./bignumber.js-DOH-f-tm.js";import"./buffer-EBb79ogF.js";import"./base64-js-D0UyVEDn.js";import"./ieee754-DSYfm7We.js";import"./valtio-D-UtsqsE.js";import"./proxy-compare-DDw08AJZ.js";import"./dayjs-D3dD73DO.js";import"./qrcode-CGiDONbL.js";import"./encode-utf8-Cn5aGd7v.js";import"./dijkstrajs-D_NXgYpA.js";const S="45889a474345288a14a9a0d93756e1f0",te={name:"Gtxstream",description:"Connect to Gtxstream",url:"https://app.gtxstream.com",icons:["https://avatars.githubusercontent.com/u/37784886"]},re=[O,L,H],u=P({chains:re,projectId:S,metadata:te});I(u);const se=U({wagmiConfig:u,projectId:S,enableAnalytics:!0,enableOnramp:!0});async function ae(){F(u).isConnected?await R(u):await se.open()}function oe({wallet:x,referrerUsername:j}){var w,y;const g=M(),c=$(),[b,{isSuccess:f}]=B();p.useState(!1),p.useEffect(()=>{f&&c("/success")},[f,c]);const{handleSubmit:h,control:a,setError:i,formState:{errors:r}}=D({resolver:G(W),mode:"all",defaultValues:{firstName:"",lastName:"",username:"",password:"",email:"",wallet:x,referrerUsername:j,terms:!1},values:{firstName:"",lastName:"",username:"",password:"",email:"",wallet:x,referrerUsername:j,terms:!1},resetOptions:{keepDirty:!0,keepErrors:!0}}),A=p.useCallback(async s=>{var t,N,C;try{const d={...s},o=await b(d);((t=o==null?void 0:o.error)==null?void 0:t.status)===409&&i("username",{type:"server",message:"Username taken, try another one !"}),((N=o==null?void 0:o.error)==null?void 0:N.status)===401&&i("referrerUsername",{type:"server",message:"Invalid affiliate username."}),((C=o==null?void 0:o.error)==null?void 0:C.status)==="FETCH_ERROR"&&i("root.serverError",{type:"server",message:"Rejected by server. Thread with caution!"})}catch(d){(d==null?void 0:d.status)==="FETCH_ERROR"&&i("root.serverError",{type:"server",message:"Network or internet Error"})}},[]);return e.jsxs("div",{children:[e.jsxs("div",{className:"title-wrapper w-full flex justify-between items-center mb-8 ",children:[e.jsx("img",{src:"/images/gtx-stream-logo1.png",className:"w-32",alt:""}),e.jsx("h2",{className:"text-2xl font-bold text-center text-gray-50",children:"Sign Up"})]}),e.jsx(_,{theme:T(g),children:e.jsx("form",{onSubmit:h(A),children:e.jsxs(q,{component:"div",sx:{p:"2px 4px",display:"flex",flexDirection:"column",alignItems:"center",gap:2,width:350,boxShadow:0},children:[e.jsx(n,{name:"firstName",control:a,render:({field:s})=>{var t;return e.jsx(m,{id:"firstName",label:"First Name",variant:"filled",type:"text",error:!!r.firstName,helperText:(t=r.firstName)==null?void 0:t.message,...s,fullWidth:!0,color:"secondary",InputProps:{startAdornment:e.jsx(l,{position:"start",children:e.jsx(v,{})})}})}}),e.jsx(n,{name:"lastName",control:a,render:({field:s})=>{var t;return e.jsx(m,{id:"lastName",label:"Last Name",variant:"filled",type:"text",error:!!r.lastName,helperText:(t=r.lastName)==null?void 0:t.message,...s,fullWidth:!0,InputProps:{startAdornment:e.jsx(l,{position:"start",children:e.jsx(v,{})})}})}}),e.jsx(n,{name:"username",control:a,render:({field:s})=>{var t;return e.jsx(m,{id:"username",label:"Username",variant:"filled",type:"text",error:!!r.username,helperText:(t=r.username)==null?void 0:t.message,...s,fullWidth:!0,InputProps:{startAdornment:e.jsx(l,{position:"start",children:e.jsx(v,{})}),autoComplete:"off"}})}}),e.jsx(n,{name:"password",control:a,render:({field:s})=>{var t;return e.jsx(m,{id:"password",label:"Password",variant:"filled",type:"password",error:!!r.password,helperText:(t=r.password)==null?void 0:t.message,autoComplete:"off",...s,fullWidth:!0,InputProps:{startAdornment:e.jsx(l,{position:"start",children:e.jsx(z,{})})}})}}),e.jsx(n,{name:"email",control:a,render:({field:s})=>{var t;return e.jsx(m,{id:"email",label:"Email",variant:"filled",type:"email",error:!!r.email,helperText:(t=r.email)==null?void 0:t.message,...s,fullWidth:!0,InputProps:{startAdornment:e.jsx(l,{position:"start",children:e.jsx(J,{})})}})}}),e.jsx(n,{name:"wallet",control:a,render:({field:s})=>{var t;return e.jsx(m,{id:"wallet",label:"Wallet",variant:"filled",type:"text",error:!!r.wallet,helperText:(t=r.wallet)==null?void 0:t.message,disabled:!0,...s,fullWidth:!0,InputProps:{startAdornment:e.jsx(l,{position:"start",children:e.jsx(K,{})})}})}}),e.jsx(n,{name:"referrerUsername",control:a,render:({field:s})=>{var t;return e.jsx(m,{id:"referrerUsername",label:"Referrer",variant:"filled",type:"text",error:!!r.referrerUsername,helperText:(t=r.referrerUsername)==null?void 0:t.message,disabled:!0,...s,fullWidth:!0,InputProps:{startAdornment:e.jsx(l,{position:"start",children:e.jsx(Q,{})})}})}}),e.jsx(n,{name:"terms",control:a,render:({field:s})=>e.jsxs(V,{error:!!r.terms,variant:"outlined",children:[e.jsx(X,{...s,control:e.jsx(Y,{...s}),label:"Accept terms and conditions",sx:{color:"#ffff"}}),r.terms&&e.jsxs(Z,{children:[" ",r.terms.message," "]})]})}),e.jsx(E,{type:"submit",variant:"contained",className:"btn",children:"Submit"}),e.jsx("div",{children:e.jsx("p",{style:{fontWeight:"bold"},children:(y=(w=r.root)==null?void 0:w.serverError)==null?void 0:y.message})})]})})})]})}function tt(){const[x,j]=ee(),g=x.get("ref");p.useState(!1);const[c,b]=p.useState(""),[f,h]=p.useState("Connect Wallet"),a=async()=>{await ae()};return k(u,{onChange(i){b(i.address??""),i.isConnected?h("Disconnect"):h("Connect Wallet")}}),e.jsx("div",{className:"signup-page",children:e.jsxs("div",{className:"form-wrapper",children:[e.jsxs("div",{className:"connect-box mb-12",children:[e.jsxs("p",{children:[" ",c," "]}),e.jsx(E,{variant:"contained",className:"connect-btn",onClick:a,children:f})]}),e.jsx(oe,{wallet:c,referrerUsername:g})]})})}export{tt as default};
