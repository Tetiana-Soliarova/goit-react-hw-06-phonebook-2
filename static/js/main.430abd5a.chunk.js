(this["webpackJsonpgoit-react-hw-06-phonebook-2"]=this["webpackJsonpgoit-react-hw-06-phonebook-2"]||[]).push([[0],{10:function(e,t,n){e.exports={input:"form_input__2a5-s",label:"form_label__rBoQH",buttomForm:"form_buttomForm__2TEJ6",container:"form_container__3x9y5"}},20:function(e,t,n){e.exports={label:"styles_label__1W8Dv",filtr:"styles_filtr__3DUxL",input:"styles_input__3ZMLp"}},25:function(e,t,n){e.exports={alert:"styleAlert_alert__3DSFm",error:"styleAlert_error__1cWJ1","fade-enter":"styleAlert_fade-enter__3LEGz","fade-enter-active":"styleAlert_fade-enter-active__eHJ5S","fade-exit":"styleAlert_fade-exit__1YpzY","fade-exit-active":"styleAlert_fade-exit-active__1hu2L"}},26:function(e,t,n){e.exports={title:"logo_title__3z0Mo",header:"logo_header__19yxb"}},30:function(e,t,n){e.exports={enter:"Fade_enter__1GHd-",enterActive:"Fade_enterActive__3jqOv",exit:"Fade_exit__1l7p5",exitActive:"Fade_exitActive__Q7p30"}},31:function(e,t,n){e.exports={enter:"FilterFade_enter__3JW7d",enterActive:"FilterFade_enterActive__8lymu",exit:"FilterFade_exit__4nQt2",exitActive:"FilterFade_exitActive__2djUQ"}},32:function(e,t,n){e.exports={enter:"pop_enter__axhEZ",enterActive:"pop_enterActive__1_PIq",exit:"pop_exit__XeLAa",exitActive:"pop_exitActive__d7th1"}},33:function(e,t,n){e.exports={appear:"fade_appear__16YB6",appearActive:"fade_appearActive__3RL4m"}},42:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(7),i=n.n(r),o=(n(42),n(15)),s=n(16),l=n(19),u=n(17),b=n(12),d=n(10),j=n.n(d),_=n(53),m=n(5),p={addContact:Object(m.b)("contact/Add",(function(e){return{payload:{id:Object(_.a)(),name:e.name,number:e.number}}})),deleteTodo:Object(m.b)("contact/Delete"),changeFilter:Object(m.b)("contact/changeFilter")},h=n(8),f=n(25),x=n.n(f),O=n(1);var v=function(){return Object(O.jsx)("div",{className:x.a.alert,children:Object(O.jsx)("h1",{className:x.a.error,children:" Contacts already exists! "})})},y=n(52),g=n(30),N=n.n(g),C=n(20),F=n.n(C),A=Object(h.b)((function(e){return{value:e.contacts.filter}}),(function(e){return{onChange:function(t){return e(p.changeFilter(t.currentTarget.value))}}}))((function(e){var t=e.value,n=e.onChange;return Object(O.jsxs)("div",{className:F.a.filtr,children:[Object(O.jsx)("label",{className:F.a.label,children:"Find contacts by name"}),Object(O.jsx)("input",{className:F.a.input,type:"text",value:t,onChange:n})]})})),S=n(31),k=n.n(S),L=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={name:"",number:"",error:!1},e.hendleNameChange=function(t){var n=t.currentTarget,a=n.name,c=n.value;e.setState(Object(b.a)({},a,c))},e.hendleSubmit=function(t){if(t.preventDefault(),e.props.contacts.find((function(e){return e.name===t.target.elements[0].value})))return e.setState({error:!0}),setTimeout((function(){e.setState({error:!1})}),2500);e.props.onSubmit(e.state),e.reset()},e.reset=function(){e.setState({name:"",number:""})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{className:j.a.container,children:[Object(O.jsx)(y.a,{in:this.state.error,timeout:250,classNames:N.a,unmountOnExit:!0,children:Object(O.jsx)(v,{})}),Object(O.jsxs)("form",{onSubmit:this.hendleSubmit,children:[Object(O.jsxs)("label",{className:j.a.label,children:["Name",Object(O.jsx)("input",{className:j.a.input,name:"name",type:"text",value:this.state.name,onChange:this.hendleNameChange})]}),Object(O.jsxs)("label",{className:j.a.label,children:["Number",Object(O.jsx)("input",{className:j.a.input,name:"number",type:"tel",value:this.state.number,onChange:this.hendleNameChange})]}),Object(O.jsx)("button",{className:j.a.buttomForm,type:"submit",children:"Add contact"})]})]}),Object(O.jsx)(y.a,{in:this.props.contacts.length>1,timeout:250,classNames:k.a,unmountOnExit:!0,onExiting:function(){return e.props.clearFilter()},children:Object(O.jsx)(A,{})})]})}}]),n}(a.Component),w=Object(h.b)((function(e){return{contacts:e.contacts.items}}),(function(e){return{onSubmit:function(t,n){return e(p.addContact(t,n))},clearFilter:function(){return e(p.changeFilter(""))}}}))(L),E=n(54),D=n(9),T=n.n(D),J=function(e){var t=e.name,n=e.number,a=e.id,c=e.onDeleteContact;return Object(O.jsxs)("li",{className:T.a.item,children:[Object(O.jsx)("p",{className:T.a.name,children:t}),Object(O.jsx)("p",{className:T.a.number,children:n}),Object(O.jsx)("button",{className:T.a.buttonContact,type:"button",onClick:c})]},a)},z=n(32),B=n.n(z),H=function(e,t){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))},Q=Object(h.b)((function(e){var t=e.contacts,n=t.items,a=t.filter;return{contacts:H(n,a)}}),(function(e){return{deleteContact:function(t){return e(p.deleteTodo(t))}}}))((function(e){var t=e.contacts,n=e.deleteContact;e.clearFilter;return Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{className:T.a.title,children:"Contacts"}),Object(O.jsx)(E.a,{component:"ul",className:T.a.contactList,children:t.map((function(e){var t=e.id,a=e.name,c=e.number;return Object(O.jsx)(y.a,{timeout:250,classNames:B.a,children:Object(O.jsx)(J,{id:t,name:a,number:c,onDeleteContact:function(){return n(t)}},t)},t)}))})]})})),G=n(26),M=n.n(G),W=n(33),Y=n.n(W),Z=n.p+"static/media/phonebook.e4355707.jpg";var q,I=function(){return Object(O.jsx)("header",{className:M.a.header,children:Object(O.jsx)(y.a,{in:!0,appear:!0,timeout:500,classNames:Y.a,unmountOnExit:!0,children:Object(O.jsxs)("h1",{className:M.a.title,children:[Object(O.jsx)("img",{src:Z,alt:"",width:"150px"}),"Phonebook"]})})})},P=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(I,{}),Object(O.jsxs)("div",{children:[Object(O.jsx)(w,{}),Object(O.jsx)(Q,{})]})]})}}]),n}(a.Component),U=n(18),R=n(34),X=n.n(R),K=n(2),V=Object(m.c)([],(q={},Object(b.a)(q,p.addContact,(function(e,t){var n=t.payload;return[].concat(Object(U.a)(e),[n])})),Object(b.a)(q,p.deleteTodo,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),q)),$=Object(m.c)("",Object(b.a)({},p.changeFilter,(function(e,t){return t.payload}))),ee=Object(K.c)({items:V,filter:$}),te=n(6),ne=n(35),ae={key:"keyStorage",storage:n.n(ne).a,blacklist:["filter"]},ce=[].concat(Object(U.a)(Object(m.d)({serializableCheck:{ignoredActions:[te.a,te.f,te.b,te.c,te.d,te.e]}})),[X.a]),re=Object(m.a)({reducer:{contacts:Object(te.g)(ae,ee)},middleware:ce}),ie={store:re,persistor:Object(te.h)(re)},oe=n(36);console.log(ie),i.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(h.a,{store:ie.store,children:Object(O.jsx)(oe.a,{loading:null,persistor:ie.persistor,children:Object(O.jsx)(P,{})})})}),document.getElementById("root"))},9:function(e,t,n){e.exports={item:"contactStyles_item__2ee9o",title:"contactStyles_title__2HZwh",contactList:"contactStyles_contactList__3Cfeg",buttonContact:"contactStyles_buttonContact__38o2a",icon:"contactStyles_icon__3FdBi",name:"contactStyles_name__2eycf",number:"contactStyles_number__2cGdp"}}},[[50,1,2]]]);
//# sourceMappingURL=main.430abd5a.chunk.js.map