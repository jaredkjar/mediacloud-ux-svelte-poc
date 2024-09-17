var J=Object.defineProperty;var R=(e,t,r)=>t in e?J(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var N=(e,t,r)=>R(e,typeof t!="symbol"?t+"":t,r);function U(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var K={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=g;function t(o,n){var i=Object.keys(o);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(o);n&&(s=s.filter(function(p){return Object.getOwnPropertyDescriptor(o,p).enumerable})),i.push.apply(i,s)}return i}function r(o){for(var n=1;n<arguments.length;n++){var i=arguments[n]!=null?arguments[n]:{};n%2?t(Object(i),!0).forEach(function(s){l(o,s,i[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(i)):t(Object(i)).forEach(function(s){Object.defineProperty(o,s,Object.getOwnPropertyDescriptor(i,s))})}return o}function l(o,n,i){return n in o?Object.defineProperty(o,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):o[n]=i,o}function m(o){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?m=function(i){return typeof i}:m=function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},m(o)}var _={component:null,domElementGetter:null,props:{}};function g(o){if(m(o)!=="object")throw new Error("single-spa-svelte requires a configuration object");var n=r(r({},_),o);if(!n.component)throw new Error("single-spa-svelte must be passed opts.component");var i={};return{bootstrap:$.bind(null,n,i),mount:h.bind(null,n,i),unmount:d.bind(null,n,i),update:v.bind(null,n,i)}}function $(o){return Promise.resolve()}function h(o,n,i){var s=Object.keys(_),p=Object.keys(o).reduce(function(y,c){return s.includes(c)||(y[c]=o[c]),y},{});return Promise.resolve().then(function(){var y=P(o,i),c=y();n.instance=new o.component(r(r({},p),{},{target:c,props:Object.assign({},i,o.props)}))})}function d(o,n){return Promise.resolve().then(function(){n.instance.$destroy?n.instance.$destroy():n.instance.destroy()})}function v(o,n,i){return Promise.resolve().then(function(){n.instance.$set?n.instance.$set(i):n.instance.set(i)})}function P(o,n){return n=n&&n.customProps?n.customProps:n,n.domElement?function(){return n.domElement}:n.domElementGetter?function(){return n.domElementGetter(n)}:o.domElementGetter?function(){return o.domElementGetter(n)}:x(n)}function x(o){var n=o.appName||o.name;if(!n)throw Error("single-spa-svelte was not given an application name as a prop, so it can't make a unique dom element container for the svelte application");var i="single-spa-application:".concat(n);return function(){var p=document.getElementById(i);return p||(p=document.createElement("div"),p.id=i,document.body.appendChild(p)),p}}})(K);const V=U(K);function E(){}function F(e){return e()}function L(){return Object.create(null)}function G(e){e.forEach(F)}function I(e){return typeof e=="function"}function z(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let C;function H(e,t){return e===t?!0:(C||(C=document.createElement("a")),C.href=t,e===C.href)}function Q(e){return Object.keys(e).length===0}function a(e,t,r){e.insertBefore(t,r||null)}function u(e){e.parentNode&&e.parentNode.removeChild(e)}function b(e){return document.createElement(e)}function W(e){return document.createTextNode(e)}function w(){return W(" ")}function D(e,t,r){r==null?e.removeAttribute(t):e.getAttribute(t)!==r&&e.setAttribute(t,r)}function X(e,t,r){const l=t.toLowerCase();l in e?e[l]=typeof e[l]=="boolean"&&r===""?!0:r:t in e?e[t]=typeof e[t]=="boolean"&&r===""?!0:r:D(e,t,r)}function Y(e){return Array.from(e.childNodes)}let B;function k(e){B=e}const j=[],M=[];let S=[];const T=[];function A(e){S.push(e)}const q=new Set;let O=0;function Z(){if(O!==0)return;const e=B;do{try{for(;O<j.length;){const t=j[O];O++,k(t),ee(t.$$)}}catch(t){throw j.length=0,O=0,t}for(k(null),j.length=0,O=0;M.length;)M.pop()();for(let t=0;t<S.length;t+=1){const r=S[t];q.has(r)||(q.add(r),r())}S.length=0}while(j.length);for(;T.length;)T.pop()();q.clear(),k(e)}function ee(e){if(e.fragment!==null){e.update(),G(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(A)}}function te(e){const t=[],r=[];S.forEach(l=>e.indexOf(l)===-1?t.push(l):r.push(l)),r.forEach(l=>l()),S=t}const ne=new Set;function re(e,t){e&&e.i&&(ne.delete(e),e.i(t))}function oe(e,t,r){const{fragment:l,after_update:m}=e.$$;l&&l.m(t,r),A(()=>{const _=e.$$.on_mount.map(F).filter(I);e.$$.on_destroy?e.$$.on_destroy.push(..._):G(_),e.$$.on_mount=[]}),m.forEach(A)}function ie(e,t){const r=e.$$;r.fragment!==null&&(te(r.after_update),G(r.on_destroy),r.fragment&&r.fragment.d(t),r.on_destroy=r.fragment=null,r.ctx=[])}function le(e,t,r,l,m,_,g=null,$=[-1]){const h=B;k(e);const d=e.$$={fragment:null,ctx:[],props:_,update:E,not_equal:m,bound:L(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(h?h.$$.context:[])),callbacks:L(),dirty:$,skip_bound:!1,root:t.target||h.$$.root};if(g&&g(d.root),d.ctx=[],d.update(),G(d.before_update),d.fragment=l?l(d.ctx):!1,t.target){if(t.hydrate){const v=Y(t.target);d.fragment&&d.fragment.l(v),v.forEach(u)}else d.fragment&&d.fragment.c();t.intro&&re(e.$$.fragment),oe(e,t.target,t.anchor),Z()}k(h)}class ce{constructor(){N(this,"$$");N(this,"$$set")}$destroy(){ie(this,1),this.$destroy=E}$on(t,r){if(!I(r))return E;const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(r),()=>{const m=l.indexOf(r);m!==-1&&l.splice(m,1)}}$set(t){this.$$set&&!Q(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ue="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ue);function se(e){let t,r,l,m,_,g,$,h,d,v,P,x,o,n,i,s,p,y;return{c(){t=b("img"),l=w(),m=b("br"),_=w(),g=b("br"),$=w(),h=b("h3"),h.textContent="This component is being brought in directly from the styleguide.",d=w(),v=b("recently-viewed-channels"),P=w(),x=b("br"),o=w(),n=b("br"),i=w(),s=b("h3"),s.textContent=`This component is being passed data that the styleguide will map out and
  style.`,p=w(),y=b("collection-cards"),H(t.src,r="https://static-00.iconduck.com/assets.00/svelte-icon-426x512-cm99sfkq.png")||D(t,"src",r),D(t,"alt","svelte-icon"),D(t,"height","150px"),X(y,"items",JSON.stringify([{title:"fake channel",url:"none"},{title:"fake channel 2",url:"none"}]))},m(c,f){a(c,t,f),a(c,l,f),a(c,m,f),a(c,_,f),a(c,g,f),a(c,$,f),a(c,h,f),a(c,d,f),a(c,v,f),a(c,P,f),a(c,x,f),a(c,o,f),a(c,n,f),a(c,i,f),a(c,s,f),a(c,p,f),a(c,y,f)},p:E,i:E,o:E,d(c){c&&(u(t),u(l),u(m),u(_),u(g),u($),u(h),u(d),u(v),u(P),u(x),u(o),u(n),u(i),u(s),u(p),u(y))}}}class fe extends ce{constructor(t){super(),le(this,t,null,se,z,{})}}const ae=V({component:fe}),{bootstrap:me,mount:pe,unmount:_e}=ae;export{me as bootstrap,pe as mount,_e as unmount};
