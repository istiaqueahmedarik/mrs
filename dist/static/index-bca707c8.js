import{s as f,r as l,a$ as j,j as e,aB as P,f as h,b0 as B,$ as I,aC as b,b1 as E,az as H,aj as k,b2 as C,ax as v}from"./sanity-7dcb123e.js";const y=f(v)`
  position: relative;
`;function R(a){const{children:o}=a,{collapsed:t}=B();return e.jsx(y,{hidden:t,height:"fill",overflow:"auto",children:o})}function S(a){const{actionHandlers:o,index:t,menuItems:n,menuItemGroups:r,title:i}=a,{features:s}=I();return!(n!=null&&n.length)&&!i?null:e.jsx(b,{actions:e.jsx(E,{menuItems:n,menuItemGroups:r,actionHandlers:o}),backButton:s.backButton&&t>0&&e.jsx(H,{as:k,"data-as":"a",icon:C,mode:"bleed",tooltipProps:{content:"Back"}}),title:i})}function g(a){const{index:o,pane:t,paneKey:n,...r}=a,{child:i,component:s,menuItems:u,menuItemGroups:d,type:T,...m}=t,[c,p]=l.useState(null),{title:x=""}=j(t);return e.jsxs(P,{id:n,minWidth:320,selected:r.isSelected,children:[e.jsx(S,{actionHandlers:c==null?void 0:c.actionHandlers,index:o,menuItems:u,menuItemGroups:d,title:x}),e.jsxs(R,{children:[h.isValidElementType(s)&&l.createElement(s,{...r,...m,ref:p,child:i,paneKey:n}),l.isValidElement(s)&&s]})]})}export{g as default};
