!function(e){var t={};function n(o){if(t[o])return t[o].exports;var c=t[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(o,c,function(t){return e[t]}.bind(null,c));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);(()=>{const e=()=>{document.querySelector("#newTodo").style.display="block",document.querySelector(".todoButton").style.display="none"},t=()=>{document.querySelector("#newTodo").style.display="none"};(()=>{const n=document.createElement("button");n.classList.add("todoButton","btn","btn-primary","text-center"),n.innerText="Add Todo",n.addEventListener("click",e);const o=document.createElement("form");o.id="newTodo",o.style.display="none";const c=document.createElement("input");c.classList.add("form-control"),c.name="title",c.value="",c.type="text";const r=document.createElement("label");r.for="title",r.innerText="Name";const l=document.createElement("textarea");l.classList.add("form-control"),l.name="description",l.value="";const a=document.createElement("label");a.for="description",a.innerText="Description";const d=document.createElement("input");d.classList.add("form-control","bg-primary"),d.name="date",d.value="",d.type="date";const s=document.createElement("label");s.for="date",s.innerText="Date";const i=document.createElement("select");i.classList.add("form-control"),i.name="priority",i.value="";const u=document.createElement("option");u.value="High",u.innerText="High";const m=document.createElement("option");m.value="Medium",m.innerText="Medium";const p=document.createElement("option");p.value="Low",p.innerText="Low",i.append(u,m,p);const f=document.createElement("label");f.for="priority",f.innerText="Priority";const b=document.createElement("button");b.innerText="Submit",b.classList.add("btn","btn-success");const y=document.createElement("button");y.classList.add("btn","btn-danger"),y.innerText="Cancel",y.addEventListener("click",t);const E=document.querySelector(".todo-form");o.append(r,c,a,l,s,d,f,i,b,y),E.appendChild(n),E.appendChild(o)})(),(()=>{const e=document.createElement("form");e.classList.add("notesForm");const n=document.createElement("label");n.for="todo",n.innerText="Todo";const o=document.createElement("input");o.classList.add("form-control"),o.name="todo",o.value="",o.type="text";const c=document.createElement("label");c.for="notes",c.innerText="Notes";const r=document.createElement("textarea");r.classList.add("form-control"),r.name="notes",r.value="";const l=document.createElement("div"),a=document.createElement("button");a.innerText="Submit",a.classList.add("btn","btn-success","col-12","col-sm-6","col-md-6");const d=document.createElement("button");d.classList.add("btn","btn-danger","col-12","col-sm-6","col-md-6"),d.innerText="Cancel",d.addEventListener("click",t),l.append(a,d);const s=document.querySelector(".content");e.append(n,o,c,r,l),s.appendChild(e)})()})()}]);