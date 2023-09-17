(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const d of o)if(d.type==="childList")for(const u of d.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function l(o){const d={};return o.integrity&&(d.integrity=o.integrity),o.referrerPolicy&&(d.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?d.credentials="include":o.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function i(o){if(o.ep)return;o.ep=!0;const d=l(o);fetch(o.href,d)}})();const L=`<section class="todoapp">\r
    <header class="header">\r
        <h1>Tareas</h1>\r
        <input id="new-todo-input" class="new-todo" placeholder="¿Qué necesita ser hecho?" autofocus>\r
    </header>\r
\r
    <!-- This section should be hidden by default and shown when there are todos -->\r
    <section class="main">\r
        <input id="toggle-all" class="toggle-all" type="checkbox">\r
        <label for="toggle-all">Mark all as complete</label>\r
        <ul class="todo-list">\r
            <!-- These are here just to show the structure of the list items -->\r
            <!-- List items should get the class "editing" when editing and "completed" when marked as completed -->\r
            <!-- <li class="completed" data-id="abc">\r
                <div class="view">\r
                    <input class="toggle" type="checkbox" checked>\r
                    <label>Probar JavaScript</label>\r
                    <button class="destroy"></button>\r
                </div>\r
                <input class="edit" value="Create a TodoMVC template">\r
            </li> -->\r
            <!-- <li>\r
                <div class="view">\r
                    <input class="toggle" type="checkbox">\r
                    <label>Comprar un unicornio</label>\r
                    <button class="destroy"></button>\r
                </div>\r
                <input class="edit" value="Rule the web">\r
            </li> -->\r
        </ul>\r
    </section>\r
\r
    <!-- This footer should hidden by default and shown when there are todos -->\r
    <footer class="footer">\r
        <!-- This should be "0 items left" by default -->\r
        <span class="todo-count"><strong id="pending-count">0</strong> pendiente(s)</span>\r
        <!-- Remove this if you don't implement routing -->\r
        <ul class="filters">\r
            <li>\r
                <a class=" filtro" class="selected" href="#/">Todos</a>\r
            </li>\r
            <li>\r
                <a class="filtro" href="#/active">Pendientes</a>\r
            </li>\r
            <li>\r
                <a class="filtro" href="#/completed">Completados</a>\r
            </li>\r
        </ul>\r
        <!-- Hidden if no completed items are left ↓ -->\r
        <button class="clear-completed">Borrar completados</button>\r
    </footer>\r
</section>\r
\r
\r
<footer class="info">\r
    <p>Template creado por <a href="http://sindresorhus.com">Sindre Sorhus</a></p>\r
    <!-- Change this out with your name and url ↓ -->\r
    <p>Creado por <a href="http://todomvc.com">ti</a></p>\r
    <p>Parte de <a href="http://todomvc.com">TodoMVC</a></p>\r
</footer>`;let b;const S=new Uint8Array(16);function C(){if(!b&&(b=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!b))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return b(S)}const n=[];for(let e=0;e<256;++e)n.push((e+256).toString(16).slice(1));function P(e,t=0){return n[e[t+0]]+n[e[t+1]]+n[e[t+2]]+n[e[t+3]]+"-"+n[e[t+4]]+n[e[t+5]]+"-"+n[e[t+6]]+n[e[t+7]]+"-"+n[e[t+8]]+n[e[t+9]]+"-"+n[e[t+10]]+n[e[t+11]]+n[e[t+12]]+n[e[t+13]]+n[e[t+14]]+n[e[t+15]]}const E=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),T={randomUUID:E};function A(e,t,l){if(T.randomUUID&&!t&&!e)return T.randomUUID();e=e||{};const i=e.random||(e.rng||C)();if(i[6]=i[6]&15|64,i[8]=i[8]&63|128,t){l=l||0;for(let o=0;o<16;++o)t[l+o]=i[o];return t}return P(i)}class h{constructor(t){this.id=A(),this.description=t,this.done=!1,this.createdAt=new Date}}const c={All:"All",Completed:"Completed",Pending:"Pendig"},s={todos:[new h("Piedra del Alma"),new h("Piedra del Infinto"),new h("Piedra del Tiempo"),new h("Piedra del Poder"),new h("Piedra del Realidad")],filter:c.All},I=()=>{v(),console.log("InitStore 🙂")},v=()=>{if(!localStorage.getItem("state"))return;const{todos:e=[],filter:t=c.All}=JSON.parse(localStorage.getItem("state"));s.todos=e,s.filter=t},y=()=>{localStorage.setItem("state",JSON.stringify(s))},k=(e=c.All)=>{switch(e){case c.All:return[...s.todos];case c.Completed:return s.todos.filter(t=>t.done);case c.Pending:return s.todos.filter(t=>!t.done);default:throw new Error(`Option ${e} is not valid`)}},U=e=>{if(!e)throw new Error("Description is requiered");s.todos.push(new h(e)),y()},x=e=>{s.todos=s.todos.map(t=>(t.id===e&&(t.done=!t.done),t)),y()},q=e=>{s.todos=s.todos.filter(t=>t.id!==e),y()},M=()=>{s.todos=s.todos.filter(e=>!e.done),y()},O=(e=c.All)=>{s.filter=e,y()},R=()=>s.filter,a={addStore:U,deleteCompleted:M,deleteTodo:q,getCurrentFilter:R,getTodos:k,initStore:I,loadStore:v,setFilter:O,toggleTodo:x},D=e=>{if(!e)throw new Error(" a todo object is requiered");const t=`
        <div class="view">
            <input class="toggle" type="checkbox" ${e.done?"checked":""}>
            <label>${e.description}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
        `,l=document.createElement("li");return l.innerHTML=t,l.setAttribute("data-id",e.id),e.done&&l.classList.add("completed"),l};let w;const F=e=>{if(w||(w=document.querySelector(e)),!w)throw new Error(`Element ${e} not found`);w.innerHTML=a.getTodos(c.Pending).length};let f;const N=(e,t=[])=>{if(f||(f=document.querySelector(e)),!f)throw new ERROR(`Element ${e} not found`);f.innerHTML="",t.forEach(l=>{f.append(D(l))})},m={TodoList:".todo-list",NewTodoInput:"#new-todo-input",ClearCompleted:".clear-completed",btnFilters:".filtro",PendingCountLabel:"#pending-count"},H=e=>{const t=()=>{const r=a.getTodos(a.getCurrentFilter());N(m.TodoList,r),l()},l=()=>{F(m.PendingCountLabel)};(()=>{const r=document.createElement("div");r.innerHTML=L,document.querySelector(e).append(r),t()})();const i=document.querySelector(m.NewTodoInput),o=document.querySelector(m.TodoList),d=document.querySelector(m.ClearCompleted),u=document.querySelectorAll(m.btnFilters);i.addEventListener("keyup",r=>{r.keyCode===13&&r.target.value.trim().length!==0&&(a.addStore(r.target.value),t(),r.target.value="")}),o.addEventListener("click",r=>{const p=r.target.closest("[data-id]");a.toggleTodo(p.getAttribute("data-id")),t()}),o.addEventListener("click",r=>{const p=r.target.className==="destroy",g=r.target.closest("[data-id]");!g||!p||(console.log(g.getAttribute("data-id")),a.deleteTodo(g.getAttribute("data-id")),t())}),d.addEventListener("click",()=>{a.deleteCompleted(),t()}),u.forEach(r=>{r.addEventListener("click",p=>{switch(u.forEach(g=>g.classList.remove("selected")),p.target.classList.add("selected"),p.target.text){case"Todos":a.setFilter(c.All);break;case"Pendientes":a.setFilter(c.Pending);break;case"Completados":a.setFilter(c.Completed);break}t()})})};a.initStore();H("#app");
