"use strict";(self.webpackChunkpets_front_end=self.webpackChunkpets_front_end||[]).push([[677],{1338:function(e,n,t){t.d(n,{Z:function(){return v}});var r,i,o,a,l=t(9439),c=t(2791),u=t(5215),f=t(168),d=t(8789),s=t(1717),p=d.ZP.button(r||(r=(0,f.Z)(["\n  width: 80px;\n  height: 80px;\n  background-color: ",";\n  border: 0;\n  border-radius: ",";\n  cursor: pointer;\n\n  @media "," {\n    width: 44px;\n    height: 44px;\n\n    &:hover,\n    &:focus {\n      transform: scale(1.05);\n    }\n    transition: transform 250ms ease-out;\n  }\n"])),(function(e){return e.theme.color.accent}),(function(e){return e.theme.radii.borderRadius.round}),(function(e){return e.theme.media.tabletDesktop})),h=d.ZP.span(i||(i=(0,f.Z)(["\n  position: absolute;\n  left: 10px;\n  top: 40px;\n  color: ",";\n\n  pointer-events: none;\n\n  &:hover,\n  &:focus {\n    z-index: 1;\n  }\n\n  @media "," {\n    position: static;\n    color: ",";\n  }\n"])),(function(e){return e.theme.color.white}),(function(e){return e.theme.media.tabletDesktop}),(function(e){return e.theme.color.text})),m=d.ZP.div(o||(o=(0,f.Z)(["\n  position: fixed;\n  right: 10px;\n  top: 400px;\n\n  @media "," {\n    position: static;\n    display: flex;\n    gap: 12px;\n    align-items: center;\n    top: auto;\n    right: auto;\n  }\n"])),(function(e){return e.theme.media.tabletDesktop})),x=(0,d.ZP)(s.Z.Add)(a||(a=(0,f.Z)(["\n  width: 22px;\n  height: 22px;\n  position: absolute;\n  top: 10px;\n  left: 30px;\n\n  @media "," {\n    position: relative;\n    width: 16px;\n    height: 16px;\n    top: auto;\n    left: auto;\n  }\n"])),(function(e){return e.theme.media.tabletDesktop})),b=t(7834),g=t(7689),w=t(184),v=function(e){var n=e.component,t=(0,b.a)().isLoggedIn,r=(0,g.s0)(),i=(0,c.useState)(!1),o=(0,l.Z)(i,2),a=o[0],f=o[1];(0,c.useEffect)((function(){var e=document.querySelector("body");a?e.classList.add("is-hidden"):e.classList.remove("is-hidden")}),[a]);var d=(0,c.useCallback)((function(){f((function(e){f(!e)}))}),[]);return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(m,{children:[(0,w.jsx)(h,{children:"Add pet"}),(0,w.jsx)(p,{type:"button",onClick:function(){t||r("/login"),f(!0)},children:(0,w.jsx)(x,{})})]}),a&&(0,w.jsx)(u.Z,{onClose:d,children:(0,w.jsx)(n,{onClose:d})})]})}},3035:function(e,n,t){t.d(n,{Z:function(){return S}});var r,i=t(2791),o=["title","titleId"];function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a.apply(this,arguments)}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function c(e,n){var t=e.title,c=e.titleId,u=l(e,o);return i.createElement("svg",a({width:71,height:71,viewBox:"0 0 71 71",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":c},u),t?i.createElement("title",{id:c},t):null,r||(r=i.createElement("path",{d:"M35.4997 59.1666V35.4999M35.4997 35.4999V11.8333M35.4997 35.4999H59.1663M35.4997 35.4999H11.833",stroke:"#111111",strokeOpacity:.6,strokeWidth:2,strokeLinecap:"round"})))}var u,f,d=i.forwardRef(c),s=(t.p,["title","titleId"]);function p(){return p=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},p.apply(this,arguments)}function h(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function m(e,n){var t=e.title,r=e.titleId,o=h(e,s);return i.createElement("svg",p({width:36,height:36,viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":r},o),t?i.createElement("title",{id:r},t):null,u||(u=i.createElement("g",{clipPath:"url(#clip0_193_596)"},i.createElement("path",{d:"M19.41 17.9999L27.7 9.70994C27.8638 9.51864 27.9494 9.27256 27.9397 9.02089C27.93 8.76921 27.8256 8.53047 27.6475 8.35238C27.4694 8.17428 27.2307 8.06995 26.979 8.06023C26.7274 8.05051 26.4813 8.13612 26.29 8.29994L18 16.5899L9.70997 8.28994C9.52167 8.10164 9.26627 7.99585 8.99997 7.99585C8.73367 7.99585 8.47828 8.10164 8.28997 8.28994C8.10167 8.47825 7.99588 8.73364 7.99588 8.99994C7.99588 9.26624 8.10167 9.52164 8.28997 9.70994L16.59 17.9999L8.28997 26.2899C8.18529 26.3796 8.10027 26.4899 8.04025 26.614C7.98022 26.738 7.94649 26.8732 7.94117 27.0109C7.93586 27.1486 7.95906 27.2859 8.00934 27.4143C8.05961 27.5426 8.13587 27.6591 8.23332 27.7566C8.33078 27.854 8.44732 27.9303 8.57565 27.9806C8.70398 28.0309 8.84131 28.0541 8.97903 28.0487C9.11675 28.0434 9.25188 28.0097 9.37594 27.9497C9.50001 27.8896 9.61033 27.8046 9.69997 27.6999L18 19.4099L26.29 27.6999C26.4813 27.8638 26.7274 27.9494 26.979 27.9397C27.2307 27.9299 27.4694 27.8256 27.6475 27.6475C27.8256 27.4694 27.93 27.2307 27.9397 26.979C27.9494 26.7273 27.8638 26.4812 27.7 26.2899L19.41 17.9999Z",fill:"black"}))),f||(f=i.createElement("defs",null,i.createElement("clipPath",{id:"clip0_193_596"},i.createElement("rect",{width:36,height:36,fill:"white"})))))}var x,b,g=i.forwardRef(m),w=(t.p,["title","titleId"]);function v(){return v=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},v.apply(this,arguments)}function y(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function C(e,n){var t=e.title,r=e.titleId,o=y(e,w);return i.createElement("svg",v({width:60,height:60,viewBox:"0 0 60 60",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":r},o),t?i.createElement("title",{id:r},t):null,x||(x=i.createElement("g",{filter:"url(#filter0_ii_193_610)"},i.createElement("g",{filter:"url(#filter1_ii_193_610)"},i.createElement("path",{d:"M37.7735 3C36.6689 3 35.7735 3.89543 35.7735 5V8.51869C35.7735 9.62326 36.6689 10.5187 37.7735 10.5187H44.0308L33.1466 21.2628C30.0925 19.2988 26.4522 18.159 22.5435 18.159C11.7505 18.159 3 26.8531 3 37.5786C2.99995 48.3042 11.7505 57 22.5435 57C33.3365 57 42.0854 48.3042 42.0854 37.5786C42.0854 33.5018 40.8219 29.7185 38.6619 26.5946L49.3633 15.9601V22.0938C49.3633 23.1983 50.2587 24.0938 51.3633 24.0938H54.9293C56.0339 24.0938 56.9292 23.1988 56.9313 22.0942C56.9416 16.6212 56.9888 10.4615 56.9983 4.99917C57.0002 3.89475 56.1048 3 55.0003 3H37.7735ZM22.5435 25.9759C28.9924 25.9759 34.2193 31.1701 34.2193 37.5786C34.2193 43.9872 28.9924 49.1831 22.5435 49.1831C16.0947 49.1831 10.866 43.9872 10.866 37.5786C10.866 31.1701 16.0946 25.9759 22.5435 25.9759Z",fill:"#23C2EF"})))),b||(b=i.createElement("defs",null,i.createElement("filter",{id:"filter0_ii_193_610",x:-1,y:-3,width:61,height:65,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},i.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),i.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),i.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),i.createElement("feOffset",{dy:-3}),i.createElement("feGaussianBlur",{stdDeviation:2}),i.createElement("feComposite",{in2:"hardAlpha",operator:"arithmetic",k2:-1,k3:1}),i.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}),i.createElement("feBlend",{mode:"normal",in2:"shape",result:"effect1_innerShadow_193_610"}),i.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),i.createElement("feOffset",{dx:-1,dy:2}),i.createElement("feGaussianBlur",{stdDeviation:1.5}),i.createElement("feComposite",{in2:"hardAlpha",operator:"arithmetic",k2:-1,k3:1}),i.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.57 0"}),i.createElement("feBlend",{mode:"normal",in2:"effect1_innerShadow_193_610",result:"effect2_innerShadow_193_610"})),i.createElement("filter",{id:"filter1_ii_193_610",x:2,y:0,width:54.998,height:59,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},i.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),i.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),i.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),i.createElement("feOffset",{dy:-3}),i.createElement("feGaussianBlur",{stdDeviation:2}),i.createElement("feComposite",{in2:"hardAlpha",operator:"arithmetic",k2:-1,k3:1}),i.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}),i.createElement("feBlend",{mode:"normal",in2:"shape",result:"effect1_innerShadow_193_610"}),i.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),i.createElement("feOffset",{dx:-1,dy:2}),i.createElement("feGaussianBlur",{stdDeviation:1.5}),i.createElement("feComposite",{in2:"hardAlpha",operator:"arithmetic",k2:-1,k3:1}),i.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.57 0"}),i.createElement("feBlend",{mode:"normal",in2:"effect1_innerShadow_193_610",result:"effect2_innerShadow_193_610"})))))}var E,k,Z=i.forwardRef(C),O=(t.p,["title","titleId"]);function _(){return _=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},_.apply(this,arguments)}function j(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function z(e,n){var t=e.title,r=e.titleId,o=j(e,O);return i.createElement("svg",_({width:60,height:60,viewBox:"0 0 60 60",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":r},o),t?i.createElement("title",{id:r},t):null,E||(E=i.createElement("g",{filter:"url(#filter0_ii_193_608)"},i.createElement("path",{d:"M29.9997 0C19.3565 0 10.7266 8.6299 10.7266 19.2731C10.7266 28.0863 16.6455 35.5192 24.7235 37.8147C25.6455 38.0767 26.3293 38.8896 26.3293 39.848V42.401C26.3293 43.5056 25.4339 44.401 24.3293 44.401H20.0636C18.959 44.401 18.0636 45.2964 18.0636 46.401V49.738C18.0636 50.8426 18.959 51.738 20.0636 51.738H24.3293C25.4338 51.738 26.3293 52.6334 26.3293 53.738V58C26.3293 59.1046 27.2247 60 28.3293 60H31.6663C32.7708 60 33.6663 59.1046 33.6663 58V53.738C33.6663 52.6334 34.5617 51.738 35.6663 51.738H39.932C41.0365 51.738 41.932 50.8426 41.932 49.738V46.401C41.932 45.2964 41.0365 44.401 39.932 44.401H35.6663C34.5617 44.401 33.6663 43.5056 33.6663 42.401V38.197C42.5553 36.4836 49.2728 28.6619 49.2728 19.2731C49.2728 8.6299 40.6429 0 29.9997 0ZM29.9997 7.6639C36.4112 7.6639 41.6089 12.8615 41.6089 19.2731C41.6089 25.6847 36.4113 30.8823 29.9997 30.8823C23.5881 30.8823 18.3905 25.6847 18.3905 19.2731C18.3905 12.8615 23.5881 7.6639 29.9997 7.6639Z",fill:"#FF8787"}))),k||(k=i.createElement("defs",null,i.createElement("filter",{id:"filter0_ii_193_608",x:-1,y:-3,width:61,height:65,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},i.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),i.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),i.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),i.createElement("feOffset",{dy:-3}),i.createElement("feGaussianBlur",{stdDeviation:2}),i.createElement("feComposite",{in2:"hardAlpha",operator:"arithmetic",k2:-1,k3:1}),i.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}),i.createElement("feBlend",{mode:"normal",in2:"shape",result:"effect1_innerShadow_193_608"}),i.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),i.createElement("feOffset",{dx:-1,dy:2}),i.createElement("feGaussianBlur",{stdDeviation:1.5}),i.createElement("feComposite",{in2:"hardAlpha",operator:"arithmetic",k2:-1,k3:1}),i.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.57 0"}),i.createElement("feBlend",{mode:"normal",in2:"effect1_innerShadow_193_608",result:"effect2_innerShadow_193_608"})))))}var P=i.forwardRef(z),S=(t.p,{Add:d,Close:g,Male:Z,Female:P})},5215:function(e,n,t){t.d(n,{Z:function(){return p}});var r,i,o,a=t(2791),l=t(4164),c=t(168),u=t(8789),f=u.ZP.div(r||(r=(0,c.Z)(["\n  position: ",";\n  top: ",";\n  left: ",";\n  width: ",";\n  height: ",";\n  background: ",";\n  opacity: ",";\n  transition: ",";\n  backdrop-filter: ",";\n"])),(function(e){return e.theme.position.f}),(function(e){return e.theme.sizes.top.zero}),(function(e){return e.theme.sizes.left.zero}),(function(e){return e.theme.sizes.width.max}),(function(e){return e.theme.sizes.height.max}),(function(e){return e.theme.color.greyTransp}),(function(e){return e.theme.opacity.one}),(function(e){return e.theme.transition.backdrop}),(function(e){return e.theme.backdropFilter.blur})),d=(u.ZP.div(i||(i=(0,c.Z)(["\n  padding: "," ",";\n  background-color: ",";\n  border-radius: ",";\n  width: ",";\n  position: ",";\n  top: ",";\n  left: ",";\n  transform: ",";\n  transition: ",";\n  height: ",";\n  @media (min-width: 768px) {\n    width: ",";\n    padding: 40px 80px;\n  }\n"])),(function(e){return e.theme.space.p.m}),(function(e){return e.theme.space.p.xs}),(function(e){return e.theme.color.white}),(function(e){return e.theme.radii.borderRadius.inputModal}),(function(e){return e.theme.sizes.width.modalS}),(function(e){return e.theme.position.a}),(function(e){return e.theme.sizes.top.half}),(function(e){return e.theme.sizes.left.half}),(function(e){return e.theme.transform.modal}),(function(e){return e.theme.transition.modal}),(function(e){return e.theme.sizes.height.auto}),(function(e){return e.theme.sizes.width.modalM})),u.ZP.div(o||(o=(0,c.Z)(["\n  padding: 60px 20px 40px;\n  background-color: ",";\n  border-radius: ",";\n  width: ",";\n  position: ",";\n  top: ",";\n  left: ",";\n  transform: ",";\n  transition: ",";\n  height: auto;\n  @media (min-width: 768px) {\n    width: ",";\n    padding: "," "," 2\n      "," ",";\n  }\n"])),(function(e){return e.theme.color.white}),(function(e){return e.theme.radii.borderRadius.inputModal}),(function(e){return e.theme.sizes.width.modalS}),(function(e){return e.theme.position.a}),(function(e){return e.theme.sizes.top.half}),(function(e){return e.theme.sizes.left.half}),(function(e){return e.theme.transform.modal}),(function(e){return e.theme.transition.modal}),(function(e){return e.theme.sizes.width.modalM2}),(function(e){return e.theme.space.p.m}),(function(e){return e.theme.space.p.s}),(function(e){return e.theme.space.p.m}),(function(e){return e.theme.space.p.xs})),t(184)),s=document.getElementById("modal-root"),p=function(e){var n=e.onClose,t=e.children,r=(0,a.useCallback)((function(e){"Escape"===e.code&&n()}),[n]);(0,a.useEffect)((function(){return window.addEventListener("keydown",r),function(){window.removeEventListener("keydown",r)}}),[r]);return(0,l.createPortal)((0,d.jsx)(f,{onClick:function(e){e.target===e.currentTarget&&n()},children:(0,d.jsx)(d.Fragment,{children:t})}),s)}},5624:function(e,n,t){t.d(n,{w:function(){return a}});var r=t(6562),i=t(1717),o=t(184),a=function(e){var n=e.onClick;return(0,o.jsx)(r.m,{onClick:n,type:"button",children:(0,o.jsx)(i.Z.Edit,{})})}},6562:function(e,n,t){t.d(n,{m:function(){return o}});var r,i=t(168),o=t(8789).ZP.button(r||(r=(0,i.Z)(["\n  margin: 0;\n  border: 0;\n  border-radius: 50%;\n  width:20px;\n  height: 20px;\n  background: #fdf7f2;\n  cursor: pointer;\n  color: rgba(17, 17, 17, 0.6);\n  @media ","{\n  width: 32px;\n  height: 32px;\n}\n\n  transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover{\n    opacity: 1;\n  }\n"])),(function(e){return e.theme.media.tabletDesktop}))},3994:function(e,n,t){t.d(n,{_:function(){return c}});var r,i=t(168),o=t(8789).ZP.button(r||(r=(0,i.Z)(["\n  width: 44px;\n  height: 44px;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 0;\n\n  background: rgba(255, 255, 255, 0.6);\n  border-radius: 50%;\n  cursor: pointer;\n  color: #fff;\n  stroke: #f59256;\n\n  transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    color: #f59256;\n    opacity: 1;\n  }\n"]))),a=t(1717),l=t(184),c=function(e){var n=e.onClick;return(0,l.jsx)(o,{onClick:n,children:(0,l.jsx)(a.Z.Heart,{})})}},2711:function(e,n,t){t.d(n,{PZ:function(){return P},vA:function(){return m},mH:function(){return O},TZ:function(){return _},aW:function(){return y}});var r,i,o,a,l,c,u,f,d=t(168),s=t(8789),p=s.ZP.button(r||(r=(0,d.Z)(["\n  width: 248px;\n  height: 38px;\n  padding: 8px 79px;\n  background: #ffffff;\n  border: 2px solid #f59256;\n  border-radius: 40px;\n  cursor: pointer;\n\n  font-family: 'Manrope';\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n\n  transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1),\n    border 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n\n  color: #f59256;\n\n  &:hover {\n    color: #ff6101;\n    border: 2px solid #ff6101;\n  }\n"]))),h=t(184),m=function(e){var n=e.onClick;return(0,h.jsx)(p,{onClick:n,children:"Learn more"})},x=(t(3994),s.ZP.button(i||(i=(0,d.Z)(["\n  width: 44px;\n  height: 44px;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 0;\n\n  background: #fdf7f2;\n  border-radius: 50%;\n  cursor: pointer;\n  color: rgba(17, 17, 17, 0.6);\n\n  transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    color: #f59256;\n    opacity: 1;\n  }\n"]))),t(1717)),b=t(1413),g=t(5987),w=s.ZP.button(o||(o=(0,d.Z)(['\n  width: 180px;\n  height: 44px;\n  padding: 8px 55px;\n  background: #f59256;\n  border: 2px solid #f59256;\n  border-radius: 40px;\n  cursor: pointer;\n\n  font-family: "Manrope";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 20px;\n\n  transition: color, border 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n\n  color: #ffffff;\n\n  &:hover {\n    color: #ffffff;\n    border: 2px solid #ff6101;\n  }\n']))),v=["children"],y=function(e){var n=e.children,t=(0,g.Z)(e,v);return(0,h.jsx)(w,(0,b.Z)((0,b.Z)({},t),{},{children:n}))},C=s.ZP.button(a||(a=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-top: 7px;\n  padding-bottom: 7px;\n  border: 2px solid #f59256;\n  border-radius: 40px;\n  cursor: pointer;\n  gap: 8px;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 1.36;\n  letter-spacing: 0.04em;\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  background-color: white;\n  fill: #f59256;\n  stroke: #f59256;\n\n  width: 100%;\n  &:hover,\n  :focus {\n    color: white;\n    background-color: #f59256;\n  }\n  @media "," {\n    font-size: 20px;\n    width: 180px;\n    padding-top: 6.5px;\n    padding-bottom: 6.5px;\n  }\n"])),(function(e){return e.theme.media.tabletDesktop})),E=s.ZP.button(l||(l=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 9px;\n  border-radius: 40px;\n  border: none;\n  cursor: pointer;\n  padding-top: 9px;\n  padding-bottom: 9px;\n  gap: 8px;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 1.36;\n  letter-spacing: 0.04em;\n  background-color: #f59256;\n  color: white;\n  fill: #f59256;\n  stroke: #f59256;\n  width: 100%;\n  @media "," {\n    font-size: 20px;\n    width: 180px;\n    padding-top: 8.5px;\n    padding-bottom: 8.5px;\n  }\n"])),(function(e){return e.theme.media.tabletDesktop})),k=["children"],Z=["children"],O=function(e){var n=e.children,t=(0,g.Z)(e,k);return(0,h.jsx)(C,(0,b.Z)((0,b.Z)({},t),{},{children:n}))},_=function(e){var n=e.children,t=(0,g.Z)(e,Z);return(0,h.jsx)(E,(0,b.Z)((0,b.Z)({},t),{},{children:n}))},j=(s.ZP.button(c||(c=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  margin-top: 12px;\n  margin-bottom: 36px;\n  padding: 0;\n  border: 0;\n  background: #ffffff;\n  cursor: pointer;\n  transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    opacity: 1;\n  }\n"]))),s.ZP.button(u||(u=(0,d.Z)(["\n  width: 34px;\n  height: 34px;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 0;\n\n  background: #fdf7f2;\n  border-radius: 50%;\n  cursor: pointer;\n  color: #000;\n\n  transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    color: #f59256;\n    opacity: 1;\n  }\n\n  @media "," {\n    width: 44px;\n    height: 44px;\n  }\n"])),(function(e){return e.theme.media.tabletDesktop}))),z=(0,s.ZP)(x.Z.Close)(f||(f=(0,d.Z)(["\n  width: 15px;\n  height: 15px;\n\n  @media "," {\n    width: 20px;\n    height: 20px;\n  }\n"])),(function(e){return e.theme.media.tabletDesktop})),P=function(e){var n=e.onClick,t=e.className;return(0,h.jsx)(j,{onClick:n,className:t,children:(0,h.jsx)(z,{})})};t(5624)}}]);
//# sourceMappingURL=677.69016776.chunk.js.map