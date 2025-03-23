import{r as i}from"./index-B6o7_jwP.js";import{c as p}from"./index-DW48STyt.js";import{u as C,S as B}from"./index-CWunzIAO.js";import{c as H,a as V}from"./index-Bg13-N3c.js";import{u as x}from"./index-CDrSXEGS.js";import{u as q}from"./index-fYiWtIch.js";import{D as K}from"./index-DdpX_G71.js";import{h as U,R as Y,u as Z,F as z}from"./index-CM8D19aL.js";import{P as J}from"./index-BghzCfGL.js";import{P as R}from"./index-B6caMgJY.js";import{P as m}from"./index-DYPDg9pM.js";import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";var _="Dialog",[N,xe]=H(_),[Q,u]=N(_),y=e=>{const{__scopeDialog:o,children:r,open:a,defaultOpen:n,onOpenChange:t,modal:c=!0}=e,l=i.useRef(null),d=i.useRef(null),[g=!1,v]=q({prop:a,defaultProp:n,onChange:t});return s.jsx(Q,{scope:o,triggerRef:l,contentRef:d,contentId:x(),titleId:x(),descriptionId:x(),open:g,onOpenChange:v,onOpenToggle:i.useCallback(()=>v($=>!$),[v]),modal:c,children:r})};y.displayName=_;var O="DialogTrigger",I=i.forwardRef((e,o)=>{const{__scopeDialog:r,...a}=e,n=u(O,r),t=C(o,n.triggerRef);return s.jsx(m.button,{type:"button","aria-haspopup":"dialog","aria-expanded":n.open,"aria-controls":n.contentId,"data-state":P(n.open),...a,ref:t,onClick:p(e.onClick,n.onOpenToggle)})});I.displayName=O;var h="DialogPortal",[X,A]=N(h,{forceMount:void 0}),T=e=>{const{__scopeDialog:o,forceMount:r,children:a,container:n}=e,t=u(h,o);return s.jsx(X,{scope:o,forceMount:r,children:i.Children.map(a,c=>s.jsx(R,{present:r||t.open,children:s.jsx(J,{asChild:!0,container:n,children:c})}))})};T.displayName=h;var D="DialogOverlay",j=i.forwardRef((e,o)=>{const r=A(D,e.__scopeDialog),{forceMount:a=r.forceMount,...n}=e,t=u(D,e.__scopeDialog);return t.modal?s.jsx(R,{present:a||t.open,children:s.jsx(ee,{...n,ref:o})}):null});j.displayName=D;var ee=i.forwardRef((e,o)=>{const{__scopeDialog:r,...a}=e,n=u(D,r);return s.jsx(Y,{as:B,allowPinchZoom:!0,shards:[n.contentRef],children:s.jsx(m.div,{"data-state":P(n.open),...a,ref:o,style:{pointerEvents:"auto",...a.style}})})}),f="DialogContent",b=i.forwardRef((e,o)=>{const r=A(f,e.__scopeDialog),{forceMount:a=r.forceMount,...n}=e,t=u(f,e.__scopeDialog);return s.jsx(R,{present:a||t.open,children:t.modal?s.jsx(te,{...n,ref:o}):s.jsx(oe,{...n,ref:o})})});b.displayName=f;var te=i.forwardRef((e,o)=>{const r=u(f,e.__scopeDialog),a=i.useRef(null),n=C(o,r.contentRef,a);return i.useEffect(()=>{const t=a.current;if(t)return U(t)},[]),s.jsx(M,{...e,ref:n,trapFocus:r.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:p(e.onCloseAutoFocus,t=>{var c;t.preventDefault(),(c=r.triggerRef.current)==null||c.focus()}),onPointerDownOutside:p(e.onPointerDownOutside,t=>{const c=t.detail.originalEvent,l=c.button===0&&c.ctrlKey===!0;(c.button===2||l)&&t.preventDefault()}),onFocusOutside:p(e.onFocusOutside,t=>t.preventDefault())})}),oe=i.forwardRef((e,o)=>{const r=u(f,e.__scopeDialog),a=i.useRef(!1),n=i.useRef(!1);return s.jsx(M,{...e,ref:o,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var c,l;(c=e.onCloseAutoFocus)==null||c.call(e,t),t.defaultPrevented||(a.current||(l=r.triggerRef.current)==null||l.focus(),t.preventDefault()),a.current=!1,n.current=!1},onInteractOutside:t=>{var d,g;(d=e.onInteractOutside)==null||d.call(e,t),t.defaultPrevented||(a.current=!0,t.detail.originalEvent.type==="pointerdown"&&(n.current=!0));const c=t.target;((g=r.triggerRef.current)==null?void 0:g.contains(c))&&t.preventDefault(),t.detail.originalEvent.type==="focusin"&&n.current&&t.preventDefault()}})}),M=i.forwardRef((e,o)=>{const{__scopeDialog:r,trapFocus:a,onOpenAutoFocus:n,onCloseAutoFocus:t,...c}=e,l=u(f,r),d=i.useRef(null),g=C(o,d);return Z(),s.jsxs(s.Fragment,{children:[s.jsx(z,{asChild:!0,loop:!0,trapped:a,onMountAutoFocus:n,onUnmountAutoFocus:t,children:s.jsx(K,{role:"dialog",id:l.contentId,"aria-describedby":l.descriptionId,"aria-labelledby":l.titleId,"data-state":P(l.open),...c,ref:g,onDismiss:()=>l.onOpenChange(!1)})}),s.jsxs(s.Fragment,{children:[s.jsx(ne,{titleId:l.titleId}),s.jsx(ae,{contentRef:d,descriptionId:l.descriptionId})]})]})}),E="DialogTitle",F=i.forwardRef((e,o)=>{const{__scopeDialog:r,...a}=e,n=u(E,r);return s.jsx(m.h2,{id:n.titleId,...a,ref:o})});F.displayName=E;var w="DialogDescription",S=i.forwardRef((e,o)=>{const{__scopeDialog:r,...a}=e,n=u(w,r);return s.jsx(m.p,{id:n.descriptionId,...a,ref:o})});S.displayName=w;var W="DialogClose",k=i.forwardRef((e,o)=>{const{__scopeDialog:r,...a}=e,n=u(W,r);return s.jsx(m.button,{type:"button",...a,ref:o,onClick:p(e.onClick,()=>n.onOpenChange(!1))})});k.displayName=W;function P(e){return e?"open":"closed"}var G="DialogTitleWarning",[Ce,L]=V(G,{contentName:f,titleName:E,docsSlug:"dialog"}),ne=({titleId:e})=>{const o=L(G),r=`\`${o.contentName}\` requires a \`${o.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${o.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${o.docsSlug}`;return i.useEffect(()=>{e&&(document.getElementById(e)||console.error(r))},[r,e]),null},re="DialogDescriptionWarning",ae=({contentRef:e,descriptionId:o})=>{const a=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${L(re).contentName}}.`;return i.useEffect(()=>{var t;const n=(t=e.current)==null?void 0:t.getAttribute("aria-describedby");o&&n&&(document.getElementById(o)||console.warn(a))},[a,e,o]),null},Re=y,_e=I,he=T,Ee=j,Pe=b,Ne=F,ye=S,Oe=k;export{Oe as C,ye as D,Ee as O,he as P,Re as R,_e as T,Ce as W,Pe as a,Ne as b,xe as c};
