import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as L}from"./index-B6o7_jwP.js";import{c as k}from"./utils-KnJS0CU8.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-Cpj98o6Y.js";const a=L.forwardRef(({className:s,...B},E)=>e.jsx("textarea",{className:k("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",s),ref:E,...B}));a.displayName="Textarea";try{a.displayName="Textarea",a.__docgenInfo={description:"",displayName:"Textarea",props:{}}}catch{}const A={title:"ui/Textarea",component:a,tags:["autodocs"],argTypes:{},args:{placeholder:"Type your message here.",disabled:!1},parameters:{docs:{description:{component:"Displays a form textarea or a component that looks like a textarea."}}}},r={},t={args:{disabled:!0}},o={render:s=>e.jsxs("div",{className:"grid w-full gap-1.5",children:[e.jsx("label",{htmlFor:"message",children:"Your message"}),e.jsx(a,{...s,id:"message"})]})},i={render:s=>e.jsxs("div",{className:"grid w-full gap-1.5",children:[e.jsx("label",{htmlFor:"message-2",children:"Your Message"}),e.jsx(a,{...s,id:"message-2"}),e.jsx("p",{className:"text-sm text-slate-500",children:"Your message will be copied to the support team."})]})},n={render:s=>e.jsxs("div",{className:"grid w-full gap-2",children:[e.jsx(a,{...s}),e.jsx("button",{className:"rounded bg-primary px-4 py-2 text-primary-foreground",type:"submit",children:"Send Message"})]})};var d,l,c,p,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source},description:{story:"The default form of the textarea.",...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.description}}};var u,g,x,b,h;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(x=(g=t.parameters)==null?void 0:g.docs)==null?void 0:x.source},description:{story:"Use the `disabled` prop to disable the textarea.",...(h=(b=t.parameters)==null?void 0:b.docs)==null?void 0:h.description}}};var f,y,j,v,N;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <div className="grid w-full gap-1.5">
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="message">Your message</label>
      <Textarea {...args} id="message" />
    </div>
}`,...(j=(y=o.parameters)==null?void 0:y.docs)==null?void 0:j.source},description:{story:"Use the `Label` component to includes a clear, descriptive label above or\nalongside the text area to guide users.",...(N=(v=o.parameters)==null?void 0:v.docs)==null?void 0:N.description}}};var w,T,_,S,W;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <div className="grid w-full gap-1.5">
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="message-2">Your Message</label>
      <Textarea {...args} id="message-2" />
      <p className="text-sm text-slate-500">
        Your message will be copied to the support team.
      </p>
    </div>
}`,...(_=(T=i.parameters)==null?void 0:T.docs)==null?void 0:_.source},description:{story:`Use a text element below the text area to provide additional instructions
or information to users.`,...(W=(S=i.parameters)==null?void 0:S.docs)==null?void 0:W.description}}};var Y,D,F,M,U;n.parameters={...n.parameters,docs:{...(Y=n.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: args => <div className="grid w-full gap-2">
      <Textarea {...args} />
      <button className="rounded bg-primary px-4 py-2 text-primary-foreground" type="submit">
        Send Message
      </button>
    </div>
}`,...(F=(D=n.parameters)==null?void 0:D.docs)==null?void 0:F.source},description:{story:"Use the `Button` component to indicate that the text area can be submitted\nor used to trigger an action.",...(U=(M=n.parameters)==null?void 0:M.docs)==null?void 0:U.description}}};const C=["Default","Disabled","WithLabel","WithText","WithButton"];export{r as Default,t as Disabled,n as WithButton,o as WithLabel,i as WithText,C as __namedExportsOrder,A as default};
