(()=>{"use strict";var e={d:(n,d)=>{for(var t in d)e.o(d,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:d[t]})},o:(e,n)=>Object.prototype.hasOwnProperty.call(e,n)};e.d({},{P:()=>r});let n="Player X";function d(){n="Player X"===n?"Player O":"Player X",document.querySelector(".game-zone-result").innerHTML=`Move to player of ${n}`}let t=0;const i=function(e){const n=document.querySelector(".game-zone-result");("X"===e.childNodes[0].innerText&&"X"===e.childNodes[1].innerText&&"X"===e.childNodes[2].innerText||"X"===e.childNodes[0].innerText&&"X"===e.childNodes[3].innerText&&"X"===e.childNodes[6].innerText||"X"===e.childNodes[0].innerText&&"X"===e.childNodes[4].innerText&&"X"===e.childNodes[8].innerText||"X"===e.childNodes[1].innerText&&"X"===e.childNodes[4].innerText&&"X"===e.childNodes[7].innerText||"X"===e.childNodes[2].innerText&&"X"===e.childNodes[5].innerText&&"X"===e.childNodes[8].innerText||"X"===e.childNodes[2].innerText&&"X"===e.childNodes[4].innerText&&"X"===e.childNodes[6].innerText||"X"===e.childNodes[3].innerText&&"X"===e.childNodes[4].innerText&&"X"===e.childNodes[5].innerText||"X"===e.childNodes[6].innerText&&"X"===e.childNodes[7].innerText&&"X"===e.childNodes[8].innerText)&&(n.innerHTML="Win player X"),("O"===e.childNodes[0].innerText&&"O"===e.childNodes[1].innerText&&"O"===e.childNodes[2].innerText||"O"===e.childNodes[0].innerText&&"O"===e.childNodes[3].innerText&&"O"===e.childNodes[6].innerText||"O"===e.childNodes[0].innerText&&"O"===e.childNodes[4].innerText&&"O"===e.childNodes[8].innerText||"O"===e.childNodes[1].innerText&&"O"===e.childNodes[4].innerText&&"O"===e.childNodes[7].innerText||"O"===e.childNodes[2].innerText&&"O"===e.childNodes[5].innerText&&"O"===e.childNodes[8].innerText||"O"===e.childNodes[2].innerText&&"O"===e.childNodes[4].innerText&&"O"===e.childNodes[6].innerText||"O"===e.childNodes[3].innerText&&"O"===e.childNodes[4].innerText&&"O"===e.childNodes[5].innerText||"O"===e.childNodes[6].innerText&&"O"===e.childNodes[7].innerText&&"O"===e.childNodes[8].innerText)&&(n.innerHTML="Win player O"),t++,9===t&&(n.innerHTML="Draw")},r=document.getElementById("root");(function(){const e=document.createElement("div"),d=document.createElement("div"),t=document.createElement("div"),i=document.createElement("div"),o=document.createElement("div");e.classList.add("game-wrapper"),d.classList.add("game-description"),t.classList.add("game-zone"),i.classList.add("game-zone-field"),o.classList.add("game-zone-result"),d.textContent="Tic-tac-toe",o.textContent=`Move to player of ${n}`;for(let e=1;e<=9;e++){const n=document.createElement("div");n.classList.add("cell"),n.setAttribute("id",`${e}`),i.append(n)}t.append(i,o),e.append(d,t),r.append(e)})(),document.querySelector(".game-zone-field").addEventListener("click",(e=>{const t=e.target;"Player X"===n?(t.innerHTML="X",d(),i(e.target.parentNode)):(t.innerHTML="O",d(),i(e.target.parentNode))}))})();