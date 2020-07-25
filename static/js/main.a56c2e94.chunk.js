(this.webpackJsonplogistic=this.webpackJsonplogistic||[]).push([[0],{21:function(e,t,n){e.exports=n(37)},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(19),c=n.n(r),u=(n(26),n(9)),o=n(12),m=n(3),i=(n(27),n(6)),d=n(1);n(28);function s(){return l.a.createElement("div",{id:"home"},l.a.createElement("h2",{id:"headline"},"Logistics Management"),l.a.createElement("div",{id:"home-buttons"}," ",l.a.createElement(i.b,{className:"home-link",to:"/signup"},"Sign up"),l.a.createElement(i.b,{className:"home-link",to:"/login"},"Log in")))}n(34);function b(e){var t=Object(a.useState)(""),n=Object(m.a)(t,2),r=n[0],c=n[1],u=Object(a.useState)(""),o=Object(m.a)(u,2),d=o[0],s=o[1],b=Object(a.useState)("no"),E=Object(m.a)(b,2),p=E[0],f=E[1],g=Object(a.useState)(!1),N=Object(m.a)(g,2),h=N[0],v=N[1],y=Object(a.useState)(!1),O=Object(m.a)(y,2),k=O[0],j=O[1];return l.a.createElement("div",{id:"SignUp"},l.a.createElement("h2",null,"Sign up"),l.a.createElement("div",{id:"NO"},l.a.createElement("label",null,"Employee Number:"),l.a.createElement("input",{type:"number",onChange:function(e){5!==e.target.value.length?document.getElementById("p-number").innerHTML="the number must be with 5 digits.":(document.getElementById("p-number").innerHTML="",v(!0)),s(e.target.value)}}),l.a.createElement("p",{className:"signup-p",id:"p-number"})),l.a.createElement("div",{id:"full-name"}," ",l.a.createElement("label",null,"Full name:"),l.a.createElement("input",{type:"text",onChange:function(e){!/^[A-Za-z]+/.test(e.target.value)||e.target.value.length<4?document.getElementById("p-name").innerHTML="the name must contain minimum 4 characters. ":(document.getElementById("p-name").innerHTML="",j(!0)),c(e.target.value)}}),l.a.createElement("p",{className:"signup-p",id:"p-name"})),l.a.createElement("div",{id:"forklift"},l.a.createElement("label",null,"Forklift truck"),l.a.createElement("input",{type:"radio",name:"radio",value:"yes",onChange:function(e){f(e.target.value)}}),l.a.createElement("label",null,"Yes"),l.a.createElement("input",{type:"radio",name:"radio",checked:"checked",value:"no",onChange:function(e){f(e.target.value)}}),l.a.createElement("label",null,"No")),l.a.createElement("div",{id:"sign-up-buttons"},l.a.createElement("button",{className:"buttons",onClick:function(){!0===h&&!0===k?(e.AddEmployee(r,d,p),alert("You signed in")):alert("ERROR")}},"Create"),l.a.createElement(i.b,{className:"buttons",to:"/"},"Back")))}n(35);function E(e){var t=Object(a.useState)(""),n=Object(m.a)(t,2),r=n[0],c=n[1],u=Object(a.useState)(!1),o=Object(m.a)(u,2),d=o[0],s=o[1],b=e.employees.find((function(t){return t.Number===e.loggedInEmployee}));return l.a.createElement("div",{id:"log-in"},l.a.createElement("h2",null,"Login"),l.a.createElement("div",{id:"input-div"}," ",l.a.createElement("label",null,"NO:"),l.a.createElement("input",{type:"text",onChange:function(e){c(e.target.value)}})),function(){if(d)return l.a.createElement(i.b,{className:"buttons",to:"/manager"},"manager")}(),l.a.createElement("div",{id:"login-buttons"}," ",l.a.createElement("button",{className:"buttons",onClick:function(){if("99999"!==r)return function(){var t=e.employees.find((function(e){return e.Number===r}));t?e.loginEmployee(t.Number):alert("Employee Number ".concat(r," doesn't exist"))}();s(!0)}},"Enter"),l.a.createElement(i.b,{className:"buttons",to:"/"},"Log out")),b&&l.a.createElement("div",null,l.a.createElement("h1",null,"Welcome ",b.fullName),l.a.createElement("h4",null,"Details:"),l.a.createElement("p",null,"Full Name : ",b.fullName),l.a.createElement("p",null,"NO: ",b.Number),l.a.createElement("p",null,"Forklift truck license: ",b.forklift),l.a.createElement("div",null," ",l.a.createElement("h2",null,"List of Products:"),e.products.filter((function(e){return!e.handlingEmployee})).map((function(t){return l.a.createElement("div",{key:t.productNumber,className:"product-box"},l.a.createElement("p",null,"Product Number: ",t.productNumber),l.a.createElement("p",null,"Name : ",t.Name),l.a.createElement("p",null,"Need forklift truck: ",t.needForklift.toString())," ",l.a.createElement("button",{className:"buttons",onClick:function(){t.needForklift&&"no"===b.forklift?alert("need forklift license"):e.setHandlingEmployee(t.productNumber,b.Number)}},"Update"))})))))}n(36);function p(e){return l.a.createElement("div",{id:"manager"},l.a.createElement("h1",null,"Manager"),l.a.createElement("table",{id:"manager-table"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"No"),l.a.createElement("td",null,"FullName"),l.a.createElement("td",null,"Counter"),l.a.createElement("td",null,"Number of Products")),function(e,t,n){var a=e.reduce((function(e,t){return e[t]=e[t]||0,e[t]++,e}),{}),l=n.reduce((function(e,t){return e[t.handlingEmployee]=e[t.handlingEmployee]||0,e[t.handlingEmployee]++,e}),{});return t.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{countLogins:a[e.Number],countProducts:l[e.Number]})}))}(e.logins,e.employees,e.products).map((function(e){return l.a.createElement("tr",{key:e.Number},l.a.createElement("td",null,e.Number),l.a.createElement("td",null,e.fullName),l.a.createElement("td",null,e.countLogins),l.a.createElement("td",null,e.countProducts))})))),l.a.createElement(i.b,{className:"buttons",to:"/"},"Log out"))}var f=function(){var e=Object(a.useState)(0),t=Object(m.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)([]),f=Object(m.a)(c,2),g=f[0],N=f[1],h=Object(a.useState)([]),v=Object(m.a)(h,2),y=v[0],O=v[1],k=Object(a.useState)([{productNumber:11122,Name:"green box",needForklift:!1},{productNumber:22554,Name:"green box",needForklift:!1},{productNumber:66698,Name:"blue box",needForklift:!0},{productNumber:78544,Name:"red box",needForklift:!1},{productNumber:69875,Name:"red box",needForklift:!1}]),j=Object(m.a)(k,2),S=j[0],x=j[1],F=function(e,t,n){N([].concat(Object(o.a)(g),[{Number:t,fullName:e,forklift:n,isPresent:!0}]))},L=function(e){r(e),O([].concat(Object(o.a)(y),[e]))},C=function(e,t){var n=S.findIndex((function(t){return t.productNumber===e}));x([].concat(Object(o.a)(S.slice(0,n)),[Object(u.a)(Object(u.a)({},S[n]),{},{handlingEmployee:t})],Object(o.a)(S.slice(n+1,S.length))))};return l.a.createElement("div",{className:"App"},l.a.createElement(i.a,null,l.a.createElement(d.c,null,l.a.createElement(d.a,{exact:!0,path:"/",component:function(){return l.a.createElement(s,null)}}),l.a.createElement(d.a,{exact:!0,path:"/signup",component:function(){return l.a.createElement(b,{AddEmployee:F,employees:g})}}),l.a.createElement(d.a,{exact:!0,path:"/login",component:function(){return l.a.createElement(E,{employees:g,products:S,setHandlingEmployee:C,loggedInEmployee:n,loginEmployee:L})}}),l.a.createElement(d.a,{exact:!0,path:"/manager",component:function(){return l.a.createElement(p,{logins:y,employees:g||[],products:S})}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.a56c2e94.chunk.js.map