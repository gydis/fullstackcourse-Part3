(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{40:function(e,n,t){"use strict";t.r(n);var r=t(2),u=t(16),c=t.n(u),o=t(3),a=t(4),i=t.n(a),s="/api/persons",d=function(){return i.a.get(s).then((function(e){return e.data}))},l=function(e){return i.a.post(s,e).then((function(e){return e.data}))},b=function(e){return i.a.delete("".concat(s,"/").concat(e))},f=function(e,n){return i.a.put("".concat(s,"/").concat(e),n).then((function(e){return e.data}))},j=t(0),m=function(e){var n=e.message,t=e.error?{color:"red",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10}:{color:"green",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10};return null===n?null:Object(j.jsx)("div",{style:t,className:"error",children:n})},h=function(e){var n=e.person,t=e.deleteFunc;return Object(j.jsxs)("div",{children:[n.name," ",n.number," ",Object(j.jsx)("button",{onClick:t,children:"delete"})]})},O=function(e){var n=e.persons,t=e.search,r=e.deleteNum;return n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).map((function(e){return Object(j.jsx)(h,{person:e,deleteFunc:function(){return r(e.id)}},e.name)}))},g=function(e){var n=e.value,t=e.onChange;return Object(j.jsx)("input",{value:n,onChange:t})},p=function(e){var n=e.submitHandle,t=e.numValue,r=e.nameValue,u=e.onNameChange,c=e.onNumChange;return Object(j.jsxs)("form",{onSubmit:n,children:[Object(j.jsxs)("div",{children:["name:",Object(j.jsx)("input",{onChange:u,value:r})]}),Object(j.jsxs)("div",{children:["number:",Object(j.jsx)("input",{onChange:c,value:t})]}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{type:"submit",children:"add"})})]})},v=function(){var e=Object(r.useState)([]),n=Object(o.a)(e,2),t=n[0],u=n[1],c=Object(r.useState)(""),a=Object(o.a)(c,2),i=a[0],s=a[1],h=Object(r.useState)(""),v=Object(o.a)(h,2),x=v[0],C=v[1],w=Object(r.useState)(""),S=Object(o.a)(w,2),k=S[0],y=S[1],N=Object(r.useState)(null),V=Object(o.a)(N,2),B=V[0],T=V[1],z=Object(r.useState)(!1),A=Object(o.a)(z,2),D=A[0],E=A[1];Object(r.useEffect)((function(){d().then((function(e){return u(e)}))}),[]);return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Phonebook"}),Object(j.jsx)(m,{message:B,error:D}),Object(j.jsx)(g,{value:k,onChange:function(e){y(e.target.value)}}),Object(j.jsx)("h3",{children:"Add a new"}),Object(j.jsx)(p,{submitHandle:function(e){e.preventDefault();var n={name:i,number:x},r=function(){s(""),C("")};if(t.map((function(e){return e.name})).includes(i)){if(window.confirm("".concat(i," is already added to phonebook, repalce the old number with the new one?"))){var c=t.find((function(e){return e.name===n.name}));f(c.id,n).then((function(e){return u(t.map((function(t){return t.name===n.name?e:t})))})).then((function(e){T("Changed ".concat(c.name)),setTimeout((function(){return T(null)}),5e3)})).catch((function(e){E(!0),T("Information of ".concat(c.name," has already been removed from the server")),setTimeout((function(){T(null),E(!1)}),5e3),u(t.filter((function(e){return e.id!==c.id})))}))}r()}else l(n).then((function(e){return u(t.concat(e))})),T("Added ".concat(n.name)),setTimeout((function(){return T(null)}),5e3),r()},numValue:x,nameValue:i,onNameChange:function(e){return s(e.target.value)},onNumChange:function(e){return C(e.target.value)}}),Object(j.jsx)("h3",{children:"Numbers"}),Object(j.jsx)(O,{persons:t,search:k,deleteNum:function(e){var n=t.find((function(n){return n.id===e}));window.confirm("Delete ".concat(n.name,"?"))&&b(e).then((function(n){return u(t.filter((function(n){return n.id!==e})))}))}})]})};c.a.render(Object(j.jsx)(v,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.a4cf6ea5.chunk.js.map