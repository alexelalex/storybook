import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{t as u}from"./tailwind.config-CP-0NwGF.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-Cpj98o6Y.js";const{fontSize:j,fontWeight:f}=u.theme,z={title:"design/Typography",argTypes:{},args:{children:"Typeface"},render:t=>e.jsxs("table",{className:"w-full table-auto text-left text-sm text-foreground rtl:text-right",children:[e.jsx("thead",{className:"bg-muted text-xs uppercase",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"px-6 py-3",children:"Name"}),e.jsx("th",{scope:"col",className:"hidden px-6 py-3 sm:table-cell",children:"Property"}),e.jsx("th",{scope:"col",className:"px-6 py-3",children:e.jsx("span",{className:"sr-only",children:"Preview"})})]})}),e.jsx("tbody",{children:t.property.map(({name:r,value:s})=>{var c;const x=window.getComputedStyle(document.body),y=((c=s.match(/var\(([^)]+)\)/))==null?void 0:c[1])??"",o=x.getPropertyValue(y),g=o?s.replace(/var\(--(.*?)\)/,o):s;return e.jsxs("tr",{className:"border-b bg-card",children:[e.jsx("td",{className:"px-6 py-4",children:r}),e.jsx("td",{className:"hidden px-6 py-4 sm:table-cell",children:g}),e.jsx("td",{className:"px-6 py-4 leading-tight",children:e.jsx("p",{className:"line-clamp-1",style:{[t.key]:s},children:t.children})})]},r)})})]})},a={args:{key:"fontSize",property:Object.entries(j).map(([t,r])=>({name:t,value:r}))}},n={args:{key:"fontWeight",property:Object.entries(f).map(([t,r])=>({name:t,value:String(r)}))}};var l,p,i;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    key: 'fontSize',
    property: Object.entries(fontSize).map(([name, value]) => ({
      name,
      value
    }))
  }
}`,...(i=(p=a.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var d,m,h;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    key: 'fontWeight',
    property: Object.entries(fontWeight).map(([name, value]) => ({
      name,
      value: String(value)
    }))
  }
}`,...(h=(m=n.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};const W=["FontSize","FontWeight"];export{a as FontSize,n as FontWeight,W as __namedExportsOrder,z as default};
