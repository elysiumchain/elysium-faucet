function B(){}function F(t,n){for(const e in n)t[e]=n[e];return t}function L(t){return t()}function C(){return Object.create(null)}function p(t){t.forEach(L)}function H(t){return typeof t=="function"}function ct(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let g;function lt(t,n){return g||(g=document.createElement("a")),g.href=n,t===g.href}function I(t){return Object.keys(t).length===0}function ot(t,n,e,i){if(t){const c=O(t,n,e,i);return t[0](c)}}function O(t,n,e,i){return t[1]&&i?F(e.ctx.slice(),t[1](i(n))):e.ctx}function ut(t,n,e,i){if(t[2]&&i){const c=t[2](i(e));if(n.dirty===void 0)return c;if(typeof c=="object"){const a=[],l=Math.max(n.dirty.length,c.length);for(let o=0;o<l;o+=1)a[o]=n.dirty[o]|c[o];return a}return n.dirty|c}return n.dirty}function at(t,n,e,i,c,a){if(c){const l=O(n,e,i,a);t.p(l,c)}}function ft(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}let w=!1;function G(){w=!0}function J(){w=!1}function K(t,n,e,i){for(;t<n;){const c=t+(n-t>>1);e(c)<=i?t=c+1:n=c}return t}function W(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let u=0;u<n.length;u++){const s=n[u];s.claim_order!==void 0&&r.push(s)}n=r}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let c=0;for(let r=0;r<n.length;r++){const u=n[r].claim_order,s=(c>0&&n[e[c]].claim_order<=u?c+1:K(1,c,y=>n[e[y]].claim_order,u))-1;i[r]=e[s]+1;const f=s+1;e[f]=r,c=Math.max(f,c)}const a=[],l=[];let o=n.length-1;for(let r=e[c]+1;r!=0;r=i[r-1]){for(a.push(n[r-1]);o>=r;o--)l.push(n[o]);o--}for(;o>=0;o--)l.push(n[o]);a.reverse(),l.sort((r,u)=>r.claim_order-u.claim_order);for(let r=0,u=0;r<l.length;r++){for(;u<a.length&&l[r].claim_order>=a[u].claim_order;)u++;const s=u<a.length?a[u]:null;t.insertBefore(l[r],s)}}function Q(t,n){if(w){for(W(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function st(t,n,e){w&&!e?Q(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function R(t){t.parentNode.removeChild(t)}function U(t){return document.createElement(t)}function A(t){return document.createTextNode(t)}function _t(){return A(" ")}function dt(){return A("")}function ht(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function mt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function V(t){return Array.from(t.childNodes)}function X(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function T(t,n,e,i,c=!1){X(t);const a=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const o=t[l];if(n(o)){const r=e(o);return r===void 0?t.splice(l,1):t[l]=r,c||(t.claim_info.last_index=l),o}}for(let l=t.claim_info.last_index-1;l>=0;l--){const o=t[l];if(n(o)){const r=e(o);return r===void 0?t.splice(l,1):t[l]=r,c?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,o}}return i()})();return a.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,a}function Y(t,n,e,i){return T(t,c=>c.nodeName===n,c=>{const a=[];for(let l=0;l<c.attributes.length;l++){const o=c.attributes[l];e[o.name]||a.push(o.name)}a.forEach(l=>c.removeAttribute(l))},()=>i(n))}function pt(t,n,e){return Y(t,n,e,U)}function Z(t,n){return T(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>A(n),!0)}function yt(t){return Z(t," ")}function gt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function xt(t,n){t.value=n==null?"":n}function bt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function $t(t,n=document.body){return Array.from(n.querySelectorAll(t))}let m;function h(t){m=t}function j(){if(!m)throw new Error("Function called outside component initialization");return m}function wt(t){j().$$.on_mount.push(t)}function Et(t){j().$$.after_update.push(t)}function kt(t,n){return j().$$.context.set(t,n),n}const d=[],q=[],b=[],M=[],P=Promise.resolve();let k=!1;function z(){k||(k=!0,P.then(D))}function vt(){return z(),P}function v(t){b.push(t)}const E=new Set;let x=0;function D(){const t=m;do{for(;x<d.length;){const n=d[x];x++,h(n),tt(n.$$)}for(h(null),d.length=0,x=0;q.length;)q.pop()();for(let n=0;n<b.length;n+=1){const e=b[n];E.has(e)||(E.add(e),e())}b.length=0}while(d.length);for(;M.length;)M.pop()();k=!1,E.clear(),h(t)}function tt(t){if(t.fragment!==null){t.update(),p(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(v)}}const $=new Set;let _;function At(){_={r:0,c:[],p:_}}function jt(){_.r||p(_.c),_=_.p}function nt(t,n){t&&t.i&&($.delete(t),t.i(n))}function Nt(t,n,e,i){if(t&&t.o){if($.has(t))return;$.add(t),_.c.push(()=>{$.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}}function St(t,n){const e={},i={},c={$$scope:1};let a=t.length;for(;a--;){const l=t[a],o=n[a];if(o){for(const r in l)r in o||(i[r]=1);for(const r in o)c[r]||(e[r]=o[r],c[r]=1);t[a]=o}else for(const r in l)c[r]=1}for(const l in i)l in e||(e[l]=void 0);return e}function Ct(t){return typeof t=="object"&&t!==null?t:{}}function qt(t){t&&t.c()}function Mt(t,n){t&&t.l(n)}function et(t,n,e,i){const{fragment:c,on_mount:a,on_destroy:l,after_update:o}=t.$$;c&&c.m(n,e),i||v(()=>{const r=a.map(L).filter(H);l?l.push(...r):p(r),t.$$.on_mount=[]}),o.forEach(v)}function it(t,n){const e=t.$$;e.fragment!==null&&(p(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function rt(t,n){t.$$.dirty[0]===-1&&(d.push(t),z(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Bt(t,n,e,i,c,a,l,o=[-1]){const r=m;h(t);const u=t.$$={fragment:null,ctx:null,props:a,update:B,not_equal:c,bound:C(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(r?r.$$.context:[])),callbacks:C(),dirty:o,skip_bound:!1,root:n.target||r.$$.root};l&&l(u.root);let s=!1;if(u.ctx=e?e(t,n.props||{},(f,y,...N)=>{const S=N.length?N[0]:y;return u.ctx&&c(u.ctx[f],u.ctx[f]=S)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](S),s&&rt(t,f)),y}):[],u.update(),s=!0,p(u.before_update),u.fragment=i?i(u.ctx):!1,n.target){if(n.hydrate){G();const f=V(n.target);u.fragment&&u.fragment.l(f),f.forEach(R)}else u.fragment&&u.fragment.c();n.intro&&nt(t.$$.fragment),et(t,n.target,n.anchor,n.customElement),J(),D()}h(r)}class Lt{$destroy(){it(this,1),this.$destroy=B}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const c=i.indexOf(e);c!==-1&&i.splice(c,1)}}$set(n){this.$$set&&!I(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{St as A,Ct as B,it as C,F as D,vt as E,ot as F,$t as G,lt as H,Q as I,at as J,ft as K,ut as L,xt as M,ht as N,p as O,Lt as S,V as a,mt as b,pt as c,R as d,U as e,bt as f,st as g,Z as h,Bt as i,gt as j,_t as k,dt as l,yt as m,B as n,At as o,Nt as p,jt as q,nt as r,ct as s,A as t,kt as u,Et as v,wt as w,qt as x,Mt as y,et as z};
