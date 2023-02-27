"use strict";(self.webpackChunkpets_front_end=self.webpackChunkpets_front_end||[]).push([[639],{6898:function(n,e,t){t.d(e,{Jt:function(){return c},Wn:function(){return l},ui:function(){return h}});var i,r,o,a=t(168),u=t(8789),s=t(5177),c=u.ZP.div(i||(i=(0,a.Z)(["\n  gap: 20px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n  transform: translateX(-50%);\n"]))),h=u.ZP.div(r||(r=(0,a.Z)(["\n  width: 170px;\n  height: 80px\n  font-weight: ",";\n  font-size: ",";\n  line-height: ",";\n  color: ",";\n"])),(function(n){return n.theme.fontWeights.light}),(function(n){return n.theme.fontSizes.l}),(function(n){return n.theme.lineHeights.s}),(function(n){return n.theme.color.newsText})),l=u.ZP.div(o||(o=(0,a.Z)(["\n  background-image: url(",");\n  height: 80px;\n  width: 80px;\n  background-repeat: no-repeat;\n  background-size: contain;\n"])),s)},7655:function(n,e,t){t.d(e,{a:function(){return o}});var i="loader_planet__FY3ob",r=t(184),o=function(){return(0,r.jsx)("div",{className:i})}},6639:function(n,e,t){t.r(e),t.d(e,{default:function(){return Y}});var i,r,o,a=t(9439),u=t(9071),s=t(2791),c=t(168),h=t(8789),l=h.ZP.button(i||(i=(0,c.Z)(["\n  border: none;\n  outline: none;\n  background-color: transparent;\n  cursor: pointer;\n  transition: scale 250ms linear;\n"]))),d=h.ZP.input(r||(r=(0,c.Z)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-grow: 1;\n  padding: 9px 12px;\n  padding-right: 40px;\n\n  width: 280px;\n  height: 40px;\n  background: #ffffff;\n\n  font-family: 'Manrope';\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 1.37;\n  letter-spacing: 0.04em;\n\n  outline: none;\n  border: none;\n  color: #535353;\n\n  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);\n  border-radius: 20px;\n\n  cursor: pointer;\n\n  @media "," {\n    width: 608px;\n    height: 44px;\n    border-radius: 40px;\n    font-size: 20px;\n    line-height: 1.35;\n  }\n"])),(function(n){return n.theme.media.tabletDesktop})),f=h.ZP.div(o||(o=(0,c.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n  margin: 28px auto;\n  width: 280px;\n  @media "," {\n    margin: 40px auto;\n    width: 608px;\n  }\n"])),(function(n){return n.theme.media.tabletDesktop})),p=t(1717),x=t(184),g=function(n){var e=n.name,t=n.type,i=n.value,r=n.placeholder,o=n.onChange,a=n.onClick,u=n.inputUsed;return(0,x.jsxs)(f,{children:[(0,x.jsx)(d,{name:e,type:t,value:i,placeholder:r,onChange:o}),u?(0,x.jsx)(l,{type:"submit",onClick:a,children:(0,x.jsx)(p.Z.ResetQuery,{style:{position:"absolute",top:10,right:20}})}):(0,x.jsx)(l,{type:"submit",onClick:a,children:(0,x.jsx)(p.Z.Search,{style:{position:"absolute",top:10,right:20}})})]})},m=t(5264),b=t(9230);m.Notify.init({warning:{background:"#F59256"}});var w,v,Z,j,y,z,k,P,S,C,W,_,D=function(n){var e=n.onSearch,t=(0,b.$G)().t,i=(0,s.useState)(!1),r=(0,a.Z)(i,2),o=r[0],u=r[1],c=(0,s.useState)(""),h=(0,a.Z)(c,2),l=h[0],d=h[1];return(0,x.jsx)(g,{maxLength:10,value:l,type:"text",name:"search",placeholder:t("search"),onChange:function(n){var t=n.target.value.trim();" "===n.target.value&&m.Notify.warning("Incorrect search"),t.length>=60&&m.Notify.warning("Incorrect search"),e(t),""!==n.target.value&&u(!0),""===n.target.value&&u(!1),d(n.target.value)},inputUsed:o,onClick:function(n){""!==l?(n.preventDefault(),u(!1),e(""),d("")):m.Notify.warning("Please start type search query")}})},H=h.ZP.li(w||(w=(0,c.Z)(["\n  width: 280px;\n  text-align: left;\n  flex-wrap: wrap;\n  @media (min-width: 768px) {\n    width: 336px;\n  }\n  @media (min-width: 1280px) {\n    width: 395px;\n  } ;\n"]))),N=h.ZP.div(v||(v=(0,c.Z)(["\n  @media (min-width: 768px) {\n    width: 280px;\n    height: 8px;\n  }\n  @media (min-width: 1280px) {\n    width: 340px;\n  }\n  width: 200px;\n  height: 4px;\n  background: linear-gradient(90deg, #ff634e 0%, #ffdf48 105.44%);\n  border-radius: 40px;\n  margin-bottom: 4px;\n"]))),F=h.ZP.h3(Z||(Z=(0,c.Z)(["\n  height: 105px;\n  overflow: hidden;\n  font-weight: ",";\n  font-size: ",";\n  line-height: ",";\n  margin-bottom: 16px;\n"])),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.fontSizes.l}),(function(n){return n.theme.lineHeights.s})),G=h.ZP.div(j||(j=(0,c.Z)(["\n  height: 110px;\n  overflow: hidden;\n  margin-bottom: 20px;\n  @media (min-width: 768px) {\n    margin-bottom: 40px;\n  }\n"]))),$=h.ZP.span(y||(y=(0,c.Z)(["\n  height: 200px;\n  font-weight: ",";\n  font-size: ",";\n  line-height: ",";\n  color: ",";\n"])),(function(n){return n.theme.fontWeights.light}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.lineHeights.s}),(function(n){return n.theme.color.newsText})),A=h.ZP.span(z||(z=(0,c.Z)(["\n  font-weight: ",";\n  font-size: ",";\n  line-height: ",";\n  color: ",";\n"])),(function(n){return n.theme.fontWeights.light}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.lineHeights.s}),(function(n){return n.theme.color.newsDate})),I=h.ZP.a(k||(k=(0,c.Z)(["\n  font-size: ",";\n  line-height: ",";\n  text-align: right;\n  text-decoration-line: underline;\n  color: ",";\n  &:hover {\n    color: ",";\n  }\n  &:focus {\n    color: ",";\n  }\n"])),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.lineHeights.s}),(function(n){return n.theme.color.accent}),(function(n){return n.theme.color.hoverBtn}),(function(n){return n.theme.color.hoverBtn})),q=h.ZP.div(P||(P=(0,c.Z)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n"]))),B=function(n){var e=n.title,t=n.description,i=n.date,r=n.url,o=(0,b.$G)().t;return(0,x.jsxs)(H,{children:[(0,x.jsx)(N,{}),(0,x.jsx)(F,{children:e}),(0,x.jsx)(G,{children:(0,x.jsx)($,{children:t})}),(0,x.jsxs)(q,{children:[(0,x.jsx)(A,{children:i}),(0,x.jsx)(I,{href:r,target:"_blank",children:o("readMore")})]})]})},J=h.ZP.ul(S||(S=(0,c.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 32px;\n  max-width: 500px;\n  margin: 0 auto;\n  list-style-type: none;\n  \n  @media (min-width: 768px) {\n   justify-content: space-evenly\n    gap: 32px;\n    max-width: 100%;\n  }\n  @media (min-width: 1280px) {\n    display: grid;\n    gap: 32px;\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n"]))),L=function(n){var e=n.newsData;return(0,x.jsx)(J,{children:e.map((function(n){var e=n._id,t=n.title,i=n.description,r=n.date,o=n.url;return(0,x.jsx)(B,{title:t,description:i,date:r,url:o},e)}))})},M=h.ZP.div(C||(C=(0,c.Z)(["\n  padding-top: 42px;\n  padding-bottom: 100px;\n  @media (min-width: 768px) {\n    padding-top: 60px;\n  }\n"]))),R=h.ZP.button(W||(W=(0,c.Z)(["\n  @media (min-width: 768px) {\n    width: 248px;\n    height: 38px;\n    padding: 8px 79px;\n  }\n  width: 124px;\n  height: 28px;\n  padding: 4px 40px;\n  background: ",";\n  border: 2px solid #f59256;\n  border-radius: 40px;\n  cursor: pointer;\n  font-size: ",";\n  transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1),\n    border 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n\n  color: ",";\n  ","\n\n  ","\n"])),(function(n){return n.theme.color.white}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.color.accent}),(function(n){return!n.disabled&&"&:hover {\n    color: #ff6101;\n    border: 2px solid #ff6101;\n  }\n"}),(function(n){return n.disabled&&"color: rgba(17, 17, 17, 0.6);\n    border: 2px solid rgba(17, 17, 17, 0.6);\n    \n  "})),T=h.ZP.div(_||(_=(0,c.Z)(["\n  margin-top: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 64px;\n"]))),U=t(8481),X=t(3505),O=t(7655),Q=t(6898),V=function(){var n=(0,b.$G)().t;return(0,x.jsxs)(Q.Jt,{children:[(0,x.jsx)("div",{children:(0,x.jsx)(Q.ui,{children:n("noNews")})}),(0,x.jsx)(Q.Wn,{})]})},Y=function(){var n=(0,b.$G)().t,e=(0,s.useState)(""),t=(0,a.Z)(e,2),i=t[0],r=t[1],o=(0,s.useState)(1),c=(0,a.Z)(o,2),h=c[0],l=c[1],d=(0,u.c)({query:i,page:h}),f=d.data,p=d.error,g=d.isLoading,m=(0,s.useRef)(null),w=function(){var n;null===(n=m.current)||void 0===n||n.scrollIntoView({behavior:"smooth"})};return(0,x.jsx)(U.W,{children:(0,x.jsxs)(M,{children:[(0,x.jsx)(X.u,{children:n("titleNews")}),(0,x.jsx)("div",{ref:m}),(0,x.jsx)(D,{onSearch:function(n){r(n),l(1)}}),p?(0,x.jsx)(x.Fragment,{children:"Oh no, there was an error"}):g?(0,x.jsx)(O.a,{}):Array.isArray(f.data)?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(L,{newsData:f.data}),(0,x.jsxs)(T,{children:[(0,x.jsx)(R,{onClick:function(){l((function(n){return n-1})),w()},disabled:1===h,children:n("prev")}),(0,x.jsx)(R,{onClick:function(){l((function(n){return n+1})),w()},disabled:6*h>=f.total,children:n("next")})]})]}):(0,x.jsx)(V,{})]})})}},3505:function(n,e,t){t.d(e,{u:function(){return u}});var i,r,o=t(168),a=t(8789),u=(0,a.ZP)("h1")(i||(i=(0,o.Z)(["\n  font-weight: ",";\n  text-align: ",";\n  margin-bottom: ",";\n  font-size: ",";\n  line-height: ",";\n  @media "," {\n    font-size: ",";\n    marginbottom: ",";\n  }\n"])),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.textAlign.center}),(function(n){return n.theme.space.m.s}),(function(n){return n.theme.fontSizes.l}),(function(n){return n.theme.lineHeights.s}),(function(n){return n.theme.media.tabletDesktop}),(function(n){return n.theme.fontSizes.xxl}),(function(n){return n.theme.space.m.l}));(0,a.ZP)("h1")(r||(r=(0,o.Z)(["\n  color: ",";\n  font-weight: ",";\n  font-size: ",";\n  line-height: ",";\n  @media "," {\n    font-size: ",";\n    line-height: ",";\n  }\n"])),(function(n){return n.theme.color.text}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.fontSizes.xl}),(function(n){return n.theme.lineHeights.s}),(function(n){return n.theme.media.tabletDesktop}),(function(n){return n.theme.fontSizes.xxxl}),(function(n){return n.theme.lineHeights.m}))},5177:function(n,e,t){n.exports=t.p+"static/media/puppy.9b1128bc2cc20c127a9a.png"}}]);
//# sourceMappingURL=639.82b891f4.chunk.js.map