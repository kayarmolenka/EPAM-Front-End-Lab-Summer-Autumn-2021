import changeValue from "./components/changeValue";
import sort from "./components/sort";
import "./scss/main.scss";

const $root = document.querySelector("#root");

export const data = {
    firstUser: { id: 1, name: "Maxim", surname: "Borisenko" },
    secondUser: { id: 2, name: "Andrey", surname: "Aristarx" }
  },
  nameHeaders = ["id", "name", "surname"];

const wrapper = document.createElement("div");
wrapper.classList.add("wrapper");

let table;
export function creteTable() {
    table = document.createElement("table");
    table.classList.add("table");
}

creteTable();

export function createHeaders() {
    const tr = document.createElement("tr");

    for (let i = 0; i < 3; i++) {
        const th = document.createElement("th");
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

    tr.classList.add(classRow);

    for (let i = 1; i <= 3; i++) {
        const td = document.createElement("td");
        td[i] = document.createElement("td");
        td[i].textContent = 1;
        td[i].classList.add(Object.keys(data)[i - 1]);
        
        tr.appendChild(td[i]);
        table.appendChild(tr);
    }
    if(tr.className === 'first-Row') {
        tr.children[0].textContent = data.id;
        tr.children[1].textContent = data.name;
        tr.children[2].textContent = data.surname;
    }
    if(tr.className === 'second-Row') {
        tr.children[0].textContent = data.id;
        tr.children[1].textContent = data.name;
        tr.children[2].textContent = data.surname;
    }
}

createRow(data.firstUser, "first-Row");
createRow(data.secondUser, "second-Row");

export function updatePage() {
    wrapper.appendChild(table);
    $root.appendChild(wrapper);
}

updatePage();

table.addEventListener("click", (e) => {
    if (e.target.id === "0") {
        sort("id");
    }
    if (e.target.id === "1") {
        sort("name");
    }
    if (e.target.id === "2") {
        sort("surname");
    }
    if (e.target.nodeName === "TD") {
        changeValue(e.target);
    }
});



