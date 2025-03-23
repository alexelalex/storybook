import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{R as p,r as T}from"./index-B6o7_jwP.js";import{c as ye}from"./index-Bg13-N3c.js";import{P}from"./index-DYPDg9pM.js";import{c as se,I as xe,R as Ge}from"./index-BPfEjP2c.js";import{a as _e,t as Te}from"./toggle-byZgcMAm.js";import{u as ne}from"./index-fYiWtIch.js";import{u as be}from"./index-BiB69Vyw.js";import{c as le}from"./utils-KnJS0CU8.js";import{I as C}from"./icon-DlYx3cyN.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BxaFKtJl.js";import"./index-fNjTmf9T.js";import"./index-CWunzIAO.js";import"./index-DW48STyt.js";import"./index-5Vl1VMRw.js";import"./index-CDrSXEGS.js";import"./index-BskipZHp.js";import"./index-BKcPSHDN.js";import"./index-CRGxjvZy.js";import"./iframe-GL4rvzE7.js";var g="ToggleGroup",[ie,We]=ye(g,[se]),pe=se(),I=p.forwardRef((e,r)=>{const{type:s,...t}=e;if(s==="single"){const a=t;return o.jsx(je,{...a,ref:r})}if(s==="multiple"){const a=t;return o.jsx(Ce,{...a,ref:r})}throw new Error(`Missing prop \`type\` expected on \`${g}\``)});I.displayName=g;var[ce,ue]=ie(g),je=p.forwardRef((e,r)=>{const{value:s,defaultValue:t,onValueChange:a=()=>{},...n}=e,[i,l]=ne({prop:s,defaultProp:t,onChange:a});return o.jsx(ce,{scope:e.__scopeToggleGroup,type:"single",value:i?[i]:[],onItemActivate:l,onItemDeactivate:p.useCallback(()=>l(""),[l]),children:o.jsx(de,{...n,ref:r})})}),Ce=p.forwardRef((e,r)=>{const{value:s,defaultValue:t,onValueChange:a=()=>{},...n}=e,[i=[],l]=ne({prop:s,defaultProp:t,onChange:a}),c=p.useCallback(u=>l((d=[])=>[...d,u]),[l]),j=p.useCallback(u=>l((d=[])=>d.filter(he=>he!==u)),[l]);return o.jsx(ce,{scope:e.__scopeToggleGroup,type:"multiple",value:i,onItemActivate:c,onItemDeactivate:j,children:o.jsx(de,{...n,ref:r})})});I.displayName=g;var[Ie,Pe]=ie(g),de=p.forwardRef((e,r)=>{const{__scopeToggleGroup:s,disabled:t=!1,rovingFocus:a=!0,orientation:n,dir:i,loop:l=!0,...c}=e,j=pe(s),u=be(i),d={role:"group",dir:u,...c};return o.jsx(Ie,{scope:s,rovingFocus:a,disabled:t,children:a?o.jsx(Ge,{asChild:!0,...j,orientation:n,dir:u,loop:l,children:o.jsx(P.div,{...d,ref:r})}):o.jsx(P.div,{...d,ref:r})})}),b="ToggleGroupItem",me=p.forwardRef((e,r)=>{const s=ue(b,e.__scopeToggleGroup),t=Pe(b,e.__scopeToggleGroup),a=pe(e.__scopeToggleGroup),n=s.value.includes(e.value),i=t.disabled||e.disabled,l={...e,pressed:n,disabled:i},c=p.useRef(null);return t.rovingFocus?o.jsx(xe,{asChild:!0,...a,focusable:!i,active:n,ref:c,children:o.jsx(S,{...l,ref:r})}):o.jsx(S,{...l,ref:r})});me.displayName=b;var S=p.forwardRef((e,r)=>{const{__scopeToggleGroup:s,value:t,...a}=e,n=ue(b,s),i={role:"radio","aria-checked":e.pressed,"aria-pressed":void 0},l=n.type==="single"?i:void 0;return o.jsx(_e,{...l,...a,ref:r,onPressedChange:c=>{c?n.onItemActivate(t):n.onItemDeactivate(t)}})}),ge=I,fe=me;const ve=T.createContext({size:"default",variant:"default"}),_=T.forwardRef(({className:e,variant:r,size:s,children:t,...a},n)=>o.jsx(ge,{ref:n,className:le("flex items-center justify-center gap-1",e),...a,children:o.jsx(ve.Provider,{value:{variant:r,size:s},children:t})}));_.displayName=ge.displayName;const m=T.forwardRef(({className:e,children:r,variant:s,size:t,...a},n)=>{const i=T.useContext(ve);return o.jsx(fe,{ref:n,className:le(Te({variant:i.variant||s,size:i.size||t}),e),...a,children:r})});m.displayName=fe.displayName;try{_.displayName="ToggleGroup",_.__docgenInfo={description:"",displayName:"ToggleGroup",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"default" | "outline" | null'}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"default" | "sm" | "lg" | null'}}}}}catch{}try{m.displayName="ToggleGroupItem",m.__docgenInfo={description:"",displayName:"ToggleGroupItem",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"default" | "outline" | null'}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"default" | "sm" | "lg" | null'}}}}}catch{}const Xe={title:"ui/ToggleGroup",component:_,tags:["autodocs"],argTypes:{type:{options:["multiple","single"],control:{type:"radio"}}},args:{variant:"default",size:"default",type:"multiple",disabled:!1},render:e=>o.jsxs(_,{...e,children:[o.jsx(m,{value:"bold","aria-label":"Activity log",children:o.jsx(C,{name:"ActivityLog",className:"h-4 w-4"})}),o.jsx(m,{value:"italic","aria-label":"Guard Duty",children:o.jsx(C,{name:"GuardDuty",className:"h-4 w-4"})}),o.jsx(m,{value:"underline","aria-label":"Focus Center",children:o.jsx(C,{name:"FocusCenter",className:"h-4 w-4"})})]}),parameters:{layout:"centered",docs:{description:{component:"A set of two-state buttons that can be toggled on or off."}}}},f={},v={args:{variant:"outline"}},h={args:{type:"single"}},y={args:{size:"sm"}},x={args:{size:"lg"}},G={args:{disabled:!0}};var N,w,z,R,V;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:"{}",...(z=(w=f.parameters)==null?void 0:w.docs)==null?void 0:z.source},description:{story:"The default form of the toggle group.",...(V=(R=f.parameters)==null?void 0:R.docs)==null?void 0:V.description}}};var D,A,E,F,q;v.parameters={...v.parameters,docs:{...(D=v.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    variant: 'outline'
  }
}`,...(E=(A=v.parameters)==null?void 0:A.docs)==null?void 0:E.source},description:{story:"Use the `outline` variant to emphasizing the individuality of each button\nwhile keeping them visually cohesive.",...(q=(F=v.parameters)==null?void 0:F.docs)==null?void 0:q.description}}};var M,k,O,U,L;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    type: 'single'
  }
}`,...(O=(k=h.parameters)==null?void 0:k.docs)==null?void 0:O.source},description:{story:"Use the `single` type to create exclusive selection within the button\ngroup, allowing only one button to be active at a time.",...(L=(U=h.parameters)==null?void 0:U.docs)==null?void 0:L.description}}};var $,B,H,J,K;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...(H=(B=y.parameters)==null?void 0:B.docs)==null?void 0:H.source},description:{story:"Use the `sm` size for a compact version of the button group, featuring\nsmaller buttons for spaces with limited real estate.",...(K=(J=y.parameters)==null?void 0:J.docs)==null?void 0:K.description}}};var Q,W,X,Y,Z;x.parameters={...x.parameters,docs:{...(Q=x.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...(X=(W=x.parameters)==null?void 0:W.docs)==null?void 0:X.source},description:{story:"Use the `lg` size for a more prominent version of the button group, featuring\nlarger buttons for emphasis.",...(Z=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:Z.description}}};var ee,oe,re,te,ae;G.parameters={...G.parameters,docs:{...(ee=G.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(re=(oe=G.parameters)==null?void 0:oe.docs)==null?void 0:re.source},description:{story:"Add the `disabled` prop to a button to prevent interactions.",...(ae=(te=G.parameters)==null?void 0:te.docs)==null?void 0:ae.description}}};const Ye=["Default","Outline","Single","Small","Large","Disabled"];export{f as Default,G as Disabled,x as Large,v as Outline,h as Single,y as Small,Ye as __namedExportsOrder,Xe as default};
