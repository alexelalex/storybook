import{j as u}from"./jsx-runtime-Cf8x2fCZ.js";import{B as g}from"./button-CD81syek.js";import{I as h}from"./icon-CVdS88hk.js";import"./index-yBjzXJbu.js";import"./index-B6o7_jwP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CWunzIAO.js";import"./index-CRGxjvZy.js";import"./utils-KnJS0CU8.js";import"./createLucideIcon-jLFYxCQB.js";import"./iframe-ME0ytDCZ.js";const Ne={title:"ui/Button",component:g,tags:["autodocs"],argTypes:{children:{control:"text"}},parameters:{layout:"centered",docs:{description:{component:"Displays a button or a component that looks like a button."}}},args:{variant:"default",size:"default",children:"Button"}},s={},r={args:{variant:"outline"}},t={args:{variant:"ghost"}},e={args:{variant:"secondary"}},a={args:{variant:"destructive"}},o={args:{variant:"link"}},n={render:l=>u.jsxs(g,{...l,children:[u.jsx(h,{name:"ConfigChanges",className:"mr-2 h-4 w-4 animate-spin"}),"Button"]}),args:{...r.args,disabled:!0}},i={render:l=>u.jsxs(g,{...l,children:[u.jsx(h,{name:"InvitedEmail",className:"mr-2 h-4 w-4"})," Login with Email Button"]}),args:{...e.args}},c={args:{size:"sm"}},d={args:{size:"lg"}},m={args:{...e.args,size:"icon",children:u.jsx(h,{name:"InvitedEmail"})}},p={args:{disabled:!0}};var y,b,v,f,S;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:"{}",...(v=(b=s.parameters)==null?void 0:b.docs)==null?void 0:v.source},description:{story:"The default form of the button, used for primary actions and commands.",...(S=(f=s.parameters)==null?void 0:f.docs)==null?void 0:S.description}}};var z,I,x,B,w;r.parameters={...r.parameters,docs:{...(z=r.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    variant: 'outline'
  }
}`,...(x=(I=r.parameters)==null?void 0:I.docs)==null?void 0:x.source},description:{story:"Use the `outline` button to reduce emphasis on secondary actions, such as\ncanceling or dismissing a dialog.",...(w=(B=r.parameters)==null?void 0:B.docs)==null?void 0:w.description}}};var k,E,L,U,j;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: 'ghost'
  }
}`,...(L=(E=t.parameters)==null?void 0:E.docs)==null?void 0:L.source},description:{story:"Use the `ghost` button is minimalistic and subtle, for less intrusive\nactions.",...(j=(U=t.parameters)==null?void 0:U.docs)==null?void 0:j.description}}};var D,C,N,O,A;e.parameters={...e.parameters,docs:{...(D=e.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  }
}`,...(N=(C=e.parameters)==null?void 0:C.docs)==null?void 0:N.source},description:{story:"Use the `secondary` button to call for less emphasized actions, styled to\ncomplement the primary button while being less conspicuous.",...(A=(O=e.parameters)==null?void 0:O.docs)==null?void 0:A.description}}};var G,T,W,_,R;a.parameters={...a.parameters,docs:{...(G=a.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    variant: 'destructive'
  }
}`,...(W=(T=a.parameters)==null?void 0:T.docs)==null?void 0:W.source},description:{story:"Use the `destructive` button to indicate errors, alerts, or the need for\nimmediate attention.",...(R=(_=a.parameters)==null?void 0:_.docs)==null?void 0:R.description}}};var q,F,H,J,K;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    variant: 'link'
  }
}`,...(H=(F=o.parameters)==null?void 0:F.docs)==null?void 0:H.source},description:{story:"Use the `link` button to reduce emphasis on tertiary actions, such as\nhyperlink or navigation, providing a text-only interactive element.",...(K=(J=o.parameters)==null?void 0:J.docs)==null?void 0:K.description}}};var M,P,Q,V,X;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: args => <Button {...args}>
      <Icon name="ConfigChanges" className="mr-2 h-4 w-4 animate-spin" />
      Button
    </Button>,
  args: {
    ...Outline.args,
    disabled: true
  }
}`,...(Q=(P=n.parameters)==null?void 0:P.docs)==null?void 0:Q.source},description:{story:"Add the `disabled` prop to a button to prevent interactions and add a\nloading indicator, such as a spinner, to signify an in-progress action.",...(X=(V=n.parameters)==null?void 0:V.docs)==null?void 0:X.description}}};var Y,Z,$,ee,re;i.parameters={...i.parameters,docs:{...(Y=i.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: args => <Button {...args}>
      <Icon name="InvitedEmail" className="mr-2 h-4 w-4" /> Login with Email
      Button
    </Button>,
  args: {
    ...Secondary.args
  }
}`,...($=(Z=i.parameters)==null?void 0:Z.docs)==null?void 0:$.source},description:{story:`Add an icon element to a button to enhance visual communication and
providing additional context for the action.`,...(re=(ee=i.parameters)==null?void 0:ee.docs)==null?void 0:re.description}}};var se,te,ae,oe,ne;c.parameters={...c.parameters,docs:{...(se=c.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...(ae=(te=c.parameters)==null?void 0:te.docs)==null?void 0:ae.source},description:{story:"Use the `sm` size for a smaller button, suitable for interfaces needing\ncompact elements without sacrificing usability.",...(ne=(oe=c.parameters)==null?void 0:oe.docs)==null?void 0:ne.description}}};var ie,ce,de,me,pe;d.parameters={...d.parameters,docs:{...(ie=d.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...(de=(ce=d.parameters)==null?void 0:ce.docs)==null?void 0:de.source},description:{story:"Use the `lg` size for a larger button, offering better visibility and\neasier interaction for users.",...(pe=(me=d.parameters)==null?void 0:me.docs)==null?void 0:pe.description}}};var ue,le,ge,he,ye;m.parameters={...m.parameters,docs:{...(ue=m.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    ...Secondary.args,
    size: 'icon',
    children: <Icon name="InvitedEmail" />
  }
}`,...(ge=(le=m.parameters)==null?void 0:le.docs)==null?void 0:ge.source},description:{story:'Use the "icon" size for a button with only an icon.',...(ye=(he=m.parameters)==null?void 0:he.docs)==null?void 0:ye.description}}};var be,ve,fe,Se,ze;p.parameters={...p.parameters,docs:{...(be=p.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(fe=(ve=p.parameters)==null?void 0:ve.docs)==null?void 0:fe.source},description:{story:"Add the `disabled` prop to prevent interactions with the button.",...(ze=(Se=p.parameters)==null?void 0:Se.docs)==null?void 0:ze.description}}};const Oe=["Default","Outline","Ghost","Secondary","Destructive","Link","Loading","WithIcon","Small","Large","IconSize","Disabled"];export{s as Default,a as Destructive,p as Disabled,t as Ghost,m as IconSize,d as Large,o as Link,n as Loading,r as Outline,e as Secondary,c as Small,i as WithIcon,Oe as __namedExportsOrder,Ne as default};
