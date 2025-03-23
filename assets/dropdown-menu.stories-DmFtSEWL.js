import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{D as o,a as u,b as c,c as h,d as l,e,f as m,g as U,h as _,i as q,j as H,k as J,l as K,m as w,n as M}from"./dropdown-menu-B4xT1L5T.js";import{I as s}from"./icon-CVdS88hk.js";import"./index-yBjzXJbu.js";import"./index-B6o7_jwP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DW48STyt.js";import"./index-CWunzIAO.js";import"./index-Bg13-N3c.js";import"./index-fYiWtIch.js";import"./index-BKcPSHDN.js";import"./index-DYPDg9pM.js";import"./index-BxaFKtJl.js";import"./index-fNjTmf9T.js";import"./index-CO8qXl5s.js";import"./index-5Vl1VMRw.js";import"./index-BiB69Vyw.js";import"./index-DdpX_G71.js";import"./index-CM8D19aL.js";import"./index-CDrSXEGS.js";import"./index-BskipZHp.js";import"./index-CqEA1Bia.js";import"./index-D6Rq8aLn.js";import"./index-BghzCfGL.js";import"./index-B6caMgJY.js";import"./index-BPfEjP2c.js";import"./utils-KnJS0CU8.js";import"./chevron-right-B7Nlwkyy.js";import"./createLucideIcon-jLFYxCQB.js";import"./circle-iluDVhzR.js";import"./check-DvX7itHT.js";import"./iframe-ME0ytDCZ.js";const fn={title:"ui/DropdownMenu",component:o,tags:["autodocs"],argTypes:{},render:r=>n.jsxs(o,{...r,children:[n.jsx(u,{children:"Open"}),n.jsxs(c,{className:"w-44",children:[n.jsx(h,{children:"My Account"}),n.jsx(l,{}),n.jsx(e,{children:"Profile"}),n.jsx(e,{children:"Billing"}),n.jsx(e,{children:"Team"}),n.jsx(e,{children:"Subscription"})]})]}),parameters:{layout:"centered",docs:{description:{component:`Displays a menu to the user — such as a set of actions or functions —
triggered by a button.`}}}},a={},d={render:r=>n.jsxs(o,{...r,children:[n.jsx(u,{children:"Open"}),n.jsxs(c,{className:"w-44",children:[n.jsx(h,{children:"Controls"}),n.jsxs(e,{children:["Back",n.jsx(m,{children:"⌘["})]}),n.jsxs(e,{disabled:!0,children:["Forward",n.jsx(m,{children:"⌘]"})]})]})]})},t={render:r=>n.jsxs(o,{...r,children:[n.jsx(u,{children:"Open"}),n.jsxs(c,{className:"w-44",children:[n.jsxs(e,{children:[n.jsx(s,{name:"Search",className:"mr-2 size-4"}),n.jsx("span",{children:"Search"})]}),n.jsx(l,{}),n.jsxs(U,{children:[n.jsxs(e,{children:[n.jsx(s,{name:"Add",className:"mr-2 size-4"}),n.jsx("span",{children:"New Team"}),n.jsx(m,{children:"⌘+T"})]}),n.jsxs(_,{children:[n.jsxs(q,{children:[n.jsx(s,{name:"AddUsers",className:"mr-2 size-4"}),n.jsx("span",{children:"Invite users"})]}),n.jsx(H,{children:n.jsxs(J,{children:[n.jsxs(e,{children:[n.jsx(s,{name:"InvitedEmail",className:"mr-2 size-4"}),n.jsx("span",{children:"Email"})]}),n.jsx(l,{}),n.jsxs(e,{children:[n.jsx(s,{name:"LearnMore",className:"mr-2 size-4"}),n.jsx("span",{children:"More..."})]})]})})]})]})]})]})},p={render:r=>n.jsxs(o,{...r,children:[n.jsx(u,{children:"Open"}),n.jsxs(c,{className:"w-44",children:[n.jsx(h,{inset:!0,children:"Status"}),n.jsxs(K,{value:"warning",children:[n.jsx(w,{value:"info",children:"Info"}),n.jsx(w,{value:"warning",children:"Warning"}),n.jsx(w,{value:"error",children:"Error"})]})]})]})},i={render:r=>n.jsxs(o,{...r,children:[n.jsx(u,{children:"Open"}),n.jsxs(c,{className:"w-44",children:[n.jsxs(M,{checked:!0,children:["Autosave",n.jsx(m,{children:"⌘S"})]}),n.jsx(M,{children:"Show Comments"})]})]})};var D,x,j,g,S;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:"{}",...(j=(x=a.parameters)==null?void 0:x.docs)==null?void 0:j.source},description:{story:"The default form of the dropdown menu.",...(S=(g=a.parameters)==null?void 0:g.docs)==null?void 0:S.description}}};var I,b,C,N,T;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => <DropdownMenu {...args}>
      <DropdownMenuTrigger>Open</DropdownMenuTrigger>
      <DropdownMenuContent className="w-44">
        <DropdownMenuLabel>Controls</DropdownMenuLabel>
        <DropdownMenuItem>
          Back
          <DropdownMenuShortcut>⌘[</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          Forward
          <DropdownMenuShortcut>⌘]</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
}`,...(C=(b=d.parameters)==null?void 0:b.docs)==null?void 0:C.source},description:{story:"A dropdown menu with shortcuts.",...(T=(N=d.parameters)==null?void 0:N.docs)==null?void 0:T.description}}};var f,v,k,R,A;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <DropdownMenu {...args}>
      <DropdownMenuTrigger>Open</DropdownMenuTrigger>
      <DropdownMenuContent className="w-44">
        <DropdownMenuItem>
          <Icon name="Search" className="mr-2 size-4" />
          <span>Search</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Icon name="Add" className="mr-2 size-4" />
            <span>New Team</span>
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <Icon name="AddUsers" className="mr-2 size-4" />
              <span>Invite users</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>
                  <Icon name="InvitedEmail" className="mr-2 size-4" />
                  <span>Email</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Icon name="LearnMore" className="mr-2 size-4" />
                  <span>More...</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
}`,...(k=(v=t.parameters)==null?void 0:v.docs)==null?void 0:k.source},description:{story:"A dropdown menu with submenus.",...(A=(R=t.parameters)==null?void 0:R.docs)==null?void 0:A.description}}};var y,z,O,W,E;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <DropdownMenu {...args}>
      <DropdownMenuTrigger>Open</DropdownMenuTrigger>
      <DropdownMenuContent className="w-44">
        <DropdownMenuLabel inset>Status</DropdownMenuLabel>
        <DropdownMenuRadioGroup value="warning">
          <DropdownMenuRadioItem value="info">Info</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="warning">Warning</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="error">Error</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
}`,...(O=(z=p.parameters)==null?void 0:z.docs)==null?void 0:O.source},description:{story:"A dropdown menu with radio items.",...(E=(W=p.parameters)==null?void 0:W.docs)==null?void 0:E.description}}};var L,G,P,B,F;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => <DropdownMenu {...args}>
      <DropdownMenuTrigger>Open</DropdownMenuTrigger>
      <DropdownMenuContent className="w-44">
        <DropdownMenuCheckboxItem checked>
          Autosave
          <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem>Show Comments</DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
}`,...(P=(G=i.parameters)==null?void 0:G.docs)==null?void 0:P.source},description:{story:"A dropdown menu with checkboxes.",...(F=(B=i.parameters)==null?void 0:B.docs)==null?void 0:F.description}}};const vn=["Default","WithShortcuts","WithSubmenus","WithRadioItems","WithCheckboxes"];export{a as Default,i as WithCheckboxes,p as WithRadioItems,d as WithShortcuts,t as WithSubmenus,vn as __namedExportsOrder,fn as default};
