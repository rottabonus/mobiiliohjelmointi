(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{128:function(e,t,n){},213:function(e,t,n){e.exports=n(501)},501:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),l=n.n(c),o=(n(128),n(196)),u=n(197),i=n(198),s=n(211),m=n(199),p=n(212),f=n(23),d=n(4),h=n.n(d),b=n(9),E=n(16),v=n(502),y=n(200),j=n.n(y),O=n(126),g=n.n(O),w=function(e){var t=e.item,n=e.deleteCustomer,a=e.deleteTraining,c=Object.keys(t),l=Object.values(t).filter(function(e){return"string"===typeof e||"number"===typeof e}),o=c.filter(function(e,t){return t<l.length});return r.a.createElement("tr",null,o.map(function(e,n){return r.a.createElement("td",{className:"priority-".concat(n+1),key:n},t[e])}),t.firstname?r.a.createElement("td",null,r.a.createElement(v.a,{to:"/addtraining/".concat(t.links[0].href.match(/\d+/))},r.a.createElement(j.a,{className:"hoverableIcon"}))):null,t.firstname?r.a.createElement("td",null,r.a.createElement(g.a,{className:"hoverableIcon",onClick:function(){return n(t)}})):r.a.createElement("td",null,r.a.createElement(g.a,{className:"hoverableIcon",onClick:function(){return a(t)}})))},k=function(e){var t=e.data,n=e.deleteCustomer,a=e.deleteTraining;return r.a.createElement("tbody",null,t.map(function(e,t){return r.a.createElement(w,{key:t,deleteCustomer:n,deleteTraining:a,item:e})}))},x={fetchAll:function(){var e=Object(b.a)(h.a.mark(function e(){var t,n;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://customerrest.herokuapp.com/api/customers");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,console.log(t.status),e.abrupt("return",n.content);case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),create:function(){var e=Object(b.a)(h.a.mark(function e(t){var n;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://customerrest.herokuapp.com/api/customers",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 2:return n=e.sent,console.log(n.status),e.abrupt("return",n.json());case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),deleteCustomer:function(){var e=Object(b.a)(h.a.mark(function e(t){var n;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://customerrest.herokuapp.com/api/customers/".concat(t),{method:"DELETE",mode:"cors",headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,console.log(n.status),e.abrupt("return",n);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},C=n(80),S=(n(145),function(){var e=Object(a.useState)([]),t=Object(E.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(""),o=Object(E.a)(l,2),u=o[0],i=o[1],s=Object(a.useState)([]),m=Object(E.a)(s,2),p=m[0],d=m[1],v=Object(a.useState)([0]),y=Object(E.a)(v,2),j=y[0],O=y[1],g=Object(a.useState)(["firstname"]),w=Object(E.a)(g,2),S=w[0],D=w[1],N=n.filter(function(e){return e[S].toLowerCase().includes(u.toLowerCase())}),T=function(){var e=Object(b.a)(h.a.mark(function e(){var t,n,a,r,l;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.fetchAll();case 2:t=e.sent,c(t),n=Object.values(t[0]),a=Object.keys(t[0]),r=n.filter(function(e){return"string"===typeof e}),l=a.filter(function(e,t){return t<r.length}),d(l);case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)(function(){T()},[]);var A=function(){var e=Object(b.a)(h.a.mark(function e(t){var n;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.links[0].href.match(/\d+/),e.next=3,x.deleteCustomer(n);case 3:T();case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("p",null," Filter by ",r.a.createElement("b",null,S)," "),r.a.createElement("input",{label:"filter",value:u,onChange:function(e){i(e.target.value)}}),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,p.map(function(e,t){return r.a.createElement("th",{key:t,className:"priority-".concat(t+1),onClick:function(){var t;S===(t=e)&&0===j?(D(t),O(1),"string"===typeof n[0][t]?c(Object(f.a)(n).sort(function(e,n){return n[t].localeCompare(e[t])})):c(Object(f.a)(n).sort(function(e,n){return n[t]-e[t]}))):(D(t),O(0),"string"===typeof n[0][t]?c(Object(f.a)(n).sort(function(e,n){return e[t].localeCompare(n[t])})):c(Object(f.a)(n).sort(function(e,n){return e[t]-n[t]})))}},e.toUpperCase())}),r.a.createElement("th",{className:"notHoverableHeader"},"ADD TRAINING"),r.a.createElement("th",{className:"notHoverableHeader"},"DELETE"))),r.a.createElement(k,{data:N,deleteCustomer:function(e){Object(C.confirmAlert)({title:"Confirm to delete",message:"Are you sure want to delete customer",buttons:[{label:"Yes",onClick:function(){return A(e)}},{label:"No",onClick:function(){return console.log("no")}}]})}})))}),D={fetchAll:function(){var e=Object(b.a)(h.a.mark(function e(){var t,n;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://customerrest.herokuapp.com/api/trainings");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,console.log(t.status),e.abrupt("return",n.content);case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),create:function(){var e=Object(b.a)(h.a.mark(function e(t){var n;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://customerrest.herokuapp.com/api/trainings",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 2:return n=e.sent,console.log(n.status),e.abrupt("return",n.json());case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),deleteTraining:function(){var e=Object(b.a)(h.a.mark(function e(t){var n;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://customerrest.herokuapp.com/api/trainings/".concat(t),{method:"DELETE",mode:"cors",headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,console.log(n.status),e.abrupt("return",n.status);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},N=n(202),T=n.n(N),A=n(81),F=n.n(A),L=function(){return F.a.momentLocalizer(T.a)},q=function(e){return new Date(e).toLocaleDateString("fi-FI")},I=function(e,t){var n=new Date(e),a=n.setMinutes(n.getMinutes()+30);return new Date(a)},H=function(e){return new Date(e)},z=function(){var e=Object(a.useState)([]),t=Object(E.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(""),o=Object(E.a)(l,2),u=o[0],i=o[1],s=Object(a.useState)(0),m=Object(E.a)(s,2),p=m[0],d=m[1],v=Object(a.useState)([]),y=Object(E.a)(v,2),j=y[0],O=y[1],g=Object(a.useState)(["activity"]),w=Object(E.a)(g,2),x=w[0],S=w[1],N=n.filter(function(e){return e[x].toString().toLowerCase().includes(u.toLowerCase())}),T=function(){var e=Object(b.a)(h.a.mark(function e(){var t,n,a,r,l,o;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.fetchAll();case 2:t=e.sent,n=t.map(function(e,t){return{date:q(e.date),duration:e.duration,activity:e.activity,content:e.content,links:e.links}}),c(n),a=Object.values(t[0]),r=Object.keys(t[0]),l=a.filter(function(e){return"string"===typeof e}),o=r.filter(function(e,t){return t<=l.length}),O(o);case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)(function(){T()},[]);var A=function(){var e=Object(b.a)(h.a.mark(function e(t){var n;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.links[0].href.match(/\d+/),e.next=3,D.deleteTraining(n);case 3:T();case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("p",null," Filter by ",r.a.createElement("b",null,x)," "),r.a.createElement("input",{label:"filter",value:u,onChange:function(e){i(e.target.value)}}),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,j.map(function(e,t){return r.a.createElement("th",{className:"priority-".concat(t+1),key:t,onClick:function(){var t;x===(t=e)&&0===p?(d(1),c("date"===t?Object(f.a)(n).sort(function(e,n){return H(n[t])-H(e[t])}):"activity"===t?Object(f.a)(n).sort(function(e,n){return e[t].localeCompare(n[t])}):Object(f.a)(n).sort(function(e,n){return n[t]-e[t]}))):(d(0),S(t),"date"===t?c(Object(f.a)(n).sort(function(e,n){return H(e[t])-H(n[t])})):"string"===typeof n[0][t]?c(Object(f.a)(n).sort(function(e,n){return n[t].localeCompare(e[t])})):c(Object(f.a)(n).sort(function(e,n){return e[t]-n[t]})))}},e.toUpperCase())}),r.a.createElement("th",{className:"notHoverableHeader"},"DELETE"))),r.a.createElement(k,{data:N,deleteTraining:function(e){Object(C.confirmAlert)({title:"Confirm to delete",message:"Are you sure want to delete training",buttons:[{label:"Yes",onClick:function(){return A(e)}},{label:"No",onClick:function(){return console.log("no")}}]})}})))},J=function(e){var t=Object(a.useState)(e),n=Object(E.a)(t,2),r=n[0],c=n[1];return{value:r,onChange:function(e){c(e.target.value)}}},W=function(e){var t=J(""),n=J(""),a=J(""),c=function(){var r=Object(b.a)(h.a.mark(function r(c){var l;return h.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return c.preventDefault(),l={date:a.value,duration:n.value,activity:t.value,customer:"http://customerrest.herokuapp.com/api/customers/".concat(e.id)},r.next=4,D.create(l);case 4:e.history.push("/trainings");case 5:case"end":return r.stop()}},r,this)}));return function(e){return r.apply(this,arguments)}}();return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:c},r.a.createElement("p",null," enter info "),r.a.createElement("label",{htmlFor:"activity"},"activity"),r.a.createElement("input",Object.assign({id:"activity",placeholder:"activity",type:"text"},t,{required:!0})),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"duration"},"duration"),r.a.createElement("input",Object.assign({id:"duration",placeholder:"duration",min:"1",type:"number"},n,{required:!0})),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"date"},"date"),r.a.createElement("input",Object.assign({id:"date",placeholder:"date",type:"date"},a,{required:!0})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{value:"create",type:"submit"})))},B=n(503),M=n(504),P=n(44),U=n(43),Y=n.n(U),G=n(34),R=n.n(G),$=n(35),_=n.n($),K=n(203),Q=n.n(K),V=Object(P.withStyles)(function(e){return{root:{width:"100%",maxWidth:"360px",backgroundColor:e.palette.background.paper,display:"flex",flexDirection:"row"}}})(function(e){var t=e.classes;return r.a.createElement(B.a,null,r.a.createElement("div",null,r.a.createElement(Y.a,{component:"nav",className:t.root},r.a.createElement(v.a,{style:{textDecoration:"none"},to:"/customers"},r.a.createElement(R.a,{button:!0},r.a.createElement(_.a,{primary:"customers"}))),r.a.createElement(Q.a,null),r.a.createElement(v.a,{style:{textDecoration:"none"},to:"/trainings"},r.a.createElement(R.a,{button:!0,divider:!0},r.a.createElement(_.a,{primary:"trainings"})))),r.a.createElement("div",null,r.a.createElement(M.a,{path:"/customers",render:function(){return r.a.createElement(S,null)}}),r.a.createElement(M.a,{path:"/trainings",render:function(){return r.a.createElement(z,null)}}),r.a.createElement(M.a,{exact:!0,path:"/addtraining/:id",render:function(e){return r.a.createElement(W,Object.assign({},e,{id:e.match.params.id}))}}))))}),X=function(e){var t=J(""),n=J(""),a=J(""),c=J(""),l=J(""),o=J(""),u=J(""),i=function(){var r=Object(b.a)(h.a.mark(function r(i){var s;return h.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return i.preventDefault(),s={firstname:t.value,lastname:n.value,streetaddress:a.value,postcode:c.value,city:l.value,email:o.value,phone:u.value},r.next=4,x.create(s);case 4:e.history.push("/customers");case 5:case"end":return r.stop()}},r,this)}));return function(e){return r.apply(this,arguments)}}();return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:i},r.a.createElement("p",null," enter info "),r.a.createElement("label",{htmlFor:"firstname"},"firstname"),r.a.createElement("input",Object.assign({id:"firstname",placeholder:"firstname",type:"text"},t,{required:!0})),r.a.createElement("label",{htmlFor:"lastname"},"lastname"),r.a.createElement("input",Object.assign({id:"lastname",placeholder:"lastname",type:"text"},n,{required:!0})),r.a.createElement("label",{htmlFor:"streetaddress"},"streetaddress"),r.a.createElement("input",Object.assign({id:"streetaddress",placeholder:"streetaddress",type:"text"},a,{required:!0})),r.a.createElement("label",{htmlFor:"postcode"},"postcode"),r.a.createElement("input",Object.assign({id:"postcode",placeholder:"postcode",type:"text"},c,{required:!0})),r.a.createElement("label",{htmlFor:"city"},"city"),r.a.createElement("input",Object.assign({id:"city",placeholder:"city",type:"text"},l,{required:!0})),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"email"},"email"),r.a.createElement("input",Object.assign({id:"email",placeholder:"email@email.com",type:"email"},o,{required:!0})),r.a.createElement("label",{htmlFor:"phone"},"phone"),r.a.createElement("input",Object.assign({id:"phone",placeholder:"phone",type:"text"},u,{required:!0})),r.a.createElement("input",{value:"create",type:"submit"})))},Z=Object(P.withStyles)(function(e){return{root:{width:"100%",maxWidth:"360px",backgroundColor:e.palette.background.paper}}})(function(e){var t=e.classes;return r.a.createElement(B.a,null,r.a.createElement(Y.a,{component:"nav",className:t.root},r.a.createElement(v.a,{style:{textDecoration:"none"},to:"/customerform"},r.a.createElement(R.a,{button:!0},r.a.createElement(_.a,{primary:"add customer"}))),r.a.createElement("div",null,r.a.createElement(M.a,{path:"/customerform",render:function(e){return r.a.createElement(X,e)}}))))}),ee=(n(480),function(e){var t=e.events,n=e.localizer,a=e.show;return r.a.createElement("div",{className:"calendar"},r.a.createElement(F.a,{localizer:n,events:t,startAccessor:"start",endAccessor:"end",selectable:!0,onSelectEvent:function(e){return a(e)},onSelectSlot:function(e){return a(e)}}))}),te=function(){var e=L(),t=Object(a.useState)([]),n=Object(E.a)(t,2),c=n[0],l=n[1],o=function(){var e=Object(b.a)(h.a.mark(function e(){var t,n;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.fetchAll();case 2:t=e.sent,n=t.map(function(e){return{title:e.activity,start:H(e.date),end:I(e.date,e.duration)}}),l(n);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)(function(){o()},[]);return r.a.createElement("div",null,r.a.createElement("h2",null," Calendar "),r.a.createElement(ee,{events:c,localizer:e,show:function(e){console.log(e)}}))},ne=n(210),ae=n.n(ne),re=n(209),ce=n.n(re),le=n(208),oe=n.n(le),ue=n(207),ie=n.n(ue),se=n(206),me=n.n(se),pe=n(205),fe=n.n(pe),de=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"customerrest_front"))},he=function(e){var t=e.index;return 0===t?r.a.createElement(fe.a,null):1===t?r.a.createElement(me.a,null):r.a.createElement(ie.a,null)},be=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={left:!1},n.toggleDrawer=function(e,t){return function(){n.setState(Object(o.a)({},e,t))}},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=r.a.createElement("div",{className:e.list},r.a.createElement(Y.a,null,["list","add","calendar"].map(function(e,t){return r.a.createElement(v.a,{style:{textDecoration:"none"},key:t,to:"/".concat(e)},r.a.createElement(R.a,{button:!0,key:e},r.a.createElement(oe.a,null,r.a.createElement(he,{index:t})),r.a.createElement(_.a,{primary:e})))})));return r.a.createElement(B.a,null,r.a.createElement("div",null,r.a.createElement(ce.a,{onClick:this.toggleDrawer("left",!0)},"Navigation"),r.a.createElement(ae.a,{open:this.state.left,onClose:this.toggleDrawer("left",!1)},r.a.createElement("div",{tabIndex:0,role:"button",onClick:this.toggleDrawer("left",!1)},t)),r.a.createElement(M.a,{exact:!0,path:"/",render:function(){return r.a.createElement(de,null)}}),r.a.createElement(M.a,{path:"/list",render:function(){return r.a.createElement(V,null)}}),r.a.createElement(M.a,{path:"/add",render:function(){return r.a.createElement(Z,null)}}),r.a.createElement(M.a,{path:"/calendar",render:function(){return r.a.createElement(te,null)}})))}}]),t}(r.a.Component),Ee=Object(P.withStyles)({list:{width:250},fullList:{width:"auto"}})(be);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(Ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[213,1,2]]]);
//# sourceMappingURL=main.088721cc.chunk.js.map