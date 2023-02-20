"use strict";(self.webpackChunkpets_front_end=self.webpackChunkpets_front_end||[]).push([[762],{8762:function(n,e,r){r.r(e),r.d(e,{default:function(){return R}});var t,i,o,a,l,d,s,c,h,p,x=r(168),u=r(8789),f=u.ZP.ul(t||(t=(0,x.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 12px;\n  max-width: 500px;\n  margin: 0 auto;\n  list-style-type: none;\n\n  @media (min-width: 768px) {\n        justify-content: space-evenly\n    gap: 32px;\n    max-width: 100%;\n  }\n  @media (min-width: 1280px) {\n    display: grid;\n    gap: 32px;\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n"]))),m=r(1506),g=u.ZP.li(i||(i=(0,x.Z)(["\n  min-height: 200px;\n  width: 80%;\n  text-align: center;\n  padding: 15px;\n  background-color: ",";\n  border-radius: 20px;\n  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);\n  flex-wrap: wrap;\n  @media (min-width: 768px) {\n    border-radius: 40px;\n    width: calc(40%);\n  }\n  @media (min-width: 1280px) {\n    height: 100%;\n    width: 100%;\n  } ;\n"])),(function(n){return n.theme.color.white})),w=u.ZP.a(o||(o=(0,x.Z)(["\n  display: inline-block;\n  text-transform: uppercase;\n  width: 100%;\n  margin-bottom: 12px;\n  font-size: 12px;\n  line-height: 1.33;\n  font-weight: 700;\n  color: ",";\n  &:hover {\n    color: ",";\n  }\n  &:focus {\n    color: ",";\n  }\n  text-align: center;\n  text-decoration: underline;\n  text-decoration-style: solid;\n  text-decoration-thickness: 1px;\n  @media (min-width: 768px) {\n    margin-bottom: 16px;\n    font-size: 16px;\n    line-height: 1.38;\n  }\n  @media (min-width: 1280px) {\n    font-size: 20px;\n    line-height: 1.35;\n  } ;\n"])),(function(n){return n.theme.color.accent}),(function(n){return n.theme.color.hoverBtn}),(function(n){return n.theme.color.hoverBtn})),j=u.ZP.div(a||(a=(0,x.Z)(["\n  display: flex;\n  flex-wrap: nowrap;\n"]))),v=u.ZP.div(l||(l=(0,x.Z)(["\n  width: 158px;\n"]))),b=u.ZP.img(d||(d=(0,x.Z)(["\n  border-radius: 20px;\n  display: block;\n  max-width: 100%;\n  width: 100%;\n"]))),Z=u.ZP.div(s||(s=(0,x.Z)(["\n  display: flex;\n  flex-flow: column wrap;\n  text-align: start;\n  margin-left: 10px;\n  gap: 5px;\n  text-decoration: none;\n  font-style: normal;\n  font-weight: 500;\n  word-break: break-all;\n  width: 55%;\n  font-size: 12px;\n  line-height: 1.33;\n  @media (min-width: 768px) {\n    font-size: 14px;\n    line-height: 1.36;\n  }\n  @media (min-width: 1280px) {\n    font-size: 16px;\n    line-height: 1.38;\n  }\n"]))),y=u.ZP.div(c||(c=(0,x.Z)(["\n  display: block;\n  font-weight: 600;\n"]))),k=u.ZP.a(h||(h=(0,x.Z)(["\n  color: inherit;\n  &:hover {\n    color: ",";\n  }\n  &:focus {\n    color: ",";\n  }\n  text-decoration: underline;\n  text-decoration-style: solid;\n  text-decoration-thickness: 1px;\n"])),(function(n){return n.theme.color.accent}),(function(n){return n.theme.color.accent})),P=u.ZP.span(p||(p=(0,x.Z)(["\n  color: ",";\n"])),(function(n){return n.theme.color.greyText})),C=r(9439),D=r(2791),z=r(7154),F=r(7630),_=r(6747),O=(0,F.ZP)(_.Z)((function(){return{cursor:"pointer","&:hover":{color:"#F59256"}}})),S=(0,F.ZP)(_.Z)((function(){return{display:"grid",gridTemplateColumns:"auto 1fr",gridRowGap:"4px",justifyItems:"center",gridColumnGap:"15px",fontSize:"12px",lineHeight:"1.33",padding:"12px",height:"100%"}})),E=r(184),T=function(n){var e=n.workDays,r=(0,D.useState)(null),t=(0,C.Z)(r,2),i=t[0],o=t[1],a=function(){o(null)},l=!!i,d=(new Date).getDay(),s=e.find((function(n,e){return e===d}));return(0,E.jsxs)(O,{"aria-owns":l?"popover":void 0,"aria-haspopup":"true",onMouseEnter:function(n){var e=n.currentTarget;o(e)},onMouseLeave:a,children:[e.length>0&&(0,E.jsxs)("span",{children:[" ",s.isOpen?"".concat(s.from," - ").concat(s.to):"CLOSED"]},s._id),(0,E.jsx)(z.ZP,{id:"popover",sx:{pointerEvents:"none",backgroundColor:"transparent"},open:l,anchorEl:i,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},PaperProps:{sx:{backgroundColor:"white",borderWidth:"1px",borderStyle:"solid",borderRadius:"8px",borderColor:"#F59256",boxShadow:53}},onClose:a,disableRestoreFocus:!0,children:(0,E.jsx)(S,{children:e.map((function(n,e){return(0,E.jsxs)(D.Fragment,{children:[(0,E.jsx)("div",{children:function(n){switch(n){case 0:return"SN";case 1:return"MN";case 2:return"TU";case 3:return"WD";case 4:return"TH";case 5:return"FR";case 6:return"ST";default:return"Invalid day"}}(e)}),(0,E.jsx)("div",{children:null!==n&&void 0!==n&&n.isOpen?"".concat(null===n||void 0===n?void 0:n.from," - ").concat(null===n||void 0===n?void 0:n.to):"CLOSED"})]},n._id)}))})})]})},N=function(n){var e=n.friendsData,r=e.title,t=e.url,i=e.addressUrl,o=e.imageUrl,a=e.address,l=e.phone,d=e.email,s=e.workDays;return(0,E.jsxs)(g,{children:[(0,E.jsx)(w,{href:t,target:"_blank",rel:"noreferrer noopener",children:r}),(0,E.jsxs)(j,{children:[(0,E.jsx)(v,{children:(0,E.jsx)(b,{src:o||"https://via.placeholder.com/120?text=OurFriend",alt:"Friend logotype",width:"110"})}),(0,E.jsxs)(Z,{children:[(0,E.jsxs)("div",{children:[(0,E.jsx)(y,{component:"span",children:"Time:"}),s&&0!==s.length?(0,E.jsx)(T,{workDays:s}):(0,E.jsx)(P,{component:"span",children:"No information"})]}),(0,E.jsxs)("div",{children:[(0,E.jsx)(y,{component:"span",children:"Address:"}),i&&a?(0,E.jsx)(k,{href:i,target:"_blank",rel:"noreferrer noopener",children:a}):null,!i&&a?a:null,i||a?null:(0,E.jsx)(P,{component:"span",children:"No information"})]}),(0,E.jsxs)("div",{children:[(0,E.jsx)(y,{component:"span",children:"Email:"}),d?(0,E.jsx)(k,{href:"mailto:".concat(d),children:d}):(0,E.jsx)(P,{component:"span",children:"No information"})]}),(0,E.jsxs)("div",{children:[(0,E.jsx)(y,{component:"span",children:"Phone:"}),l?(0,E.jsx)(k,{href:"tel:".concat(l),children:l}):(0,E.jsx)(P,{component:"span",children:"No information"})]})]})]})]})},L=function(){var n=(0,m.h)(),e=n.data,r=n.isError,t=n.isLoading;return(0,E.jsxs)(E.Fragment,{children:[t?(0,E.jsx)("div",{children:" Loading ... "}):null,!t&&!r&&e.length>0?(0,E.jsx)(f,{children:e.map((function(n){return(0,E.jsx)(N,{friendsData:n},n._id)}))}):null]})},R=function(){return(0,E.jsx)("section",{children:(0,E.jsxs)("div",{children:[(0,E.jsx)("h2",{children:"Our Friends"}),(0,E.jsx)(L,{})]})})}}}]);
//# sourceMappingURL=762.71760a9d.chunk.js.map