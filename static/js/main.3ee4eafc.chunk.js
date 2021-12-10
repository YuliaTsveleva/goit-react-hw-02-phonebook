(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,,function(t,e,n){t.exports={Item:"ContactItem_Item__3M0vg",Wrapper:"ContactItem_Wrapper__2iP7R",Name:"ContactItem_Name__dIdJe",Number:"ContactItem_Number__3-SmA",Button:"ContactItem_Button__2Q9Nw"}},function(t,e,n){t.exports={Form:"AddContactForm_Form__1DeAR",Label:"AddContactForm_Label__1T2QK",Input:"AddContactForm_Input__1Q7i1",Button:"AddContactForm_Button__9d86-"}},,,,,,,function(t,e,n){t.exports={Section:"Section_Section__1tzbd",Title:"Section_Title__3G1tT"}},function(t,e,n){t.exports={Label:"Filter_Label__2hF9g",Input:"Filter_Input__2ezub"}},,,function(t){t.exports=JSON.parse('[{"id":"1","name":"name","label":"Name","type":"text","pattern":"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([\' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$","title":"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d\'Artagnan"},{"id":"2","name":"number","label":"Number","type":"tel","pattern":"\\\\+?\\\\d{1,4}?[-.\\\\s]?\\\\(?\\\\d{1,3}?\\\\)?[-.\\\\s]?\\\\d{1,4}[-.\\\\s]?\\\\d{1,4}[-.\\\\s]?\\\\d{1,9}","title":"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"}]')},function(t,e,n){t.exports={contactsList:"ContactList_contactsList__2SmlK"}},function(t,e,n){t.exports={Text:"EmptyText_Text__2NwJC"}},,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(12),o=n.n(r),s=(n(22),n(17)),i=n(4),l=n(5),u=n(7),m=n(6),d=(n(23),n(10)),b=n.n(d),h=n(0),p=function(t){var e=t.title,n=t.children;return Object(h.jsxs)("section",{className:b.a.Section,children:[e&&Object(h.jsx)("h1",{className:b.a.Title,children:e}),n]})},j=n(13),f=n(3),_=n.n(f),x=n(14),O=n(8),C=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){t.setState(Object(j.a)({},e.target.name,e.target.value))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return Object(h.jsxs)("form",{className:_.a.Form,autoComplete:"off",onSubmit:this.handleSubmit,children:[x.map((function(e){return Object(h.jsx)("div",{children:Object(h.jsxs)("label",{className:_.a.Label,children:[e.label,Object(h.jsx)("input",{id:Object(O.a)(),value:t.state[e.name],onChange:t.handleChange,className:_.a.Input,type:e.type,name:e.name,pattern:e.pattern,title:e.title,required:!0})]})},e.name)})),Object(h.jsx)("button",{className:_.a.Button,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),v=C,N=n(15),g=n.n(N),y=n(2),S=n.n(y);var F=function(t){var e=t.id,n=t.name,a=t.number,c=t.onClick;return Object(h.jsxs)("li",{className:S.a.Item,children:[Object(h.jsxs)("div",{className:S.a.Wrapper,children:[Object(h.jsxs)("p",{className:S.a.Name,children:[n,":"]}),Object(h.jsx)("p",{className:S.a.Number,children:a})]}),Object(h.jsx)("button",{type:"button",onClick:function(){return c()},className:S.a.Button,children:"Delete"})]},e)};var I=function(t){var e=t.contacts,n=t.onClick;return Object(h.jsx)("ul",{className:g.a.contactsList,children:e.map((function(t){return Object(h.jsx)(F,{id:t.id,name:t.name,number:t.number,onClick:function(){return n(t.id)}},t.id)}))})},A=n(11),L=n.n(A),w=function(t){var e=t.value,n=t.onChange,a=t.total;return Object(h.jsxs)("label",{className:L.a.Label,children:["Find contact by name in ",a," contacts",Object(h.jsx)("input",{className:L.a.Input,type:"text",value:e,onChange:n})]})},k=n(16),T=n.n(k),B=function(){return Object(h.jsx)("p",{className:T.a.Text,children:"Your contact list is empty"})},z=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.addContact=function(e){var n=e.name,a=e.number,c=t.state.contacts.find((function(t){return t.name.toLowerCase()===n.toLowerCase()}));c||""===n||""===a?c?alert("".concat(n," is already exists in contacts")):""!==n&&""!==a||alert("Fill in all the fields please!"):t.setState((function(t){var e=t.contacts;return{contacts:[{id:Object(O.a)(),name:n,number:a}].concat(Object(s.a)(e))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getFilteredContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t.removeContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,a=this.getFilteredContacts();return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(p,{title:"Phonebook",children:Object(h.jsx)(v,{onSubmit:this.addContact})}),Object(h.jsxs)(p,{title:"Contacts",children:[e.length>1&&Object(h.jsx)(w,{value:n,onChange:this.changeFilter,total:this.state.contacts.length}),Object(h.jsx)(I,{contacts:a,onClick:this.removeContact}),0===e.length&&Object(h.jsx)(B,{})]})]})}}]),n}(a.Component),J=z;o.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(J,{})}),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.3ee4eafc.chunk.js.map