import{i as E,ad as I,ag as P,ah as m,a5 as b,ai as V,T as R,aj as W,ak as Y,al as B,X as C,am as S,an as $,ao as J,ap as L,l as w,s as k,j as X,o as p,aq as x,ar as z,as as F,at as G,au as K,ac as Q,n as U,I as Z,c as tt,J as et}from"./SsEUFS31.js";import{d as rt}from"./Bsc-8Ivn.js";const at=["touchstart","touchmove"];function nt(t){return at.includes(t)}function lt(t){E&&I(t)!==null&&P(t)}let A=!1;function st(){A||(A=!0,document.addEventListener("reset",t=>{Promise.resolve().then(()=>{var e;if(!t.defaultPrevented)for(const a of t.target.elements)(e=a.__on_r)==null||e.call(a)})},{capture:!0}))}function j(t){var e=V,a=R;m(null),b(null);try{return t()}finally{m(e),b(a)}}function _t(t,e,a,i=a){t.addEventListener(e,()=>j(a));const n=t.__on_r;n?t.__on_r=()=>{n(),i(!0)}:t.__on_r=()=>i(!0),st()}const it=new Set,D=new Set;function ot(t,e,a,i={}){function n(r){if(i.capture||y.call(e,r),!r.cancelBubble)return j(()=>a==null?void 0:a.call(this,r))}return t.startsWith("pointer")||t.startsWith("touch")||t==="wheel"?Y(()=>{e.addEventListener(t,n,i)}):e.addEventListener(t,n,i),n}function dt(t,e,a,i,n){var r={capture:i,passive:n},u=ot(t,e,a,r);(e===document.body||e===window||e===document)&&W(()=>{e.removeEventListener(t,u,r)})}function y(t){var O;var e=this,a=e.ownerDocument,i=t.type,n=((O=t.composedPath)==null?void 0:O.call(t))||[],r=n[0]||t.target,u=0,d=t.__root;if(d){var l=n.indexOf(d);if(l!==-1&&(e===document||e===window)){t.__root=e;return}var v=n.indexOf(e);if(v===-1)return;l<=v&&(u=l)}if(r=n[u]||t.target,r!==e){B(t,"currentTarget",{configurable:!0,get(){return r||a}});var T=V,f=R;m(null),b(null);try{for(var s,o=[];r!==null;){var c=r.assignedSlot||r.parentNode||r.host||null;try{var _=r["__"+i];if(_!==void 0&&!r.disabled)if(C(_)){var[H,...M]=_;H.apply(r,[t,...M])}else _.call(r,t)}catch(g){s?o.push(g):s=g}if(t.cancelBubble||c===e||c===null)break;r=c}if(s){for(let g of o)queueMicrotask(()=>{throw g});throw s}}finally{t.__root=e,delete t.currentTarget,m(T),b(f)}}}function vt(t,e){var a=e==null?"":typeof e=="object"?e+"":e;a!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=a,t.nodeValue=a+"")}function ut(t,e){return q(t,e)}function ht(t,e){S(),e.intro=e.intro??!1;const a=e.target,i=E,n=p;try{for(var r=I(a);r&&(r.nodeType!==8||r.data!==$);)r=J(r);if(!r)throw L;w(!0),k(r),X();const u=q(t,{...e,anchor:r});if(p===null||p.nodeType!==8||p.data!==x)throw z(),L;return w(!1),u}catch(u){if(u===L)return e.recover===!1&&F(),S(),P(a),w(!1),ut(t,e);throw u}finally{w(i),k(n)}}const h=new Map;function q(t,{target:e,anchor:a,props:i={},events:n,context:r,intro:u=!0}){S();var d=new Set,l=f=>{for(var s=0;s<f.length;s++){var o=f[s];if(!d.has(o)){d.add(o);var c=nt(o);e.addEventListener(o,y,{passive:c});var _=h.get(o);_===void 0?(document.addEventListener(o,y,{passive:c}),h.set(o,1)):h.set(o,_+1)}}};l(G(it)),D.add(l);var v=void 0,T=K(()=>{var f=a??e.appendChild(Q());return U(()=>{if(r){Z({});var s=tt;s.c=r}n&&(i.$$events=n),E&&rt(f,null),v=t(f,i)||{},E&&(R.nodes_end=p),r&&et()}),()=>{var c;for(var s of d){e.removeEventListener(s,y);var o=h.get(s);--o===0?(document.removeEventListener(s,y),h.delete(s)):h.set(s,o)}D.delete(l),f!==a&&((c=f.parentNode)==null||c.removeChild(f))}});return N.set(v,T),v}let N=new WeakMap;function pt(t,e){const a=N.get(t);return a?(N.delete(t),a(e)):Promise.resolve()}export{st as a,dt as e,ht as h,_t as l,ut as m,lt as r,vt as s,pt as u};
