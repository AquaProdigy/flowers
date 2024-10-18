import{o,c,w as u,p,a as e,f as a,t as l,h as n,j as h,r as f,F as m,d as v,u as y,i as w}from"./app-DHy2bZu3.js";import{M as g}from"./MainLayout-DcgTcTgG.js";import"./Dropdown-Bec3s7gg.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const k={class:"container flex"},_={class:"shoping-cart flex flex-col mx-auto"},x={class:"mb-6 grid justify-items-center pb-3"},b={class:"flex sm:flex-col border-2 border-violet-600 rounded-full px-6 gap-x-2"},q={class:"list-items flex flex-col"},P={class:"item sm:grid sm:grid-cols-3 sm:grid-rows-1 sm:place-items-center gap-6 mb-8 border-b-2 px-5 w-/"},C={class:"image flex justify-center mb-6 flex-col"},j=["src"],D={class:"flex gap-x-3 justify-center"},B=["onClick","disabled"],T=["onClick","disabled"],M={class:"place-self-stretch flex flex-col"},A={class:"name"},L={class:"price font-bold"},S={class:"text-end"},N={name:"Show",data(){return{fullPrice:0,address:null,isTypeDelivery:null}},methods:{checkTypeDelivery(){return this.isTypeDelivery=localStorage.getItem("isTypeDelivery"),this.isTypeDelivery==="Доставка"?(this.setAddress(),this.address?this.requestPayment():this.addressAlert()):this.requestPayment()},requestPayment(){p.post(route("payment.create"),this.address?JSON.parse(this.address):null)},addressAlert(){alert("Не выбран адрес доставки")},setAddress(){this.address=localStorage.getItem("address")},sumPrice(){this.fullPrice=0,this.$props.cart.forEach(s=>{this.fullPrice+=Math.floor(s.flowers.price*s.quantity)})},plus(s){s.quantity+=1,this.sumPrice(),this.updateQuantity(s.id,s.quantity)},minus(s){s.quantity-=1,this.sumPrice(),this.updateQuantity(s.id,s.quantity)},updateQuantity(s,r){axios.patch(route("carts.update",s),{id:s,quantity:r})}},mounted(){this.sumPrice()}},V=Object.assign(N,{props:{cart:Array},setup(s){return(r,i)=>(o(),c(g,null,{default:u(()=>[e("div",k,[e("div",_,[e("div",x,[r.fullPrice?(o(),a("button",{key:0,onClick:i[0]||(i[0]=n((...t)=>r.checkTypeDelivery&&r.checkTypeDelivery(...t),["prevent"]))},[e("div",b,[i[1]||(i[1]=e("div",null,"Оплатить",-1)),e("div",null,l(r.fullPrice)+" Руб",1)])])):h("",!0)]),e("div",q,[(o(!0),a(m,null,f(s.cart,t=>(o(),a("div",P,[e("div",C,[e("img",{src:t.flowers.image_path,alt:"flower",class:"max-w-full rounded-lg max-h-[40vh]"},null,8,j),e("div",D,[e("button",{onClick:n(d=>r.plus(t),["prevent"]),disabled:t.quantity>=t.flowers.quantity},i[2]||(i[2]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"size-6"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 4.5v15m7.5-7.5h-15"})],-1)]),8,B),e("div",null,l(t.quantity),1),e("button",{onClick:n(d=>r.minus(t),["prevent"]),disabled:t.quantity===1},i[3]||(i[3]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"size-6"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"})],-1)]),8,T)])]),e("div",M,[e("div",A,l(t.flowers.name),1),e("div",L,l(t.flowers.price*t.quantity)+" руб",1)]),e("div",S,[v(y(w),{href:r.route("carts.destroy",{id:t.id}),onClick:d=>r.fullPrice-=t.quantity*t.flowers.price,method:"delete",as:"button",type:"button",class:"h-12 w-12"},{default:u(()=>i[4]||(i[4]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"size-6"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"})],-1)])),_:2},1032,["href","onClick"])])]))),256))])])])]),_:1}))}});export{V as default};