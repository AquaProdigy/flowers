import{_ as C,a as O}from"./Dropdown-Bec3s7gg.js";import{o as i,f as d,a as s,n as y,b as c,v as f,j as g,i as _,t as v,d as a,w as p,e as u,k as j,s as h}from"./app-DHy2bZu3.js";import{_ as M}from"./_plugin-vue_export-helper-DlAUqK2U.js";const z={data(){return{map:null,geocoder:null,isMoving:!1,addressForm:{coordinates:[44.6226,41.935],address:null,entrance:"",doorCode:"",floor:"",apartment:"",commentOrder:""}}},props:{isOpenMap:{type:Boolean,required:!0},isCloseMap:{type:Function}},methods:{initMap(){this.$nextTick(()=>{const o=this.$refs.mapContainer;if(!o||o.offsetWidth===0||o.offsetHeight===0){console.error("Контейнер карты не найден или имеет нулевые размеры");return}window.ymaps?(this.map=new ymaps.Map(o,{center:this.addressForm.coordinates,zoom:14,controls:[]}),this.geocoder=ymaps.geocode,this.map.events.add("actionbegin",this.onMapActionBegin),this.map.events.add("actionend",this.onMapActionEnd),this.map.events.add("boundschange",this.onMapBoundsChange),this.map.events.add("boundschange",this.onMapBoundsChange)):console.error("API Яндекс.Карт не загружен")})},onMapBoundsChange(o){if(!this.map)return;const e=this.map.getCenter(),m=this.map.getZoom();this.addressForm.coordinates=e,this.map.setCenter(this.addressForm.coordinates,m),this.geocoder(e).then(x=>{const t=x.geoObjects.get(0);this.addressForm.address=t?t.getAddressLine().split(",").slice(1).join(",").trim():"Адрес не найден"})},onMapActionBegin(){this.isMoving=!0},onMapActionEnd(){this.isMoving=!1},submitForm(){localStorage.setItem("address",JSON.stringify(this.addressForm)),this.$props.isCloseMap(),window.location.reload()}},mounted(){this.isOpenMap&&this.initMap()},watch:{isOpenMap(o){o&&this.initMap()}}},F={key:0,class:"z-50"},D={class:"relative z-50"},B={class:"main__map-container fixed inset-0 m-auto w-11/12 md:w-4/5 max-h-[90vh] flex flex-col md:flex-row gap-4 bg-white rounded-3xl p-4"},A={class:"map-container md:w-3/5 w-full relative rounded-3xl overflow-hidden",ref:"mapContainer"},T={class:"form-container md:w-2/5 w-full p-5 flex flex-col justify-center gap-2"},S={class:"flex"},H=["value"],V={class:"flex flex-col md:flex-row gap-2"},L={class:"flex flex-col md:flex-row gap-2"},I={class:""};function N(o,e,m,x,t,n){return m.isOpenMap?(i(),d("div",F,[s("div",{class:"fixed inset-0 bg-black opacity-80 z-40",onClick:e[0]||(e[0]=(...l)=>m.isCloseMap&&m.isCloseMap(...l))}),s("div",D,[s("div",B,[s("div",A,[s("div",{class:y(["map-marker absolute",{"move-up":t.isMoving,"move-down":!t.isMoving}])},e[7]||(e[7]=[s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"size-6"},[s("path",{"fill-rule":"evenodd",d:"m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z","clip-rule":"evenodd"})],-1)]),2)],512),s("div",T,[s("div",S,[s("input",{type:"text",value:t.addressForm.address,class:"p-2 border border-gray-300 rounded w-full",placeholder:"Город, улица и дом"},null,8,H)]),s("div",V,[c(s("input",{"onUpdate:modelValue":e[1]||(e[1]=l=>t.addressForm.entrance=l),type:"text",class:"p-2 border border-gray-300 rounded w-full md:w-1/2",placeholder:"Подъезд"},null,512),[[f,t.addressForm.entrance]]),c(s("input",{"onUpdate:modelValue":e[2]||(e[2]=l=>t.addressForm.doorCode=l),type:"text",class:"p-2 border border-gray-300 rounded w-full md:w-1/2",placeholder:"Код двери"},null,512),[[f,t.addressForm.doorCode]])]),s("div",L,[c(s("input",{"onUpdate:modelValue":e[3]||(e[3]=l=>t.addressForm.floor=l),type:"text",class:"p-2 border border-gray-300 rounded w-full md:w-1/2",placeholder:"Этаж"},null,512),[[f,t.addressForm.floor]]),c(s("input",{"onUpdate:modelValue":e[4]||(e[4]=l=>t.addressForm.apartment=l),type:"text",class:"p-2 border border-gray-300 rounded w-full md:w-1/2",placeholder:"Квартира"},null,512),[[f,t.addressForm.apartment]])]),s("div",I,[c(s("input",{"onUpdate:modelValue":e[5]||(e[5]=l=>t.addressForm.commentOrder=l),type:"text",class:"p-2 border border-gray-300 rounded w-full",placeholder:"Комментарий к заказу"},null,512),[[f,t.addressForm.commentOrder]])]),s("button",{onClick:e[6]||(e[6]=(...l)=>n.submitForm&&n.submitForm(...l)),class:"bg-orange-500 text-white px-4 py-2 mt-4 rounded w-full md:w-auto"}," Добавить ")])])])])):g("",!0)}const Z=M(z,[["render",N],["__scopeId","data-v-476a069f"]]),U={name:"MainLayout",components:{Link:_,Dropdown:C,DropdownLink:O,CustomMap:Z},data(){return{isMenuOpen:!1,isAddressOpen:!1,isTypeDelivery:"Доставка",isOpenMap:!1,address:null}},methods:{addToLocalAddress(){localStorage.setItem("address",this.address)},toggleMenu(){this.isMenuOpen=!this.isMenuOpen},closeMenu(){this.isMenuOpen=!1},toggleAddress(){this.isAddressOpen=!this.isAddressOpen},closeAddress(){this.isAddressOpen=!1},selectOption(o){this.isMenuOpen=!1,this.isTypeDelivery=o,localStorage.setItem("isTypeDelivery",o)},isCloseMap(){this.isOpenMap=!1},toggleMap(){this.isOpenMap=!this.isOpenMap},checkTypeDelivery(){localStorage.getItem("isTypeDelivery")||localStorage.setItem("isTypeDelivery","Доставка"),this.selectOption(localStorage.getItem("isTypeDelivery"))}},mounted(){try{this.address=JSON.parse(localStorage.getItem("address")).address,this.$emit("")}catch{}this.checkTypeDelivery()}},E={class:"wrapper max-w-screen-xl mx-auto bg-gray-100"},J={class:""},q={class:"xl:flex xl:justify-between lg:flex lg:justify-between md:flex md:justify-between flex justify-center flex-wrap py-6 px-5 gap-y-5 gap-x-5"},G={style:{width:"3rem",height:"3rem",color:"red","background-color":"white","border-radius":"50%",padding:"3px"},viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",class:"atom-icon"},P={class:"font-bold text-xl"},W={key:0,class:"flex gap-x-2 bg-white p-2 rounded-full font-medium items-center"},K={key:1,class:"flex gap-x-2 bg-white p-2 rounded-full font-medium items-center"},Q={class:"inline-flex rounded-md"},R={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"},X={key:0,class:"flex justify-center py-5"},Y={class:"max-w-screen-xl mx-auto bg-gray-100"},$={key:0,class:"fixed inset-0 z-50 flex flex-col justify-end items-center w-3/4 mx-auto"},e0={class:"flex justify-between"},s0={class:"p-4 flex flex-col gap-y-5"},t0={class:"flex justify-between items-center"},o0={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"h-6 w-6 bg-red-600 rounded-full"},l0={class:"flex justify-between items-center"},n0={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"h-6 w-6 bg-red-600 rounded-full"};function r0(o,e,m,x,t,n){const l=h("Link"),w=h("DropdownLink"),b=h("Dropdown"),k=h("custom-map");return i(),d("div",E,[s("header",J,[s("div",q,[s("button",{onClick:e[0]||(e[0]=(...r)=>n.toggleMenu&&n.toggleMenu(...r)),class:"1/2 flex items-center gap-4"},[(i(),d("svg",G,e[6]||(e[6]=[s("path",{d:"M15.625 8.206c-.39 0-.762.073-1.11.2l-1.14-2.16v-.877h1.254c.181 0 .328.154.328.343a.335.335 0 01-.328.342.575.575 0 00-.563.587c0 .324.252.587.563.587.801 0 1.453-.68 1.453-1.516 0-.74-.51-1.355-1.183-1.488a.524.524 0 00-.165-.029h-1.921a.575.575 0 00-.563.587V5.81H8.072l-.274-.636h.89c.31 0 .562-.263.562-.587A.575.575 0 008.687 4H5.172a.575.575 0 00-.563.587c0 .324.252.587.563.587h1.393l.316.734a.57.57 0 00-.186.205l-1.21 2.293c-.348-.127-.72-.2-1.11-.2C2.514 8.206 1 9.786 1 11.728c0 1.942 1.514 3.522 3.375 3.522 1.669 0 3.055-1.272 3.324-2.935H10c.024 0 .05-.004.073-.007.014-.002.028-.002.041-.005.007-.002.013-.005.02-.006l.033-.011c.019-.006.039-.012.058-.02l.005-.002c.012-.006.021-.013.032-.02.01-.005.021-.01.032-.017l.027-.018c.015-.01.029-.024.043-.037.011-.01.024-.019.035-.03l.005-.007c.014-.014.024-.03.036-.045.01-.015.022-.028.031-.043l.015-.027.007-.009 2.32-4.397.716 1.359a3.57 3.57 0 00-1.28 2.755c0 1.942 1.515 3.522 3.376 3.522S19 13.67 19 11.728c0-1.942-1.514-3.522-3.375-3.522zm-3.764-1.223l-1.81 3.43-1.474-3.43h3.284zm-4.438.184l1.708 3.974H7.7a3.55 3.55 0 00-1.23-2.169l.952-1.805zm-.872 3.974H5.327l.59-1.119c.303.3.526.685.634 1.119zm-2.176 2.934c-1.24 0-2.25-1.052-2.25-2.347s1.01-2.348 2.25-2.348c.192 0 .378.028.557.076l-1.05 1.988-.01.027a.48.48 0 00-.04.112.55.55 0 00-.016.117c0 .01-.003.019-.003.028l.002.025a.9.9 0 00.016.116.59.59 0 00.036.107.585.585 0 00.026.05.44.44 0 00.064.091.611.611 0 00.127.111l.02.014c.008.005.017.007.025.012a.494.494 0 00.108.041.466.466 0 00.114.018l.024.002h2.176c-.251 1.01-1.13 1.76-2.176 1.76zm11.25 0c-1.24 0-2.25-1.052-2.25-2.347 0-.672.273-1.278.708-1.706l1.05 1.989a.558.558 0 00.493.303.538.538 0 00.27-.072.6.6 0 00.222-.798l-1.05-1.989a2.19 2.19 0 01.558-.075c1.24 0 2.25 1.053 2.25 2.347 0 1.296-1.01 2.348-2.25 2.348z",fill:"currentColor"},null,-1)]))),s("span",P,v(t.isTypeDelivery),1),e[7]||(e[7]=s("svg",{class:"w-4 h-4 mt-1",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m19.5 8.25-7.5 7.5-7.5-7.5"})],-1))]),o.$page.props.auth.user?(i(),d("div",K,[a(b,{align:"right",width:"48"},{trigger:p(()=>[s("span",Q,[s("button",R,[u(v(o.$page.props.auth.user.name)+" ",1),e[11]||(e[11]=s("svg",{class:"ms-2 -me-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[s("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1))])])]),content:p(()=>[a(w,{href:o.route("home")},{default:p(()=>e[12]||(e[12]=[u(" Главная ")])),_:1},8,["href"]),a(w,{href:o.route("profile.edit")},{default:p(()=>e[13]||(e[13]=[u(" Профиль ")])),_:1},8,["href"]),a(w,{href:o.route("orders.index")},{default:p(()=>e[14]||(e[14]=[u(" Заказы ")])),_:1},8,["href"]),a(w,{href:o.route("logout"),method:"post",as:"button"},{default:p(()=>e[15]||(e[15]=[u(" Выйти ")])),_:1},8,["href"])]),_:1})])):(i(),d("div",W,[a(l,{href:o.route("login")},{default:p(()=>e[8]||(e[8]=[u("Войти")])),_:1},8,["href"]),e[10]||(e[10]=s("span",null,"/",-1)),a(l,{href:o.route("register")},{default:p(()=>e[9]||(e[9]=[u("Регистрация")])),_:1},8,["href"])]))]),t.isTypeDelivery==="Доставка"?(i(),d("div",X,[s("button",{onClick:e[1]||(e[1]=(...r)=>n.toggleMap&&n.toggleMap(...r)),type:"button",class:"flex bg-white w-3/4 justify-center rounded py-1 gap-x-3"},[u(v(this.address??"Выбрать адрес доставки")+" ",1),e[16]||(e[16]=s("svg",{class:"w-4 h-4 mt-1",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m19.5 8.25-7.5 7.5-7.5-7.5"})],-1))])])):g("",!0),a(k,{isOpenMap:t.isOpenMap,isCloseMap:n.isCloseMap},null,8,["isOpenMap","isCloseMap"])]),s("main",Y,[j(o.$slots,"default")]),s("footer",null,[t.isMenuOpen?(i(),d("div",$,[s("div",{class:"fixed inset-0 bg-black opacity-50",onClick:e[2]||(e[2]=(...r)=>n.closeMenu&&n.closeMenu(...r))}),s("div",{class:y(["flex flex-col px-3 py-3 rounded relative w-full bg-white shadow-lg transform transition-transform duration-300",{"translate-y-0":t.isMenuOpen,"translate-y-full":!t.isMenuOpen}])},[s("div",e0,[e[18]||(e[18]=s("div",{class:"text-2xl font-bold"},"Выберите тип доставки",-1)),s("button",{class:"",onClick:e[3]||(e[3]=(...r)=>n.closeMenu&&n.closeMenu(...r))},e[17]||(e[17]=[s("svg",{class:"w-6 h-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18 18 6M6 6l12 12"})],-1)]))]),s("div",s0,[s("div",t0,[s("button",{onClick:e[4]||(e[4]=r=>n.selectOption("Доставка")),class:"delivery flex items-center gap-x-5"},e[19]||(e[19]=[s("svg",{class:"w-10 h-10 text-black",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M15.625 8.206c-.39 0-.762.073-1.11.2l-1.14-2.16v-.877h1.254c.181 0 .328.154.328.343a.335.335 0 01-.328.342.575.575 0 00-.563.587c0 .324.252.587.563.587.801 0 1.453-.68 1.453-1.516 0-.74-.51-1.355-1.183-1.488a.524.524 0 00-.165-.029h-1.921a.575.575 0 00-.563.587V5.81H8.072l-.274-.636h.89c.31 0 .562-.263.562-.587A.575.575 0 008.687 4H5.172a.575.575 0 00-.563.587c0 .324.252.587.563.587h1.393l.316.734a.57.57 0 00-.186.205l-1.21 2.293c-.348-.127-.72-.2-1.11-.2C2.514 8.206 1 9.786 1 11.728c0 1.942 1.514 3.522 3.375 3.522 1.669 0 3.055-1.272 3.324-2.935H10c.024 0 .05-.004.073-.007.014-.002.028-.002.041-.005.007-.002.013-.005.02-.006l.033-.011c.019-.006.039-.012.058-.02l.005-.002c.012-.006.021-.013.032-.02.01-.005.021-.01.032-.017l.027-.018c.015-.01.029-.024.043-.037.011-.01.024-.019.035-.03l.005-.007c.014-.014.024-.03.036-.045.01-.015.022-.028.031-.043l.015-.027.007-.009 2.32-4.397.716 1.359a3.57 3.57 0 00-1.28 2.755c0 1.942 1.515 3.522 3.376 3.522S19 13.67 19 11.728c0-1.942-1.514-3.522-3.375-3.522zm-3.764-1.223l-1.81 3.43-1.474-3.43h3.284zm-4.438.184l1.708 3.974H7.7a3.55 3.55 0 00-1.23-2.169l.952-1.805zm-.872 3.974H5.327l.59-1.119c.303.3.526.685.634 1.119zm-2.176 2.934c-1.24 0-2.25-1.052-2.25-2.347s1.01-2.348 2.25-2.348c.192 0 .378.028.557.076l-1.05 1.988-.01.027a.48.48 0 00-.04.112.55.55 0 00-.016.117c0 .01-.003.019-.003.028l.002.025a.9.9 0 00.016.116.59.59 0 00.036.107.585.585 0 00.026.05.44.44 0 00.064.091.611.611 0 00.127.111l.02.014c.008.005.017.007.025.012a.494.494 0 00.108.041.466.466 0 00.114.018l.024.002h2.176c-.251 1.01-1.13 1.76-2.176 1.76zm11.25 0c-1.24 0-2.25-1.052-2.25-2.347 0-.672.273-1.278.708-1.706l1.05 1.989a.558.558 0 00.493.303.538.538 0 00.27-.072.6.6 0 00.222-.798l-1.05-1.989a2.19 2.19 0 01.558-.075c1.24 0 2.25 1.053 2.25 2.347 0 1.296-1.01 2.348-2.25 2.348z",fill:"currentColor"})],-1),s("span",{class:"text-2xl font-bold"},"Доставка",-1)])),t.isTypeDelivery==="Доставка"?(i(),d("svg",o0,e[20]||(e[20]=[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m4.5 12.75 6 6 9-13.5"},null,-1)]))):g("",!0)]),s("div",l0,[s("button",{onClick:e[5]||(e[5]=r=>n.selectOption("Забрать")),class:"pickup flex items-center gap-x-5"},e[21]||(e[21]=[s("svg",{class:"w-10 h-10 text-black",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"})],-1),s("span",{class:"text-2xl font-bold"},"Забрать",-1)])),t.isTypeDelivery==="Забрать"?(i(),d("svg",n0,e[22]||(e[22]=[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m4.5 12.75 6 6 9-13.5"},null,-1)]))):g("",!0)])])],2)])):g("",!0)])])}const p0=M(U,[["render",r0]]);export{Z as C,p0 as M};