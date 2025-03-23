import{j as i}from"./jsx-runtime-Cf8x2fCZ.js";import{T as q}from"./toggle-SsyrGgKI.js";import{I as n}from"./icon-CVdS88hk.js";import"./index-yBjzXJbu.js";import"./index-B6o7_jwP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DW48STyt.js";import"./index-fYiWtIch.js";import"./index-BKcPSHDN.js";import"./index-DYPDg9pM.js";import"./index-BxaFKtJl.js";import"./index-fNjTmf9T.js";import"./index-CWunzIAO.js";import"./index-CRGxjvZy.js";import"./utils-KnJS0CU8.js";import"./iframe-ME0ytDCZ.js";const se={title:"ui/Toggle",component:q,tags:["autodocs"],argTypes:{children:{control:{disable:!0}}},args:{children:i.jsx(n,{name:"Action",className:"h-4 w-4"}),"aria-label":"Toggle bold"},parameters:{layout:"centered",docs:{description:{component:"A two-state button that can be either on or off."}}}},r={},e={args:{variant:"outline",children:i.jsx(n,{name:"Add",className:"h-4 w-4"}),"aria-label":"Toggle italic"}},s={render:B=>i.jsxs(q,{...B,children:[i.jsx(n,{name:"Remove",className:"mr-2 h-4 w-4"}),"Italic"]}),args:{...e.args}},a={args:{size:"sm"}},t={args:{size:"lg"}},o={args:{disabled:!0}};var c,l,m,d,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(m=(l=r.parameters)==null?void 0:l.docs)==null?void 0:m.source},description:{story:"The default form of the toggle.",...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.description}}};var g,u,h,f,b;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    children: <Icon name="Add" className="h-4 w-4" />,
    'aria-label': 'Toggle italic'
  }
}`,...(h=(u=e.parameters)==null?void 0:u.docs)==null?void 0:h.source},description:{story:"Use the `outline` variant for a distinct outline, emphasizing the boundary\nof the selection circle for clearer visibility",...(b=(f=e.parameters)==null?void 0:f.docs)==null?void 0:b.description}}};var y,T,x,v,w;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <Toggle {...args}>
      <Icon name="Remove" className="mr-2 h-4 w-4" />
      Italic
    </Toggle>,
  args: {
    ...Outline.args
  }
}`,...(x=(T=s.parameters)==null?void 0:T.docs)==null?void 0:x.source},description:{story:"Use the text element to add a label to the toggle.",...(w=(v=s.parameters)==null?void 0:v.docs)==null?void 0:w.description}}};var S,z,j,I,A;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...(j=(z=a.parameters)==null?void 0:z.docs)==null?void 0:j.source},description:{story:"Use the `sm` size for a smaller toggle, suitable for interfaces needing\ncompact elements without sacrificing usability.",...(A=(I=a.parameters)==null?void 0:I.docs)==null?void 0:A.description}}};var N,D,O,U,R;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...(O=(D=t.parameters)==null?void 0:D.docs)==null?void 0:O.source},description:{story:"Use the `lg` size for a larger toggle, offering better visibility and\neasier interaction for users.",...(R=(U=t.parameters)==null?void 0:U.docs)==null?void 0:R.description}}};var E,L,W,_,k;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(W=(L=o.parameters)==null?void 0:L.docs)==null?void 0:W.source},description:{story:"Add the `disabled` prop to prevent interactions with the toggle.",...(k=(_=o.parameters)==null?void 0:_.docs)==null?void 0:k.description}}};const ae=["Default","Outline","WithText","Small","Large","Disabled"];export{r as Default,o as Disabled,t as Large,e as Outline,a as Small,s as WithText,ae as __namedExportsOrder,se as default};
