import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{r as i}from"./index-B6o7_jwP.js";import{S as k}from"./index-CWunzIAO.js";import{c as p}from"./utils-KnJS0CU8.js";import{I as u}from"./icon-CVdS88hk.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-ME0ytDCZ.js";const o=i.forwardRef(({...e},a)=>r.jsx("nav",{ref:a,"aria-label":"breadcrumb",...e}));o.displayName="Breadcrumb";const l=i.forwardRef(({className:e,...a},s)=>r.jsx("ol",{ref:s,className:p("flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",e),...a}));l.displayName="BreadcrumbList";const t=i.forwardRef(({className:e,...a},s)=>r.jsx("li",{ref:s,className:p("inline-flex items-center gap-1.5",e),...a}));t.displayName="BreadcrumbItem";const m=i.forwardRef(({asChild:e,className:a,...s},R)=>{const S=e?k:"a";return r.jsx(S,{ref:R,className:p("transition-colors hover:text-foreground",a),...s})});m.displayName="BreadcrumbLink";const b=i.forwardRef(({className:e,...a},s)=>r.jsx("span",{ref:s,role:"link","aria-disabled":"true","aria-current":"page",className:p("font-normal text-foreground",e),...a}));b.displayName="BreadcrumbPage";function d({children:e,className:a,...s}){return r.jsx("li",{role:"presentation","aria-hidden":"true",className:p("[&>svg]:w-3.5 [&>svg]:h-3.5",a),...s,children:e??r.jsx(u,{name:"ArrowRight"})})}d.displayName="BreadcrumbSeparator";try{o.displayName="Breadcrumb",o.__docgenInfo={description:"",displayName:"Breadcrumb",props:{separator:{defaultValue:null,description:"",name:"separator",required:!1,type:{name:"ReactNode"}}}}}catch{}const H={title:"ui/Breadcrumb",component:o,tags:["autodocs"],argTypes:{},args:{},render:e=>r.jsx(o,{...e,children:r.jsxs(l,{children:[r.jsx(t,{children:r.jsx(m,{children:"Home"})}),r.jsx(d,{}),r.jsx(t,{children:r.jsx(m,{children:"Components"})}),r.jsx(d,{}),r.jsx(t,{children:r.jsx(b,{children:"Breadcrumb"})})]})}),parameters:{layout:"centered",docs:{description:{component:"Displays the path to the current resource using a hierarchy of links."}}}},c={},n={render:e=>r.jsx(o,{...e,children:r.jsxs(l,{children:[r.jsx(t,{children:r.jsx(m,{children:"Home"})}),r.jsx(d,{children:r.jsx(u,{name:"ArrowRight"})}),r.jsx(t,{children:r.jsx(m,{children:"Components"})}),r.jsx(d,{children:r.jsx(u,{name:"ArrowRight"})}),r.jsx(t,{children:r.jsx(b,{children:"Breadcrumb"})})]})})};var h,x,B,f,j;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(B=(x=c.parameters)==null?void 0:x.docs)==null?void 0:B.source},description:{story:"Displays the path of links to the current resource.",...(j=(f=c.parameters)==null?void 0:f.docs)==null?void 0:j.description}}};var g,y,w,N,I;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <Breadcrumb {...args}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink>Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <Icon name="ArrowRight" />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink>Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <Icon name="ArrowRight" />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
}`,...(w=(y=n.parameters)==null?void 0:y.docs)==null?void 0:w.source},description:{story:"Displays the path with a custom icon for the separator.",...(I=(N=n.parameters)==null?void 0:N.docs)==null?void 0:I.description}}};const W=["Default","WithCustomSeparator"];export{c as Default,n as WithCustomSeparator,W as __namedExportsOrder,H as default};
