(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{103:function(t,e,n){},127:function(t,e,n){},131:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),i=n(11),o=n.n(i);n(103),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r,s,d=n(17),l=n(8),u=n(79),j=n.n(u).a.create({baseURL:"https://social-network.samuraijs.com/api/1.1/",withCredentials:!0,headers:{"API-KEY":"eb20e7cb-0182-4b9c-972d-0c95be5d047d"}}),b=function(){return j.get("todo-lists")},O=function(t){return j.post("todo-lists",{title:t})},f=function(t){return j.delete("todo-lists/".concat(t))},h=function(t,e){return j.put("todo-lists/".concat(t),{title:e})},m=function(t){return j.get("todo-lists/".concat(t,"/tasks"))},T=function(t,e){return j.post("todo-lists/".concat(t,"/tasks"),{title:e})},g=function(t,e,n){return j.put("todo-lists/".concat(t,"/tasks/").concat(e),n)},p=function(t,e){return j.delete("todo-lists/".concat(t,"/tasks/").concat(e))},v=function(t){return j.post("auth/login",t)},x=function(){return j.delete("/auth/login")},I=function(){return j.get("auth/me")};!function(t){t[t.New=0]="New",t[t.InProgress=1]="InProgress",t[t.Completed=2]="Completed",t[t.Draft=3]="Draft"}(r||(r={})),function(t){t[t.Low=0]="Low",t[t.Middle=1]="Middle",t[t.Hi=2]="Hi",t[t.Urgently=3]="Urgently",t[t.Later=4]="Later"}(s||(s={}));var k=function(t,e){t.messages.length?e(E(t.messages[0])):e(E("some error occured")),e(A("failed"))},S=function(t,e){e(E(t.message?t.message:"some error occurred")),e(A("failed"))},C={status:"idle",error:null,isInitialized:!1},E=function(t){return{type:"APP/SET-ERROR",error:t}},A=function(t){return{type:"APP/SET-STATUS",status:t}},y=n(59),w=n(46),L={},D=function(t,e,n){return function(a,c){var i=c().tasks[t].find((function(t){return t.id===e}));if(i){var o=Object(l.a)({description:i.description,title:i.title,status:i.status,priority:i.priority,startDate:i.startDate,deadline:i.deadline},n);a(A("loading")),g(t,e,o).then((function(c){0===c.data.resultCode?(a(function(t,e,n){return{type:"UPDATE-TASK",taskId:e,todolistId:t,model:n}}(t,e,n)),a(A("succeeded"))):k(c.data,a)})).catch((function(t){S(t,a)}))}else console.warn("task not found in the state")}},P=[],N=function(){return function(t){t(A("loading")),b().then((function(e){return t({type:"SET-TODOLISTS",todolists:e.data}),t(A("succeeded")),e.data})).then((function(e){e.forEach((function(e){return t((n=e.id,function(t){t(A("loading")),m(n).then((function(e){t(function(t,e){return{type:"SET-TASKS",tasks:t,todolistId:e}}(e.data.items,n)),t(A("succeeded"))}))}));var n}))})).catch((function(e){S(e,t)}))}},R={isLoggedIn:!1},F=function(t){return{type:"login/SET-IS-LOGGED-IN",value:t}},G=n(60),K=n(80),H=Object(G.b)({todolists:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE-TODOLIST":return t.filter((function(t){return t.id!==e.id}));case"ADD-TODOLIST":var n=Object(l.a)(Object(l.a)({},e.todolist),{},{filter:"all",entityStatus:"idle"});return[n].concat(Object(y.a)(t));case"CHANGE-TODOLIST-TITLE":return t.map((function(t){return t.id===e.id?Object(l.a)(Object(l.a)({},t),{},{title:e.title}):t}));case"CHANGE-TODOLIST-FILTER":return t.map((function(t){return t.id===e.id?Object(l.a)(Object(l.a)({},t),{},{filter:e.filter}):t}));case"CHANGE-TODOLIST-ENTITY-STATUS":return t.map((function(t){return t.id===e.id?Object(l.a)(Object(l.a)({},t),{},{entityStatus:e.status}):t}));case"SET-TODOLISTS":return e.todolists.map((function(t){return Object(l.a)(Object(l.a)({},t),{},{filter:"all",entityStatus:"idle"})}));case"CLEAR-DATA":return[];default:return t}},tasks:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE-TASK":var n=Object(l.a)({},t),a=t[e.todolistId],c=a.filter((function(t){return t.id!=e.taskId}));return n[e.todolistId]=c,n;case"ADD-TASK":var i=Object(l.a)({},t),o=e.task,r=i[o.todoListId],s=[o].concat(Object(y.a)(r));return i[o.todoListId]=s,i;case"UPDATE-TASK":var d=Object(l.a)({},t),u=d[e.todolistId];return d[e.todolistId]=u.map((function(t){return t.id===e.taskId?Object(l.a)(Object(l.a)({},t),e.model):t})),d;case"ADD-TODOLIST":return Object(l.a)(Object(l.a)({},t),{},Object(w.a)({},e.todolist.id,[]));case"REMOVE-TODOLIST":var j=Object(l.a)({},t);return delete j[e.id],j;case"SET-TODOLISTS":var b=Object(l.a)({},t);return e.todolists.forEach((function(t){b[t.id]=[]})),b;case"SET-TASKS":return Object(l.a)(Object(l.a)({},t),{},Object(w.a)({},e.todolistId,e.tasks));case"CLEAR-DATA":return{};default:return t}},app:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"APP/SET-STATUS":return Object(l.a)(Object(l.a)({},t),{},{status:e.status});case"APP/SET-ERROR":return Object(l.a)(Object(l.a)({},t),{},{error:e.error});case"APP/SET-IS-INITIALIZED":return Object(l.a)(Object(l.a)({},t),{},{isInitialized:e.value});default:return t}},auth:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,e=arguments.length>1?arguments[1]:void 0;return"login/SET-IS-LOGGED-IN"===e.type?Object(l.a)(Object(l.a)({},t),{},{isLoggedIn:e.value}):t}}),M=Object(G.c)(H,Object(G.a)(K.a));window.store=M;n(127);var U=n(178),V=n(175),Z=n(176),z=n(177),B=n(168),Y=n(133),q=n(171),J=n(179),W=n(180),$=n(172),_=n(132),Q=n(25),X=n(181),tt=n(169),et=n(3),nt=c.a.memo((function(t){var e=t.addItem,n=t.disabled,c=void 0!==n&&n;console.log("AddItemForm");var i=Object(a.useState)(""),o=Object(Q.a)(i,2),r=o[0],s=o[1],d=Object(a.useState)(null),l=Object(Q.a)(d,2),u=l[0],j=l[1],b=r.trim(),O=function(){b?(e(b),s("")):j("\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c")};return Object(et.jsxs)("div",{children:[Object(et.jsx)(X.a,{variant:"outlined",disabled:c,label:"Title",value:r,onChange:function(t){s(t.currentTarget.value)},onKeyPress:function(t){null!==u&&j(null),13===t.charCode&&O()},error:!!u,helperText:u}),Object(et.jsx)(B.a,{color:"primary",onClick:O,disabled:c,children:Object(et.jsx)(tt.a,{})})]})})),at=n(88),ct=n(170),it=n(183),ot=c.a.memo((function(t){console.log("EditableSpan");var e=Object(a.useState)(!1),n=Object(Q.a)(e,2),c=n[0],i=n[1],o=Object(a.useState)(t.title),r=Object(Q.a)(o,2),s=r[0],d=r[1];return c?Object(et.jsx)(X.a,{variant:"standard",value:s,onBlur:function(){i(!1),t.onChange(s)},autoFocus:!0,onChange:function(t){d(t.currentTarget.value)}}):Object(et.jsx)("span",{onDoubleClick:function(){i(!0)},children:s})})),rt=c.a.memo((function(t){var e=Object(a.useCallback)((function(){return t.removeTask(t.todolistId,t.taskId)}),[t.todolistId,t.taskId]),n=Object(a.useCallback)((function(e){var n=e.currentTarget.checked;t.changeTaskStatus(t.todolistId,t.taskId,n?r.Completed:r.New)}),[t.todolistId,t.taskId]),c=Object(a.useCallback)((function(e){return t.changeTaskTitle(t.todolistId,t.taskId,e)}),[t.changeTaskTitle,t.todolistId,t.taskId]);return Object(et.jsxs)("div",{className:t.status===r.Completed?"is-done":"",children:[Object(et.jsx)(it.a,{color:"secondary",checked:t.status===r.Completed,onChange:n}),Object(et.jsx)(ot,{title:t.title,onChange:c}),Object(et.jsx)(B.a,{onClick:e,children:" x"})]})})),st=["demo"],dt=c.a.memo((function(t){t.demo;var e=Object(at.a)(t,st);console.log("TodoList");Object(d.b)();var n=Object(a.useCallback)((function(t){e.addTask(e.todolist.id,t)}),[e.addTask,e.todolist.id]),c=Object(a.useCallback)((function(){e.changeFilter(e.todolist.id,"all")}),[e.changeFilter,e.todolist.id]),i=Object(a.useCallback)((function(){e.changeFilter(e.todolist.id,"active")}),[e.changeFilter,e.todolist.id]),o=Object(a.useCallback)((function(){e.changeFilter(e.todolist.id,"completed")}),[e.changeFilter,e.todolist.id]),s=e.tasks;return"active"===e.todolist.filter&&(s=e.tasks.filter((function(t){return t.status===r.New}))),"completed"===e.todolist.filter&&(s=e.tasks.filter((function(t){return t.status===r.Completed}))),Object(et.jsxs)("div",{children:[Object(et.jsxs)("h3",{children:[Object(et.jsx)(ot,{title:e.todolist.title,onChange:Object(a.useCallback)((function(t){e.changeTodolistTitle(e.todolist.id,t)}),[e.changeTodolistTitle,e.todolist.id])}),Object(et.jsx)(B.a,{onClick:function(){e.removeTodolist(e.todolist.id)},disabled:"loading"===e.todolist.entityStatus,children:Object(et.jsx)(ct.a,{})})]}),Object(et.jsx)(nt,{addItem:n,disabled:"loading"===e.todolist.entityStatus}),Object(et.jsx)("div",{children:s.map((function(t){return Object(et.jsx)(rt,{taskId:t.id,title:t.title,status:t.status,todolistId:e.todolist.id,changeTaskStatus:e.changeTaskStatus,changeTaskTitle:e.changeTaskTitle,removeTask:e.removeTask},t.id)}))}),Object(et.jsxs)("div",{children:[Object(et.jsx)(q.a,{onClick:c,variant:"all"===e.todolist.filter?"outlined":"text",color:"default",children:"All"}),Object(et.jsx)(q.a,{onClick:i,variant:"active"===e.todolist.filter?"outlined":"text",color:"primary",children:"Active"}),Object(et.jsx)(q.a,{onClick:o,variant:"completed"===e.todolist.filter?"outlined":"text",color:"secondary",children:"Completed"})]})]})})),lt=n(9),ut=function(t){var e=t.demo,n=void 0!==e&&e,c=Object(d.b)(),i=Object(d.c)((function(t){return t.todolists})),o=Object(d.c)((function(t){return t.tasks})),r=Object(d.c)((function(t){return t.auth.isLoggedIn}));Object(a.useEffect)((function(){!n&&r&&c(N())}),[]);var s=Object(a.useCallback)((function(t,e){var n={type:"CHANGE-TODOLIST-FILTER",id:t,filter:e};c(n)}),[c]),l=Object(a.useCallback)((function(t,e){c(function(t,e){return function(n){p(t,e).then((function(a){n(function(t,e){return{type:"REMOVE-TASK",todolistId:t,taskId:e}}(t,e))}))}}(t,e))}),[c]),u=Object(a.useCallback)((function(t,e){c(function(t,e){return function(n){n(A("loading")),T(t,e).then((function(t){0===t.data.resultCode?(n({type:"ADD-TASK",task:t.data.data.item}),n(A("succeeded"))):k(t.data,n)})).catch((function(t){S(t,n)}))}}(t,e))}),[c]),j=Object(a.useCallback)((function(t,e,n){c(D(t,e,{title:n}))}),[c]),b=Object(a.useCallback)((function(t,e,n){c(D(t,e,{status:n}))}),[c]),m=Object(a.useCallback)((function(t){c(function(t){return function(e){e(A("loading")),e({type:"CHANGE-TODOLIST-ENTITY-STATUS",id:t,status:"loading"}),f(t).then((function(n){e(function(t){return{type:"REMOVE-TODOLIST",id:t}}(t)),e(A("succeeded"))}))}}(t))}),[c]),g=Object(a.useCallback)((function(t){var e=function(t){return function(e){e(A("loading")),O(t).then((function(t){e({type:"ADD-TODOLIST",todolist:t.data.data.item}),e(A("succeeded"))}))}}(t);c(e)}),[c]),v=Object(a.useCallback)((function(t,e){c(function(t,e){return function(n){n(A("loading")),h(t,e).then((function(a){n({type:"CHANGE-TODOLIST-TITLE",id:t,title:e}),n(A("succeeded"))}))}}(t,e))}),[c]);return r?Object(et.jsxs)(et.Fragment,{children:[Object(et.jsx)($.a,{container:!0,spacing:3,style:{padding:"20px"},children:Object(et.jsx)(nt,{addItem:g})}),Object(et.jsx)($.a,{container:!0,spacing:3,children:i.map((function(t){var e=o[t.id];return Object(et.jsx)($.a,{item:!0,children:Object(et.jsx)(_.a,{style:{padding:"10px"},children:Object(et.jsx)(dt,{todolist:t,tasks:e,removeTask:l,changeFilter:s,addTask:u,changeTaskStatus:b,removeTodolist:m,changeTaskTitle:j,changeTodolistTitle:v,demo:n})})},t.id)}))})]}):Object(et.jsx)(lt.a,{to:"/login"})},jt=n(185),bt=n(182),Ot=c.a.forwardRef((function(t,e){return Object(et.jsx)(bt.a,Object(l.a)({elevation:6,ref:e,variant:"filled"},t))}));function ft(){var t=Object(d.c)((function(t){return t.app.error})),e=Object(d.b)(),n=function(t,n){"clickaway"!==n&&e(E(null))},a=null!==t;return Object(et.jsx)(jt.a,{open:a,autoHideDuration:6e3,onClose:n,children:Object(et.jsx)(Ot,{onClose:n,severity:"error",children:t})})}var ht=n(186),mt=n(167),Tt=n(173),gt=n(174),pt=n(87),vt=function(){var t=Object(d.b)(),e=Object(d.c)((function(t){return t.auth.isLoggedIn})),n=Object(pt.a)({initialValues:{email:"",password:"",rememberMe:!1},validate:function(t){var e={};return t.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(t.email)||(e.email="Invalid email address"):e.email="Email is required",t.password?t.password.length<3&&(e.password="Password must be longer than 3 characters"):e.password="Password is required",e},onSubmit:function(e){var a;t((a=e,function(t){t(A("loading")),v(a).then((function(e){0===e.data.resultCode?(t(F(!0)),t(A("succeeded"))):k(e.data,t)})).catch((function(e){S(e,t)})).finally((function(){return t(A("idle"))}))})),n.resetForm()}});return e?Object(et.jsx)(lt.a,{to:"/"}):Object(et.jsx)($.a,{container:!0,justifyContent:"center",children:Object(et.jsx)($.a,{item:!0,justifyContent:"center",children:Object(et.jsx)("form",{onSubmit:n.handleSubmit,children:Object(et.jsxs)(ht.a,{children:[Object(et.jsxs)(mt.a,{children:[Object(et.jsxs)("p",{children:["To log in get registered",Object(et.jsxs)("a",{href:"https://social-network.samuraijs.com/",target:"_blank",children:[" ","here"]})]}),Object(et.jsx)("p",{children:"or use common test account credentials:"}),Object(et.jsx)("p",{children:"Email: free@samuraijs.com"}),Object(et.jsx)("p",{children:"Password: free"})]}),Object(et.jsxs)(Tt.a,{children:[Object(et.jsx)(X.a,Object(l.a)({label:"Email",margin:"normal"},n.getFieldProps("email"))),n.touched.email&&n.errors.email&&Object(et.jsx)("div",{style:{color:"red"},children:n.errors.email}),Object(et.jsx)(X.a,Object(l.a)({type:"password",label:"Password",margin:"normal"},n.getFieldProps("password"))),n.touched.password&&n.errors.password&&Object(et.jsx)("div",{style:{color:"red"},children:n.errors.password}),Object(et.jsx)(gt.a,Object(l.a)({label:"Remember me",control:Object(et.jsx)(it.a,{})},n.getFieldProps("rememberMe"))),Object(et.jsx)(q.a,{type:"submit",variant:"contained",color:"primary",children:"Login"})]})]})})})})};var xt=function(t){var e=t.demo,n=void 0!==e&&e,c=Object(d.c)((function(t){return t.app.status})),i=Object(d.c)((function(t){return t.app.isInitialized})),o=Object(d.c)((function(t){return t.auth.isLoggedIn})),r=Object(d.b)();Object(a.useEffect)((function(){r((function(t){t(A("loading")),I().then((function(e){0===e.data.resultCode?(t(F(!0)),t(A("succeeded"))):k(e.data,t)})).catch((function(e){S(e,t)})).finally((function(){t(A("idle")),t({type:"APP/SET-IS-INITIALIZED",value:!0})}))}))}),[]);var s=Object(a.useCallback)((function(){r((function(t){t(A("loading")),x().then((function(e){0===e.data.resultCode?(t(F(!1)),t(A("succeeded")),t({type:"CLEAR-DATA"})):k(e.data,t)})).catch((function(e){S(e,t)}))}))}),[]);return i?Object(et.jsxs)("div",{className:"App",children:[Object(et.jsx)(ft,{}),Object(et.jsxs)(Z.a,{position:"static",children:[Object(et.jsxs)(z.a,{children:[Object(et.jsx)(B.a,{edge:"start",color:"inherit","aria-label":"menu",children:Object(et.jsx)(U.a,{})}),Object(et.jsx)(Y.a,{variant:"h6",children:"News"}),o&&Object(et.jsx)(q.a,{color:"inherit",onClick:s,children:"Log out"})]}),"loading"===c&&Object(et.jsx)(J.a,{})]}),Object(et.jsx)(W.a,{fixed:!0,children:Object(et.jsxs)(lt.d,{children:[Object(et.jsx)(lt.b,{path:"login",element:Object(et.jsx)(vt,{})}),Object(et.jsx)(lt.b,{path:"/",element:Object(et.jsx)(ut,{demo:n})}),Object(et.jsx)(lt.b,{path:"404",element:Object(et.jsx)("h1",{children:"404: page not found"})}),Object(et.jsx)(lt.b,{path:"*",element:Object(et.jsx)(lt.a,{to:"/404"})})]})})]}):Object(et.jsx)("div",{style:{position:"fixed",top:"30%",textAlign:"center",width:"100%"},children:Object(et.jsx)(V.a,{})})},It=n(45);o.a.render(Object(et.jsx)(d.a,{store:M,children:Object(et.jsx)(It.a,{children:Object(et.jsx)(xt,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[131,1,2]]]);
//# sourceMappingURL=main.9b9c8346.chunk.js.map