import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{t as k}from"./tailwind.config-CP-0NwGF.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-Cpj98o6Y.js";const C=(t,e,n)=>{n/=100;const c=e*Math.min(n,1-n)/100,s=a=>{const o=(a+t/30)%12,l=n-c*Math.max(Math.min(o-3,9-o,1),-1);return Math.round(255*l).toString(16).padStart(2,"0")};return`#${s(0)}${s(8)}${s(4)}`},H=t=>{if(t==="#fff"||t==="#ffffff")return"hsl(0, 0%, 100%)";if(t==="#000"||t==="#000000")return"hsl(0, 0%, 0%)";const e=parseInt(t.substring(1,3),16)/255,n=parseInt(t.substring(3,5),16)/255,c=parseInt(t.substring(5,7),16)/255,s=Math.max(e,n,c),a=Math.min(e,n,c);let o=(s+a)/2,l=(s+a)/2,i=(s+a)/2;if(s===a)o=l=0;else{const d=s-a;switch(l=i>.5?d/(2-s-a):d/(s+a),s){case e:o=(n-c)/d+(n<c?6:0);break;case n:o=(c-e)/d+2;break;case c:o=(e-n)/d+4;break}o/=6}return l*=100,l=Math.round(l),i*=100,i=Math.round(i),o=Math.round(360*o),`hsl(${o}, ${l}%, ${i}%)`},E={title:"design/Color",argTypes:{},render:t=>r.jsxs("table",{className:"w-full table-auto text-left text-sm text-foreground rtl:text-right",children:[r.jsx("thead",{className:"bg-muted text-xs uppercase",children:r.jsxs("tr",{children:[r.jsx("th",{scope:"col",className:"px-6 py-3",children:"Name"}),r.jsx("th",{scope:"col",className:"px-6 py-3",children:r.jsx("span",{className:"sr-only",children:"Swatch"})})]})}),r.jsx("tbody",{children:t.swatch.map(({name:e,colors:n})=>r.jsxs("tr",{className:"border-b bg-card",children:[r.jsx("td",{className:"px-6 py-4",children:e}),r.jsx("td",{className:"px-6 py-4",children:r.jsx("div",{className:"flex overflow-x-clip rounded-md border shadow",children:Object.entries(n).map(([c,s])=>{var x;const a=s.startsWith("#"),o=window.getComputedStyle(document.body),l=((x=s.match(/var\(([^)]+)\)/))==null?void 0:x[1])??"",[i,d,h]=o.getPropertyValue(l).match(/\d+/g)??[],O=a?H(s):`hsl(${i}, ${d}%, ${h}%)`,M=a?s:C(Number(i),Number(d),Number(h));return r.jsxs("div",{className:"flex w-full flex-col pb-2",children:[r.jsx("div",{className:"h-16 w-full",style:{backgroundColor:s}}),r.jsx("p",{className:"text-center font-semibold",children:c}),r.jsx("p",{className:"text-center text-xs opacity-70",children:l}),r.jsx("p",{className:"text-center text-xs",children:M}),r.jsx("p",{className:"text-center text-xs",children:O})]},`${e}-${c}`)})})})]},e))})]})};var f,b;const $=((b=(f=k.theme)==null?void 0:f.extend)==null?void 0:b.colors)??{},u=["foreground","background","primary","secondary","card","accent","muted","popover","destructive","input","border","ring"],m={args:{swatch:Object.entries($).filter(t=>u.includes(t[0])).sort(([t],[e])=>u.indexOf(t)-u.indexOf(e)).map(([t,e])=>({name:t,colors:typeof e=="string"?{[t]:e}:e}))}},p={args:{swatch:Object.entries($).filter(t=>![...u,"inherit","current","transparent"].includes(t[0])).map(([t,e])=>({name:t,colors:typeof e=="string"?{[t]:e}:e}))}};var g,j,w;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    swatch: Object.entries(colors).filter(d => functionalSwatch.includes(d[0] as ColorKey)).sort(([a], [b]) => functionalSwatch.indexOf(a as ColorKey) - functionalSwatch.indexOf(b as ColorKey))
    // eslint-disable-next-line no-shadow
    .map(([name, colors]) => {
      return {
        name,
        colors: typeof colors === 'string' ? {
          [name]: colors
        } : colors
      };
    })
  }
}`,...(w=(j=m.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var y,N,S;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    swatch: Object.entries(colors).filter(d => ![...functionalSwatch, 'inherit', 'current', 'transparent'].includes(d[0] as keyof typeof colors))
    // eslint-disable-next-line no-shadow
    .map(([name, colors]) => {
      return {
        name,
        colors: typeof colors === 'string' ? {
          [name]: colors
        } : colors
      };
    })
  }
}`,...(S=(N=p.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};const F=["Functional","Tailwind"];export{m as Functional,p as Tailwind,F as __namedExportsOrder,E as default};
