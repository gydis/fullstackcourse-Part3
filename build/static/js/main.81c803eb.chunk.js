(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{40:function(e,n,t){"use strict";t.r(n);var r=t(2),o=t(16),u=t.n(o),c=t(3),a=t(4),i=t.n(a),s="/api/persons",d=function(){return i.a.get(s).then((function(e){return e.data}))},l=function(e){return i.a.post(s,e).then((function(e){return e.data}))},f=function(e){return i.a.delete("".concat(s,"/").concat(e))},b=function(e,n){return i.a.put("".concat(s,"/").concat(e),n).then((function(e){return e.data}))},j=t(0),m=function(e){var n=e.message,t=e.error?{color:"red",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10}:{color:"green",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10};return null===n?null:Object(j.jsx)("div",{style:t,className:"error",children:n})},h=function(e){var n=e.person,t=e.deleteFunc;return Object(j.jsxs)("div",{children:[n.name," ",n.number," ",Object(j.jsx)("button",{onClick:t,children:"delete"})]})},O=function(e){var n=e.persons,t=e.search,r=e.deleteNum;return n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).map((function(e){return Object(j.jsx)(h,{person:e,deleteFunc:function(){return r(e.id)}},e.name)}))},p=function(e){var n=e.value,t=e.onChange;return Object(j.jsx)("input",{value:n,onChange:t})},g=function(e){var n=e.submitHandle,t=e.numValue,r=e.nameValue,o=e.onNameChange,u=e.onNumChange;return Object(j.jsxs)("form",{onSubmit:n,children:[Object(j.jsxs)("div",{children:["name:",Object(j.jsx)("input",{onChange:o,value:r})]}),Object(j.jsxs)("div",{children:["number:",Object(j.jsx)("input",{onChange:u,value:t})]}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{type:"submit",children:"add"})})]})},v=function(){var e=Object(r.useState)([]),n=Object(c.a)(e,2),t=n[0],o=n[1],u=Object(r.useState)(""),a=Object(c.a)(u,2),i=a[0],s=a[1],h=Object(r.useState)(""),v=Object(c.a)(h,2),x=v[0],C=v[1],w=Object(r.useState)(""),S=Object(c.a)(w,2),k=S[0],y=S[1],N=Object(r.useState)(null),T=Object(c.a)(N,2),V=T[0],B=T[1],z=Object(r.useState)(!1),A=Object(c.a)(z,2),D=A[0],E=A[1];Object(r.useEffect)((function(){d().then((function(e){return o(e)}))}),[]);return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Phonebook"}),Object(j.jsx)(m,{message:V,error:D}),Object(j.jsx)(p,{value:k,onChange:function(e){y(e.target.value)}}),Object(j.jsx)("h3",{children:"Add a new"}),Object(j.jsx)(g,{submitHandle:function(e){e.preventDefault();var n={name:i,number:x},r=function(){s(""),C("")};if(t.map((function(e){return e.name})).includes(i)){if(window.confirm("".concat(i," is already added to phonebook, repalce the old number with the new one?"))){var u=t.find((function(e){return e.name===n.name}));b(u.id,n).then((function(e){return o(t.map((function(t){return t.name===n.name?e:t})))})).then((function(e){B("Changed ".concat(u.name)),setTimeout((function(){return B(null)}),5e3)})).catch((function(e){400===e.response.status?(E(!0),B(e.response.data)):(E(!0),B("Information of ".concat(u.name," has already been removed from the server"))),setTimeout((function(){B(null),E(!1)}),5e3),o(t.filter((function(e){return e.id!==u.id})))}))}r()}else l(n).then((function(e){o(t.concat(e)),B("Added ".concat(n.name)),setTimeout((function(){return B(null)}),5e3)})).catch((function(e){console.log(e.response),400===e.response.status&&(E(!0),B(e.response.data),setTimeout((function(){E(!1),B(null)}),5e3))})),r()},numValue:x,nameValue:i,onNameChange:function(e){return s(e.target.value)},onNumChange:function(e){return C(e.target.value)}}),Object(j.jsx)("h3",{children:"Numbers"}),Object(j.jsx)(O,{persons:t,search:k,deleteNum:function(e){var n=t.find((function(n){return n.id===e}));window.confirm("Delete ".concat(n.name,"?"))&&f(e).then((function(n){return o(t.filter((function(n){return n.id!==e})))}))}})]})};u.a.render(Object(j.jsx)(v,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.81c803eb.chunk.js.map