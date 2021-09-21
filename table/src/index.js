import changeValue from "./components/changeValue";
import sort from "./components/sort";
import "./scss/main.scss";


const $root = document.querySelector("#root");

export const data = {
    firstUser: { 1: 1, 2: "Maxim", 3: "Borisenko" },
    secondUser: { 1: 2, 2: "Andrey", 3: "Aristarx" }
  },
  nameHeaders = ["id", "name", "surname"];

const wrapper = document.createElement("div");
wrapper.classList.add("wrapper");

const table = document.createElement("table");
table.classList.add("table");

function createHeaders() {
    const th = document.createElement("th");
    const tr = document.createElement("tr");

    for (let i = 0; i < 3; i++) {
        th[i] = document.createElement("th");
        th[i].textContent = nameHeaders[i];
        th[i].setAttribute("id", i);
        tr.appendChild(th[i]);
        table.appendChild(tr);
    }
}

createHeaders();

export function createRow(data, classRow) {
    const tr = document.createElement("tr");    
    const td = document.createElement("td");

    tr.classList.add(classRow);

    for (let i = 1; i <= 3; i++) {
        td[i] = document.createElement("td");
        td[i].textContent = data[i];
        td[i].classList.add(Object.keys(data)[i - 1]);
        
        tr.appendChild(td[i]);
        table.appendChild(tr);
    }
}

createRow(data.firstUser, "first-Row");
createRow(data.secondUser, "second-Row");

wrapper.appendChild(table);
$root.appendChild(wrapper);

table.addEventListener("click", (e) => {
    if (e.target.id === "0") {
        sort("1");
    }
    if (e.target.id === "1") {
        sort("2");
    }
    if (e.target.id === "2") {
        sort("3");
    }
    if (e.target.nodeName === "TD") {
        changeValue(e.target);
    }
});



