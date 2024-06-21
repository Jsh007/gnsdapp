import{r as m,j as e}from"./react-eX7k_oyb.js";import{u as W,c as I,s as U}from"./index-DXekcc4w.js";import{d as k,c as F}from"./@web3modal-BnXlkWgH.js";import{t as R,i as O,e as L,a as H}from"./@wagmi-Cwopbt2N.js";import{y as V,A as D,B as G}from"./viem-DO_zHWKk.js";import{u as M,C as n}from"./react-hook-form-BVuS_7ec.js";import{t as _}from"./@hookform-B4uZ5eeB.js";import{u as q,w as z,B as J,x as l,y as i,z as y,E as K,I as Q,V as X,F as Y,H as Z,J as $,K as ee,M as te,N as re,O as se,Q as ae,G as A}from"./@mui-X-K-t_pU.js";import{c as oe}from"./react-router-zaz7yv4n.js";import{u as ne}from"./react-router-dom-DIdm3YiL.js";import"./@babel-BTUyE5mg.js";import"./react-redux-B2ydUXa7.js";import"./use-sync-external-store-o46NS6CO.js";import"./react-dom-BE5TJDhq.js";import"./scheduler-CzFDRTuY.js";import"./@reduxjs-9R9LrHOH.js";import"./redux-DITMfSWq.js";import"./immer-BkdjC0q7.js";import"./reselect-BEFkisvr.js";import"./redux-thunk-ClJT1hhx.js";import"./react-copy-to-clipboard-CVAzxf6m.js";import"./copy-to-clipboard-BvYTofsP.js";import"./toggle-selection-BHUZwh74.js";import"./jwt-decode-VWaDGczM.js";import"./lucide-react-CUEWfaAn.js";import"./uuid-D8aEg3BZ.js";import"./boxicons-DYxgBJvX.js";import"./zod-dIKOytT1.js";import"./@fvilers-C36Jf4Wd.js";import"./zustand-BxVvYF66.js";import"./eventemitter3-B2QLvKQr.js";import"./mipd-CIcDX0W7.js";import"./@remix-run-CAT8zpu_.js";import"./clsx-B-dksMZM.js";import"./@emotion-CTR4nhAa.js";import"./hoist-non-react-statics-Buxaj0Kl.js";import"./react-is-8JwjhRSi.js";import"./stylis-NkKAe6Bn.js";import"./react-transition-group-BwIbI4gd.js";import"./bignumber.js-DOH-f-tm.js";import"./buffer-EBb79ogF.js";import"./base64-js-D0UyVEDn.js";import"./ieee754-DSYfm7We.js";import"./valtio-D-UtsqsE.js";import"./proxy-compare-DDw08AJZ.js";import"./dayjs-D3dD73DO.js";import"./qrcode-CGiDONbL.js";import"./encode-utf8-Cn5aGd7v.js";import"./dijkstrajs-D_NXgYpA.js";const B="45889a474345288a14a9a0d93756e1f0",ie={name:"Gtxstream",description:"Connect to Gtxstream",url:"https://app.gtxstream.com",icons:["https://avatars.githubusercontent.com/u/37784886"]},le=[V,D,G],u=k({chains:le,projectId:B,metadata:ie});R(u);const me=F({wagmiConfig:u,projectId:B,enableAnalytics:!0,enableOnramp:!0});async function ce(){O(u).isConnected?await L(u):await me.open()}function pe({wallet:x,referrerUsername:g}){var N,C;const b=q(),c=oe(),[w,{isSuccess:f}]=W(),[p,v]=m.useState(!1),h=()=>{v(r=>!r)};m.useEffect(()=>{f&&c("/success")},[f,c]);const{handleSubmit:E,control:o,setError:j,formState:{errors:s}}=M({resolver:_(U),mode:"all",defaultValues:{firstName:"",lastName:"",username:"",password:"",email:"",wallet:x,referrerUsername:g,terms:!1},values:{firstName:"",lastName:"",username:"",password:"",email:"",wallet:x,referrerUsername:g,terms:!1},resetOptions:{keepDirty:!0,keepErrors:!0}}),T=m.useCallback(async r=>{var t,S,P;try{const d={...r},a=await w(d);((t=a==null?void 0:a.error)==null?void 0:t.status)===409&&j("username",{type:"server",message:"Username taken, try another one !"}),((S=a==null?void 0:a.error)==null?void 0:S.status)===401&&j("referrerUsername",{type:"server",message:"Invalid affiliate username."}),((P=a==null?void 0:a.error)==null?void 0:P.status)==="FETCH_ERROR"&&j("root.serverError",{type:"server",message:"Rejected by server. Thread with caution!"})}catch(d){(d==null?void 0:d.status)==="FETCH_ERROR"&&j("root.serverError",{type:"server",message:"Network or internet Error"})}},[]);return e.jsxs("div",{children:[e.jsxs("div",{className:"title-wrapper w-full flex justify-between items-center mb-8 ",children:[e.jsx("img",{src:"/images/gtx-stream-logo1.png",className:"w-32",alt:""}),e.jsx("h2",{className:"text-2xl font-bold text-center text-gray-50",children:"Sign Up"})]}),e.jsx(z,{theme:I(b),children:e.jsx("form",{onSubmit:E(T),children:e.jsxs(J,{component:"div",sx:{p:"2px 4px",display:"flex",flexDirection:"column",alignItems:"center",gap:2,width:350,boxShadow:0},children:[e.jsx(n,{name:"firstName",control:o,render:({field:r})=>{var t;return e.jsx(l,{id:"firstName",label:"First Name",variant:"filled",type:"text",error:!!s.firstName,helperText:(t=s.firstName)==null?void 0:t.message,...r,fullWidth:!0,color:"secondary",InputProps:{startAdornment:e.jsx(i,{position:"start",children:e.jsx(y,{})})}})}}),e.jsx(n,{name:"lastName",control:o,render:({field:r})=>{var t;return e.jsx(l,{id:"lastName",label:"Last Name",variant:"filled",type:"text",error:!!s.lastName,helperText:(t=s.lastName)==null?void 0:t.message,...r,fullWidth:!0,InputProps:{startAdornment:e.jsx(i,{position:"start",children:e.jsx(y,{})})}})}}),e.jsx(n,{name:"username",control:o,render:({field:r})=>{var t;return e.jsx(l,{id:"username",label:"Username",variant:"filled",type:"text",error:!!s.username,helperText:(t=s.username)==null?void 0:t.message,...r,fullWidth:!0,InputProps:{startAdornment:e.jsx(i,{position:"start",children:e.jsx(y,{})}),autoComplete:"off"}})}}),e.jsx(n,{name:"password",control:o,render:({field:r})=>{var t;return e.jsx(l,{id:"password",label:"Password",variant:"filled",type:p?"text":"password",error:!!s.password,helperText:(t=s.password)==null?void 0:t.message,autoComplete:"off",...r,fullWidth:!0,InputProps:{startAdornment:e.jsx(i,{position:"start",children:e.jsx(K,{})}),endAdornment:e.jsx(i,{position:"end",children:e.jsx(Q,{"aria-label":"toggle password visibility",onClick:h,edge:"end",children:p?e.jsx(X,{}):e.jsx(Y,{})})})}})}}),e.jsx(n,{name:"email",control:o,render:({field:r})=>{var t;return e.jsx(l,{id:"email",label:"Email",variant:"filled",type:"email",error:!!s.email,helperText:(t=s.email)==null?void 0:t.message,...r,fullWidth:!0,InputProps:{startAdornment:e.jsx(i,{position:"start",children:e.jsx(Z,{})})}})}}),e.jsx(n,{name:"wallet",control:o,render:({field:r})=>{var t;return e.jsx(l,{id:"wallet",label:"Wallet",variant:"filled",type:"text",error:!!s.wallet,helperText:(t=s.wallet)==null?void 0:t.message,disabled:!0,...r,fullWidth:!0,InputProps:{startAdornment:e.jsx(i,{position:"start",children:e.jsx($,{})})}})}}),e.jsx(n,{name:"referrerUsername",control:o,render:({field:r})=>{var t;return e.jsx(l,{id:"referrerUsername",label:"Referrer",variant:"filled",type:"text",error:!!s.referrerUsername,helperText:(t=s.referrerUsername)==null?void 0:t.message,disabled:!0,...r,fullWidth:!0,InputProps:{startAdornment:e.jsx(i,{position:"start",children:e.jsx(ee,{})})}})}}),e.jsx(n,{name:"terms",control:o,render:({field:r})=>e.jsxs(te,{error:!!s.terms,variant:"outlined",children:[e.jsx(re,{...r,control:e.jsx(se,{...r}),label:"Accept terms and conditions",sx:{color:"#ffff"}}),s.terms&&e.jsxs(ae,{children:[" ",s.terms.message," "]})]})}),e.jsx(A,{type:"submit",variant:"contained",className:"btn",children:"Submit"}),e.jsx("div",{children:e.jsx("p",{style:{fontWeight:"bold"},children:(C=(N=s.root)==null?void 0:N.serverError)==null?void 0:C.message})})]})})})]})}function it(){const[x,g]=ne(),b=x.get("ref");m.useState(!1);const[c,w]=m.useState(""),[f,p]=m.useState("Connect Wallet"),v=async()=>{await ce()};return H(u,{onChange(h){w(h.address??""),h.isConnected?p("Disconnect"):p("Connect Wallet")}}),e.jsx("div",{className:"signup-page",children:e.jsxs("div",{className:"form-wrapper",children:[e.jsxs("div",{className:"connect-box mb-12",children:[e.jsxs("p",{children:[" ",c," "]}),e.jsx(A,{variant:"contained",className:"connect-btn",onClick:v,children:f})]}),e.jsx(pe,{wallet:c,referrerUsername:b})]})})}export{it as default};