(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{128:function(e,t,n){},213:function(e,t,n){e.exports=n(501)},501:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),o=n.n(c),l=(n(128),n(196)),u=n(197),i=n(198),s=n(211),m=n(199),p=n(212),f=n(26),d=n(4),h=n.n(d),b=n(9),E=n(16),v=n(502),y=n(200),j=n.n(y),g=n(126),O=n.n(g),w=function(e){var t=e.item,n=e.deleteCustomer,a=e.deleteTraining,c=Object.keys(t),o=Object.values(t).filter(function(e){return"string"===typeof e||"number"===typeof e}),l=c.filter(function(e,t){return t<o.length});return r.a.createElement("tr",null,l.map(function(e,n){return r.a.createElement("td",{className:"priority-".concat(n+1),key:n},t[e])}),t.firstname?r.a.createElement("td",null,r.a.createElement(v.a,{to:"/addtraining/".concat(t.links[0].href.match(/\d+/))},r.a.createElement(j.a,{className:"hoverableIcon"}))):null,t.firstname?r.a.createElement("td",null,r.a.createElement(O.a,{className:"hoverableIcon",onClick:function(){return n(t)}})):r.a.createElement("td",null,r.a.createElement(O.a,{className:"hoverableIcon",onClick:function(){return a(t)}})))},x=function(e){var t=e.data,n=e.deleteCustomer,a=e.deleteTraining;return r.a.createElement("tbody",null,t.map(function(e,t){return r.a.createElement(w,{key:t,deleteCustomer:n,deleteTraining:a,item:e})}))},k={fetchAll:function(){var e=Object(b.a)(h.a.mark(function e(){var t,n;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://customerrest.herokuapp.com/api/customers");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,console.log(t.status),e.abrupt("return",n.content);case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),create:function(){var e=Object(b.a)(h.a.mark(function e(t){var n;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://customerrest.herokuapp.com/api/customers",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 2:return n=e.sent,console.log(n.status),e.abrupt("return",n.json());case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),deleteCustomer:function(){var e=Object(b.a)(h.a.mark(function e(t){var n;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://customerrest.herokuapp.com/api/customers/".concat(t),{method:"DELETE",mode:"cors",headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,console.log(n.status),e.abrupt("return",n);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},C=n(80),S=(n(145),function(){var e=Object(a.useState)([]),t=Object(E.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),l=Object(E.a)(o,2),u=l[0],i=l[1],s=Object(a.useState)([]),m=Object(E.a)(s,2),p=m[0],d=m[1],v=Object(a.useState)([0]),y=Object(E.a)(v,2),j=y[0],g=y[1],O=Object(a.useState)(["firstname"]),w=Object(E.a)(O,2),S=w[0],D=w[1],N=n.filter(function(e){return e[S].toLowerCase().includes(u.toLowerCase())}),T=function(){var e=Object(b.a)(h.a.mark(function e(){var t,n,a,r,o;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.fetchAll();case 2:t=e.sent,c(t),n=Object.values(t[0]),a=Object.keys(t[0]),r=n.filter(function(e){return"string"===typeof e}),o=a.filter(function(e,t){return t<r.length}),d(o);case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)(function(){T()},[]);var A=function(){var e=Object(b.a)(h.a.mark(function e(t){var n;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.links[0].href.match(/\d+/),e.next=3,k.deleteCustomer(n);case 3:T();case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("p",null," Filter by ",r.a.createElement("b",null,S)," "),r.a.createElement("input",{label:"filter",value:u,onChange:function(e){i(e.target.value)}}),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,p.map(function(e,t){return r.a.createElement("th",{key:t,className:"priority-".concat(t+1),onClick:function(){var t;S===(t=e)&&0===j?(D(t),g(1),"string"===typeof n[0][t]?c(Object(f.a)(n).sort(function(e,n){return n[t].localeCompare(e[t])})):c(Object(f.a)(n).sort(function(e,n){return n[t]-e[t]}))):(D(t),g(0),"string"===typeof n[0][t]?c(Object(f.a)(n).sort(function(e,n){return e[t].localeCompare(n[t])})):c(Object(f.a)(n).sort(function(e,n){return e[t]-n[t]})))}},e.toUpperCase())}),r.a.createElement("th",{className:"notHoverableHeader"},"ADD TRAINING"),r.a.createElement("th",{className:"notHoverableHeader"},"DELETE"))),r.a.createElement(x,{data:N,deleteCustomer:function(e){Object(C.confirmAlert)({title:"Confirm to delete",message:"Are you sure want to delete customer",buttons:[{label:"Yes",onClick:function(){return A(e)}},{label:"No",onClick:function(){return console.log("no")}}]})}})))}),D=function(){var e=Object(b.a)(h.a.mark(function e(){var t,n;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://customerrest.herokuapp.com/api/trainings");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,console.log(t.status),e.abrupt("return",n.content);case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(b.a)(h.a.mark(function e(){var t,n,a;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://customerrest.herokuapp.com/gettrainings");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,console.log(t.status),a=n.map(function(e,t){return{date:e.date,activity:e.activity,duration:e.duration,customer:e.customer.firstname+" "+e.customer.lastname}}),e.abrupt("return",a);case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),T={fetchAll:D,create:function(){var e=Object(b.a)(h.a.mark(function e(t){var n;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://customerrest.herokuapp.com/api/trainings",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 2:return n=e.sent,console.log(n.status),e.abrupt("return",n.json());case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),deleteTraining:function(){var e=Object(b.a)(h.a.mark(function e(t){var n;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://customerrest.herokuapp.com/api/trainings/".concat(t),{method:"DELETE",mode:"cors",headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,console.log(n.status),e.abrupt("return",n.status);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),getTrainings:N},A=n(202),F=n.n(A),L=n(81),q=n.n(L),I=function(){return q.a.momentLocalizer(F.a)},H=function(e){return new Date(e).toLocaleDateString("fi-FI")},z=function(e,t){var n=new Date(e),a=n.setMinutes(n.getMinutes()+30);return new Date(a)},J=function(e){return new Date(e)},W=function(){var e=Object(a.useState)([]),t=Object(E.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),l=Object(E.a)(o,2),u=l[0],i=l[1],s=Object(a.useState)(0),m=Object(E.a)(s,2),p=m[0],d=m[1],v=Object(a.useState)([]),y=Object(E.a)(v,2),j=y[0],g=y[1],O=Object(a.useState)(["activity"]),w=Object(E.a)(O,2),k=w[0],S=w[1],D=n.filter(function(e){return e[k].toString().toLowerCase().includes(u.toLowerCase())}),N=function(){var e=Object(b.a)(h.a.mark(function e(){var t,n,a,r,o,l;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.getTrainings();case 2:t=e.sent,n=t.map(function(e,t){return{date:H(e.date),duration:e.duration,activity:e.activity,customer:e.customer}}),c(n),a=Object.values(n[0]),r=Object.keys(n[0]),o=a.filter(function(e){return"string"===typeof e}),l=r.filter(function(e,t){return t<=o.length}),g(l);case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)(function(){N()},[]);var A=function(){var e=Object(b.a)(h.a.mark(function e(t){var n;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.links[0].href.match(/\d+/),e.next=3,T.deleteTraining(n);case 3:N();case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("p",null," Filter by ",r.a.createElement("b",null,k)," "),r.a.createElement("input",{label:"filter",value:u,onChange:function(e){i(e.target.value)}}),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,j.map(function(e,t){return r.a.createElement("th",{className:"priority-".concat(t+1),key:t,onClick:function(){var t;k===(t=e)&&0===p?(d(1),"string"===typeof n[0][t]?c(Object(f.a)(n).sort(function(e,n){return e[t].localeCompare(n[t])})):c(Object(f.a)(n).sort(function(e,n){return n[t]-e[t]}))):(d(0),S(t),"string"===typeof n[0][t]?c(Object(f.a)(n).sort(function(e,n){return n[t].localeCompare(e[t])})):c(Object(f.a)(n).sort(function(e,n){return e[t]-n[t]})))}},e.toUpperCase())}),r.a.createElement("th",{className:"notHoverableHeader"},"DELETE"))),r.a.createElement(x,{data:D,deleteTraining:function(e){Object(C.confirmAlert)({title:"Confirm to delete",message:"Are you sure want to delete training",buttons:[{label:"Yes",onClick:function(){return A(e)}},{label:"No",onClick:function(){return console.log("no")}}]})}})))},B=function(e){var t=Object(a.useState)(e),n=Object(E.a)(t,2),r=n[0],c=n[1];return{value:r,onChange:function(e){c(e.target.value)}}},M=function(e){var t=B(""),n=B(""),a=B(""),c=function(){var r=Object(b.a)(h.a.mark(function r(c){var o;return h.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return c.preventDefault(),o={date:a.value,duration:n.value,activity:t.value,customer:"http://customerrest.herokuapp.com/api/customers/".concat(e.id)},r.next=4,T.create(o);case 4:e.history.push("/trainings");case 5:case"end":return r.stop()}},r,this)}));return function(e){return r.apply(this,arguments)}}();return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:c},r.a.createElement("p",null," enter info "),r.a.createElement("label",{htmlFor:"activity"},"activity"),r.a.createElement("input",Object.assign({id:"activity",placeholder:"activity",type:"text"},t,{required:!0})),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"duration"},"duration"),r.a.createElement("input",Object.assign({id:"duration",placeholder:"duration",min:"1",type:"number"},n,{required:!0})),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"date"},"date"),r.a.createElement("input",Object.assign({id:"date",placeholder:"date",type:"date"},a,{required:!0})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{value:"create",type:"submit"})))},P=n(504),U=n(503),Y=n(44),G=n(43),R=n.n(G),$=n(34),_=n.n($),K=n(35),Q=n.n(K),V=n(203),X=n.n(V),Z=Object(Y.withStyles)(function(e){return{root:{width:"100%",maxWidth:"360px",backgroundColor:e.palette.background.paper,display:"flex",flexDirection:"row"}}})(function(e){var t=e.classes;return r.a.createElement(P.a,null,r.a.createElement("div",null,r.a.createElement(R.a,{component:"nav",className:t.root},r.a.createElement(v.a,{style:{textDecoration:"none"},to:"/customers"},r.a.createElement(_.a,{button:!0},r.a.createElement(Q.a,{primary:"customers"}))),r.a.createElement(X.a,null),r.a.createElement(v.a,{style:{textDecoration:"none"},to:"/trainings"},r.a.createElement(_.a,{button:!0,divider:!0},r.a.createElement(Q.a,{primary:"trainings"})))),r.a.createElement("div",null,r.a.createElement(U.a,{path:"/customers",render:function(){return r.a.createElement(S,null)}}),r.a.createElement(U.a,{path:"/trainings",render:function(){return r.a.createElement(W,null)}}),r.a.createElement(U.a,{exact:!0,path:"/addtraining/:id",render:function(e){return r.a.createElement(M,Object.assign({},e,{id:e.match.params.id}))}}))))}),ee=function(e){var t=B(""),n=B(""),a=B(""),c=B(""),o=B(""),l=B(""),u=B(""),i=function(){var r=Object(b.a)(h.a.mark(function r(i){var s;return h.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return i.preventDefault(),s={firstname:t.value,lastname:n.value,streetaddress:a.value,postcode:c.value,city:o.value,email:l.value,phone:u.value},r.next=4,k.create(s);case 4:e.history.push("/customers");case 5:case"end":return r.stop()}},r,this)}));return function(e){return r.apply(this,arguments)}}();return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:i},r.a.createElement("p",null," enter info "),r.a.createElement("label",{htmlFor:"firstname"},"firstname"),r.a.createElement("input",Object.assign({id:"firstname",placeholder:"firstname",type:"text"},t,{required:!0})),r.a.createElement("label",{htmlFor:"lastname"},"lastname"),r.a.createElement("input",Object.assign({id:"lastname",placeholder:"lastname",type:"text"},n,{required:!0})),r.a.createElement("label",{htmlFor:"streetaddress"},"streetaddress"),r.a.createElement("input",Object.assign({id:"streetaddress",placeholder:"streetaddress",type:"text"},a,{required:!0})),r.a.createElement("label",{htmlFor:"postcode"},"postcode"),r.a.createElement("input",Object.assign({id:"postcode",placeholder:"postcode",type:"text"},c,{required:!0})),r.a.createElement("label",{htmlFor:"city"},"city"),r.a.createElement("input",Object.assign({id:"city",placeholder:"city",type:"text"},o,{required:!0})),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"email"},"email"),r.a.createElement("input",Object.assign({id:"email",placeholder:"email@email.com",type:"email"},l,{required:!0})),r.a.createElement("label",{htmlFor:"phone"},"phone"),r.a.createElement("input",Object.assign({id:"phone",placeholder:"phone",type:"text"},u,{required:!0})),r.a.createElement("input",{value:"create",type:"submit"})))},te=Object(Y.withStyles)(function(e){return{root:{width:"100%",maxWidth:"360px",backgroundColor:e.palette.background.paper}}})(function(e){var t=e.classes;return r.a.createElement(P.a,null,r.a.createElement(R.a,{component:"nav",className:t.root},r.a.createElement(v.a,{style:{textDecoration:"none"},to:"/customerform"},r.a.createElement(_.a,{button:!0},r.a.createElement(Q.a,{primary:"add customer"}))),r.a.createElement("div",null,r.a.createElement(U.a,{path:"/customerform",render:function(e){return r.a.createElement(ee,e)}}))))}),ne=(n(480),function(e){var t=e.events,n=e.localizer,a=e.show;return r.a.createElement("div",{className:"calendar"},r.a.createElement(q.a,{localizer:n,events:t,startAccessor:"start",endAccessor:"end",selectable:!0,onSelectEvent:function(e){return a(e)},onSelectSlot:function(e){return a(e)}}))}),ae=function(){var e=I(),t=Object(a.useState)([]),n=Object(E.a)(t,2),c=n[0],o=n[1],l=function(){var e=Object(b.a)(h.a.mark(function e(){var t,n;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.fetchAll();case 2:t=e.sent,n=t.map(function(e){return{title:e.activity,start:J(e.date),end:z(e.date,e.duration)}}),o(n);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)(function(){l()},[]);return r.a.createElement("div",null,r.a.createElement("h2",null," Calendar "),r.a.createElement(ne,{events:c,localizer:e,show:function(e){console.log(e)}}))},re=n(210),ce=n.n(re),oe=n(209),le=n.n(oe),ue=n(208),ie=n.n(ue),se=n(207),me=n.n(se),pe=n(206),fe=n.n(pe),de=n(205),he=n.n(de),be=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"customerrest_front"))},Ee=function(e){var t=e.index;return 0===t?r.a.createElement(he.a,null):1===t?r.a.createElement(fe.a,null):r.a.createElement(me.a,null)},ve=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={left:!1},n.toggleDrawer=function(e,t){return function(){n.setState(Object(l.a)({},e,t))}},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=r.a.createElement("div",{className:e.list},r.a.createElement(R.a,null,["list","add","calendar"].map(function(e,t){return r.a.createElement(v.a,{style:{textDecoration:"none"},key:t,to:"/".concat(e)},r.a.createElement(_.a,{button:!0,key:e},r.a.createElement(ie.a,null,r.a.createElement(Ee,{index:t})),r.a.createElement(Q.a,{primary:e})))})));return r.a.createElement(P.a,null,r.a.createElement("div",null,r.a.createElement(le.a,{onClick:this.toggleDrawer("left",!0)},"Navigation"),r.a.createElement(ce.a,{open:this.state.left,onClose:this.toggleDrawer("left",!1)},r.a.createElement("div",{tabIndex:0,role:"button",onClick:this.toggleDrawer("left",!1)},t)),r.a.createElement(U.a,{exact:!0,path:"/",render:function(){return r.a.createElement(be,null)}}),r.a.createElement(U.a,{path:"/list",render:function(){return r.a.createElement(Z,null)}}),r.a.createElement(U.a,{path:"/add",render:function(){return r.a.createElement(te,null)}}),r.a.createElement(U.a,{path:"/calendar",render:function(){return r.a.createElement(ae,null)}})))}}]),t}(r.a.Component),ye=Object(Y.withStyles)({list:{width:250},fullList:{width:"auto"}})(ve);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(ye,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[213,1,2]]]);
//# sourceMappingURL=main.46907569.chunk.js.map