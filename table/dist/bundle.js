(()=>{"use strict";var e={d:(t,n)=>{for(var a in n)e.o(n,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:n[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{IT:()=>o,v:()=>c,aT:()=>n});const t=document.querySelector("#root"),n=[{id:1,name:"Maxim",surname:"Chernayski"},{id:2,name:"Andrey",surname:"Astapenko"},{id:3,name:"Lionel",surname:"Messi"},{id:4,name:"Kanstantsin",surname:"Yarmolenka"},{id:5,name:"Siarhei",surname:"Wor"},{id:6,name:"Bory",surname:"Armyanin"}],a=["id","name","surname"],r=document.createElement("div");let s;function o(){const e=document.createElement("tr");for(let t=0;t<3;t++){const n=document.createElement("th");n[t]=document.createElement("th"),n[t].textContent=a[t],n[t].setAttribute("id",t),e.appendChild(n[t]),s.appendChild(e)}}function c(){const e=Object.entries(n);let t=0;for(let r=0;r<Object.keys(n).length;r++){const n=document.createElement("tr");n.classList.add(t+"row"),t++;for(let t=1;t<=3;t++){const o=document.createElement("td");o[t]=document.createElement("td"),o[t].classList.add(t+9),o[t].classList.add(e[r][1][a[t-1]]),o[t].textContent=e[r][1][a[t-1]],n.appendChild(o[t]),s.appendChild(n)}}}r.classList.add("wrapper"),s=document.createElement("table"),s.classList.add("table"),o(),c(),r.appendChild(s),t.appendChild(r),s.addEventListener("click",(e=>{var t;"TD"===e.target.nodeName&&function(e){const t=e.target;t.innerHTML=`<input class="field" value= ${t.textContent}>`;const a=document.querySelector(".field");a.addEventListener("focusout",(()=>{n.forEach((e=>{t.classList.contains("10")&&Number(e.id)===Number(t.classList[1])&&(e.id=a.value),t.classList.contains("11")&&e.name===t.classList[1]&&(e.name=a.value),t.classList.contains("12")&&e.surname===t.classList[1]&&(e.surname=a.value)})),document.querySelectorAll("tr").forEach((e=>e.remove())),o(),c()}))}(e),"TH"===e.target.nodeName&&(t=e.target.textContent,n.sort((function(e,n){return function(e,t,n){return e[n]>t[n]?1:e[n]<t[n]?-1:0}(e,n,t)})),document.querySelectorAll("tr").forEach((e=>e.remove())),o(),c())}))})();