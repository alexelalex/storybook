function y(t){var a,n,e="";if(typeof t=="string"||typeof t=="number")e+=t;else if(typeof t=="object")if(Array.isArray(t)){var r=t.length;for(a=0;a<r;a++)t[a]&&(n=y(t[a]))&&(e&&(e+=" "),e+=n)}else for(n in t)t[n]&&(e&&(e+=" "),e+=n);return e}function j(){for(var t,a,n=0,e="",r=arguments.length;n<r;n++)(t=arguments[n])&&(a=y(t))&&(e&&(e+=" "),e+=a);return e}const f=t=>typeof t=="boolean"?`${t}`:t===0?"0":t,m=j,A=(t,a)=>n=>{var e;if((a==null?void 0:a.variants)==null)return m(t,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:r,defaultVariants:s}=a,V=Object.keys(r).map(l=>{const i=n==null?void 0:n[l],o=s==null?void 0:s[l];if(i===null)return null;const u=f(i)||f(o);return r[l][u]}),v=n&&Object.entries(n).reduce((l,i)=>{let[o,u]=i;return u===void 0||(l[o]=u),l},{}),N=a==null||(e=a.compoundVariants)===null||e===void 0?void 0:e.reduce((l,i)=>{let{class:o,className:u,...b}=i;return Object.entries(b).every(C=>{let[c,d]=C;return Array.isArray(d)?d.includes({...s,...v}[c]):{...s,...v}[c]===d})?[...l,o,u]:l},[]);return m(t,V,N,n==null?void 0:n.class,n==null?void 0:n.className)};export{A as c};
