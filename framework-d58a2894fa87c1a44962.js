(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[9774],{15007:function(n,e,t){"use strict";t.r(e),t.d(e,{Children:function(){return On},Component:function(){return y},Fragment:function(){return m},PureComponent:function(){return En},StrictMode:function(){return ae},Suspense:function(){return Dn},SuspenseList:function(){return Vn},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:function(){return te},cloneElement:function(){return ue},createContext:function(){return F},createElement:function(){return h},createFactory:function(){return re},createPortal:function(){return Mn},createRef:function(){return v},default:function(){return me},findDOMNode:function(){return le},flushSync:function(){return fe},forwardRef:function(){return Pn},hydrate:function(){return Yn},isValidElement:function(){return oe},lazy:function(){return Ln},memo:function(){return Sn},render:function(){return qn},startTransition:function(){return se},unmountComponentAtNode:function(){return ie},unstable_batchedUpdates:function(){return ce},useCallback:function(){return ln},useContext:function(){return cn},useDebugValue:function(){return fn},useDeferredValue:function(){return pe},useEffect:function(){return tn},useErrorBoundary:function(){return an},useId:function(){return sn},useImperativeHandle:function(){return on},useInsertionEffect:function(){return de},useLayoutEffect:function(){return _n},useMemo:function(){return un},useReducer:function(){return en},useRef:function(){return rn},useState:function(){return nn},useSyncExternalStore:function(){return ve},useTransition:function(){return he},version:function(){return _e}});var _,r,o,u,i,l,c={},f=[],a=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function s(n,e){for(var t in e)n[t]=e[t];return n}function p(n){var e=n.parentNode;e&&e.removeChild(n)}function h(n,e,t){var r,o,u,i={};for(u in e)"key"==u?r=e[u]:"ref"==u?o=e[u]:i[u]=e[u];if(arguments.length>2&&(i.children=arguments.length>3?_.call(arguments,2):t),"function"==typeof n&&null!=n.defaultProps)for(u in n.defaultProps)void 0===i[u]&&(i[u]=n.defaultProps[u]);return d(n,i,r,o,null)}function d(n,e,t,_,u){var i={type:n,props:e,key:t,ref:_,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==u?++o:u};return null==u&&null!=r.vnode&&r.vnode(i),i}function v(){return{current:null}}function m(n){return n.children}function y(n,e){this.props=n,this.context=e}function b(n,e){if(null==e)return n.__?b(n.__,n.__.__k.indexOf(n)+1):null;for(var t;e<n.__k.length;e++)if(null!=(t=n.__k[e])&&null!=t.__e)return t.__e;return"function"==typeof n.type?b(n):null}function g(n){var e,t;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,e=0;e<n.__k.length;e++)if(null!=(t=n.__k[e])&&null!=t.__e){n.__e=n.__c.base=t.__e;break}return g(n)}}function k(n){(!n.__d&&(n.__d=!0)&&u.push(n)&&!C.__r++||i!==r.debounceRendering)&&((i=r.debounceRendering)||setTimeout)(C)}function C(){for(var n;C.__r=u.length;)n=u.sort((function(n,e){return n.__v.__b-e.__v.__b})),u=[],n.some((function(n){var e,t,_,r,o,u;n.__d&&(o=(r=(e=n).__v).__e,(u=e.__P)&&(t=[],(_=s({},r)).__v=r.__v+1,R(u,r,_,e.__n,void 0!==u.ownerSVGElement,null!=r.__h?[o]:null,t,null==o?b(r):o,r.__h),U(t,r),r.__e!=o&&g(r)))}))}function E(n,e,t,_,r,o,u,i,l,a){var s,p,h,v,y,g,k,C=_&&_.__k||f,E=C.length;for(t.__k=[],s=0;s<e.length;s++)if(null!=(v=t.__k[s]=null==(v=e[s])||"boolean"==typeof v?null:"string"==typeof v||"number"==typeof v||"bigint"==typeof v?d(null,v,null,null,v):Array.isArray(v)?d(m,{children:v},null,null,null):v.__b>0?d(v.type,v.props,v.key,v.ref?v.ref:null,v.__v):v)){if(v.__=t,v.__b=t.__b+1,null===(h=C[s])||h&&v.key==h.key&&v.type===h.type)C[s]=void 0;else for(p=0;p<E;p++){if((h=C[p])&&v.key==h.key&&v.type===h.type){C[p]=void 0;break}h=null}R(n,v,h=h||c,r,o,u,i,l,a),y=v.__e,(p=v.ref)&&h.ref!=p&&(k||(k=[]),h.ref&&k.push(h.ref,null,v),k.push(p,v.__c||y,v)),null!=y?(null==g&&(g=y),"function"==typeof v.type&&v.__k===h.__k?v.__d=l=S(v,l,n):l=x(n,v,h,C,y,l),"function"==typeof t.type&&(t.__d=l)):l&&h.__e==l&&l.parentNode!=n&&(l=b(h))}for(t.__e=g,s=E;s--;)null!=C[s]&&A(C[s],C[s]);if(k)for(s=0;s<k.length;s++)D(k[s],k[++s],k[++s])}function S(n,e,t){for(var _,r=n.__k,o=0;r&&o<r.length;o++)(_=r[o])&&(_.__=n,e="function"==typeof _.type?S(_,e,t):x(t,_,_,r,_.__e,e));return e}function N(n,e){return e=e||[],null==n||"boolean"==typeof n||(Array.isArray(n)?n.some((function(n){N(n,e)})):e.push(n)),e}function x(n,e,t,_,r,o){var u,i,l;if(void 0!==e.__d)u=e.__d,e.__d=void 0;else if(null==t||r!=o||null==r.parentNode)n:if(null==o||o.parentNode!==n)n.appendChild(r),u=null;else{for(i=o,l=0;(i=i.nextSibling)&&l<_.length;l+=1)if(i==r)break n;n.insertBefore(r,o),u=o}return void 0!==u?u:r.nextSibling}function P(n,e,t){"-"===e[0]?n.setProperty(e,t):n[e]=null==t?"":"number"!=typeof t||a.test(e)?t:t+"px"}function T(n,e,t,_,r){var o;n:if("style"===e)if("string"==typeof t)n.style.cssText=t;else{if("string"==typeof _&&(n.style.cssText=_=""),_)for(e in _)t&&e in t||P(n.style,e,"");if(t)for(e in t)_&&t[e]===_[e]||P(n.style,e,t[e])}else if("o"===e[0]&&"n"===e[1])o=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in n?e.toLowerCase().slice(2):e.slice(2),n.l||(n.l={}),n.l[e+o]=t,t?_||n.addEventListener(e,o?w:O,o):n.removeEventListener(e,o?w:O,o);else if("dangerouslySetInnerHTML"!==e){if(r)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("href"!==e&&"list"!==e&&"form"!==e&&"tabIndex"!==e&&"download"!==e&&e in n)try{n[e]=null==t?"":t;break n}catch(n){}"function"==typeof t||(null==t||!1===t&&-1==e.indexOf("-")?n.removeAttribute(e):n.setAttribute(e,t))}}function O(n){this.l[n.type+!1](r.event?r.event(n):n)}function w(n){this.l[n.type+!0](r.event?r.event(n):n)}function R(n,e,t,_,o,u,i,l,c){var f,a,p,h,d,v,b,g,k,C,S,N,x,P,T,O=e.type;if(void 0!==e.constructor)return null;null!=t.__h&&(c=t.__h,l=e.__e=t.__e,e.__h=null,u=[l]),(f=r.__b)&&f(e);try{n:if("function"==typeof O){if(g=e.props,k=(f=O.contextType)&&_[f.__c],C=f?k?k.props.value:f.__:_,t.__c?b=(a=e.__c=t.__c).__=a.__E:("prototype"in O&&O.prototype.render?e.__c=a=new O(g,C):(e.__c=a=new y(g,C),a.constructor=O,a.render=L),k&&k.sub(a),a.props=g,a.state||(a.state={}),a.context=C,a.__n=_,p=a.__d=!0,a.__h=[],a._sb=[]),null==a.__s&&(a.__s=a.state),null!=O.getDerivedStateFromProps&&(a.__s==a.state&&(a.__s=s({},a.__s)),s(a.__s,O.getDerivedStateFromProps(g,a.__s))),h=a.props,d=a.state,p)null==O.getDerivedStateFromProps&&null!=a.componentWillMount&&a.componentWillMount(),null!=a.componentDidMount&&a.__h.push(a.componentDidMount);else{if(null==O.getDerivedStateFromProps&&g!==h&&null!=a.componentWillReceiveProps&&a.componentWillReceiveProps(g,C),!a.__e&&null!=a.shouldComponentUpdate&&!1===a.shouldComponentUpdate(g,a.__s,C)||e.__v===t.__v){for(a.props=g,a.state=a.__s,e.__v!==t.__v&&(a.__d=!1),a.__v=e,e.__e=t.__e,e.__k=t.__k,e.__k.forEach((function(n){n&&(n.__=e)})),S=0;S<a._sb.length;S++)a.__h.push(a._sb[S]);a._sb=[],a.__h.length&&i.push(a);break n}null!=a.componentWillUpdate&&a.componentWillUpdate(g,a.__s,C),null!=a.componentDidUpdate&&a.__h.push((function(){a.componentDidUpdate(h,d,v)}))}if(a.context=C,a.props=g,a.__v=e,a.__P=n,N=r.__r,x=0,"prototype"in O&&O.prototype.render){for(a.state=a.__s,a.__d=!1,N&&N(e),f=a.render(a.props,a.state,a.context),P=0;P<a._sb.length;P++)a.__h.push(a._sb[P]);a._sb=[]}else do{a.__d=!1,N&&N(e),f=a.render(a.props,a.state,a.context),a.state=a.__s}while(a.__d&&++x<25);a.state=a.__s,null!=a.getChildContext&&(_=s(s({},_),a.getChildContext())),p||null==a.getSnapshotBeforeUpdate||(v=a.getSnapshotBeforeUpdate(h,d)),T=null!=f&&f.type===m&&null==f.key?f.props.children:f,E(n,Array.isArray(T)?T:[T],e,t,_,o,u,i,l,c),a.base=e.__e,e.__h=null,a.__h.length&&i.push(a),b&&(a.__E=a.__=null),a.__e=!1}else null==u&&e.__v===t.__v?(e.__k=t.__k,e.__e=t.__e):e.__e=H(t.__e,e,t,_,o,u,i,c);(f=r.diffed)&&f(e)}catch(n){e.__v=null,(c||null!=u)&&(e.__e=l,e.__h=!!c,u[u.indexOf(l)]=null),r.__e(n,e,t)}}function U(n,e){r.__c&&r.__c(e,n),n.some((function(e){try{n=e.__h,e.__h=[],n.some((function(n){n.call(e)}))}catch(n){r.__e(n,e.__v)}}))}function H(n,e,t,r,o,u,i,l){var f,a,s,h=t.props,d=e.props,v=e.type,m=0;if("svg"===v&&(o=!0),null!=u)for(;m<u.length;m++)if((f=u[m])&&"setAttribute"in f==!!v&&(v?f.localName===v:3===f.nodeType)){n=f,u[m]=null;break}if(null==n){if(null===v)return document.createTextNode(d);n=o?document.createElementNS("http://www.w3.org/2000/svg",v):document.createElement(v,d.is&&d),u=null,l=!1}if(null===v)h===d||l&&n.data===d||(n.data=d);else{if(u=u&&_.call(n.childNodes),a=(h=t.props||c).dangerouslySetInnerHTML,s=d.dangerouslySetInnerHTML,!l){if(null!=u)for(h={},m=0;m<n.attributes.length;m++)h[n.attributes[m].name]=n.attributes[m].value;(s||a)&&(s&&(a&&s.__html==a.__html||s.__html===n.innerHTML)||(n.innerHTML=s&&s.__html||""))}if(function(n,e,t,_,r){var o;for(o in t)"children"===o||"key"===o||o in e||T(n,o,null,t[o],_);for(o in e)r&&"function"!=typeof e[o]||"children"===o||"key"===o||"value"===o||"checked"===o||t[o]===e[o]||T(n,o,e[o],t[o],_)}(n,d,h,o,l),s)e.__k=[];else if(m=e.props.children,E(n,Array.isArray(m)?m:[m],e,t,r,o&&"foreignObject"!==v,u,i,u?u[0]:t.__k&&b(t,0),l),null!=u)for(m=u.length;m--;)null!=u[m]&&p(u[m]);l||("value"in d&&void 0!==(m=d.value)&&(m!==n.value||"progress"===v&&!m||"option"===v&&m!==h.value)&&T(n,"value",m,h.value,!1),"checked"in d&&void 0!==(m=d.checked)&&m!==n.checked&&T(n,"checked",m,h.checked,!1))}return n}function D(n,e,t){try{"function"==typeof n?n(e):n.current=e}catch(n){r.__e(n,t)}}function A(n,e,t){var _,o;if(r.unmount&&r.unmount(n),(_=n.ref)&&(_.current&&_.current!==n.__e||D(_,null,e)),null!=(_=n.__c)){if(_.componentWillUnmount)try{_.componentWillUnmount()}catch(n){r.__e(n,e)}_.base=_.__P=null,n.__c=void 0}if(_=n.__k)for(o=0;o<_.length;o++)_[o]&&A(_[o],e,t||"function"!=typeof n.type);t||null==n.__e||p(n.__e),n.__=n.__e=n.__d=void 0}function L(n,e,t){return this.constructor(n,t)}function V(n,e,t){var o,u,i;r.__&&r.__(n,e),u=(o="function"==typeof t)?null:t&&t.__k||e.__k,i=[],R(e,n=(!o&&t||e).__k=h(m,null,[n]),u||c,c,void 0!==e.ownerSVGElement,!o&&t?[t]:u?null:e.firstChild?_.call(e.childNodes):null,i,!o&&t?t:u?u.__e:e.firstChild,o),U(i,n)}function W(n,e){V(n,e,W)}function I(n,e,t){var r,o,u,i=s({},n.props);for(u in e)"key"==u?r=e[u]:"ref"==u?o=e[u]:i[u]=e[u];return arguments.length>2&&(i.children=arguments.length>3?_.call(arguments,2):t),d(n.type,i,r||n.key,o||n.ref,null)}function F(n,e){var t={__c:e="__cC"+l++,__:n,Consumer:function(n,e){return n.children(e)},Provider:function(n){var t,_;return this.getChildContext||(t=[],(_={})[e]=this,this.getChildContext=function(){return _},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&t.some(k)},this.sub=function(n){t.push(n);var e=n.componentWillUnmount;n.componentWillUnmount=function(){t.splice(t.indexOf(n),1),e&&e.call(n)}}),n.children}};return t.Provider.__=t.Consumer.contextType=t}_=f.slice,r={__e:function(n,e,t,_){for(var r,o,u;e=e.__;)if((r=e.__c)&&!r.__)try{if((o=r.constructor)&&null!=o.getDerivedStateFromError&&(r.setState(o.getDerivedStateFromError(n)),u=r.__d),null!=r.componentDidCatch&&(r.componentDidCatch(n,_||{}),u=r.__d),u)return r.__E=r}catch(e){n=e}throw n}},o=0,y.prototype.setState=function(n,e){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=s({},this.state),"function"==typeof n&&(n=n(s({},t),this.props)),n&&s(t,n),null!=n&&this.__v&&(e&&this._sb.push(e),k(this))},y.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),k(this))},y.prototype.render=m,u=[],C.__r=0,l=0;var M,$,B,j,z=0,q=[],Y=[],G=r.__b,Z=r.__r,J=r.diffed,K=r.__c,Q=r.unmount;function X(n,e){r.__h&&r.__h($,n,z||e),z=0;var t=$.__H||($.__H={__:[],__h:[]});return n>=t.__.length&&t.__.push({__V:Y}),t.__[n]}function nn(n){return z=1,en(bn,n)}function en(n,e,t){var _=X(M++,2);if(_.t=n,!_.__c&&(_.__=[t?t(e):bn(void 0,e),function(n){var e=_.__N?_.__N[0]:_.__[0],t=_.t(e,n);e!==t&&(_.__N=[t,_.__[1]],_.__c.setState({}))}],_.__c=$,!$.u)){$.u=!0;var r=$.shouldComponentUpdate;$.shouldComponentUpdate=function(n,e,t){if(!_.__c.__H)return!0;var o=_.__c.__H.__.filter((function(n){return n.__c}));if(o.every((function(n){return!n.__N})))return!r||r.call(this,n,e,t);var u=!1;return o.forEach((function(n){if(n.__N){var e=n.__[0];n.__=n.__N,n.__N=void 0,e!==n.__[0]&&(u=!0)}})),!(!u&&_.__c.props===n)&&(!r||r.call(this,n,e,t))}}return _.__N||_.__}function tn(n,e){var t=X(M++,3);!r.__s&&yn(t.__H,e)&&(t.__=n,t.i=e,$.__H.__h.push(t))}function _n(n,e){var t=X(M++,4);!r.__s&&yn(t.__H,e)&&(t.__=n,t.i=e,$.__h.push(t))}function rn(n){return z=5,un((function(){return{current:n}}),[])}function on(n,e,t){z=6,_n((function(){return"function"==typeof n?(n(e()),function(){return n(null)}):n?(n.current=e(),function(){return n.current=null}):void 0}),null==t?t:t.concat(n))}function un(n,e){var t=X(M++,7);return yn(t.__H,e)?(t.__V=n(),t.i=e,t.__h=n,t.__V):t.__}function ln(n,e){return z=8,un((function(){return n}),e)}function cn(n){var e=$.context[n.__c],t=X(M++,9);return t.c=n,e?(null==t.__&&(t.__=!0,e.sub($)),e.props.value):n.__}function fn(n,e){r.useDebugValue&&r.useDebugValue(e?e(n):n)}function an(n){var e=X(M++,10),t=nn();return e.__=n,$.componentDidCatch||($.componentDidCatch=function(n,_){e.__&&e.__(n,_),t[1](n)}),[t[0],function(){t[1](void 0)}]}function sn(){var n=X(M++,11);if(!n.__){for(var e=$.__v;null!==e&&!e.__m&&null!==e.__;)e=e.__;var t=e.__m||(e.__m=[0,0]);n.__="P"+t[0]+"-"+t[1]++}return n.__}function pn(){for(var n;n=q.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(vn),n.__H.__h.forEach(mn),n.__H.__h=[]}catch(l){n.__H.__h=[],r.__e(l,n.__v)}}r.__b=function(n){$=null,G&&G(n)},r.__r=function(n){Z&&Z(n),M=0;var e=($=n.__c).__H;e&&(B===$?(e.__h=[],$.__h=[],e.__.forEach((function(n){n.__N&&(n.__=n.__N),n.__V=Y,n.__N=n.i=void 0}))):(e.__h.forEach(vn),e.__h.forEach(mn),e.__h=[])),B=$},r.diffed=function(n){J&&J(n);var e=n.__c;e&&e.__H&&(e.__H.__h.length&&(1!==q.push(e)&&j===r.requestAnimationFrame||((j=r.requestAnimationFrame)||dn)(pn)),e.__H.__.forEach((function(n){n.i&&(n.__H=n.i),n.__V!==Y&&(n.__=n.__V),n.i=void 0,n.__V=Y}))),B=$=null},r.__c=function(n,e){e.some((function(n){try{n.__h.forEach(vn),n.__h=n.__h.filter((function(n){return!n.__||mn(n)}))}catch(o){e.some((function(n){n.__h&&(n.__h=[])})),e=[],r.__e(o,n.__v)}})),K&&K(n,e)},r.unmount=function(n){Q&&Q(n);var e,t=n.__c;t&&t.__H&&(t.__H.__.forEach((function(n){try{vn(n)}catch(n){e=n}})),t.__H=void 0,e&&r.__e(e,t.__v))};var hn="function"==typeof requestAnimationFrame;function dn(n){var e,t=function(){clearTimeout(_),hn&&cancelAnimationFrame(e),setTimeout(n)},_=setTimeout(t,100);hn&&(e=requestAnimationFrame(t))}function vn(n){var e=$,t=n.__c;"function"==typeof t&&(n.__c=void 0,t()),$=e}function mn(n){var e=$;n.__c=n.__(),$=e}function yn(n,e){return!n||n.length!==e.length||e.some((function(e,t){return e!==n[t]}))}function bn(n,e){return"function"==typeof e?e(n):e}function gn(n,e){for(var t in e)n[t]=e[t];return n}function kn(n,e){for(var t in n)if("__source"!==t&&!(t in e))return!0;for(var _ in e)if("__source"!==_&&n[_]!==e[_])return!0;return!1}function Cn(n,e){return n===e&&(0!==n||1/n==1/e)||n!=n&&e!=e}function En(n){this.props=n}function Sn(n,e){function t(n){var t=this.props.ref,_=t==n.ref;return!_&&t&&(t.call?t(null):t.current=null),e?!e(this.props,n)||!_:kn(this.props,n)}function _(e){return this.shouldComponentUpdate=t,h(n,e)}return _.displayName="Memo("+(n.displayName||n.name)+")",_.prototype.isReactComponent=!0,_.__f=!0,_}(En.prototype=new y).isPureReactComponent=!0,En.prototype.shouldComponentUpdate=function(n,e){return kn(this.props,n)||kn(this.state,e)};var Nn=r.__b;r.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),Nn&&Nn(n)};var xn="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function Pn(n){function e(e){var t=gn({},e);return delete t.ref,n(t,e.ref||null)}return e.$$typeof=xn,e.render=e,e.prototype.isReactComponent=e.__f=!0,e.displayName="ForwardRef("+(n.displayName||n.name)+")",e}var Tn=function(n,e){return null==n?null:N(N(n).map(e))},On={map:Tn,forEach:Tn,count:function(n){return n?N(n).length:0},only:function(n){var e=N(n);if(1!==e.length)throw"Children.only";return e[0]},toArray:N},wn=r.__e;r.__e=function(n,e,t,_){if(n.then)for(var r,o=e;o=o.__;)if((r=o.__c)&&r.__c)return null==e.__e&&(e.__e=t.__e,e.__k=t.__k),r.__c(n,e);wn(n,e,t,_)};var Rn=r.unmount;function Un(n,e,t){return n&&(n.__c&&n.__c.__H&&(n.__c.__H.__.forEach((function(n){"function"==typeof n.__c&&n.__c()})),n.__c.__H=null),null!=(n=gn({},n)).__c&&(n.__c.__P===t&&(n.__c.__P=e),n.__c=null),n.__k=n.__k&&n.__k.map((function(n){return Un(n,e,t)}))),n}function Hn(n,e,t){return n&&(n.__v=null,n.__k=n.__k&&n.__k.map((function(n){return Hn(n,e,t)})),n.__c&&n.__c.__P===e&&(n.__e&&t.insertBefore(n.__e,n.__d),n.__c.__e=!0,n.__c.__P=t)),n}function Dn(){this.__u=0,this.t=null,this.__b=null}function An(n){var e=n.__.__c;return e&&e.__a&&e.__a(n)}function Ln(n){var e,t,_;function r(r){if(e||(e=n()).then((function(n){t=n.default||n}),(function(n){_=n})),_)throw _;if(!t)throw e;return h(t,r)}return r.displayName="Lazy",r.__f=!0,r}function Vn(){this.u=null,this.o=null}r.unmount=function(n){var e=n.__c;e&&e.__R&&e.__R(),e&&!0===n.__h&&(n.type=null),Rn&&Rn(n)},(Dn.prototype=new y).__c=function(n,e){var t=e.__c,_=this;null==_.t&&(_.t=[]),_.t.push(t);var r=An(_.__v),o=!1,u=function(){o||(o=!0,t.__R=null,r?r(i):i())};t.__R=u;var i=function(){if(!--_.__u){if(_.state.__a){var n=_.state.__a;_.__v.__k[0]=Hn(n,n.__c.__P,n.__c.__O)}var e;for(_.setState({__a:_.__b=null});e=_.t.pop();)e.forceUpdate()}},l=!0===e.__h;_.__u++||l||_.setState({__a:_.__b=_.__v.__k[0]}),n.then(u,u)},Dn.prototype.componentWillUnmount=function(){this.t=[]},Dn.prototype.render=function(n,e){if(this.__b){if(this.__v.__k){var t=document.createElement("div"),_=this.__v.__k[0].__c;this.__v.__k[0]=Un(this.__b,t,_.__O=_.__P)}this.__b=null}var r=e.__a&&h(m,null,n.fallback);return r&&(r.__h=null),[h(m,null,e.__a?null:n.children),r]};var Wn=function(n,e,t){if(++t[1]===t[0]&&n.o.delete(e),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.o.size))for(t=n.u;t;){for(;t.length>3;)t.pop()();if(t[1]<t[0])break;n.u=t=t[2]}};function In(n){return this.getChildContext=function(){return n.context},n.children}function Fn(n){var e=this,t=n.i;e.componentWillUnmount=function(){V(null,e.l),e.l=null,e.i=null},e.i&&e.i!==t&&e.componentWillUnmount(),n.__v?(e.l||(e.i=t,e.l={nodeType:1,parentNode:t,childNodes:[],appendChild:function(n){this.childNodes.push(n),e.i.appendChild(n)},insertBefore:function(n,t){this.childNodes.push(n),e.i.appendChild(n)},removeChild:function(n){this.childNodes.splice(this.childNodes.indexOf(n)>>>1,1),e.i.removeChild(n)}}),V(h(In,{context:e.context},n.__v),e.l)):e.l&&e.componentWillUnmount()}function Mn(n,e){var t=h(Fn,{__v:n,i:e});return t.containerInfo=e,t}(Vn.prototype=new y).__a=function(n){var e=this,t=An(e.__v),_=e.o.get(n);return _[0]++,function(r){var o=function(){e.props.revealOrder?(_.push(r),Wn(e,n,_)):r()};t?t(o):o()}},Vn.prototype.render=function(n){this.u=null,this.o=new Map;var e=N(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&e.reverse();for(var t=e.length;t--;)this.o.set(e[t],this.u=[1,0,this.u]);return n.children},Vn.prototype.componentDidUpdate=Vn.prototype.componentDidMount=function(){var n=this;this.o.forEach((function(e,t){Wn(n,t,e)}))};var $n="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,Bn=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,jn="undefined"!=typeof document,zn=function(n){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/i:/fil|che|ra/i).test(n)};function qn(n,e,t){return null==e.__k&&(e.textContent=""),V(n,e),"function"==typeof t&&t(),n?n.__c:null}function Yn(n,e,t){return W(n,e),"function"==typeof t&&t(),n?n.__c:null}y.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach((function(n){Object.defineProperty(y.prototype,n,{configurable:!0,get:function(){return this["UNSAFE_"+n]},set:function(e){Object.defineProperty(this,n,{configurable:!0,writable:!0,value:e})}})}));var Gn=r.event;function Zn(){}function Jn(){return this.cancelBubble}function Kn(){return this.defaultPrevented}r.event=function(n){return Gn&&(n=Gn(n)),n.persist=Zn,n.isPropagationStopped=Jn,n.isDefaultPrevented=Kn,n.nativeEvent=n};var Qn,Xn={configurable:!0,get:function(){return this.class}},ne=r.vnode;r.vnode=function(n){var e=n.type,t=n.props,_=t;if("string"==typeof e){var r=-1===e.indexOf("-");for(var o in _={},t){var u=t[o];jn&&"children"===o&&"noscript"===e||"value"===o&&"defaultValue"in t&&null==u||("defaultValue"===o&&"value"in t&&null==t.value?o="value":"download"===o&&!0===u?u="":/ondoubleclick/i.test(o)?o="ondblclick":/^onchange(textarea|input)/i.test(o+e)&&!zn(t.type)?o="oninput":/^onfocus$/i.test(o)?o="onfocusin":/^onblur$/i.test(o)?o="onfocusout":/^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(o)?o=o.toLowerCase():r&&Bn.test(o)?o=o.replace(/[A-Z0-9]/g,"-$&").toLowerCase():null===u&&(u=void 0),/^oninput$/i.test(o)&&(o=o.toLowerCase(),_[o]&&(o="oninputCapture")),_[o]=u)}"select"==e&&_.multiple&&Array.isArray(_.value)&&(_.value=N(t.children).forEach((function(n){n.props.selected=-1!=_.value.indexOf(n.props.value)}))),"select"==e&&null!=_.defaultValue&&(_.value=N(t.children).forEach((function(n){n.props.selected=_.multiple?-1!=_.defaultValue.indexOf(n.props.value):_.defaultValue==n.props.value}))),n.props=_,t.class!=t.className&&(Xn.enumerable="className"in t,null!=t.className&&(_.class=t.className),Object.defineProperty(_,"className",Xn))}n.$$typeof=$n,ne&&ne(n)};var ee=r.__r;r.__r=function(n){ee&&ee(n),Qn=n.__c};var te={ReactCurrentDispatcher:{current:{readContext:function(n){return Qn.__n[n.__c].props.value}}}},_e="17.0.2";function re(n){return h.bind(null,n)}function oe(n){return!!n&&n.$$typeof===$n}function ue(n){return oe(n)?I.apply(null,arguments):n}function ie(n){return!!n.__k&&(V(null,n),!0)}function le(n){return n&&(n.base||1===n.nodeType&&n)||null}var ce=function(n,e){return n(e)},fe=function(n,e){return n(e)},ae=m;function se(n){n()}function pe(n){return n}function he(){return[!1,se]}var de=_n;function ve(n,e){var t=e(),_=nn({h:{__:t,v:e}}),r=_[0].h,o=_[1];return _n((function(){r.__=t,r.v=e,Cn(r.__,e())||o({h:r})}),[n,t,e]),tn((function(){return Cn(r.__,r.v())||o({h:r}),n((function(){Cn(r.__,r.v())||o({h:r})}))}),[n]),t}var me={useState:nn,useId:sn,useReducer:en,useEffect:tn,useLayoutEffect:_n,useInsertionEffect:_n,useTransition:he,useDeferredValue:pe,useSyncExternalStore:ve,startTransition:se,useRef:rn,useImperativeHandle:on,useMemo:un,useCallback:ln,useContext:cn,useDebugValue:fn,version:"17.0.2",Children:On,render:qn,hydrate:Yn,unmountComponentAtNode:ie,createPortal:Mn,createElement:h,createContext:F,createFactory:re,cloneElement:ue,createRef:v,Fragment:m,isValidElement:oe,findDOMNode:le,Component:y,PureComponent:En,memo:Sn,forwardRef:Pn,flushSync:fe,unstable_batchedUpdates:ce,StrictMode:m,Suspense:Dn,SuspenseList:Vn,lazy:Ln,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:te}},92703:function(n,e,t){"use strict";var _=t(50414);function r(){}function o(){}o.resetWarningCache=r,n.exports=function(){function n(n,e,t,r,o,u){if(u!==_){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function e(){return n}n.isRequired=n;var t={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:o,resetWarningCache:r};return t.PropTypes=t,t}},45697:function(n,e,t){n.exports=t(92703)()},50414:function(n){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=framework-d58a2894fa87c1a44962.js.map