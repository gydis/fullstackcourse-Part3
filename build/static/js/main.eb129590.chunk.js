(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{40:function(e,n,t){"use strict";t.r(n);var r=t(2),o=t(16),c=t.n(o),u=t(3),a=t(4),i=t.n(a),s="/api/persons",d=function(){return i.a.get(s).then((function(e){return e.data}))},l=function(e){return i.a.post(s,e).then((function(e){return e.data}))},f=function(e){return i.a.delete("".concat(s,"/").concat(e))},b=function(e,n){return i.a.put("".concat(s,"/").concat(e),n).then((function(e){return e.data}))},m=t(0),j=function(e){var n=e.message,t=e.error?{color:"red",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10}:{color:"green",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10};return null===n?null:Object(m.jsx)("div",{style:t,className:"error",children:n})},h=function(e){var n=e.person,t=e.deleteFunc;return Object(m.jsxs)("div",{children:[n.name," ",n.number," ",Object(m.jsx)("button",{onClick:t,children:"delete"})]})},O=function(e){var n=e.persons,t=e.search,r=e.deleteNum;return n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).map((function(e){return Object(m.jsx)(h,{person:e,deleteFunc:function(){return r(e.id)}},e.name)}))},g=function(e){var n=e.value,t=e.onChange;return Object(m.jsx)("input",{value:n,onChange:t})},p=function(e){var n=e.submitHandle,t=e.numValue,r=e.nameValue,o=e.onNameChange,c=e.onNumChange;return Object(m.jsxs)("form",{onSubmit:n,children:[Object(m.jsxs)("div",{children:["name:",Object(m.jsx)("input",{onChange:o,value:r})]}),Object(m.jsxs)("div",{children:["number:",Object(m.jsx)("input",{onChange:c,value:t})]}),Object(m.jsx)("div",{children:Object(m.jsx)("button",{type:"submit",children:"add"})})]})},v=function(){var e=Object(r.useState)([]),n=Object(u.a)(e,2),t=n[0],o=n[1],c=Object(r.useState)(""),a=Object(u.a)(c,2),i=a[0],s=a[1],h=Object(r.useState)(""),v=Object(u.a)(h,2),x=v[0],C=v[1],w=Object(r.useState)(""),S=Object(u.a)(w,2),k=S[0],y=S[1],N=Object(r.useState)(null),T=Object(u.a)(N,2),V=T[0],B=T[1],z=Object(r.useState)(!1),A=Object(u.a)(z,2),D=A[0],E=A[1];Object(r.useEffect)((function(){d().then((function(e){return o(e)}))}),[]);return Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:"Phonebook"}),Object(m.jsx)(j,{message:V,error:D}),Object(m.jsx)(g,{value:k,onChange:function(e){y(e.target.value)}}),Object(m.jsx)("h3",{children:"Add a new"}),Object(m.jsx)(p,{submitHandle:function(e){e.preventDefault();var n={name:i,number:x},r=function(){s(""),C("")};if(t.map((function(e){return e.name})).includes(i)){if(window.confirm("".concat(i," is already added to phonebook, repalce the old number with the new one?"))){var c=t.find((function(e){return e.name===n.name}));b(c.id,n).then((function(e){return o(t.map((function(t){return t.name===n.name?e:t})))})).then((function(e){B("Changed ".concat(c.name)),setTimeout((function(){return B(null)}),5e3)})).catch((function(e){console.log(e.name),e?(E(!0),B(e)):(E(!0),B("Information of ".concat(c.name," has already been removed from the server"))),setTimeout((function(){B(null),E(!1)}),5e3),o(t.filter((function(e){return e.id!==c.id})))}))}r()}else l(n).then((function(e){o(t.concat(e)),B("Added ".concat(n.name)),setTimeout((function(){return B(null)}),5e3)})).catch((function(e){console.log(e.name),e&&(E(!0),B(e),setTimeout((function(){E(!1),B(null)}),5e3))})),r()},numValue:x,nameValue:i,onNameChange:function(e){return s(e.target.value)},onNumChange:function(e){return C(e.target.value)}}),Object(m.jsx)("h3",{children:"Numbers"}),Object(m.jsx)(O,{persons:t,search:k,deleteNum:function(e){var n=t.find((function(n){return n.id===e}));window.confirm("Delete ".concat(n.name,"?"))&&f(e).then((function(n){return o(t.filter((function(n){return n.id!==e})))}))}})]})};c.a.render(Object(m.jsx)(v,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.eb129590.chunk.js.map