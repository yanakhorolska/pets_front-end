(self.webpackChunkpets_front_end=self.webpackChunkpets_front_end||[]).push([[489],{1704:function(n,e,t){"use strict";t.d(e,{Z:function(){return a}});var r=t(8789),i=t(407),a=r.ZP.div(i.$_,i.Oq,i.Dh,i.Cg,i.cp,i.bK,i.GQ,i.eC,i.AF,i.FK)},6580:function(n,e,t){"use strict";t.d(e,{r:function(){return M}});var r,i,a,o,u,s,l,c,d,h,m,p=t(5861),x=t(9439),f=t(4687),g=t.n(f),b=t(5705),v=t(2791),j=t(6727),y=t(168),Z=t(8789),k=Z.ZP.form(r||(r=(0,y.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 20px 20px 40px 20px;\n  background-color: ",";\n  border-radius: ",";\n  width: ",";\n  position: ",";\n  top: ",";\n  left: ",";\n  transform: ",";\n  transition: ",";\n  height: ",";\n  @media "," {\n    width: ",";\n    padding: 40px 80px;\n  }\n  @media "," {\n    width: ",";\n    padding: 40px 80px;\n  }\n  *:focus {\n    outline: none;\n  }\n"])),(function(n){return n.theme.color.white}),(function(n){return n.theme.radii.borderRadius.inputModal}),(function(n){return n.theme.sizes.width.modalS}),(function(n){return n.theme.position.a}),(function(n){return n.theme.sizes.top.half}),(function(n){return n.theme.sizes.left.half}),(function(n){return n.theme.transform.modal}),(function(n){return n.theme.transition.modal}),(function(n){return n.theme.sizes.height.auto}),(function(n){return n.theme.media.tablet}),(function(n){return n.theme.sizes.width.modalM}),(function(n){return n.theme.media.desktop}),(function(n){return n.theme.sizes.width.modalM2})),w=Z.ZP.h3(i||(i=(0,y.Z)(["\n  margin: 0 auto;\n  font-size: ",";\n  font-weight: ",";\n"])),(function(n){return n.theme.fontSizes.xl}),(function(n){return n.theme.fontWeights.semiBold})),C=Z.ZP.div(a||(a=(0,y.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 40px;\n  margin-bottom: 40px;\n  gap: 20px;\n"]))),P=Z.ZP.label(o||(o=(0,y.Z)(["\n  display: flex;\n  flex-direction: column;\n  font-weight: ",";\n  font-size: ",";\n  line-height: 26px;\n  color: ",";\n"])),(function(n){return n.theme.fontWeights.default}),(function(n){return n.theme.fontSizes.l}),(function(n){return n.theme.color.black})),z=Z.ZP.input(u||(u=(0,y.Z)(["\n  padding: 10px 16px;\n  margin-top: 12px;\n  font-size: ",";\n  height: ",";\n  background: ",";\n  border: ",";\n  border-radius: ",";\n"])),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.fontSizes.xxl}),(function(n){return n.theme.color.background}),(function(n){return n.theme.borders.inputBorder}),(function(n){return n.theme.radii.borderRadius.btn})),B=Z.ZP.div(s||(s=(0,y.Z)(["\nposition: relative;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\nmargin: auto;\nwidth: 140px;\nheight: 140px;\nmargin-top: 12px;\nbackground: ",";\nborder-radius: 20px;\noverflow: hidden;\n& > img {\n  object-fit: contain;\n}\n"])),(function(n){return n.theme.color.background})),S=(0,Z.ZP)(P)(l||(l=(0,y.Z)(["\n  width: fit-content;\n"]))),q=Z.ZP.input(c||(c=(0,y.Z)(["\n  opacity: 0;\n  visibility: hidden;\n  position: absolute;\n"]))),R=(0,Z.ZP)(z)(d||(d=(0,y.Z)(["\n  height: 110px;\n  border-radius: 20px;\n  resize: none;\n"]))),V=Z.ZP.p(h||(h=(0,y.Z)(["\n  height: 20px;\n  font-size: 10px;\n  color: ",";\n  margin-left: 15px;\n"])),(function(n){return n.theme.color.accent})),T=Z.ZP.div(m||(m=(0,y.Z)(["\n  display: flex;\n  flex-direction: column-reverse;\n  gap: 20px;\n\n  @media "," {\n    margin: 0 auto;\n    flex-direction: row;\n    width: 380px;\n  }\n"])),(function(n){return n.theme.media.tabletDesktop})),F=t(9923),_=t(3035),I=t(8951),A=t(1704),D=t(184),L=[j.Ry().shape({nickname:j.Z_().min(2).max(16).required("Name pet is required"),breed:j.Z_().min(2).max(16).required("Breed is required"),birthday:j.hT()}),j.Ry().shape({avatar:j.nK().required("Image pet is required"),comment:j.Z_().min(8).max(120).required("Comments is required")})],M=function(n){var e=n.onClose,t=(0,Z.Fg)(),r=(0,v.useState)(0),i=(0,x.Z)(r,2),a=i[0],o=i[1],u=function(n){var e;null!==(e=n.target)&&void 0!==e&&e.files&&l.setFieldValue("avatar",n.target.files[0])},s=function(){var n=(0,p.Z)(g().mark((function n(e,t){return g().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:console.log(e);case 1:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),l=(0,b.TA)({initialValues:{nickname:"",birthday:Date,breed:"",avatar:"",comment:""},validationSchema:L[a],onSubmit:function(n,e){1===a?s(n,e):(o(1),e.setTouched({}),e.setSubmitting(!1))},onChangeAvatarImage:function(){var n=(0,p.Z)(g().mark((function n(e){return g().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:l.setFieldValue("avatar",e.files[0]);case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}),c=l.errors,d=c.nickname,h=c.birthday,m=c.breed,f=c.avatar,j=c.comment;return(0,D.jsxs)(k,{onSubmit:l.handleSubmit,children:[(0,D.jsx)(A.Z,{position:"absolute",top:"0",right:"0",display:"flex",alignItems:"center",justifyContent:"center",width:"40px",height:"40px",borderRadius:"50%",backgroundColor:t.color.background,children:(0,D.jsx)(I.Z.Close,{onClick:e})}),(0,D.jsx)(w,{children:"Add pet"}),function(){var n;switch(a){case 0:return(0,D.jsxs)(C,{children:[(0,D.jsxs)(P,{children:["Name pet",(0,D.jsx)(z,{type:"text",name:"nickname",placeholder:"Type name pet",value:l.values.nickname,onChange:l.handleChange,onBlur:l.handleBlur})]}),l.touched.nickname&&d?(0,D.jsxs)(V,{children:[d," "]}):null,(0,D.jsxs)(P,{children:["Date of birth",(0,D.jsx)(z,{type:"date",name:"birthday",placeholder:"Type date of birth",value:l.values.birthday,onChange:l.handleChange,onBlur:l.handleBlur})]}),l.touched.birthday&&h?(0,D.jsxs)(V,{children:[h," "]}):null,(0,D.jsxs)(P,{children:["Breed",(0,D.jsx)(z,{type:"text",name:"breed",placeholder:"Type breed",value:l.values.breed,onChange:l.handleChange,onBlur:l.handleBlur})]}),l.touched.breed&&m?(0,D.jsxs)(V,{children:[m," "]}):null,(0,D.jsxs)(T,{children:[(0,D.jsx)(F.mH,{type:"button",onClick:e,children:"Cancel"}),(0,D.jsx)(F.aW,{type:"submit",children:"Next"})]})]});case 1:return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)("span",{mx:"auto",children:"Add photo and some comments"}),(0,D.jsxs)(C,{children:[(0,D.jsx)(B,{sx:{margin:"auto"},children:(0,D.jsxs)(S,{children:[(0,D.jsx)(q,{type:"file",name:"avatar",accept:"image/*",onChange:u,onBlur:l.handleBlur}),null!==(n=l.values)&&void 0!==n&&n.avatar?(0,D.jsx)("img",{src:URL.createObjectURL(l.values.avatar),alt:"preview avatar"}):(0,D.jsx)(_.Z.Add,{})]})}),l.touched.avatar&&f?(0,D.jsxs)(V,{children:[f," "]}):null,(0,D.jsxs)(P,{children:["Comments:",(0,D.jsx)(R,{as:"textarea",type:"text",name:"comment",placeholder:"Type comment",value:l.values.comment,onChange:l.handleChange,onBlur:l.handleBlur}),l.touched.comment&&j?(0,D.jsxs)(V,{children:[j," "]}):null]}),(0,D.jsxs)(T,{children:[(0,D.jsx)(F.mH,{type:"button",onClick:function(){return o(0)},children:"Back"}),(0,D.jsx)(F.aW,{type:"submit",children:"Done"})]})]})]});default:return(0,D.jsx)(D.Fragment,{})}}()]})}},6414:function(){},2489:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return V}});var r,i,a,o=t(2791),u=t(5861),s=t(9439),l=t(4687),c=t.n(l),d=t(5048),h=t(6351),m=t(2805),p=t(9176),x=t(168),f=t(8789),g=(0,f.ZP)("input")(r||(r=(0,x.Z)(["\nopacity: 0;\n  visibility: hidden;\n  position: absolute;\n"]))),b=(0,f.ZP)("label")(i||(i=(0,x.Z)(["\ncolor: ",";\nfont-size: 12px;\n\n  align-items: center;\n  margin-top: 12px;\n  margin-bottom: 36px;\n  padding: 0;\n  cursor: pointer;\n \n"])),(function(n){return n.theme.color.navBarText})),v=(0,f.ZP)("img")(a||(a=(0,x.Z)(["\nborder-radius: 50%;\n"]))),j=t(8951),y=t(184),Z=function(){var n=(0,d.v9)(h.ov),e=(0,d.I0)(),t=(0,o.useState)(n),r=(0,s.Z)(t,2),i=r[0],a=r[1],l=(0,m.lq)(),x=(0,s.Z)(l,1)[0],f=function(){var n=(0,u.Z)(c().mark((function n(t){var r,i,o;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r=t.target.files[0],n.next=4,x(r).unwrap();case 4:i=n.sent,o=i.avatarURL,e((0,p.Zj)(o)),a(o),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}();return(0,y.jsxs)("div",{children:[(0,y.jsx)(v,{src:i,alt:"User"}),(0,y.jsxs)(b,{htmlFor:"avatar-upload",children:[(0,y.jsx)(j.Z.Camera,{})," Edit photo"]}),(0,y.jsx)(g,{name:"avatar",id:"avatar-upload",type:"file",accept:"image/*",onChange:function(n){return f(n)}})]})},k=t(5705),w=function(n){var e=n.initialValues,t=n.text,r=n.name,i=n.placeholder,a=(0,o.useState)(!0),l=(0,s.Z)(a,2),h=l[0],x=l[1],f=(0,d.I0)(),g=(0,m.kD)(),b=(0,s.Z)(g,1)[0],v=(0,o.useState)(""),j=(0,s.Z)(v,2),Z=j[0],w=j[1],C=function(){var n=(0,u.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(e),e[t]=Z,n.prev=2,n.next=6,b({values:e}).unwrap();case 6:r=n.sent,f((0,p.nx)(r)),w(""),x(!0),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(2),console.log(n.t0);case 15:case"end":return n.stop()}}),n,null,[[2,12]])})));return function(e){return n.apply(this,arguments)}}();return(0,y.jsx)(k.J9,{initialValues:e,onSubmit:C,children:(0,y.jsxs)(k.l0,{children:[(0,y.jsxs)("label",{children:[r,": "]}),(0,y.jsx)(k.gN,{type:"text",onChange:function(n){var e=n.currentTarget.value;w(e),console.log(e)},value:Z,name:r,placeholder:i,disabled:h}),(0,y.jsx)("button",{type:"button",onClick:function(){return x(!h)},children:"Edit"}),(0,y.jsx)("button",{type:"submit",disabled:h,children:"Submit"})]})})};var C=function(){var n=(0,d.v9)(h.LP),e=(0,m.$n)(n),t=(0,s.Z)(e,2),r=t[0],i=t[1].isLoading,a=(0,d.I0)();return(0,y.jsx)("button",{onClick:function(){r(n),a((0,p.Rf)())},disabled:i,children:"Logout"})},P=function(){var n=(0,d.v9)(h.PR);return(0,y.jsxs)("div",{children:[(0,y.jsx)("p",{children:"My Information"}),(0,y.jsx)(Z,{}),(0,y.jsx)(w,{initialValues:{name:n.name},name:"name",text:"name",placeholder:n.name}),(0,y.jsx)(w,{initialValues:{email:n.email},name:"email",text:"email",placeholder:n.email}),(0,y.jsx)(w,{initialValues:{birthday:n.birthday},name:"birthday",text:"birthday",placeholder:n.birthday}),(0,y.jsx)(w,{initialValues:{city:n.city},name:"city",text:"city",placeholder:n.city}),(0,y.jsx)(w,{initialValues:{phone:n.phone},name:"phone",text:"phone",placeholder:n.phone}),(0,y.jsx)(C,{})]})},z=t(6414),B=t.n(z),S=t(1338),q=t(6580),R=function(){return(0,y.jsxs)("div",{children:[(0,y.jsx)("p",{children:"My Pets"}),(0,y.jsx)(S.Z,{component:q.r}),(0,y.jsx)(B(),{})]})},V=function(){return(0,y.jsxs)("div",{children:[(0,y.jsx)(P,{}),(0,y.jsx)(R,{})]})}}}]);
//# sourceMappingURL=489.03e9143f.chunk.js.map