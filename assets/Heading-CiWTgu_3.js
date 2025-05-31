import{g as Sr,R as B,K as bt,r as c,j as m,c as A,u as P,a as Ar,e as Tr,M as Nr,P as Rr}from"./index-Bj6IjsBP.js";import{C as Ir}from"./Row-CkZGBLgn.js";function Pr(t,e){if(t==null)return{};var n={};for(var a in t)if({}.hasOwnProperty.call(t,a)){if(e.includes(a))continue;n[a]=t[a]}return n}function Re(t,e){return Re=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,a){return n.__proto__=a,n},Re(t,e)}function _r(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Re(t,e)}function se(t){return t&&t.ownerDocument||document}function Fr(t){var e=se(t);return e&&e.defaultView||window}function jr(t,e){return Fr(t).getComputedStyle(t,e)}var Mr=/([A-Z])/g;function Lr(t){return t.replace(Mr,"-$1").toLowerCase()}var Dr=/^ms-/;function Xt(t){return Lr(t).replace(Dr,"-ms-")}var $r=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function zr(t){return!!(t&&$r.test(t))}function st(t,e){var n="",a="";if(typeof e=="string")return t.style.getPropertyValue(Xt(e))||jr(t).getPropertyValue(Xt(e));Object.keys(e).forEach(function(r){var o=e[r];!o&&o!==0?t.style.removeProperty(Xt(r)):zr(r)?a+=r+"("+o+") ":n+=Xt(r)+": "+o+";"}),a&&(n+="transform: "+a+";"),t.style.cssText+=";"+n}var ca={exports:{}},Wr="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Br=Wr,Ur=Br;function fa(){}function ua(){}ua.resetWarningCache=fa;var Yr=function(){function t(a,r,o,s,i,f){if(f!==Ur){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:ua,resetWarningCache:fa};return n.PropTypes=n,n};ca.exports=Yr();var Hr=ca.exports;const y=Sr(Hr),Cn={disabled:!1},da=B.createContext(null);var Gr=function(e){return e.scrollTop},Rt="unmounted",at="exited",Q="entering",rt="entered",Ie="exiting",G=function(t){_r(e,t);function e(a,r){var o;o=t.call(this,a,r)||this;var s=r,i=s&&!s.isMounting?a.enter:a.appear,f;return o.appearStatus=null,a.in?i?(f=at,o.appearStatus=Q):f=rt:a.unmountOnExit||a.mountOnEnter?f=Rt:f=at,o.state={status:f},o.nextCallback=null,o}e.getDerivedStateFromProps=function(r,o){var s=r.in;return s&&o.status===Rt?{status:at}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(r){var o=null;if(r!==this.props){var s=this.state.status;this.props.in?s!==Q&&s!==rt&&(o=Q):(s===Q||s===rt)&&(o=Ie)}this.updateStatus(!1,o)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var r=this.props.timeout,o,s,i;return o=s=i=r,r!=null&&typeof r!="number"&&(o=r.exit,s=r.enter,i=r.appear!==void 0?r.appear:s),{exit:o,enter:s,appear:i}},n.updateStatus=function(r,o){if(r===void 0&&(r=!1),o!==null)if(this.cancelNextCallback(),o===Q){if(this.props.unmountOnExit||this.props.mountOnEnter){var s=this.props.nodeRef?this.props.nodeRef.current:bt.findDOMNode(this);s&&Gr(s)}this.performEnter(r)}else this.performExit();else this.props.unmountOnExit&&this.state.status===at&&this.setState({status:Rt})},n.performEnter=function(r){var o=this,s=this.props.enter,i=this.context?this.context.isMounting:r,f=this.props.nodeRef?[i]:[bt.findDOMNode(this),i],l=f[0],u=f[1],h=this.getTimeouts(),p=i?h.appear:h.enter;if(!r&&!s||Cn.disabled){this.safeSetState({status:rt},function(){o.props.onEntered(l)});return}this.props.onEnter(l,u),this.safeSetState({status:Q},function(){o.props.onEntering(l,u),o.onTransitionEnd(p,function(){o.safeSetState({status:rt},function(){o.props.onEntered(l,u)})})})},n.performExit=function(){var r=this,o=this.props.exit,s=this.getTimeouts(),i=this.props.nodeRef?void 0:bt.findDOMNode(this);if(!o||Cn.disabled){this.safeSetState({status:at},function(){r.props.onExited(i)});return}this.props.onExit(i),this.safeSetState({status:Ie},function(){r.props.onExiting(i),r.onTransitionEnd(s.exit,function(){r.safeSetState({status:at},function(){r.props.onExited(i)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(r,o){o=this.setNextCallback(o),this.setState(r,o)},n.setNextCallback=function(r){var o=this,s=!0;return this.nextCallback=function(i){s&&(s=!1,o.nextCallback=null,r(i))},this.nextCallback.cancel=function(){s=!1},this.nextCallback},n.onTransitionEnd=function(r,o){this.setNextCallback(o);var s=this.props.nodeRef?this.props.nodeRef.current:bt.findDOMNode(this),i=r==null&&!this.props.addEndListener;if(!s||i){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var f=this.props.nodeRef?[this.nextCallback]:[s,this.nextCallback],l=f[0],u=f[1];this.props.addEndListener(l,u)}r!=null&&setTimeout(this.nextCallback,r)},n.render=function(){var r=this.state.status;if(r===Rt)return null;var o=this.props,s=o.children;o.in,o.mountOnEnter,o.unmountOnExit,o.appear,o.enter,o.exit,o.timeout,o.addEndListener,o.onEnter,o.onEntering,o.onEntered,o.onExit,o.onExiting,o.onExited,o.nodeRef;var i=Pr(o,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return B.createElement(da.Provider,{value:null},typeof s=="function"?s(r,i):B.cloneElement(B.Children.only(s),i))},e}(B.Component);G.contextType=da;G.propTypes={};function ht(){}G.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:ht,onEntering:ht,onEntered:ht,onExit:ht,onExiting:ht,onExited:ht};G.UNMOUNTED=Rt;G.EXITED=at;G.ENTERING=Q;G.ENTERED=rt;G.EXITING=Ie;const kt=!!(typeof window<"u"&&window.document&&window.document.createElement);var Pe=!1,_e=!1;try{var be={get passive(){return Pe=!0},get once(){return _e=Pe=!0}};kt&&(window.addEventListener("test",be,be),window.removeEventListener("test",be,!0))}catch{}function ma(t,e,n,a){if(a&&typeof a!="boolean"&&!_e){var r=a.once,o=a.capture,s=n;!_e&&r&&(s=n.__once||function i(f){this.removeEventListener(e,i,o),n.call(this,f)},n.__once=s),t.addEventListener(e,s,Pe?a:o)}t.addEventListener(e,n,a)}function Fe(t,e,n,a){var r=a&&typeof a!="boolean"?a.capture:a;t.removeEventListener(e,n,r),n.__once&&t.removeEventListener(e,n.__once,r)}function te(t,e,n,a){return ma(t,e,n,a),function(){Fe(t,e,n,a)}}function Xr(t,e,n,a){if(a===void 0&&(a=!0),t){var r=document.createEvent("HTMLEvents");r.initEvent(e,n,a),t.dispatchEvent(r)}}function Vr(t){var e=st(t,"transitionDuration")||"",n=e.indexOf("ms")===-1?1e3:1;return parseFloat(e)*n}function Kr(t,e,n){n===void 0&&(n=5);var a=!1,r=setTimeout(function(){a||Xr(t,"transitionend",!0)},e+n),o=te(t,"transitionend",function(){a=!0},{once:!0});return function(){clearTimeout(r),o()}}function pa(t,e,n,a){n==null&&(n=Vr(t)||0);var r=Kr(t,n,a),o=te(t,"transitionend",e);return function(){r(),o()}}function On(t,e){const n=st(t,e)||"",a=n.indexOf("ms")===-1?1e3:1;return parseFloat(n)*a}function qr(t,e){const n=On(t,"transitionDuration"),a=On(t,"transitionDelay"),r=pa(t,o=>{o.target===t&&(r(),e(o))},n+a)}function Qr(t){t.offsetHeight}const Sn=t=>!t||typeof t=="function"?t:e=>{t.current=e};function Zr(t,e){const n=Sn(t),a=Sn(e);return r=>{n&&n(r),a&&a(r)}}function Mt(t,e){return c.useMemo(()=>Zr(t,e),[t,e])}function Jr(t){return t&&"setState"in t?bt.findDOMNode(t):t??null}const to=B.forwardRef(({onEnter:t,onEntering:e,onEntered:n,onExit:a,onExiting:r,onExited:o,addEndListener:s,children:i,childRef:f,...l},u)=>{const h=c.useRef(null),p=Mt(h,f),b=I=>{p(Jr(I))},v=I=>_=>{I&&h.current&&I(h.current,_)},C=c.useCallback(v(t),[t]),x=c.useCallback(v(e),[e]),E=c.useCallback(v(n),[n]),w=c.useCallback(v(a),[a]),O=c.useCallback(v(r),[r]),R=c.useCallback(v(o),[o]),N=c.useCallback(v(s),[s]);return m.jsx(G,{ref:u,...l,onEnter:C,onEntered:E,onEntering:x,onExit:w,onExited:R,onExiting:O,addEndListener:N,nodeRef:h,children:typeof i=="function"?(I,_)=>i(I,{..._,ref:b}):B.cloneElement(i,{ref:b})})});function eo(t){const e=c.useRef(t);return c.useEffect(()=>{e.current=t},[t]),e}function $(t){const e=eo(t);return c.useCallback(function(...n){return e.current&&e.current(...n)},[e])}const no=t=>c.forwardRef((e,n)=>m.jsx("div",{...e,ref:n,className:A(e.className,t)}));function ao(){return c.useState(null)}function ro(){const t=c.useRef(!0),e=c.useRef(()=>t.current);return c.useEffect(()=>(t.current=!0,()=>{t.current=!1}),[]),e.current}function oo(t){const e=c.useRef(null);return c.useEffect(()=>{e.current=t}),e.current}const so=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",io=typeof document<"u",An=io||so?c.useLayoutEffect:c.useEffect,lo=["as","disabled"];function co(t,e){if(t==null)return{};var n={};for(var a in t)if({}.hasOwnProperty.call(t,a)){if(e.indexOf(a)>=0)continue;n[a]=t[a]}return n}function fo(t){return!t||t.trim()==="#"}function ha({tagName:t,disabled:e,href:n,target:a,rel:r,role:o,onClick:s,tabIndex:i=0,type:f}){t||(n!=null||a!=null||r!=null?t="a":t="button");const l={tagName:t};if(t==="button")return[{type:f||"button",disabled:e},l];const u=p=>{if((e||t==="a"&&fo(n))&&p.preventDefault(),e){p.stopPropagation();return}s==null||s(p)},h=p=>{p.key===" "&&(p.preventDefault(),u(p))};return t==="a"&&(n||(n="#"),e&&(n=void 0)),[{role:o??"button",disabled:void 0,tabIndex:e?void 0:i,href:n,target:t==="a"?a:void 0,"aria-disabled":e||void 0,rel:t==="a"?r:void 0,onClick:u,onKeyDown:h},l]}const uo=c.forwardRef((t,e)=>{let{as:n,disabled:a}=t,r=co(t,lo);const[o,{tagName:s}]=ha(Object.assign({tagName:n,disabled:a},r));return m.jsx(s,Object.assign({},r,o,{ref:e}))});uo.displayName="Button";function mo(t){return t.code==="Escape"||t.keyCode===27}function ga(){const t=c.version.split(".");return{major:+t[0],minor:+t[1],patch:+t[2]}}const po={[Q]:"show",[rt]:"show"},en=c.forwardRef(({className:t,children:e,transitionClasses:n={},onEnter:a,...r},o)=>{const s={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...r},i=c.useCallback((u,h)=>{Qr(u),a==null||a(u,h)},[a]),{major:f}=ga(),l=f>=19?e.props.ref:e.ref;return m.jsx(to,{ref:o,addEndListener:qr,...s,onEnter:i,childRef:l,children:(u,h)=>c.cloneElement(e,{...h,className:A("fade",t,e.props.className,po[u],n[u])})})});en.displayName="Fade";const ho={"aria-label":y.string,onClick:y.func,variant:y.oneOf(["white"])},nn=c.forwardRef(({className:t,variant:e,"aria-label":n="Close",...a},r)=>m.jsx("button",{ref:r,type:"button",className:A("btn-close",e&&`btn-close-${e}`,t),"aria-label":n,...a}));nn.displayName="CloseButton";nn.propTypes=ho;const an=c.forwardRef(({as:t,bsPrefix:e,variant:n="primary",size:a,active:r=!1,disabled:o=!1,className:s,...i},f)=>{const l=P(e,"btn"),[u,{tagName:h}]=ha({tagName:t,disabled:o,...i}),p=h;return m.jsx(p,{...u,...i,ref:f,disabled:o,className:A(s,l,r&&"active",n&&`${l}-${n}`,a&&`${l}-${a}`,i.href&&o&&"disabled")})});an.displayName="Button";function go(t){const e=c.useRef(t);return e.current=t,e}function ya(t){const e=go(t);c.useEffect(()=>()=>e.current(),[])}function yo(t,e){return c.Children.toArray(t).some(n=>c.isValidElement(n)&&n.type===e)}var bo=Function.prototype.bind.call(Function.prototype.call,[].slice);function gt(t,e){return bo(t.querySelectorAll(e))}function Tn(t,e){if(t.contains)return t.contains(e);if(t.compareDocumentPosition)return t===e||!!(t.compareDocumentPosition(e)&16)}const vo="data-rr-ui-",xo="rrUi";function Eo(t){return`${vo}${t}`}function Ol(t){return`${xo}${t}`}const ba=c.createContext(kt?window:void 0);ba.Provider;function rn(){return c.useContext(ba)}const wo={type:y.string,tooltip:y.bool,as:y.elementType},ie=c.forwardRef(({as:t="div",className:e,type:n="valid",tooltip:a=!1,...r},o)=>m.jsx(t,{...r,ref:o,className:A(e,`${n}-${a?"tooltip":"feedback"}`)}));ie.displayName="Feedback";ie.propTypes=wo;const U=c.createContext({}),on=c.forwardRef(({id:t,bsPrefix:e,className:n,type:a="checkbox",isValid:r=!1,isInvalid:o=!1,as:s="input",...i},f)=>{const{controlId:l}=c.useContext(U);return e=P(e,"form-check-input"),m.jsx(s,{...i,ref:f,type:a,id:t||l,className:A(n,e,r&&"is-valid",o&&"is-invalid")})});on.displayName="FormCheckInput";const ee=c.forwardRef(({bsPrefix:t,className:e,htmlFor:n,...a},r)=>{const{controlId:o}=c.useContext(U);return t=P(t,"form-check-label"),m.jsx("label",{...a,ref:r,htmlFor:n||o,className:A(e,t)})});ee.displayName="FormCheckLabel";const va=c.forwardRef(({id:t,bsPrefix:e,bsSwitchPrefix:n,inline:a=!1,reverse:r=!1,disabled:o=!1,isValid:s=!1,isInvalid:i=!1,feedbackTooltip:f=!1,feedback:l,feedbackType:u,className:h,style:p,title:b="",type:v="checkbox",label:C,children:x,as:E="input",...w},O)=>{e=P(e,"form-check"),n=P(n,"form-switch");const{controlId:R}=c.useContext(U),N=c.useMemo(()=>({controlId:t||R}),[R,t]),I=!x&&C!=null&&C!==!1||yo(x,ee),_=m.jsx(on,{...w,type:v==="switch"?"checkbox":v,ref:O,isValid:s,isInvalid:i,disabled:o,as:E});return m.jsx(U.Provider,{value:N,children:m.jsx("div",{style:p,className:A(h,I&&e,a&&`${e}-inline`,r&&`${e}-reverse`,v==="switch"&&n),children:x||m.jsxs(m.Fragment,{children:[_,I&&m.jsx(ee,{title:b,children:C}),l&&m.jsx(ie,{type:u,tooltip:f,children:l})]})})})});va.displayName="FormCheck";const ne=Object.assign(va,{Input:on,Label:ee}),xa=c.forwardRef(({bsPrefix:t,type:e,size:n,htmlSize:a,id:r,className:o,isValid:s=!1,isInvalid:i=!1,plaintext:f,readOnly:l,as:u="input",...h},p)=>{const{controlId:b}=c.useContext(U);return t=P(t,"form-control"),m.jsx(u,{...h,type:e,size:a,ref:p,readOnly:l,id:r||b,className:A(o,f?`${t}-plaintext`:t,n&&`${t}-${n}`,e==="color"&&`${t}-color`,s&&"is-valid",i&&"is-invalid")})});xa.displayName="FormControl";const ko=Object.assign(xa,{Feedback:ie}),Ea=c.forwardRef(({className:t,bsPrefix:e,as:n="div",...a},r)=>(e=P(e,"form-floating"),m.jsx(n,{ref:r,className:A(t,e),...a})));Ea.displayName="FormFloating";const sn=c.forwardRef(({controlId:t,as:e="div",...n},a)=>{const r=c.useMemo(()=>({controlId:t}),[t]);return m.jsx(U.Provider,{value:r,children:m.jsx(e,{...n,ref:a})})});sn.displayName="FormGroup";const wa=c.forwardRef(({as:t="label",bsPrefix:e,column:n=!1,visuallyHidden:a=!1,className:r,htmlFor:o,...s},i)=>{const{controlId:f}=c.useContext(U);e=P(e,"form-label");let l="col-form-label";typeof n=="string"&&(l=`${l} ${l}-${n}`);const u=A(r,e,a&&"visually-hidden",n&&l);return o=o||f,n?m.jsx(Ir,{ref:i,as:"label",className:u,htmlFor:o,...s}):m.jsx(t,{ref:i,className:u,htmlFor:o,...s})});wa.displayName="FormLabel";const ka=c.forwardRef(({bsPrefix:t,className:e,id:n,...a},r)=>{const{controlId:o}=c.useContext(U);return t=P(t,"form-range"),m.jsx("input",{...a,type:"range",ref:r,className:A(e,t),id:n||o})});ka.displayName="FormRange";const Ca=c.forwardRef(({bsPrefix:t,size:e,htmlSize:n,className:a,isValid:r=!1,isInvalid:o=!1,id:s,...i},f)=>{const{controlId:l}=c.useContext(U);return t=P(t,"form-select"),m.jsx("select",{...i,size:n,ref:f,className:A(a,t,e&&`${t}-${e}`,r&&"is-valid",o&&"is-invalid"),id:s||l})});Ca.displayName="FormSelect";const Oa=c.forwardRef(({bsPrefix:t,className:e,as:n="small",muted:a,...r},o)=>(t=P(t,"form-text"),m.jsx(n,{...r,ref:o,className:A(e,t,a&&"text-muted")})));Oa.displayName="FormText";const Sa=c.forwardRef((t,e)=>m.jsx(ne,{...t,ref:e,type:"switch"}));Sa.displayName="Switch";const Co=Object.assign(Sa,{Input:ne.Input,Label:ne.Label}),Aa=c.forwardRef(({bsPrefix:t,className:e,children:n,controlId:a,label:r,...o},s)=>(t=P(t,"form-floating"),m.jsxs(sn,{ref:s,className:A(e,t),controlId:a,...o,children:[n,m.jsx("label",{htmlFor:a,children:r})]})));Aa.displayName="FloatingLabel";const Oo={_ref:y.any,validated:y.bool,as:y.elementType},ln=c.forwardRef(({className:t,validated:e,as:n="form",...a},r)=>m.jsx(n,{...a,ref:r,className:A(t,e&&"was-validated")}));ln.displayName="Form";ln.propTypes=Oo;const So=Object.assign(ln,{Group:sn,Control:ko,Floating:Ea,Check:ne,Switch:Co,Label:wa,Text:Oa,Range:ka,Select:Ca,FloatingLabel:Aa});var Vt;function Nn(t){if((!Vt&&Vt!==0||t)&&kt){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e),Vt=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return Vt}function ve(t){t===void 0&&(t=se());try{var e=t.activeElement;return!e||!e.nodeName?null:e}catch{return t.body}}function Ao(t=document){const e=t.defaultView;return Math.abs(e.innerWidth-t.documentElement.clientWidth)}const Rn=Eo("modal-open");class cn{constructor({ownerDocument:e,handleContainerOverflow:n=!0,isRTL:a=!1}={}){this.handleContainerOverflow=n,this.isRTL=a,this.modals=[],this.ownerDocument=e}getScrollbarWidth(){return Ao(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(e){}removeModalAttributes(e){}setContainerStyle(e){const n={overflow:"hidden"},a=this.isRTL?"paddingLeft":"paddingRight",r=this.getElement();e.style={overflow:r.style.overflow,[a]:r.style[a]},e.scrollBarWidth&&(n[a]=`${parseInt(st(r,a)||"0",10)+e.scrollBarWidth}px`),r.setAttribute(Rn,""),st(r,n)}reset(){[...this.modals].forEach(e=>this.remove(e))}removeContainerStyle(e){const n=this.getElement();n.removeAttribute(Rn),Object.assign(n.style,e.style)}add(e){let n=this.modals.indexOf(e);return n!==-1||(n=this.modals.length,this.modals.push(e),this.setModalAttributes(e),n!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),n}remove(e){const n=this.modals.indexOf(e);n!==-1&&(this.modals.splice(n,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(e))}isTopModal(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e}}const xe=(t,e)=>kt?t==null?(e||se()).body:(typeof t=="function"&&(t=t()),t&&"current"in t&&(t=t.current),t&&("nodeType"in t||t.getBoundingClientRect)?t:null):null;function To(t,e){const n=rn(),[a,r]=c.useState(()=>xe(t,n==null?void 0:n.document));if(!a){const o=xe(t);o&&r(o)}return c.useEffect(()=>{},[e,a]),c.useEffect(()=>{const o=xe(t);o!==a&&r(o)},[t,a]),a}function No({children:t,in:e,onExited:n,mountOnEnter:a,unmountOnExit:r}){const o=c.useRef(null),s=c.useRef(e),i=$(n);c.useEffect(()=>{e?s.current=!0:i(o.current)},[e,i]);const f=Mt(o,t.ref),l=c.cloneElement(t,{ref:f});return e?l:r||!s.current&&a?null:l}const Ro=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"];function Io(t,e){if(t==null)return{};var n={};for(var a in t)if({}.hasOwnProperty.call(t,a)){if(e.indexOf(a)>=0)continue;n[a]=t[a]}return n}function Po(t){let{onEnter:e,onEntering:n,onEntered:a,onExit:r,onExiting:o,onExited:s,addEndListener:i,children:f}=t,l=Io(t,Ro);const{major:u}=ga(),h=u>=19?f.props.ref:f.ref,p=c.useRef(null),b=Mt(p,typeof f=="function"?null:h),v=I=>_=>{I&&p.current&&I(p.current,_)},C=c.useCallback(v(e),[e]),x=c.useCallback(v(n),[n]),E=c.useCallback(v(a),[a]),w=c.useCallback(v(r),[r]),O=c.useCallback(v(o),[o]),R=c.useCallback(v(s),[s]),N=c.useCallback(v(i),[i]);return Object.assign({},l,{nodeRef:p},e&&{onEnter:C},n&&{onEntering:x},a&&{onEntered:E},r&&{onExit:w},o&&{onExiting:O},s&&{onExited:R},i&&{addEndListener:N},{children:typeof f=="function"?(I,_)=>f(I,Object.assign({},_,{ref:b})):c.cloneElement(f,{ref:b})})}const _o=["component"];function Fo(t,e){if(t==null)return{};var n={};for(var a in t)if({}.hasOwnProperty.call(t,a)){if(e.indexOf(a)>=0)continue;n[a]=t[a]}return n}const jo=c.forwardRef((t,e)=>{let{component:n}=t,a=Fo(t,_o);const r=Po(a);return m.jsx(n,Object.assign({ref:e},r))});function Mo({in:t,onTransition:e}){const n=c.useRef(null),a=c.useRef(!0),r=$(e);return An(()=>{if(!n.current)return;let o=!1;return r({in:t,element:n.current,initial:a.current,isStale:()=>o}),()=>{o=!0}},[t,r]),An(()=>(a.current=!1,()=>{a.current=!0}),[]),n}function Lo({children:t,in:e,onExited:n,onEntered:a,transition:r}){const[o,s]=c.useState(!e);e&&o&&s(!1);const i=Mo({in:!!e,onTransition:l=>{const u=()=>{l.isStale()||(l.in?a==null||a(l.element,l.initial):(s(!0),n==null||n(l.element)))};Promise.resolve(r(l)).then(u,h=>{throw l.in||s(!0),h})}}),f=Mt(i,t.ref);return o&&!e?null:c.cloneElement(t,{ref:f})}function In(t,e,n){return t?m.jsx(jo,Object.assign({},n,{component:t})):e?m.jsx(Lo,Object.assign({},n,{transition:e})):m.jsx(No,Object.assign({},n))}const Do=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function $o(t,e){if(t==null)return{};var n={};for(var a in t)if({}.hasOwnProperty.call(t,a)){if(e.indexOf(a)>=0)continue;n[a]=t[a]}return n}let Ee;function zo(t){return Ee||(Ee=new cn({ownerDocument:t==null?void 0:t.document})),Ee}function Wo(t){const e=rn(),n=t||zo(e),a=c.useRef({dialog:null,backdrop:null});return Object.assign(a.current,{add:()=>n.add(a.current),remove:()=>n.remove(a.current),isTopModal:()=>n.isTopModal(a.current),setDialogRef:c.useCallback(r=>{a.current.dialog=r},[]),setBackdropRef:c.useCallback(r=>{a.current.backdrop=r},[])})}const Ta=c.forwardRef((t,e)=>{let{show:n=!1,role:a="dialog",className:r,style:o,children:s,backdrop:i=!0,keyboard:f=!0,onBackdropClick:l,onEscapeKeyDown:u,transition:h,runTransition:p,backdropTransition:b,runBackdropTransition:v,autoFocus:C=!0,enforceFocus:x=!0,restoreFocus:E=!0,restoreFocusOptions:w,renderDialog:O,renderBackdrop:R=T=>m.jsx("div",Object.assign({},T)),manager:N,container:I,onShow:_,onHide:et=()=>{},onExit:me,onExited:Ot,onExiting:$t,onEnter:zt,onEntering:Wt,onEntered:Bt}=t,pe=$o(t,Do);const V=rn(),ct=To(I),F=Wo(N),he=ro(),Ut=oo(n),[nt,ft]=c.useState(!n),L=c.useRef(null);c.useImperativeHandle(e,()=>F,[F]),kt&&!Ut&&n&&(L.current=ve(V==null?void 0:V.document)),n&&nt&&ft(!1);const K=$(()=>{if(F.add(),ut.current=te(document,"keydown",ye),At.current=te(document,"focus",()=>setTimeout(ge),!0),_&&_(),C){var T,Gt;const Nt=ve((T=(Gt=F.dialog)==null?void 0:Gt.ownerDocument)!=null?T:V==null?void 0:V.document);F.dialog&&Nt&&!Tn(F.dialog,Nt)&&(L.current=Nt,F.dialog.focus())}}),St=$(()=>{if(F.remove(),ut.current==null||ut.current(),At.current==null||At.current(),E){var T;(T=L.current)==null||T.focus==null||T.focus(w),L.current=null}});c.useEffect(()=>{!n||!ct||K()},[n,ct,K]),c.useEffect(()=>{nt&&St()},[nt,St]),ya(()=>{St()});const ge=$(()=>{if(!x||!he()||!F.isTopModal())return;const T=ve(V==null?void 0:V.document);F.dialog&&T&&!Tn(F.dialog,T)&&F.dialog.focus()}),Yt=$(T=>{T.target===T.currentTarget&&(l==null||l(T),i===!0&&et())}),ye=$(T=>{f&&mo(T)&&F.isTopModal()&&(u==null||u(T),T.defaultPrevented||et())}),At=c.useRef(),ut=c.useRef(),Ht=(...T)=>{ft(!0),Ot==null||Ot(...T)};if(!ct)return null;const dt=Object.assign({role:a,ref:F.setDialogRef,"aria-modal":a==="dialog"?!0:void 0},pe,{style:o,className:r,tabIndex:-1});let Tt=O?O(dt):m.jsx("div",Object.assign({},dt,{children:c.cloneElement(s,{role:"document"})}));Tt=In(h,p,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!n,onExit:me,onExiting:$t,onExited:Ht,onEnter:zt,onEntering:Wt,onEntered:Bt,children:Tt});let mt=null;return i&&(mt=R({ref:F.setBackdropRef,onClick:Yt}),mt=In(b,v,{in:!!n,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:mt})),m.jsx(m.Fragment,{children:bt.createPortal(m.jsxs(m.Fragment,{children:[mt,Tt]}),ct)})});Ta.displayName="Modal";const Bo=Object.assign(Ta,{Manager:cn});function Uo(t,e){return t.classList?t.classList.contains(e):(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+e+" ")!==-1}function Yo(t,e){t.classList?t.classList.add(e):Uo(t,e)||(typeof t.className=="string"?t.className=t.className+" "+e:t.setAttribute("class",(t.className&&t.className.baseVal||"")+" "+e))}function Pn(t,e){return t.replace(new RegExp("(^|\\s)"+e+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function Ho(t,e){t.classList?t.classList.remove(e):typeof t.className=="string"?t.className=Pn(t.className,e):t.setAttribute("class",Pn(t.className&&t.className.baseVal||"",e))}const yt={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class Go extends cn{adjustAndStore(e,n,a){const r=n.style[e];n.dataset[e]=r,st(n,{[e]:`${parseFloat(st(n,e))+a}px`})}restore(e,n){const a=n.dataset[e];a!==void 0&&(delete n.dataset[e],st(n,{[e]:a}))}setContainerStyle(e){super.setContainerStyle(e);const n=this.getElement();if(Yo(n,"modal-open"),!e.scrollBarWidth)return;const a=this.isRTL?"paddingLeft":"paddingRight",r=this.isRTL?"marginLeft":"marginRight";gt(n,yt.FIXED_CONTENT).forEach(o=>this.adjustAndStore(a,o,e.scrollBarWidth)),gt(n,yt.STICKY_CONTENT).forEach(o=>this.adjustAndStore(r,o,-e.scrollBarWidth)),gt(n,yt.NAVBAR_TOGGLER).forEach(o=>this.adjustAndStore(r,o,e.scrollBarWidth))}removeContainerStyle(e){super.removeContainerStyle(e);const n=this.getElement();Ho(n,"modal-open");const a=this.isRTL?"paddingLeft":"paddingRight",r=this.isRTL?"marginLeft":"marginRight";gt(n,yt.FIXED_CONTENT).forEach(o=>this.restore(a,o)),gt(n,yt.STICKY_CONTENT).forEach(o=>this.restore(r,o)),gt(n,yt.NAVBAR_TOGGLER).forEach(o=>this.restore(r,o))}}let we;function Xo(t){return we||(we=new Go(t)),we}const Na=c.forwardRef(({className:t,bsPrefix:e,as:n="div",...a},r)=>(e=P(e,"modal-body"),m.jsx(n,{ref:r,className:A(t,e),...a})));Na.displayName="ModalBody";const Ra=c.createContext({onHide(){}}),fn=c.forwardRef(({bsPrefix:t,className:e,contentClassName:n,centered:a,size:r,fullscreen:o,children:s,scrollable:i,...f},l)=>{t=P(t,"modal");const u=`${t}-dialog`,h=typeof o=="string"?`${t}-fullscreen-${o}`:`${t}-fullscreen`;return m.jsx("div",{...f,ref:l,className:A(u,e,r&&`${t}-${r}`,a&&`${u}-centered`,i&&`${u}-scrollable`,o&&h),children:m.jsx("div",{className:A(`${t}-content`,n),children:s})})});fn.displayName="ModalDialog";const Ia=c.forwardRef(({className:t,bsPrefix:e,as:n="div",...a},r)=>(e=P(e,"modal-footer"),m.jsx(n,{ref:r,className:A(t,e),...a})));Ia.displayName="ModalFooter";const Vo=c.forwardRef(({closeLabel:t="Close",closeVariant:e,closeButton:n=!1,onHide:a,children:r,...o},s)=>{const i=c.useContext(Ra),f=$(()=>{i==null||i.onHide(),a==null||a()});return m.jsxs("div",{ref:s,...o,children:[r,n&&m.jsx(nn,{"aria-label":t,variant:e,onClick:f})]})}),Pa=c.forwardRef(({bsPrefix:t,className:e,closeLabel:n="Close",closeButton:a=!1,...r},o)=>(t=P(t,"modal-header"),m.jsx(Vo,{ref:o,...r,className:A(e,t),closeLabel:n,closeButton:a})));Pa.displayName="ModalHeader";const Ko=no("h4"),_a=c.forwardRef(({className:t,bsPrefix:e,as:n=Ko,...a},r)=>(e=P(e,"modal-title"),m.jsx(n,{ref:r,className:A(t,e),...a})));_a.displayName="ModalTitle";function qo(t){return m.jsx(en,{...t,timeout:null})}function Qo(t){return m.jsx(en,{...t,timeout:null})}const Fa=c.forwardRef(({bsPrefix:t,className:e,style:n,dialogClassName:a,contentClassName:r,children:o,dialogAs:s=fn,"data-bs-theme":i,"aria-labelledby":f,"aria-describedby":l,"aria-label":u,show:h=!1,animation:p=!0,backdrop:b=!0,keyboard:v=!0,onEscapeKeyDown:C,onShow:x,onHide:E,container:w,autoFocus:O=!0,enforceFocus:R=!0,restoreFocus:N=!0,restoreFocusOptions:I,onEntered:_,onExit:et,onExiting:me,onEnter:Ot,onEntering:$t,onExited:zt,backdropClassName:Wt,manager:Bt,...pe},V)=>{const[ct,F]=c.useState({}),[he,Ut]=c.useState(!1),nt=c.useRef(!1),ft=c.useRef(!1),L=c.useRef(null),[K,St]=ao(),ge=Mt(V,St),Yt=$(E),ye=Ar();t=P(t,"modal");const At=c.useMemo(()=>({onHide:Yt}),[Yt]);function ut(){return Bt||Xo({isRTL:ye})}function Ht(k){if(!kt)return;const pt=ut().getScrollbarWidth()>0,kn=k.scrollHeight>se(k).documentElement.clientHeight;F({paddingRight:pt&&!kn?Nn():void 0,paddingLeft:!pt&&kn?Nn():void 0})}const dt=$(()=>{K&&Ht(K.dialog)});ya(()=>{Fe(window,"resize",dt),L.current==null||L.current()});const Tt=()=>{nt.current=!0},mt=k=>{nt.current&&K&&k.target===K.dialog&&(ft.current=!0),nt.current=!1},T=()=>{Ut(!0),L.current=pa(K.dialog,()=>{Ut(!1)})},Gt=k=>{k.target===k.currentTarget&&T()},Nt=k=>{if(b==="static"){Gt(k);return}if(ft.current||k.target!==k.currentTarget){ft.current=!1;return}E==null||E()},vr=k=>{v?C==null||C(k):(k.preventDefault(),b==="static"&&T())},xr=(k,pt)=>{k&&Ht(k),Ot==null||Ot(k,pt)},Er=k=>{L.current==null||L.current(),et==null||et(k)},wr=(k,pt)=>{$t==null||$t(k,pt),ma(window,"resize",dt)},kr=k=>{k&&(k.style.display=""),zt==null||zt(k),Fe(window,"resize",dt)},Cr=c.useCallback(k=>m.jsx("div",{...k,className:A(`${t}-backdrop`,Wt,!p&&"show")}),[p,Wt,t]),wn={...n,...ct};wn.display="block";const Or=k=>m.jsx("div",{role:"dialog",...k,style:wn,className:A(e,t,he&&`${t}-static`,!p&&"show"),onClick:b?Nt:void 0,onMouseUp:mt,"data-bs-theme":i,"aria-label":u,"aria-labelledby":f,"aria-describedby":l,children:m.jsx(s,{...pe,onMouseDown:Tt,className:a,contentClassName:r,children:o})});return m.jsx(Ra.Provider,{value:At,children:m.jsx(Bo,{show:h,ref:ge,backdrop:b,container:w,keyboard:!0,autoFocus:O,enforceFocus:R,restoreFocus:N,restoreFocusOptions:I,onEscapeKeyDown:vr,onShow:x,onHide:E,onEnter:xr,onEntering:wr,onEntered:_,onExit:Er,onExiting:me,onExited:kr,manager:ut(),transition:p?qo:void 0,backdropTransition:p?Qo:void 0,renderBackdrop:Cr,renderDialog:Or})})});Fa.displayName="Modal";const Kt=Object.assign(Fa,{Body:Na,Header:Pa,Title:_a,Footer:Ia,Dialog:fn,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150}),je=c.forwardRef(({bsPrefix:t,variant:e,animation:n="border",size:a,as:r="div",className:o,...s},i)=>{t=P(t,"spinner");const f=`${t}-${n}`;return m.jsx(r,{ref:i,...s,className:A(o,f,a&&`${f}-${a}`,e&&`text-${e}`)})});je.displayName="Spinner";const ke={"product-column":"_product-column_1eobu_5","productImg-column":"_productImg-column_1eobu_11","productInfo-column":"_productInfo-column_1eobu_35","product-row":"_product-row_1eobu_97","productImg-row":"_productImg-row_1eobu_113","productInfo-row":"_productInfo-row_1eobu_169"},ja=({title:t,img:e,price:n,quantity:a,direction:r="row",children:o,style:s})=>m.jsxs("div",{className:`${ke[`product-${r}`]}`,style:s,children:[m.jsx("div",{className:`${ke[`productImg-${r}`]}`,children:m.jsx("img",{src:e,alt:"title"})}),m.jsxs("div",{className:`${ke[`productInfo-${r}`]}`,children:[m.jsx("h2",{title:t,children:t}),m.jsxs("h3",{children:[n.toFixed(2)," EGP"]}),a&&m.jsxs("h3",{children:["Total Quantity : ",a]}),a&&m.jsxs("h3",{children:["Total Price : ",a*n," "]}),o]})]}),Zo=t=>c.createElement("svg",{fill:"#ED4D5E",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"21px",height:"21px",viewBox:"0 0 96.294 96.294",xmlSpace:"preserve",...t},c.createElement("g",null,c.createElement("path",{d:"M64.755,14.763c11.324,0,20.537,9.214,20.537,20.538c0,11.024-18.056,30.068-37.148,44.51 C29.066,65.389,11,46.337,11,35.301c0-11.324,9.213-20.538,20.537-20.538c3.836,0,7.572,1.062,10.806,3.07l5.803,3.605l5.804-3.604 C57.184,15.825,60.919,14.763,64.755,14.763 M64.755,3.763c-5.909,0-11.625,1.63-16.609,4.726 c-4.984-3.096-10.699-4.726-16.609-4.726C14.147,3.763,0,17.91,0,35.301c0,22.539,38.227,51.024,45.892,56.507 c0.663,0.473,1.442,0.723,2.255,0.723c0.816,0,1.599-0.252,2.257-0.727c7.664-5.483,45.89-33.981,45.89-56.503 C96.292,17.911,82.145,3.763,64.755,3.763L64.755,3.763z"}))),Jo=t=>c.createElement("svg",{fill:"#ED4D5E",height:"21px",width:"21px",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 51.997 51.997",xmlSpace:"preserve",...t},c.createElement("path",{d:"M51.911,16.242C51.152,7.888,45.239,1.827,37.839,1.827c-4.93,0-9.444,2.653-11.984,6.905 c-2.517-4.307-6.846-6.906-11.697-6.906c-7.399,0-13.313,6.061-14.071,14.415c-0.06,0.369-0.306,2.311,0.442,5.478 c1.078,4.568,3.568,8.723,7.199,12.013l18.115,16.439l18.426-16.438c3.631-3.291,6.121-7.445,7.199-12.014 C52.216,18.553,51.97,16.611,51.911,16.242z"})),ts="_maxSize_10v2h_3",es="_wishlistBtn_10v2h_11",ns={maxSize:ts,wishlistBtn:es},{maxSize:as,wishlistBtn:rs}=ns,Sl=c.memo(({id:t,title:e,price:n,img:a,max:r,quantity:o,isLiked:s,isAuthenticated:i})=>{const f=Tr(),[l,u]=c.useState(!1),[h,p]=c.useState(!1),[b,v]=c.useState(!1),C=r-(o??0);//!  ( condition ?? ) called = collasing operator
const x=C<=0;c.useEffect(()=>{if(!h)return;const O=setTimeout(()=>{p(!1)},300);return()=>clearTimeout(O)},[h]);const E=()=>{f(Nr(t)),p(!0)},w=()=>{i?b||(v(!0),f(Rr(t)).unwrap().then(()=>{v(!1)}).catch(()=>{v(!1)})):u(!0)};return m.jsxs(m.Fragment,{children:[m.jsxs(Kt,{show:l,onHide:()=>u(!1),children:[m.jsx(Kt.Header,{closeButton:!0,children:m.jsx(Kt.Title,{children:"Login Required"})}),m.jsx(Kt.Body,{children:"You need to login first to add this item to your wishlist."})]}),m.jsxs(ja,{title:e,price:n,img:a,children:[m.jsx("div",{className:rs,onClick:w,children:b?m.jsx(je,{size:"sm",variant:"primary",animation:"border"}):s?m.jsx(Jo,{}):m.jsx(Zo,{})}),m.jsx("p",{className:as,children:C?`You can add : ${C} limits`:"You reach to the limit"}),m.jsx(an,{variant:"info",style:{color:"white",width:"100%",backgroundColor:h||x?"#343a40":void 0},onClick:E,disabled:h||x,children:h?m.jsxs(m.Fragment,{children:[m.jsx(je,{animation:"border",size:"sm"})," Loading..."]}):"Add to Cart"})]})]})}),os="_cartItem_938m_1",ss={cartItem:os},{cartItem:is,cartItemSelection:ls}=ss,Al=c.memo(({id:t,title:e,img:n,price:a,max:r,quantity:o,changeQuantityHandler:s,RemoveItemHandler:i})=>{const f=Array(r).fill(0).map((h,p)=>{const b=++p;return m.jsx("option",{value:b,children:b},b)}),l=h=>{const p=+h.target.value;s(t,p)},u=()=>{i(t)};return m.jsxs("div",{className:is,children:[m.jsx(ja,{title:e,img:n,price:a,direction:"column",children:m.jsx(an,{variant:"secondary",style:{color:"white",width:"100px"},className:"mt-auto",onClick:u,children:"Remove"})}),m.jsxs("div",{className:ls,children:[m.jsx("span",{className:"d-block mb-1",children:"Quantity"}),m.jsx(So.Select,{value:o,onChange:l,children:f})]})]})});/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function cs(t,e,n){return(e=us(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _n(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?_n(Object(n),!0).forEach(function(a){cs(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):_n(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function fs(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function us(t){var e=fs(t,"string");return typeof e=="symbol"?e:e+""}const Fn=()=>{};let un={},Ma={},La=null,Da={mark:Fn,measure:Fn};try{typeof window<"u"&&(un=window),typeof document<"u"&&(Ma=document),typeof MutationObserver<"u"&&(La=MutationObserver),typeof performance<"u"&&(Da=performance)}catch{}const{userAgent:jn=""}=un.navigator||{},Z=un,S=Ma,Mn=La,qt=Da;Z.document;const X=!!S.documentElement&&!!S.head&&typeof S.addEventListener=="function"&&typeof S.createElement=="function",$a=~jn.indexOf("MSIE")||~jn.indexOf("Trident/");var ds=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,ms=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,za={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},ps={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Wa=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],j="classic",le="duotone",hs="sharp",gs="sharp-duotone",Ba=[j,le,hs,gs],ys={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},bs={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},vs=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),xs={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Es=["fak","fa-kit","fakd","fa-kit-duotone"],Ln={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},ws=["kit"],ks={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},Cs=["fak","fakd"],Os={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},Dn={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Qt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ss=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],As=["fak","fa-kit","fakd","fa-kit-duotone"],Ts={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Ns={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},Rs={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Me={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},Is=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Le=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...Ss,...Is],Ps=["solid","regular","light","thin","duotone","brands"],Ua=[1,2,3,4,5,6,7,8,9,10],_s=Ua.concat([11,12,13,14,15,16,17,18,19,20]),Fs=[...Object.keys(Rs),...Ps,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Qt.GROUP,Qt.SWAP_OPACITY,Qt.PRIMARY,Qt.SECONDARY].concat(Ua.map(t=>"".concat(t,"x"))).concat(_s.map(t=>"w-".concat(t))),js={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const Y="___FONT_AWESOME___",De=16,Ya="fa",Ha="svg-inline--fa",it="data-fa-i2svg",$e="data-fa-pseudo-element",Ms="data-fa-pseudo-element-pending",dn="data-prefix",mn="data-icon",$n="fontawesome-i2svg",Ls="async",Ds=["HTML","HEAD","STYLE","SCRIPT"],Ga=(()=>{try{return!0}catch{return!1}})();function Lt(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[j]}})}const Xa=d({},za);Xa[j]=d(d(d(d({},{"fa-duotone":"duotone"}),za[j]),Ln.kit),Ln["kit-duotone"]);const $s=Lt(Xa),ze=d({},xs);ze[j]=d(d(d(d({},{duotone:"fad"}),ze[j]),Dn.kit),Dn["kit-duotone"]);const zn=Lt(ze),We=d({},Me);We[j]=d(d({},We[j]),Os.kit);const pn=Lt(We),Be=d({},Ns);Be[j]=d(d({},Be[j]),ks.kit);Lt(Be);const zs=ds,Va="fa-layers-text",Ws=ms,Bs=d({},ys);Lt(Bs);const Us=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ce=ps,Ys=[...ws,...Fs],Pt=Z.FontAwesomeConfig||{};function Hs(t){var e=S.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Gs(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}S&&typeof S.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e;const r=Gs(Hs(n));r!=null&&(Pt[a]=r)});const Ka={styleDefault:"solid",familyDefault:j,cssPrefix:Ya,replacementClass:Ha,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Pt.familyPrefix&&(Pt.cssPrefix=Pt.familyPrefix);const wt=d(d({},Ka),Pt);wt.autoReplaceSvg||(wt.observeMutations=!1);const g={};Object.keys(Ka).forEach(t=>{Object.defineProperty(g,t,{enumerable:!0,set:function(e){wt[t]=e,_t.forEach(n=>n(g))},get:function(){return wt[t]}})});Object.defineProperty(g,"familyPrefix",{enumerable:!0,set:function(t){wt.cssPrefix=t,_t.forEach(e=>e(g))},get:function(){return wt.cssPrefix}});Z.FontAwesomeConfig=g;const _t=[];function Xs(t){return _t.push(t),()=>{_t.splice(_t.indexOf(t),1)}}const q=De,z={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Vs(t){if(!t||!X)return;const e=S.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=S.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const o=n[r],s=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(a=o)}return S.head.insertBefore(e,a),t}const Ks="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ft(){let t=12,e="";for(;t-- >0;)e+=Ks[Math.random()*62|0];return e}function Ct(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function hn(t){return t.classList?Ct(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function qa(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function qs(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(qa(t[n]),'" '),"").trim()}function ce(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function gn(t){return t.size!==z.size||t.x!==z.x||t.y!==z.y||t.rotate!==z.rotate||t.flipX||t.flipY}function Qs(t){let{transform:e,containerWidth:n,iconWidth:a}=t;const r={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),i="rotate(".concat(e.rotate," 0 0)"),f={transform:"".concat(o," ").concat(s," ").concat(i)},l={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:f,path:l}}function Zs(t){let{transform:e,width:n=De,height:a=De,startCentered:r=!1}=t,o="";return r&&$a?o+="translate(".concat(e.x/q-n/2,"em, ").concat(e.y/q-a/2,"em) "):r?o+="translate(calc(-50% + ".concat(e.x/q,"em), calc(-50% + ").concat(e.y/q,"em)) "):o+="translate(".concat(e.x/q,"em, ").concat(e.y/q,"em) "),o+="scale(".concat(e.size/q*(e.flipX?-1:1),", ").concat(e.size/q*(e.flipY?-1:1),") "),o+="rotate(".concat(e.rotate,"deg) "),o}var Js=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function Qa(){const t=Ya,e=Ha,n=g.cssPrefix,a=g.replacementClass;let r=Js;if(n!==t||a!==e){const o=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),i=new RegExp("\\.".concat(e),"g");r=r.replace(o,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(i,".".concat(a))}return r}let Wn=!1;function Oe(){g.autoAddCss&&!Wn&&(Vs(Qa()),Wn=!0)}var ti={mixout(){return{dom:{css:Qa,insertCss:Oe}}},hooks(){return{beforeDOMElementCreation(){Oe()},beforeI2svg(){Oe()}}}};const H=Z||{};H[Y]||(H[Y]={});H[Y].styles||(H[Y].styles={});H[Y].hooks||(H[Y].hooks={});H[Y].shims||(H[Y].shims=[]);var W=H[Y];const Za=[],Ja=function(){S.removeEventListener("DOMContentLoaded",Ja),ae=1,Za.map(t=>t())};let ae=!1;X&&(ae=(S.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(S.readyState),ae||S.addEventListener("DOMContentLoaded",Ja));function ei(t){X&&(ae?setTimeout(t,0):Za.push(t))}function Dt(t){const{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?qa(t):"<".concat(e," ").concat(qs(n),">").concat(a.map(Dt).join(""),"</").concat(e,">")}function Bn(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Se=function(e,n,a,r){var o=Object.keys(e),s=o.length,i=n,f,l,u;for(a===void 0?(f=1,u=e[o[0]]):(f=0,u=a);f<s;f++)l=o[f],u=i(u,e[l],l,e);return u};function ni(t){const e=[];let n=0;const a=t.length;for(;n<a;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const o=t.charCodeAt(n++);(o&64512)==56320?e.push(((r&1023)<<10)+(o&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Ue(t){const e=ni(t);return e.length===1?e[0].toString(16):null}function ai(t,e){const n=t.length;let a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Un(t){return Object.keys(t).reduce((e,n)=>{const a=t[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function Ye(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=Un(e);typeof W.hooks.addPack=="function"&&!a?W.hooks.addPack(t,Un(e)):W.styles[t]=d(d({},W.styles[t]||{}),r),t==="fas"&&Ye("fa",e)}const{styles:jt,shims:ri}=W,tr=Object.keys(pn),oi=tr.reduce((t,e)=>(t[e]=Object.keys(pn[e]),t),{});let yn=null,er={},nr={},ar={},rr={},or={};function si(t){return~Ys.indexOf(t)}function ii(t,e){const n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!si(r)?r:null}const sr=()=>{const t=a=>Se(jt,(r,o,s)=>(r[s]=Se(o,a,{}),r),{});er=t((a,r,o)=>(r[3]&&(a[r[3]]=o),r[2]&&r[2].filter(i=>typeof i=="number").forEach(i=>{a[i.toString(16)]=o}),a)),nr=t((a,r,o)=>(a[o]=o,r[2]&&r[2].filter(i=>typeof i=="string").forEach(i=>{a[i]=o}),a)),or=t((a,r,o)=>{const s=r[2];return a[o]=o,s.forEach(i=>{a[i]=o}),a});const e="far"in jt||g.autoFetchSvg,n=Se(ri,(a,r)=>{const o=r[0];let s=r[1];const i=r[2];return s==="far"&&!e&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:i}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:i}),a},{names:{},unicodes:{}});ar=n.names,rr=n.unicodes,yn=fe(g.styleDefault,{family:g.familyDefault})};Xs(t=>{yn=fe(t.styleDefault,{family:g.familyDefault})});sr();function bn(t,e){return(er[t]||{})[e]}function li(t,e){return(nr[t]||{})[e]}function ot(t,e){return(or[t]||{})[e]}function ir(t){return ar[t]||{prefix:null,iconName:null}}function ci(t){const e=rr[t],n=bn("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function J(){return yn}const lr=()=>({prefix:null,iconName:null,rest:[]});function fi(t){let e=j;const n=tr.reduce((a,r)=>(a[r]="".concat(g.cssPrefix,"-").concat(r),a),{});return Ba.forEach(a=>{(t.includes(n[a])||t.some(r=>oi[a].includes(r)))&&(e=a)}),e}function fe(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=j}=e,a=$s[n][t];if(n===le&&!t)return"fad";const r=zn[n][t]||zn[n][a],o=t in W.styles?t:null;return r||o||null}function ui(t){let e=[],n=null;return t.forEach(a=>{const r=ii(g.cssPrefix,a);r?n=r:a&&e.push(a)}),{iconName:n,rest:e}}function Yn(t){return t.sort().filter((e,n,a)=>a.indexOf(e)===n)}function ue(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let a=null;const r=Le.concat(As),o=Yn(t.filter(h=>r.includes(h))),s=Yn(t.filter(h=>!Le.includes(h))),i=o.filter(h=>(a=h,!Wa.includes(h))),[f=null]=i,l=fi(o),u=d(d({},ui(s)),{},{prefix:fe(f,{family:l})});return d(d(d({},u),hi({values:t,family:l,styles:jt,config:g,canonical:u,givenPrefix:a})),di(n,a,u))}function di(t,e,n){let{prefix:a,iconName:r}=n;if(t||!a||!r)return{prefix:a,iconName:r};const o=e==="fa"?ir(r):{},s=ot(a,r);return r=o.iconName||s||r,a=o.prefix||a,a==="far"&&!jt.far&&jt.fas&&!g.autoFetchSvg&&(a="fas"),{prefix:a,iconName:r}}const mi=Ba.filter(t=>t!==j||t!==le),pi=Object.keys(Me).filter(t=>t!==j).map(t=>Object.keys(Me[t])).flat();function hi(t){const{values:e,family:n,canonical:a,givenPrefix:r="",styles:o={},config:s={}}=t,i=n===le,f=e.includes("fa-duotone")||e.includes("fad"),l=s.familyDefault==="duotone",u=a.prefix==="fad"||a.prefix==="fa-duotone";if(!i&&(f||l||u)&&(a.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),!a.prefix&&mi.includes(n)&&(Object.keys(o).find(p=>pi.includes(p))||s.autoFetchSvg)){const p=vs.get(n).defaultShortPrefixId;a.prefix=p,a.iconName=ot(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||r==="fa")&&(a.prefix=J()||"fas"),a}class gi{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(o=>{this.definitions[o]=d(d({},this.definitions[o]||{}),r[o]),Ye(o,r[o]);const s=pn[j][o];s&&Ye(s,r[o]),sr()})}reset(){this.definitions={}}_pullDefinitions(e,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:o,iconName:s,icon:i}=a[r],f=i[2];e[o]||(e[o]={}),f.length>0&&f.forEach(l=>{typeof l=="string"&&(e[o][l]=i)}),e[o][s]=i}),e}}let Hn=[],vt={};const Et={},yi=Object.keys(Et);function bi(t,e){let{mixoutsTo:n}=e;return Hn=t,vt={},Object.keys(Et).forEach(a=>{yi.indexOf(a)===-1&&delete Et[a]}),Hn.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(o=>{typeof r[o]=="function"&&(n[o]=r[o]),typeof r[o]=="object"&&Object.keys(r[o]).forEach(s=>{n[o]||(n[o]={}),n[o][s]=r[o][s]})}),a.hooks){const o=a.hooks();Object.keys(o).forEach(s=>{vt[s]||(vt[s]=[]),vt[s].push(o[s])})}a.provides&&a.provides(Et)}),n}function He(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(vt[t]||[]).forEach(s=>{e=s.apply(null,[e,...a])}),e}function lt(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];(vt[t]||[]).forEach(o=>{o.apply(null,n)})}function tt(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Et[t]?Et[t].apply(null,e):void 0}function Ge(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||J();if(e)return e=ot(n,e)||e,Bn(cr.definitions,n,e)||Bn(W.styles,n,e)}const cr=new gi,vi=()=>{g.autoReplaceSvg=!1,g.observeMutations=!1,lt("noAuto")},xi={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return X?(lt("beforeI2svg",t),tt("pseudoElements2svg",t),tt("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;g.autoReplaceSvg===!1&&(g.autoReplaceSvg=!0),g.observeMutations=!0,ei(()=>{wi({autoReplaceSvgRoot:e}),lt("watch",t)})}},Ei={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ot(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=fe(t[0]);return{prefix:n,iconName:ot(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(g.cssPrefix,"-"))>-1||t.match(zs))){const e=ue(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||J(),iconName:ot(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=J();return{prefix:e,iconName:ot(e,t)||t}}}},M={noAuto:vi,config:g,dom:xi,parse:Ei,library:cr,findIconDefinition:Ge,toHtml:Dt},wi=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=S}=t;(Object.keys(W.styles).length>0||g.autoFetchSvg)&&X&&g.autoReplaceSvg&&M.dom.i2svg({node:e})};function de(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>Dt(n))}}),Object.defineProperty(t,"node",{get:function(){if(!X)return;const n=S.createElement("div");return n.innerHTML=t.html,n.children}}),t}function ki(t){let{children:e,main:n,mask:a,attributes:r,styles:o,transform:s}=t;if(gn(s)&&n.found&&!a.found){const{width:i,height:f}=n,l={x:i/f/2,y:.5};r.style=ce(d(d({},o),{},{"transform-origin":"".concat(l.x+s.x/16,"em ").concat(l.y+s.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function Ci(t){let{prefix:e,iconName:n,children:a,attributes:r,symbol:o}=t;const s=o===!0?"".concat(e,"-").concat(g.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:d(d({},r),{},{id:s}),children:a}]}]}function vn(t){const{icons:{main:e,mask:n},prefix:a,iconName:r,transform:o,symbol:s,title:i,maskId:f,titleId:l,extra:u,watchable:h=!1}=t,{width:p,height:b}=n.found?n:e,v=Cs.includes(a),C=[g.replacementClass,r?"".concat(g.cssPrefix,"-").concat(r):""].filter(N=>u.classes.indexOf(N)===-1).filter(N=>N!==""||!!N).concat(u.classes).join(" ");let x={children:[],attributes:d(d({},u.attributes),{},{"data-prefix":a,"data-icon":r,class:C,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(b)})};const E=v&&!~u.classes.indexOf("fa-fw")?{width:"".concat(p/b*16*.0625,"em")}:{};h&&(x.attributes[it]=""),i&&(x.children.push({tag:"title",attributes:{id:x.attributes["aria-labelledby"]||"title-".concat(l||Ft())},children:[i]}),delete x.attributes.title);const w=d(d({},x),{},{prefix:a,iconName:r,main:e,mask:n,maskId:f,transform:o,symbol:s,styles:d(d({},E),u.styles)}),{children:O,attributes:R}=n.found&&e.found?tt("generateAbstractMask",w)||{children:[],attributes:{}}:tt("generateAbstractIcon",w)||{children:[],attributes:{}};return w.children=O,w.attributes=R,s?Ci(w):ki(w)}function Gn(t){const{content:e,width:n,height:a,transform:r,title:o,extra:s,watchable:i=!1}=t,f=d(d(d({},s.attributes),o?{title:o}:{}),{},{class:s.classes.join(" ")});i&&(f[it]="");const l=d({},s.styles);gn(r)&&(l.transform=Zs({transform:r,startCentered:!0,width:n,height:a}),l["-webkit-transform"]=l.transform);const u=ce(l);u.length>0&&(f.style=u);const h=[];return h.push({tag:"span",attributes:f,children:[e]}),o&&h.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),h}function Oi(t){const{content:e,title:n,extra:a}=t,r=d(d(d({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),o=ce(a.styles);o.length>0&&(r.style=o);const s=[];return s.push({tag:"span",attributes:r,children:[e]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}const{styles:Ae}=W;function Xe(t){const e=t[0],n=t[1],[a]=t.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(g.cssPrefix,"-").concat(Ce.GROUP)},children:[{tag:"path",attributes:{class:"".concat(g.cssPrefix,"-").concat(Ce.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(g.cssPrefix,"-").concat(Ce.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:r}}const Si={found:!1,width:512,height:512};function Ai(t,e){!Ga&&!g.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Ve(t,e){let n=e;return e==="fa"&&g.styleDefault!==null&&(e=J()),new Promise((a,r)=>{if(n==="fa"){const o=ir(t)||{};t=o.iconName||t,e=o.prefix||e}if(t&&e&&Ae[e]&&Ae[e][t]){const o=Ae[e][t];return a(Xe(o))}Ai(t,e),a(d(d({},Si),{},{icon:g.showMissingIcons&&t?tt("missingIconAbstract")||{}:{}}))})}const Xn=()=>{},Ke=g.measurePerformance&&qt&&qt.mark&&qt.measure?qt:{mark:Xn,measure:Xn},It='FA "6.7.2"',Ti=t=>(Ke.mark("".concat(It," ").concat(t," begins")),()=>fr(t)),fr=t=>{Ke.mark("".concat(It," ").concat(t," ends")),Ke.measure("".concat(It," ").concat(t),"".concat(It," ").concat(t," begins"),"".concat(It," ").concat(t," ends"))};var xn={begin:Ti,end:fr};const Zt=()=>{};function Vn(t){return typeof(t.getAttribute?t.getAttribute(it):null)=="string"}function Ni(t){const e=t.getAttribute?t.getAttribute(dn):null,n=t.getAttribute?t.getAttribute(mn):null;return e&&n}function Ri(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(g.replacementClass)}function Ii(){return g.autoReplaceSvg===!0?Jt.replace:Jt[g.autoReplaceSvg]||Jt.replace}function Pi(t){return S.createElementNS("http://www.w3.org/2000/svg",t)}function _i(t){return S.createElement(t)}function ur(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?Pi:_i}=e;if(typeof t=="string")return S.createTextNode(t);const a=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(o){a.setAttribute(o,t.attributes[o])}),(t.children||[]).forEach(function(o){a.appendChild(ur(o,{ceFn:n}))}),a}function Fi(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Jt={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(ur(n),e)}),e.getAttribute(it)===null&&g.keepOriginalSource){let n=S.createComment(Fi(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~hn(e).indexOf(g.replacementClass))return Jt.replace(t);const a=new RegExp("".concat(g.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const o=n[0].attributes.class.split(" ").reduce((s,i)=>(i===g.replacementClass||i.match(a)?s.toSvg.push(i):s.toNode.push(i),s),{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",o.toNode.join(" "))}const r=n.map(o=>Dt(o)).join(`
`);e.setAttribute(it,""),e.innerHTML=r}};function Kn(t){t()}function dr(t,e){const n=typeof e=="function"?e:Zt;if(t.length===0)n();else{let a=Kn;g.mutateApproach===Ls&&(a=Z.requestAnimationFrame||Kn),a(()=>{const r=Ii(),o=xn.begin("mutate");t.map(r),o(),n()})}}let En=!1;function mr(){En=!0}function qe(){En=!1}let re=null;function qn(t){if(!Mn||!g.observeMutations)return;const{treeCallback:e=Zt,nodeCallback:n=Zt,pseudoElementsCallback:a=Zt,observeMutationsRoot:r=S}=t;re=new Mn(o=>{if(En)return;const s=J();Ct(o).forEach(i=>{if(i.type==="childList"&&i.addedNodes.length>0&&!Vn(i.addedNodes[0])&&(g.searchPseudoElements&&a(i.target),e(i.target)),i.type==="attributes"&&i.target.parentNode&&g.searchPseudoElements&&a(i.target.parentNode),i.type==="attributes"&&Vn(i.target)&&~Us.indexOf(i.attributeName))if(i.attributeName==="class"&&Ni(i.target)){const{prefix:f,iconName:l}=ue(hn(i.target));i.target.setAttribute(dn,f||s),l&&i.target.setAttribute(mn,l)}else Ri(i.target)&&n(i.target)})}),X&&re.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function ji(){re&&re.disconnect()}function Mi(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((a,r)=>{const o=r.split(":"),s=o[0],i=o.slice(1);return s&&i.length>0&&(a[s]=i.join(":").trim()),a},{})),n}function Li(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"";let r=ue(hn(t));return r.prefix||(r.prefix=J()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=li(r.prefix,t.innerText)||bn(r.prefix,Ue(t.innerText))),!r.iconName&&g.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Di(t){const e=Ct(t.attributes).reduce((r,o)=>(r.name!=="class"&&r.name!=="style"&&(r[o.name]=o.value),r),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return g.autoA11y&&(n?e["aria-labelledby"]="".concat(g.replacementClass,"-title-").concat(a||Ft()):(e["aria-hidden"]="true",e.focusable="false")),e}function $i(){return{iconName:null,title:null,titleId:null,prefix:null,transform:z,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Qn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=Li(t),o=Di(t),s=He("parseNodeAttributes",{},t);let i=e.styleParser?Mi(t):[];return d({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:z,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:i,attributes:o}},s)}const{styles:zi}=W;function pr(t){const e=g.autoReplaceSvg==="nest"?Qn(t,{styleParser:!1}):Qn(t);return~e.extra.classes.indexOf(Va)?tt("generateLayersText",t,e):tt("generateSvgReplacementMutation",t,e)}function Wi(){return[...Es,...Le]}function Zn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!X)return Promise.resolve();const n=S.documentElement.classList,a=u=>n.add("".concat($n,"-").concat(u)),r=u=>n.remove("".concat($n,"-").concat(u)),o=g.autoFetchSvg?Wi():Wa.concat(Object.keys(zi));o.includes("fa")||o.push("fa");const s=[".".concat(Va,":not([").concat(it,"])")].concat(o.map(u=>".".concat(u,":not([").concat(it,"])"))).join(", ");if(s.length===0)return Promise.resolve();let i=[];try{i=Ct(t.querySelectorAll(s))}catch{}if(i.length>0)a("pending"),r("complete");else return Promise.resolve();const f=xn.begin("onTree"),l=i.reduce((u,h)=>{try{const p=pr(h);p&&u.push(p)}catch(p){Ga||p.name==="MissingIcon"&&console.error(p)}return u},[]);return new Promise((u,h)=>{Promise.all(l).then(p=>{dr(p,()=>{a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),f(),u()})}).catch(p=>{f(),h(p)})})}function Bi(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;pr(t).then(n=>{n&&dr([n],e)})}function Ui(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(e||{}).icon?e:Ge(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:Ge(r||{})),t(a,d(d({},n),{},{mask:r}))}}const Yi=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=z,symbol:a=!1,mask:r=null,maskId:o=null,title:s=null,titleId:i=null,classes:f=[],attributes:l={},styles:u={}}=e;if(!t)return;const{prefix:h,iconName:p,icon:b}=t;return de(d({type:"icon"},t),()=>(lt("beforeDOMElementCreation",{iconDefinition:t,params:e}),g.autoA11y&&(s?l["aria-labelledby"]="".concat(g.replacementClass,"-title-").concat(i||Ft()):(l["aria-hidden"]="true",l.focusable="false")),vn({icons:{main:Xe(b),mask:r?Xe(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:h,iconName:p,transform:d(d({},z),n),symbol:a,title:s,maskId:o,titleId:i,extra:{attributes:l,styles:u,classes:f}})))};var Hi={mixout(){return{icon:Ui(Yi)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Zn,t.nodeCallback=Bi,t}}},provides(t){t.i2svg=function(e){const{node:n=S,callback:a=()=>{}}=e;return Zn(n,a)},t.generateSvgReplacementMutation=function(e,n){const{iconName:a,title:r,titleId:o,prefix:s,transform:i,symbol:f,mask:l,maskId:u,extra:h}=n;return new Promise((p,b)=>{Promise.all([Ve(a,s),l.iconName?Ve(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(v=>{let[C,x]=v;p([e,vn({icons:{main:C,mask:x},prefix:s,iconName:a,transform:i,symbol:f,maskId:u,title:r,titleId:o,extra:h,watchable:!0})])}).catch(b)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:r,transform:o,styles:s}=e;const i=ce(s);i.length>0&&(a.style=i);let f;return gn(o)&&(f=tt("generateAbstractTransformGrouping",{main:r,transform:o,containerWidth:r.width,iconWidth:r.width})),n.push(f||r.icon),{children:n,attributes:a}}}},Gi={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return de({type:"layer"},()=>{lt("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(r=>{Array.isArray(r)?r.map(o=>{a=a.concat(o.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(g.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},Xi={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:o={}}=e;return de({type:"counter",content:t},()=>(lt("beforeDOMElementCreation",{content:t,params:e}),Oi({content:t.toString(),title:n,extra:{attributes:r,styles:o,classes:["".concat(g.cssPrefix,"-layers-counter"),...a]}})))}}}},Vi={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=z,title:a=null,classes:r=[],attributes:o={},styles:s={}}=e;return de({type:"text",content:t},()=>(lt("beforeDOMElementCreation",{content:t,params:e}),Gn({content:t,transform:d(d({},z),n),title:a,extra:{attributes:o,styles:s,classes:["".concat(g.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:a,transform:r,extra:o}=n;let s=null,i=null;if($a){const f=parseInt(getComputedStyle(e).fontSize,10),l=e.getBoundingClientRect();s=l.width/f,i=l.height/f}return g.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([e,Gn({content:e.innerHTML,width:s,height:i,transform:r,title:a,extra:o,watchable:!0})])}}};const Ki=new RegExp('"',"ug"),Jn=[1105920,1112319],ta=d(d(d(d({},{FontAwesome:{normal:"fas",400:"fas"}}),bs),js),Ts),Qe=Object.keys(ta).reduce((t,e)=>(t[e.toLowerCase()]=ta[e],t),{}),qi=Object.keys(Qe).reduce((t,e)=>{const n=Qe[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function Qi(t){const e=t.replace(Ki,""),n=ai(e,0),a=n>=Jn[0]&&n<=Jn[1],r=e.length===2?e[0]===e[1]:!1;return{value:Ue(r?e[0]:e),isSecondary:a||r}}function Zi(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),r=isNaN(a)?"normal":a;return(Qe[n]||{})[r]||qi[n]}function ea(t,e){const n="".concat(Ms).concat(e.replace(":","-"));return new Promise((a,r)=>{if(t.getAttribute(n)!==null)return a();const s=Ct(t.children).filter(p=>p.getAttribute($e)===e)[0],i=Z.getComputedStyle(t,e),f=i.getPropertyValue("font-family"),l=f.match(Ws),u=i.getPropertyValue("font-weight"),h=i.getPropertyValue("content");if(s&&!l)return t.removeChild(s),a();if(l&&h!=="none"&&h!==""){const p=i.getPropertyValue("content");let b=Zi(f,u);const{value:v,isSecondary:C}=Qi(p),x=l[0].startsWith("FontAwesome");let E=bn(b,v),w=E;if(x){const O=ci(v);O.iconName&&O.prefix&&(E=O.iconName,b=O.prefix)}if(E&&!C&&(!s||s.getAttribute(dn)!==b||s.getAttribute(mn)!==w)){t.setAttribute(n,w),s&&t.removeChild(s);const O=$i(),{extra:R}=O;R.attributes[$e]=e,Ve(E,b).then(N=>{const I=vn(d(d({},O),{},{icons:{main:N,mask:lr()},prefix:b,iconName:w,extra:R,watchable:!0})),_=S.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(_,t.firstChild):t.appendChild(_),_.outerHTML=I.map(et=>Dt(et)).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function Ji(t){return Promise.all([ea(t,"::before"),ea(t,"::after")])}function tl(t){return t.parentNode!==document.head&&!~Ds.indexOf(t.tagName.toUpperCase())&&!t.getAttribute($e)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function na(t){if(X)return new Promise((e,n)=>{const a=Ct(t.querySelectorAll("*")).filter(tl).map(Ji),r=xn.begin("searchPseudoElements");mr(),Promise.all(a).then(()=>{r(),qe(),e()}).catch(()=>{r(),qe(),n()})})}var el={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=na,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=S}=e;g.searchPseudoElements&&na(n)}}};let aa=!1;var nl={mixout(){return{dom:{unwatch(){mr(),aa=!0}}}},hooks(){return{bootstrap(){qn(He("mutationObserverCallbacks",{}))},noAuto(){ji()},watch(t){const{observeMutationsRoot:e}=t;aa?qe():qn(He("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const ra=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),o=r[0];let s=r.slice(1).join("-");if(o&&s==="h")return n.flipX=!0,n;if(o&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(o){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},e)};var al={mixout(){return{parse:{transform:t=>ra(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=ra(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:r,iconWidth:o}=e;const s={transform:"translate(".concat(r/2," 256)")},i="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),l="rotate(".concat(a.rotate," 0 0)"),u={transform:"".concat(i," ").concat(f," ").concat(l)},h={transform:"translate(".concat(o/2*-1," -256)")},p={outer:s,inner:u,path:h};return{tag:"g",attributes:d({},p.outer),children:[{tag:"g",attributes:d({},p.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:d(d({},n.icon.attributes),p.path)}]}]}}}};const Te={x:0,y:0,width:"100%",height:"100%"};function oa(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function rl(t){return t.tag==="g"?t.children:[t]}var ol={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),a=n?ue(n.split(" ").map(r=>r.trim())):lr();return a.prefix||(a.prefix=J()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:r,mask:o,maskId:s,transform:i}=e;const{width:f,icon:l}=r,{width:u,icon:h}=o,p=Qs({transform:i,containerWidth:u,iconWidth:f}),b={tag:"rect",attributes:d(d({},Te),{},{fill:"white"})},v=l.children?{children:l.children.map(oa)}:{},C={tag:"g",attributes:d({},p.inner),children:[oa(d({tag:l.tag,attributes:d(d({},l.attributes),p.path)},v))]},x={tag:"g",attributes:d({},p.outer),children:[C]},E="mask-".concat(s||Ft()),w="clip-".concat(s||Ft()),O={tag:"mask",attributes:d(d({},Te),{},{id:E,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[b,x]},R={tag:"defs",children:[{tag:"clipPath",attributes:{id:w},children:rl(h)},O]};return n.push(R,{tag:"rect",attributes:d({fill:"currentColor","clip-path":"url(#".concat(w,")"),mask:"url(#".concat(E,")")},Te)}),{children:n,attributes:a}}}},sl={provides(t){let e=!1;Z.matchMedia&&(e=Z.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:d(d({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const o=d(d({},r),{},{attributeName:"opacity"}),s={tag:"circle",attributes:d(d({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||s.children.push({tag:"animate",attributes:d(d({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:d(d({},o),{},{values:"1;0;1;1;0;1;"})}),n.push(s),n.push({tag:"path",attributes:d(d({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:d(d({},o),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:d(d({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:d(d({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},il={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return t.symbol=a,t}}}},ll=[ti,Hi,Gi,Xi,Vi,el,nl,al,ol,sl,il];bi(ll,{mixoutsTo:M});M.noAuto;M.config;M.library;M.dom;const Ze=M.parse;M.findIconDefinition;M.toHtml;const cl=M.icon;M.layer;M.text;M.counter;function sa(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function D(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?sa(Object(n),!0).forEach(function(a){xt(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):sa(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function oe(t){"@babel/helpers - typeof";return oe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},oe(t)}function xt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function fl(t,e){if(t==null)return{};var n={},a=Object.keys(t),r,o;for(o=0;o<a.length;o++)r=a[o],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function ul(t,e){if(t==null)return{};var n=fl(t,e),a,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}function Je(t){return dl(t)||ml(t)||pl(t)||hl()}function dl(t){if(Array.isArray(t))return tn(t)}function ml(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function pl(t,e){if(t){if(typeof t=="string")return tn(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return tn(t,e)}}function tn(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function hl(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function gl(t){var e,n=t.beat,a=t.fade,r=t.beatFade,o=t.bounce,s=t.shake,i=t.flash,f=t.spin,l=t.spinPulse,u=t.spinReverse,h=t.pulse,p=t.fixedWidth,b=t.inverse,v=t.border,C=t.listItem,x=t.flip,E=t.size,w=t.rotation,O=t.pull,R=(e={"fa-beat":n,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":o,"fa-shake":s,"fa-flash":i,"fa-spin":f,"fa-spin-reverse":u,"fa-spin-pulse":l,"fa-pulse":h,"fa-fw":p,"fa-inverse":b,"fa-border":v,"fa-li":C,"fa-flip":x===!0,"fa-flip-horizontal":x==="horizontal"||x==="both","fa-flip-vertical":x==="vertical"||x==="both"},xt(e,"fa-".concat(E),typeof E<"u"&&E!==null),xt(e,"fa-rotate-".concat(w),typeof w<"u"&&w!==null&&w!==0),xt(e,"fa-pull-".concat(O),typeof O<"u"&&O!==null),xt(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(R).map(function(N){return R[N]?N:null}).filter(function(N){return N})}function yl(t){return t=t-0,t===t}function hr(t){return yl(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var bl=["style"];function vl(t){return t.charAt(0).toUpperCase()+t.slice(1)}function xl(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=hr(n.slice(0,a)),o=n.slice(a+1).trim();return r.startsWith("webkit")?e[vl(r)]=o:e[r]=o,e},{})}function gr(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var a=(e.children||[]).map(function(f){return gr(t,f)}),r=Object.keys(e.attributes||{}).reduce(function(f,l){var u=e.attributes[l];switch(l){case"class":f.attrs.className=u,delete e.attributes.class;break;case"style":f.attrs.style=xl(u);break;default:l.indexOf("aria-")===0||l.indexOf("data-")===0?f.attrs[l.toLowerCase()]=u:f.attrs[hr(l)]=u}return f},{attrs:{}}),o=n.style,s=o===void 0?{}:o,i=ul(n,bl);return r.attrs.style=D(D({},r.attrs.style),s),t.apply(void 0,[e.tag,D(D({},r.attrs),i)].concat(Je(a)))}var yr=!1;try{yr=!0}catch{}function El(){if(!yr&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function ia(t){if(t&&oe(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Ze.icon)return Ze.icon(t);if(t===null)return null;if(t&&oe(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Ne(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?xt({},t,e):{}}var la={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},br=B.forwardRef(function(t,e){var n=D(D({},la),t),a=n.icon,r=n.mask,o=n.symbol,s=n.className,i=n.title,f=n.titleId,l=n.maskId,u=ia(a),h=Ne("classes",[].concat(Je(gl(n)),Je((s||"").split(" ")))),p=Ne("transform",typeof n.transform=="string"?Ze.transform(n.transform):n.transform),b=Ne("mask",ia(r)),v=cl(u,D(D(D(D({},h),p),b),{},{symbol:o,title:i,titleId:f,maskId:l}));if(!v)return El("Could not find icon",u),null;var C=v.abstract,x={ref:e};return Object.keys(n).forEach(function(E){la.hasOwnProperty(E)||(x[E]=n[E])}),wl(C[0],x)});br.displayName="FontAwesomeIcon";br.propTypes={beat:y.bool,border:y.bool,beatFade:y.bool,bounce:y.bool,className:y.string,fade:y.bool,flash:y.bool,mask:y.oneOfType([y.object,y.array,y.string]),maskId:y.string,fixedWidth:y.bool,inverse:y.bool,flip:y.oneOf([!0,!1,"horizontal","vertical","both"]),icon:y.oneOfType([y.object,y.array,y.string]),listItem:y.bool,pull:y.oneOf(["right","left"]),pulse:y.bool,rotation:y.oneOf([0,90,180,270]),shake:y.bool,size:y.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:y.bool,spinPulse:y.bool,spinReverse:y.bool,symbol:y.oneOfType([y.bool,y.string]),title:y.string,titleId:y.string,transform:y.oneOfType([y.string,y.object]),swapOpacity:y.bool};var wl=gr.bind(null,B.createElement);const Tl=c.memo(({title:t})=>m.jsx("h2",{className:"mb-3",style:{fontSize:"26px"},children:t}));export{Vo as A,uo as B,br as C,So as D,at as E,on as F,nn as G,Tl as H,ha as I,Kt as J,Al as K,ja as L,Ra as M,Sl as P,je as S,to as T,Pr as _,Ie as a,Q as b,rt as c,Qr as d,ro as e,Tn as f,ao as g,Eo as h,rn as i,oo as j,ma as k,te as l,Mt as m,An as n,se as o,an as p,gt as q,Ol as r,st as s,qr as t,$ as u,no as v,Bo as w,en as x,Go as y,Xo as z};
