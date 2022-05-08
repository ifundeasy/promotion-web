"use strict";(self.webpackChunkpromotion_web=self.webpackChunkpromotion_web||[]).push([[50],{5467:function(e,n,t){function o(e){return Object.keys(e).reduce((function(n,t){return!t.startsWith("data-")&&!t.startsWith("aria-")&&"role"!==t||t.startsWith("data-__")||(n[t]=e[t]),n}),{})}t.d(n,{Z:function(){return o}})},6772:function(e,n,t){t.d(n,{Z:function(){return j}});var o=t(7462),c=t(4942),r=t(9439),a=t(7294),s=t(4549),i=t(5873),l=t(7119),u=t(8628),m=t(1627),p=t(8819),f=t(8855),d=t(847),v=t(3061),Z=t(3441),h=t(4184),E=t.n(h),y=t(5632),b=t(5467),g=t(5671),w=t(3144),N=t(136),C=t(8557),k=function(e){(0,N.Z)(t,e);var n=(0,C.Z)(t);function t(){var e;return(0,g.Z)(this,t),(e=n.apply(this,arguments)).state={error:void 0,info:{componentStack:""}},e}return(0,w.Z)(t,[{key:"componentDidCatch",value:function(e,n){this.setState({error:e,info:n})}},{key:"render",value:function(){var e=this.props,n=e.message,t=e.description,o=e.children,c=this.state,r=c.error,s=c.info,i=s&&s.componentStack?s.componentStack:null,l=void 0===n?(r||"").toString():n,u=void 0===t?i:t;return r?a.createElement(j,{type:"error",message:l,description:a.createElement("pre",null,u)}):o}}]),t}(a.Component),x=t(6159),O=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var c=0;for(o=Object.getOwnPropertySymbols(e);c<o.length;c++)n.indexOf(o[c])<0&&Object.prototype.propertyIsEnumerable.call(e,o[c])&&(t[o[c]]=e[o[c]])}return t},S={success:p.Z,info:d.Z,error:v.Z,warning:f.Z},I={success:i.Z,info:u.Z,error:m.Z,warning:l.Z},M=function(e){var n,t=e.description,i=e.prefixCls,l=e.message,u=e.banner,m=e.className,p=void 0===m?"":m,f=e.style,d=e.onMouseEnter,v=e.onMouseLeave,h=e.onClick,g=e.afterClose,w=e.showIcon,N=e.closable,C=e.closeText,k=e.closeIcon,M=void 0===k?a.createElement(s.Z,null):k,j=e.action,L=O(e,["description","prefixCls","message","banner","className","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","closeIcon","action"]),P=a.useState(!1),_=(0,r.Z)(P,2),H=_[0],T=_[1],W=a.useRef(),D=a.useContext(y.E_),A=D.getPrefixCls,B=D.direction,J=A("alert",i),R=function(e){var n;T(!0),null===(n=L.onClose)||void 0===n||n.call(L,e)},U=!!C||N,q=function(){var e=L.type;return void 0!==e?e:u?"warning":"info"}(),z=!(!u||void 0!==w)||w,F=E()(J,"".concat(J,"-").concat(q),(n={},(0,c.Z)(n,"".concat(J,"-with-description"),!!t),(0,c.Z)(n,"".concat(J,"-no-icon"),!z),(0,c.Z)(n,"".concat(J,"-banner"),!!u),(0,c.Z)(n,"".concat(J,"-rtl"),"rtl"===B),n),p),G=(0,b.Z)(L);return a.createElement(Z.Z,{visible:!H,motionName:"".concat(J,"-motion"),motionAppear:!1,motionEnter:!1,onLeaveStart:function(e){return{maxHeight:e.offsetHeight}},onLeaveEnd:g},(function(e){var n,r,s=e.className,i=e.style;return a.createElement("div",(0,o.Z)({ref:W,"data-show":!H,className:E()(F,s),style:(0,o.Z)((0,o.Z)({},f),i),onMouseEnter:d,onMouseLeave:v,onClick:h,role:"alert"},G),z?(n=L.icon,r=(t?I:S)[q]||null,n?(0,x.wm)(n,a.createElement("span",{className:"".concat(J,"-icon")},n),(function(){return{className:E()("".concat(J,"-icon"),(0,c.Z)({},n.props.className,n.props.className))}})):a.createElement(r,{className:"".concat(J,"-icon")})):null,a.createElement("div",{className:"".concat(J,"-content")},l?a.createElement("div",{className:"".concat(J,"-message")},l):null,t?a.createElement("div",{className:"".concat(J,"-description")},t):null),j?a.createElement("div",{className:"".concat(J,"-action")},j):null,U?a.createElement("button",{type:"button",onClick:R,className:"".concat(J,"-close-icon"),tabIndex:0},C?a.createElement("span",{className:"".concat(J,"-close-text")},C):M):null)}))};M.ErrorBoundary=k;var j=M},7772:function(e,n,t){t(6355)},6327:function(e,n,t){var o=t(7294);n.Z=function(e){var n=e.children;return o.createElement("div",{style:{width:"100%",minHeight:"calc(100vh - 252px)"}},n)}},2050:function(e,n,t){t.r(n);t(7772);var o=t(6772),c=t(9439),r=t(7294),a=t(9711),s=t(6974),i=t(6327);n.default=function(){var e=(0,a.lr)(),n=(0,c.Z)(e,1)[0].get("id"),t=(0,s.UO)();return r.createElement(i.Z,null,r.createElement(o.Z,{message:"Success Tips",description:"Detailed description and advice about successful copywriting.",type:"success",showIcon:!0}),r.createElement("div",null,"useParams: ",JSON.stringify(t,null,2)),r.createElement("span",null,"Search Id: ",n))}}}]);
//# sourceMappingURL=50.8a33ebd6e7decdc1d826.js.map