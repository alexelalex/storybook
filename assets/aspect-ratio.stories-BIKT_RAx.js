import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as D}from"./index-B6o7_jwP.js";import{P as U}from"./index-DYPDg9pM.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BxaFKtJl.js";import"./index-fNjTmf9T.js";import"./index-CWunzIAO.js";var I="AspectRatio",w=D.forwardRef((a,C)=>{const{ratio:S=1/1,style:E,...P}=a;return e.jsx("div",{style:{position:"relative",width:"100%",paddingBottom:`${100/S}%`},"data-radix-aspect-ratio-wrapper":"",children:e.jsx(U.div,{...P,ref:C,style:{...E,position:"absolute",top:0,right:0,bottom:0,left:0}})})});w.displayName=I;var L=w;const i=L;try{i.displayName="AspectRatio",i.__docgenInfo={description:"",displayName:"AspectRatio",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{aspectratio.displayName="aspectratio",aspectratio.__docgenInfo={description:"",displayName:"aspectratio",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const F={title:"ui/AspectRatio",component:i,tags:["autodocs"],argTypes:{},render:a=>e.jsx(i,{...a,className:"bg-slate-50 dark:bg-slate-800",children:e.jsx("img",{src:"https://images.unsplash.com/photo-1576075796033-848c2a5f3696?w=800&dpr=2&q=80",alt:"by Alvaro Pinot",className:"rounded-md object-cover"})}),decorators:[a=>e.jsx("div",{className:"w-1/2",children:e.jsx(a,{})})],parameters:{docs:{description:{component:"Displays content within a desired ratio."}}}},r={args:{ratio:16/9}},t={args:{ratio:1}},s={args:{ratio:4/3}},o={args:{ratio:2.35/1}};var c,p,d,n,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ratio: 16 / 9
  }
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source},description:{story:"The default form of the aspect ratio.",...(m=(n=r.parameters)==null?void 0:n.docs)==null?void 0:m.description}}};var l,u,g,y,f;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ratio: 1
  }
}`,...(g=(u=t.parameters)==null?void 0:u.docs)==null?void 0:g.source},description:{story:"Use the `1:1` aspect ratio to display a square image.",...(f=(y=t.parameters)==null?void 0:y.docs)==null?void 0:f.description}}};var h,_,x,v,R;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ratio: 4 / 3
  }
}`,...(x=(_=s.parameters)==null?void 0:_.docs)==null?void 0:x.source},description:{story:"Use the `4:3` aspect ratio to display a landscape image.",...(R=(v=s.parameters)==null?void 0:v.docs)==null?void 0:R.description}}};var j,N,b,A,q;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ratio: 2.35 / 1
  }
}`,...(b=(N=o.parameters)==null?void 0:N.docs)==null?void 0:b.source},description:{story:"Use the `2.35:1` aspect ratio to display a cinemascope image.",...(q=(A=o.parameters)==null?void 0:A.docs)==null?void 0:q.description}}};const G=["Default","Square","Landscape","Cinemascope"];export{o as Cinemascope,r as Default,s as Landscape,t as Square,G as __namedExportsOrder,F as default};
