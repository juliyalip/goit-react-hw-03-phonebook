(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{11:function(e,t,n){e.exports={contactItem:"contact_contactItem__1XgVh"}},28:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),o=n.n(c),r=n(10),i=n.n(r),s=(n(9),n(14)),l=n(3),u=n(4),m=n(6),h=n(5),d=n(11),b=n.n(d),p=function(e){var t=e.persons,n=e.onDelete;return Object(a.jsx)("ul",{children:t.map((function(e){var t=e.id,c=e.name,o=e.number;return Object(a.jsxs)("li",{className:b.a.contactItem,children:[Object(a.jsxs)("p",{children:[c," ",o]}),Object(a.jsx)("button",{type:"button",onClick:function(){n(t)},children:"Delete"})]},t)}))})},j=function(e){var t=e.value,n=e.onChange;return Object(a.jsxs)("label",{children:["Find contacts by name",Object(a.jsx)("input",{type:"text",name:"filter",value:t,onChange:n,placeholder:"find name"})]})},f=n(12),v=n(13),O=n.n(v),g=n(7),x=n.n(g),C=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={name:"",number:""},e.handleChange=function(t){var n=t.currentTarget,a=n.name,c=n.value;e.setState(Object(f.a)({},a,c))},e.handleFormSubmit=function(t){t.preventDefault();var n=e.state,a=n.name,c=n.number,o=e.props.onAdd;e.validateForm()&&(o({id:O.a.generate(),name:a,number:c}),e.reset())},e.validateForm=function(){var t=e.state,n=t.name,a=t.number,c=e.props.onCheckUnigue;return n&&a?c(n):(alert("filed is empti"),!1)},e.reset=function(){e.setState({name:"",number:""})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return Object(a.jsxs)("form",{onSubmit:this.handleFormSubmit,className:x.a.form,children:[Object(a.jsxs)("label",{className:x.a.input,children:["Name",Object(a.jsx)("input",{type:"text",name:"name",value:t,placeholder:"enter name",onChange:this.handleChange})]}),Object(a.jsxs)("label",{className:x.a.input,children:["Number",Object(a.jsx)("input",{type:"text",name:"number",value:n,placeholder:"enter number",onChange:this.handleChange})]}),Object(a.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(c.Component),y=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.handleAddContact=function(t){e.setState((function(e){var n=e.contacts;return{contacts:[].concat(Object(s.a)(n),[t])}}))},e.handleCheckUnicue=function(t){var n=!!e.state.contacts.find((function(e){return e.name===t}));return n&&alert("Contact is already axist"),!n},e.hangleDelete=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e.changleFilter=function(t){e.setState({filter:t.currentTarget.value})},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("contacts"),t=JSON.parse(e);console.log(t),console.log("component App DidMount"),t&&this.setState({contacts:t})}},{key:"componentDidUpdate",value:function(e,t){console.log("app componentDidUpdate"),this.state.contacts!==t.contacts&&(console.log("obnovilos pole contact"),localStorage.setItem("contacts",JSON.stringify(this.state.contacts)))}},{key:"render",value:function(){var e=this.state.filter.toLowerCase(),t=this.state.contacts.filter((function(t){return t.name.toLowerCase().includes(e)}));return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{children:"Phonebook"}),Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(C,{onAdd:this.handleAddContact,onCheckUnigue:this.handleCheckUnicue}),Object(a.jsx)("h2",{children:"Contacts"}),Object(a.jsx)(j,{value:this.state.filter,onChange:this.changleFilter}),Object(a.jsx)(p,{persons:t,onDelete:this.hangleDelete})]})]})}}]),n}(c.Component);i.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(y,{})}),document.getElementById("root"))},7:function(e,t,n){e.exports={form:"form_form__LDCGU",input:"form_input__2aqDF"}},9:function(e,t,n){}},[[28,1,2]]]);
//# sourceMappingURL=main.8aaf2145.chunk.js.map