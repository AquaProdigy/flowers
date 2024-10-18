import{l as v,b as h,m as _,o as n,f as w,T as V,c as m,w as d,d as o,u as t,Z as B,t as C,j as c,a as l,i as g,e as f,n as $,h as P}from"./app-DHy2bZu3.js";import{_ as q}from"./GuestLayout-nmh7HZEX.js";import{_ as x,a as y,b as k}from"./TextInput-IRHdtDUU.js";import{P as N}from"./PrimaryButton-6OXGiE3I.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const U=["value"],R={__name:"Checkbox",props:{checked:{type:[Array,Boolean],required:!0},value:{default:null}},emits:["update:checked"],setup(r,{emit:s}){const u=s,i=r,e=v({get(){return i.checked},set(a){u("update:checked",a)}});return(a,p)=>h((n(),w("input",{type:"checkbox",value:r.value,"onUpdate:modelValue":p[0]||(p[0]=b=>e.value=b),class:"rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"},null,8,U)),[[_,e.value]])}},S={key:0,class:"mb-4 font-medium text-sm text-green-600"},j={class:"mt-4"},D={class:"block mt-4"},L={class:"flex items-center"},M={class:"flex items-center justify-end mt-4 gap-x-3"},Z={__name:"Login",props:{canResetPassword:{type:Boolean},status:{type:String}},setup(r){const s=V({email:"",password:"",remember:!1}),u=()=>{s.post(route("login"),{onFinish:()=>s.reset("password")})};return(i,e)=>(n(),m(q,null,{default:d(()=>[o(t(B),{title:"Log in"}),r.status?(n(),w("div",S,C(r.status),1)):c("",!0),l("form",{onSubmit:P(u,["prevent"])},[l("div",null,[o(x,{for:"email",value:"Почта"}),o(y,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:t(s).email,"onUpdate:modelValue":e[0]||(e[0]=a=>t(s).email=a),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),o(k,{class:"mt-2",message:t(s).errors.email},null,8,["message"])]),l("div",j,[o(x,{for:"password",value:"Пароль"}),o(y,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:t(s).password,"onUpdate:modelValue":e[1]||(e[1]=a=>t(s).password=a),required:"",autocomplete:"current-password"},null,8,["modelValue"]),o(k,{class:"mt-2",message:t(s).errors.password},null,8,["message"])]),l("div",D,[l("label",L,[o(R,{name:"remember",checked:t(s).remember,"onUpdate:checked":e[2]||(e[2]=a=>t(s).remember=a)},null,8,["checked"]),e[3]||(e[3]=l("span",{class:"ms-2 text-sm text-gray-600"},"Запомнить",-1))])]),l("div",M,[r.canResetPassword?(n(),m(t(g),{key:0,href:i.route("password.request"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:d(()=>e[4]||(e[4]=[f(" Забыли свой пароль? ")])),_:1},8,["href"])):c("",!0),r.canResetPassword?(n(),m(t(g),{key:1,href:i.route("register"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:d(()=>e[5]||(e[5]=[f(" Регистрация ")])),_:1},8,["href"])):c("",!0),o(N,{class:$(["ms-4",{"opacity-25":t(s).processing}]),disabled:t(s).processing},{default:d(()=>e[6]||(e[6]=[f(" Войти ")])),_:1},8,["class","disabled"])])],32)]),_:1}))}};export{Z as default};
