import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{I as n}from"./input-DhMqJRdS.js";import"./index-yBjzXJbu.js";import"./index-B6o7_jwP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./utils-KnJS0CU8.js";const q={title:"ui/Input",component:n,tags:["autodocs"],argTypes:{},args:{className:"w-96",type:"email",placeholder:"Email",disabled:!1},parameters:{layout:"centered",docs:{description:{component:"Displays a form input field or a component that looks like an input field."}}}},t={},s={args:{disabled:!0}},a={render:r=>e.jsxs("div",{className:"grid items-center gap-1.5",children:[e.jsx("label",{htmlFor:"email",children:r.placeholder}),e.jsx(n,{...r,id:"email"})]})},o={render:r=>e.jsxs("div",{className:"grid items-center gap-1.5",children:[e.jsx("label",{htmlFor:"email-2",children:r.placeholder}),e.jsx(n,{...r,id:"email-2"}),e.jsx("p",{className:"text-sm text-foreground/50",children:"Enter your email address."})]})},i={render:r=>e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(n,{...r}),e.jsx("button",{className:"rounded bg-primary px-4 py-2 text-primary-foreground",type:"submit",children:"Subscribe"})]})};var d,c,p,l,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source},description:{story:"The default form of the input field.",...(m=(l=t.parameters)==null?void 0:l.docs)==null?void 0:m.description}}};var u,g,h,b,x;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source},description:{story:"Use the `disabled` prop to make the input non-interactive and appears faded,\nindicating that input is not currently accepted.",...(x=(b=s.parameters)==null?void 0:b.docs)==null?void 0:x.description}}};var f,y,v,j,N;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <div className="grid items-center gap-1.5">
      <label htmlFor="email">{args.placeholder}</label>
      <Input {...args} id="email" />
    </div>
}`,...(v=(y=a.parameters)==null?void 0:y.docs)==null?void 0:v.source},description:{story:"Use the `Label` component to includes a clear, descriptive label above or\nalongside the input area to guide users.",...(N=(j=a.parameters)==null?void 0:j.docs)==null?void 0:N.description}}};var S,I,W,D,E;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <div className="grid items-center gap-1.5">
      <label htmlFor="email-2">{args.placeholder}</label>
      <Input {...args} id="email-2" />
      <p className="text-sm text-foreground/50">Enter your email address.</p>
    </div>
}`,...(W=(I=o.parameters)==null?void 0:I.docs)==null?void 0:W.source},description:{story:`Use a text element below the input field to provide additional instructions
or information to users.`,...(E=(D=o.parameters)==null?void 0:D.docs)==null?void 0:E.description}}};var F,T,U,k,B;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => <div className="flex items-center space-x-2">
      <Input {...args} />
      <button className="rounded bg-primary px-4 py-2 text-primary-foreground" type="submit">
        Subscribe
      </button>
    </div>
}`,...(U=(T=i.parameters)==null?void 0:T.docs)==null?void 0:U.source},description:{story:"Use the `Button` component to indicate that the input field can be submitted\nor used to trigger an action.",...(B=(k=i.parameters)==null?void 0:k.docs)==null?void 0:B.description}}};const z=["Default","Disabled","WithLabel","WithHelperText","WithButton"];export{t as Default,s as Disabled,i as WithButton,o as WithHelperText,a as WithLabel,z as __namedExportsOrder,q as default};
