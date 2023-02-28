"use strict";(self.webpackChunkpets_front_end=self.webpackChunkpets_front_end||[]).push([[819],{9272:function(n,e,t){t.d(e,{R:function(){return d},eT:function(){return s},wb:function(){return c}});var i,r,o,a=t(168),l=t(8789),s=l.ZP.div(i||(i=(0,a.Z)(["\n  padding-bottom: 100px;\n  padding-top: 42px;\n  position: relative;\n  @media (min-width: 768px) {\n    padding-top: 88px;\n  }\n  @media (min-width: 1280px) {\n    flex-direction: row;\n    flex-wrap: wrap;\n    padding-top: 60px;\n  }\n"]))),d=l.ZP.div(r||(r=(0,a.Z)(["\n  display: flex;\n  justify-content: space-between;\n\n  align-items: flex-start;\n"]))),c=(0,l.ZP)("section")(o||(o=(0,a.Z)(["\n  display: flex;\n  align-items: stretch;\n  flex-direction: column;\n  width: 100%;\n  gap: 32px;\n  margin-top: 30px;\n  justify-content: center;\n  @media (min-width: 768px) {\n    flex-direction: row;\n    flex-wrap: wrap;\n    margin-top: 57px;\n  }\n  @media (min-width: 1280px) {\n    flex-direction: row;\n    flex-wrap: wrap;\n    margin-top: 60px;\n  }\n"])))},8819:function(n,e,t){t.r(e),t.d(e,{default:function(){return En}});var i,r,o,a,l,s,d,c,u,h,p,m,x,f,g,b,Z,j,y,v,w,k,P,z,C,B,D,S,T,O,q,A,R,U,F=t(2791),H=t(9439),_=t(1087),G=t(168),M=t(8789),W=M.ZP.button(i||(i=(0,G.Z)(["\n  border: none;\n  outline: none;\n  background-color: transparent;\n  cursor: pointer;\n"]))),$=M.ZP.input(r||(r=(0,G.Z)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-grow: 1;\n\n  padding: 9px 12px;\n  padding-right: 40px;\n  width: 280px;\n  height: 40px;\n  background: #ffffff;\n\n  font-family: 'Manrope';\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 1.37;\n  letter-spacing: 0.04em;\n\n  outline: none;\n  border: none;\n  color: #535353;\n\n  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);\n  border-radius: 20px;\n\n  cursor: pointer;\n\n  @media "," {\n    width: 550px;\n    height: 44px;\n    border-radius: 40px;\n    font-size: 20px;\n    line-height: 1.35;\n  }\n"])),(function(n){return n.theme.media.tabletDesktop})),N=M.ZP.div(o||(o=(0,G.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n  margin: 28px auto;\n  width: 280px;\n  @media "," {\n    margin: 40px auto;\n    width: 608px;\n  }\n"])),(function(n){return n.theme.media.tabletDesktop})),L=t(5264),E=t(1717),Y=t(9230),V=t(184),I=function(){var n=(0,Y.$G)().t,e=(0,F.useState)(!1),t=(0,H.Z)(e,2),i=t[0],r=t[1],o=(0,F.useState)(""),a=(0,H.Z)(o,2),l=a[0],s=a[1],d=(0,_.lr)(),c=(0,H.Z)(d,2)[1];(0,F.useEffect)((function(){if(""===l)return c({}),void r(!1);c({search:l})}),[l,c]);return(0,V.jsx)(V.Fragment,{children:(0,V.jsxs)(N,{children:[(0,V.jsx)($,{name:"findpet",type:"text",value:l,placeholder:n("search"),onChange:function(n){r(!0);var e=n.target.value.toLowerCase().trim();s(e),c({search:l})}}),i?(0,V.jsx)(W,{type:"submit",onClick:function(){r(!1),c({}),s("")},children:(0,V.jsx)(E.Z.ResetQuery,{style:{position:"absolute",top:5,right:18,borderRadius:"50%",height:"32px"}})}):(0,V.jsx)(W,{type:"submit",onClick:function(){""===l&&L.Notify.warning("Please start type search query")},children:(0,V.jsx)(E.Z.Search,{style:{position:"absolute",top:10,right:20}})})]})})},K=(0,M.ZP)(_.OL)(a||(a=(0,G.Z)(["\n  display: flex;\n  align-item: center;\n  padding: 8px 28px;\n  background-color: ",";\n  border-radius: ",";\n  border: ",";\n  &.active {\n    background-color: ",";\n    color: ",";\n  }\n  &:focus,\n  :hover {\n    background-color: ",";\n    color: ",";\n  }\n  @media "," {\n    padding: 10px 28px;\n  }\n"])),(function(n){return n.theme.color.background}),(function(n){return n.theme.radii.borderRadius.btn}),(function(n){return n.theme.borders.buttonWhite}),(function(n){return n.theme.color.accent}),(function(n){return n.theme.color.white}),(function(n){return n.theme.color.accent}),(function(n){return n.theme.color.white}),(function(n){return n.theme.media.tabletDesktop})),Q=(M.ZP.input(l||(l=(0,G.Z)(["\n display: none;\n  }\n"]))),M.ZP.label(s||(s=(0,G.Z)(["\n  padding: 8px 28px;\n  background-color: ",";\n  border-radius: ",";\n  border: ",";\n  &:focus,\n  :hover {\n    background-color: ",";\n    color: ",";\n  }\n  @media "," {\n    padding: 10px 28px;\n  }\n"])),(function(n){return n.theme.color.white}),(function(n){return n.theme.radii.borderRadius.btn}),(function(n){return n.theme.borders.buttonWhite}),(function(n){return n.theme.color.accent}),(function(n){return n.theme.color.white}),(function(n){return n.theme.media.tabletDesktop})),function(n){var e=n.el;return(0,V.jsx)(K,{to:e.to,children:e.text})}),J=M.ZP.ul(d||(d=(0,G.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  @media screen and (min-width: 768px) {\n    width: 420px;\n  }\n  @media screen and (min-width: 1280px) {\n    width: 780px;\n  }\n"]))),X=M.ZP.li(c||(c=(0,G.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  @media screen and (min-width: 768px) {\n    gap: 12px;\n  }\n"]))),nn=t(5048),en=t(6351),tn=function(){var n=(0,Y.$G)().t,e=[{to:"/notices/lost-found",text:n("lostFoundUp")},{to:"/notices/for-free",text:n("inGoodHandsUp")},{to:"/notices/sell",text:n("sellUp")}],t=[{to:"/notices/favorite",text:n("myFavAds")},{to:"/notices/myNotices",text:n("myAds")}],i=(0,nn.v9)(en.ru);return(0,V.jsxs)(J,{children:[Array.isArray(e)?e.map((function(n){return(0,V.jsx)(X,{style:{display:"inline-block"},children:(0,V.jsx)(Q,{el:n})},n.to)})):null,i&&Array.isArray(t)?t.map((function(n){return(0,V.jsx)(X,{style:{display:"inline-block"},children:(0,V.jsx)(Q,{el:n})},n.to)})):null]})},rn=t(3811),on=M.ZP.button(u||(u=(0,G.Z)(["\n  z-index:3;\n\n  position: fixed;\n \n  font-size: 12px;\n  line-height:1.33;\n\n  right: 10px;\n  top: 400px;\n\n  width: 80px;\n  height: 80px;\n  background-color: ",";\n  border: 0;\n  border-radius: ",";\n  cursor: pointer;\n\n  @media "," {\n    position: static;\n    display: flex;\n    gap: 12px;\n    align-items: center;\n    justify-content: center;\n    top: auto;\n    right: auto;\n\n    width: 44px;\n    height: 44px;\n\n    &:hover,\n    &:focus {\n      transform: scale(1.05);\n    }\n    transition: transform 250ms ease-out;\n  }\n"])),(function(n){return n.theme.color.accent}),(function(n){return n.theme.radii.borderRadius.round}),(function(n){return n.theme.media.tabletDesktop})),an=M.ZP.span(h||(h=(0,G.Z)(["\n  display:none;\n  @media "," {\n   display:block;\n   margin-right: 12px;\n\n   font-size: 20px;\n    line-height: 1.35;\n  }\n"])),(function(n){return n.theme.media.tabletDesktop})),ln=M.ZP.p(p||(p=(0,G.Z)(["\n  font-size: 12px;\n  line-height: 1.33;\n  font-weight: 500;\n  font-family: 'Manrope';\n  color:",";\n  @media "," {\n    display:none;\n   }\n\n"])),(function(n){return n.theme.color.white}),(function(n){return n.theme.media.tabletDesktop})),sn=M.ZP.div(m||(m=(0,G.Z)(["\n   \n\n  @media "," {\n   display:inline-flex;\n   align-items: center;\n  }\n"])),(function(n){return n.theme.media.tabletDesktop})),dn=(0,M.ZP)(E.Z.Add)(x||(x=(0,G.Z)(["\n  width: 22px;\n  height: 22px;\n // position: absolute;\n  top: 10px;\n  left: 30px;\n\n  @media "," {\n    //position: relative;\n    width: 16px;\n    height: 16px;\n    top: auto;\n    left: auto;\n  }\n"])),(function(n){return n.theme.media.tabletDesktop})),cn=t(7834),un=function(n){var e=n.component,t=(0,cn.a)(),i=(0,F.useState)(!1),r=(0,H.Z)(i,2),o=r[0],a=r[1],l=(0,Y.$G)().t;(0,F.useEffect)((function(){var n=document.querySelector("body");o?n.classList.add("is-hidden"):n.classList.remove("is-hidden")}),[o]);var s=(0,F.useCallback)((function(){a((function(n){a(!n)}))}),[]);return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(sn,{children:[(0,V.jsx)(an,{children:l("addPet")}),(0,V.jsxs)(on,{type:"button",onClick:function(){t?a(!0):L.Notify.warning("To add an ad, please login or register.")},children:[(0,V.jsx)(dn,{}),(0,V.jsx)(ln,{children:l("addPet")})]})]}),o&&(0,V.jsx)(rn.Z,{onClose:s,children:(0,V.jsx)(e,{onClose:s})})]})},hn=t(5861),pn=t(4687),mn=t.n(pn),xn=t(3783),fn=t(3035),gn=M.ZP.form(f||(f=(0,G.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 20px 18px 40px 18px;\n  background-color: ",";\n  border-radius: ",";\n  width: ",";\n  position: ",";\n  top: ",";\n  left: ",";\n  transform: ",";\n  transition: ",";\n  max-height: ",";\n\n  overflow-y: scroll;\n\n  @media "," {\n    width: ",";\n    padding: 40px 80px;\n  }\n  @media "," {\n    width: ",";\n    padding: 40px 80px;\n  }\n  *:focus {\n    outline: none;\n  }\n"])),(function(n){return n.theme.color.white}),(function(n){return n.theme.radii.borderRadius.inputModal}),(function(n){return n.theme.sizes.width.modalS}),(function(n){return n.theme.position.a}),(function(n){return n.theme.sizes.top.half}),(function(n){return n.theme.sizes.left.half}),(function(n){return n.theme.transform.modal}),(function(n){return n.theme.transition.modal}),(function(n){return n.theme.sizes.height.max}),(function(n){return n.theme.media.tablet}),(function(n){return n.theme.sizes.width.modalM}),(function(n){return n.theme.media.desktop}),(function(n){return n.theme.sizes.width.modalM})),bn=M.ZP.h3(g||(g=(0,G.Z)(["\n  margin: 0 auto;\n  font-size: ",";\n  font-weight: ",";\n  margin-bottom: 20px;\n\n  @media "," {\n    font-weight: ",";\n    font-size: 36px;\n  }\n"])),(function(n){return n.theme.fontSizes.l}),(function(n){return n.theme.fontWeights.default}),(function(n){return n.theme.media.tabletDesktop}),(function(n){return n.theme.fontWeights.semiBold})),Zn=M.ZP.h2(b||(b=(0,G.Z)(["\n  font-weight: ",";\n  font-size: ",";\n  line-height: 1.35;\n\n  @media "," {\n    font-size: 20px;\n  }\n"])),(function(n){return n.theme.fontWeights.default}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.media.tabletDesktop})),jn=M.ZP.div(Z||(Z=(0,G.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n  /* gap: 3px; */\n\n  @media "," {\n    /* gap: 5px; */\n  }\n"])),(function(n){return n.theme.media.tabletDesktop})),yn=M.ZP.label(j||(j=(0,G.Z)(["\n  display: flex;\n  flex-direction: column;\n  font-weight: ",";\n  font-size: 18px;\n  line-height: 26px;\n  color: ",";\n\n  @media "," {\n    font-size: 24px;\n  }\n"])),(function(n){return n.theme.fontWeights.default}),(function(n){return n.theme.color.black}),(function(n){return n.theme.media.tabletDesktop})),vn=M.ZP.input(y||(y=(0,G.Z)(["\n  padding: 10px 16px;\n  margin-top: 8px;\n  font-size: 14px;\n  height: 40px;\n  background: ",";\n  border: ",";\n  border-radius: ",";\n\n  @media "," {\n    font-size: 16px;\n    margin-top: 12px;\n    height: 48px;\n  }\n\n  @media "," {\n    font-size: ",";\n    margin-top: 12px;\n    height: 48px;\n  }\n"])),(function(n){return n.theme.color.inputModal}),(function(n){return n.theme.borders.inputBorder}),(function(n){return n.theme.radii.borderRadius.btn}),(function(n){return n.theme.media.tablet}),(function(n){return n.theme.media.desktop}),(function(n){return n.theme.fontSizes.m})),wn=(0,M.ZP)(vn)(v||(v=(0,G.Z)(["\n  height: 40px;\n  border-radius: 20px;\n  resize: none;\n\n  @media "," {\n    height: 110px;\n  }\n"])),(function(n){return n.theme.media.tabletDesktop})),kn=(M.ZP.span(w||(w=(0,G.Z)(["\n  color: ",";\n  font-size: ",";\n"])),(function(n){return n.theme.color.accent}),(function(n){return n.theme.fontSizes.l})),M.ZP.div(k||(k=(0,G.Z)(["\n  display: flex;\n  gap: 40px;\n  margin-bottom: 12px;\n\n  @media "," {\n    gap: 80px;\n  }\n"])),(function(n){return n.theme.media.tabletDesktop}))),Pn=M.ZP.input(P||(P=(0,G.Z)(["\n  display: none;\n"]))),zn=M.ZP.label(z||(z=(0,G.Z)(["\n  display: flex;\n  flex-direction: column;\n  color: ",";\n\n  @media "," {\n    margin-top: 20px;\n  }\n"])),(function(n){return n.children[1].props.checked?n.theme.color.accent:n.theme.color.black}),(function(n){return n.theme.media.tabletDesktop})),Cn=M.ZP.div(C||(C=(0,G.Z)(["\n  display: flex;\n  flex-direction: column-reverse;\n  gap: 20px;\n\n  @media "," {\n    margin: 0 auto;\n    flex-direction: row;\n    width: 380px;\n  }\n"])),(function(n){return n.theme.media.tabletDesktop})),Bn=(0,M.ZP)(yn)(B||(B=(0,G.Z)(["\n  width: fit-content;\n"]))),Dn=M.ZP.input(D||(D=(0,G.Z)(["\n  opacity: 0;\n  visibility: hidden;\n  position: absolute;\n"]))),Sn=M.ZP.div(S||(S=(0,G.Z)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 116px;\n  height: 116px;\n  margin-top: 12px;\n  border: ",";\n  background: ",";\n  border-radius: 20px;\n  overflow: hidden;\n  & > img {\n    object-fit: contain;\n  }\n\n  @media "," {\n    width: 140px;\n    height: 140px;\n  }\n"])),(function(n){return n.theme.borders.inputBorder}),(function(n){return n.theme.color.inputModal}),(function(n){return n.theme.media.tabletDesktop})),Tn=(0,M.ZP)(fn.Z.Add)(T||(T=(0,G.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"]))),On=M.ZP.p(O||(O=(0,G.Z)(["\n  height: 18px;\n  font-size: 14px;\n  color: ",";\n  margin-left: 15px;\n  line-height: 18px;\n\n  @media "," {\n    height: 20px;\n    font-size: 16px;\n  }\n"])),(function(n){return n.theme.color.accent}),(function(n){return n.theme.media.tabletDesktop})),qn=M.ZP.div(q||(q=(0,G.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-top: 15px;\n  margin-bottom: 15px;\n\n  @media "," {\n    gap: 20px;\n  }\n"])),(function(n){return n.theme.media.tabletDesktop})),An=M.ZP.input(A||(A=(0,G.Z)(["\n  display: none;\n"]))),Rn=M.ZP.label(R||(R=(0,G.Z)(["\n  font-weight: ",";\n  padding: 8px 28px;\n  font-size: 14px;\n  color: ",";\n  background-color: ",";\n  border: ",";\n  border-radius: ",";\n\n  @media "," {\n    font-size: 20px;\n    padding: 10px 28px;\n  }\n"])),(function(n){return n.theme.fontWeights.default}),(function(n){return n.children[0].props.checked?n.theme.color.white:n.theme.color.black}),(function(n){return n.children[0].props.checked?n.theme.color.accent:n.theme.color.white}),(function(n){return n.theme.borders.buttonWhite}),(function(n){return n.theme.radii.borderRadius.half}),(function(n){return n.theme.media.tabletDesktop})),Un=(0,M.ZP)(xn.PZ)(U||(U=(0,G.Z)(["\n  position: absolute;\n  top: 5px;\n  right: 10px;\n  width: 34px;\n  height: 34px;\n\n  @media "," {\n    width: 44px;\n    height: 44px;\n    top: 15px;\n    right: 20px;\n  }\n\n  @media "," {\n    top: 25px;\n    right: 40px;\n  }\n"])),(function(n){return n.theme.media.tablet}),(function(n){return n.theme.media.desktop})),Fn=t(6727),Hn=t(5705),_n=t(7689),Gn=t(3583),Mn=[Fn.Ry().shape({category:Fn.Z_().oneOf(["lostFound","inGoodHands","sell"]).required(),title:Fn.Z_().min(2,"Too Short!").max(48,"Too long!").matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f\s]+$/,"Only letters!").required("Title is required field"),petName:Fn.Z_().min(2,"Too Short!").max(16,"Too long!").matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f\s]+$/,"Only letters!").required(),dateOfBirth:Fn.Z_().matches(/^\d{2}([./-])\d{2}\1\d{4}$/,"must have DD.MM.YYYY format").required().test("","",(function(n,e){if(!n)return!0;var t=new Date,i=n.split(".");return!(t<new Date("".concat(i[2],"-").concat(i[1],"-").concat(i[0])))||e.createError({message:"Pet can't be born in the future!"})})),breed:Fn.Z_().min(2,"Too Short!").max(24,"Too long!").matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f\s]+$/,"Only letters!").required()}),Fn.Ry().shape({sex:Fn.Z_().oneOf(["male","female"]).required("sex of pet is required"),location:Fn.Z_().matches(/[a-zA-Z\u0430-\u044f\u0410-\u042f]+, [a-zA-Z\u0430-\u044f\u0410-\u042f]+/,'Format is "region, city"').required("This is a required field"),price:Fn.Rx().min(0).max(1e5).test("","",(function(n,e){return!("sell"===e.parent.category&0===n)||e.createError({message:"price must be greater than 0"})})).required(),imageUrl:Fn.nK().required("Photo is required"),comment:Fn.Z_().min(8,"Too Short!").max(120,"Too long!").required()})],Wn=function(n){var e=n.onClose,t=(0,Y.$G)().t,i=(0,_n.TH)().pathname,r=(0,F.useState)(1),o=(0,H.Z)(r,2),a=o[0],l=o[1],s=(0,Gn.m$)(),d=(0,H.Z)(s,1)[0],c=(0,F.useMemo)((function(){return i.includes("lost-found")?"lostFound":i.includes("for-free")?"inGoodHands":(i.includes("sell"),"sell")}),[i]),u=function(n){var e=n.split(".");return 3!==e.length?n:"".concat(e[2],"-").concat(e[1],"-").concat(e[0])},h=function(){var n=(0,hn.Z)(mn().mark((function n(t,i){var r,o,a,l,s;return mn().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=Object.assign({},t),console.log(r),r.dateOfBirth.length&&(r.dateOfBirth=u(r.dateOfBirth)),n.prev=3,n.next=6,d(r).unwrap();case 6:"success"===n.sent&&e(),n.next=14;break;case 10:n.prev=10,n.t0=n.catch(3),o=n.t0.status,a=void 0===o?"":o,l=n.t0.data,s=void 0===l?"":l,alert("Status: ".concat(a,", error: ").concat(null===s||void 0===s?void 0:s.message));case 14:i.setSubmitting(!1);case 15:case"end":return n.stop()}}),n,null,[[3,10]])})));return function(e,t){return n.apply(this,arguments)}}(),p=(0,Hn.TA)({initialValues:{category:c,title:"",petName:"",dateOfBirth:"",breed:"",sex:"male",location:"",price:0,imageUrl:"",comment:""},validationSchema:Mn[a-1],onSubmit:function(n,e){2===a?h(n,e):(l(2),e.setTouched({}),e.setSubmitting(!1))}}),m=p.errors,x=m.title,f=m.petName,g=m.dateOfBirth,b=m.breed,Z=m.location,j=m.price,y=m.comment,v=m.imageUrl;return(0,V.jsxs)(gn,{onSubmit:p.handleSubmit,children:[(0,V.jsx)(Un,{onClick:e}),(0,V.jsx)(bn,{children:t("addPet")}),1===a?(0,V.jsxs)(jn,{children:[(0,V.jsx)(Zn,{children:t("addTextCard")}),(0,V.jsxs)(qn,{role:"group","aria-labelledby":"radio-categories-group",children:[(0,V.jsxs)(Rn,{children:[(0,V.jsx)(An,{type:"radio",name:"category",value:"lostFound",checked:"lostFound"===p.values.category,onChange:p.handleChange}),t("lostFound")]}),(0,V.jsxs)(Rn,{children:[(0,V.jsx)(An,{type:"radio",name:"category",value:"inGoodHands",checked:"inGoodHands"===p.values.category,onChange:p.handleChange}),t("inGoodHands")]}),(0,V.jsxs)(Rn,{children:[(0,V.jsx)(An,{type:"radio",name:"category",value:"sell",checked:"sell"===p.values.category,onChange:p.handleChange}),t("sell")]})]}),(0,V.jsxs)(yn,{children:[(0,V.jsxs)("span",{children:[t("addTitle"),":"]}),(0,V.jsx)(vn,{type:"text",name:"title",placeholder:t("titleAddPlaceholder"),onChange:p.handleChange,onBlur:p.handleBlur,value:p.values.title}),(0,V.jsxs)(On,{children:[p.touched.title&&x," "]})]}),(0,V.jsxs)(yn,{children:[(0,V.jsxs)("span",{children:[t("namePet"),":"]}),(0,V.jsx)(vn,{type:"text",name:"petName",placeholder:t("namePetPlaceholder"),onChange:p.handleChange,onBlur:p.handleBlur,value:p.values.petName}),(0,V.jsxs)(On,{children:[p.touched.petName&&f," "]})]}),(0,V.jsxs)(yn,{children:[(0,V.jsxs)("span",{children:[t("datePet"),":"]}),(0,V.jsx)(vn,{type:"text",name:"dateOfBirth",placeholder:t("ddmmyy"),onChange:p.handleChange,onBlur:p.handleBlur,value:p.values.dateOfBirth}),(0,V.jsx)(On,{children:p.touched.dateOfBirth&&g})]}),(0,V.jsxs)(yn,{children:[(0,V.jsxs)("span",{children:[t("breed"),":"]}),(0,V.jsx)(vn,{type:"text",name:"breed",placeholder:t("typeBreed"),onChange:p.handleChange,onBlur:p.handleBlur,value:p.values.breed}),(0,V.jsx)(On,{children:p.touched.breed&&b})]})]}):(0,V.jsxs)(jn,{children:[(0,V.jsx)(yn,{children:(0,V.jsxs)("span",{children:[t("sex"),":"]})}),(0,V.jsxs)(kn,{role:"group","aria-labelledby":"radio-sex-group",children:[(0,V.jsxs)(zn,{children:[(0,V.jsx)(fn.Z.Male,{}),(0,V.jsx)(Pn,{type:"radio",name:"sex",value:"male",checked:"male"===p.values.sex,onChange:p.handleChange}),t("male")]}),(0,V.jsxs)(zn,{children:[(0,V.jsx)(fn.Z.Female,{}),(0,V.jsx)(Pn,{type:"radio",name:"sex",value:"female",checked:"female"===p.values.sex,onChange:p.handleChange}),t("female")]})]}),(0,V.jsxs)(yn,{children:[(0,V.jsxs)("span",{children:[t("location"),":"]}),(0,V.jsx)(vn,{type:"text",name:"location",placeholder:t("typeLocation"),onChange:p.handleChange,onBlur:p.handleBlur,value:p.values.location}),(0,V.jsxs)(On,{children:[p.touched.location&&Z," "]})]}),"sell"===p.values.category&&(0,V.jsxs)(yn,{children:[(0,V.jsxs)("span",{children:[t("price"),":"]}),(0,V.jsx)(vn,{type:"number",name:"price",placeholder:t("typePrice"),onChange:p.handleChange,onBlur:p.handleBlur,value:p.values.price}),(0,V.jsx)(On,{children:p.touched.price&&j})]}),(0,V.jsxs)(Bn,{children:[(0,V.jsx)("span",{children:t("loadImage")}),(0,V.jsxs)(Sn,{children:[(0,V.jsx)(Dn,{id:"imageUrl",type:"file",name:"imageUrl",accept:"image/*",onBlur:p.handleBlur,onChange:function(n){return p.setFieldValue("imageUrl",n.currentTarget.files[0])}}),p.values.imageUrl?(0,V.jsx)("img",{id:"preview",src:URL.createObjectURL(p.values.imageUrl),alt:"preview"}):(0,V.jsx)(Tn,{})]}),(0,V.jsx)(On,{children:!p.values.imageUrl&&v})]}),(0,V.jsxs)(yn,{children:[(0,V.jsxs)("span",{children:[t("comments"),":"]}),(0,V.jsx)(wn,{as:"textarea",type:"text",name:"comment",placeholder:t("typeComments"),onChange:p.handleChange,onBlur:p.handleBlur,value:p.values.comment}),(0,V.jsxs)(On,{children:[p.touched.comment&&y," "]})]})]}),1===a&&(0,V.jsxs)(Cn,{children:[(0,V.jsx)(xn.mH,{type:"button",onClick:e,children:t("cancel")}),(0,V.jsx)(xn.TZ,{type:"submit",children:t("next")})]}),2===a&&(0,V.jsxs)(Cn,{children:[(0,V.jsx)(xn.mH,{type:"button",onClick:function(){return l(1)},children:t("back")}),(0,V.jsx)(xn.TZ,{type:"submit",children:t("done")})]})]})},$n=t(3505),Nn=t(8481),Ln=t(9272),En=function(){var n=(0,Y.$G)().t;return(0,V.jsx)(Nn.W,{children:(0,V.jsxs)(Ln.eT,{children:[(0,V.jsx)($n.u,{children:n("noticesTitle")}),(0,V.jsx)(I,{}),(0,V.jsxs)(Ln.R,{children:[(0,V.jsx)(tn,{}),(0,V.jsx)(un,{component:Wn})]}),(0,V.jsx)(_n.j3,{})]})})}},3505:function(n,e,t){t.d(e,{u:function(){return l}});var i,r,o=t(168),a=t(8789),l=(0,a.ZP)("h1")(i||(i=(0,o.Z)(["\n  font-weight: ",";\n  text-align: ",";\n  margin-bottom: ",";\n  font-size: ",";\n  line-height: ",";\n  @media "," {\n    font-size: ",";\n    marginbottom: ",";\n  }\n"])),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.textAlign.center}),(function(n){return n.theme.space.m.s}),(function(n){return n.theme.fontSizes.l}),(function(n){return n.theme.lineHeights.s}),(function(n){return n.theme.media.tabletDesktop}),(function(n){return n.theme.fontSizes.xxl}),(function(n){return n.theme.space.m.l}));(0,a.ZP)("h1")(r||(r=(0,o.Z)(["\n  color: ",";\n  font-weight: ",";\n  font-size: ",";\n  line-height: ",";\n  @media "," {\n    font-size: ",";\n    line-height: ",";\n  }\n"])),(function(n){return n.theme.color.text}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.fontSizes.xl}),(function(n){return n.theme.lineHeights.s}),(function(n){return n.theme.media.tabletDesktop}),(function(n){return n.theme.fontSizes.xxxl}),(function(n){return n.theme.lineHeights.m}))}}]);
//# sourceMappingURL=819.d9ab6a91.chunk.js.map