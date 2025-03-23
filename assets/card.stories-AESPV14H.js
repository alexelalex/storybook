import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as o}from"./index-B6o7_jwP.js";import{c as t}from"./utils-KnJS0CU8.js";import{I as N}from"./icon-DlYx3cyN.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-GL4rvzE7.js";const i=o.forwardRef(({className:r,...s},a)=>e.jsx("div",{ref:a,className:t("rounded-lg border bg-card text-card-foreground shadow-sm",r),...s}));i.displayName="Card";const f=o.forwardRef(({className:r,...s},a)=>e.jsx("div",{ref:a,className:t("flex flex-col space-y-1.5 p-6",r),...s}));f.displayName="CardHeader";const x=o.forwardRef(({className:r,...s},a)=>e.jsx("h3",{ref:a,className:t("text-lg font-semibold leading-none tracking-tight",r),...s}));x.displayName="CardTitle";const u=o.forwardRef(({className:r,...s},a)=>e.jsx("p",{ref:a,className:t("text-sm text-muted-foreground",r),...s}));u.displayName="CardDescription";const h=o.forwardRef(({className:r,...s},a)=>e.jsx("div",{ref:a,className:t("p-6 pt-0",r),...s}));h.displayName="CardContent";const g=o.forwardRef(({className:r,...s},a)=>e.jsx("div",{ref:a,className:t("flex items-center p-6 pt-0",r),...s}));g.displayName="CardFooter";try{i.displayName="Card",i.__docgenInfo={description:"",displayName:"Card",props:{}}}catch{}const j=[{title:"Your call has been confirmed.",description:"1 hour ago"},{title:"You have a new message!",description:"1 hour ago"},{title:"Your subscription is expiring soon!",description:"2 hours ago"}],D={title:"ui/Card",component:i,tags:["autodocs"],argTypes:{},args:{className:"w-96"},render:r=>e.jsxs(i,{...r,children:[e.jsxs(f,{children:[e.jsx(x,{children:"Notifications"}),e.jsx(u,{children:"You have 3 unread messages."})]}),e.jsx(h,{className:"grid gap-4",children:j.map((s,a)=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(N,{name:"NotificationOn",className:"size-6"}),e.jsxs("div",{children:[e.jsx("p",{children:s.title}),e.jsx("p",{className:"text-foreground/50",children:s.description})]})]},a))}),e.jsx(g,{children:e.jsx("button",{type:"button",className:"hover:underline",children:"Close"})})]}),parameters:{layout:"centered",docs:{description:{component:"Displays a card with header, content, and footer."}}}},d={};var c,n,l,p,m;d.parameters={...d.parameters,docs:{...(c=d.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(l=(n=d.parameters)==null?void 0:n.docs)==null?void 0:l.source},description:{story:"The default form of the card.",...(m=(p=d.parameters)==null?void 0:p.docs)==null?void 0:m.description}}};const T=["Default"];export{d as Default,T as __namedExportsOrder,D as default};
