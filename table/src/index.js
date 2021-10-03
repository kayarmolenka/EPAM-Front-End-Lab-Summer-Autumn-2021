import changeValue from "./components/changeValue";
import sort from "./components/sort";
import "./scss/main.scss";

const $root = document.querySelector("#root");

export const data = [
  { id: 1, name: "Maxim", surname: "Chernayski" },
  { id: 2, name: "Andrey", surname: "Astapenko" },
  { id: 3, name: "Lionel", surname: "Messi" },
  { id: 4, name: "Kanstantsin", surname: "Yarmolenka" },
  { id: 5, name: "Siarhei", surname: "Wor" },
  { id: 6, name: "Bory", surname: "Armyanin" },
];
const nameHeaders = ["id", "name", "surname"];
const wrapper = document.createElement("div");
let table;

wrapper.classList.add("wrapper");

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

export function createRow() {
  const ent = Object.entries(data);
  let count = 0;

  for (let r = 0; r < Object.keys(data).length; r++) {
    const tr = document.createElement("tr");
    tr.classList.add(count + "row");
    count++;

    for (let i = 1; i <= 3; i++) {
      const td = document.createElement("td");

      td[i] = document.createElement("td");
      td[i].classList.add(i + 9);
      td[i].classList.add(ent[r][1][nameHeaders[i - 1]]);
      td[i].textContent = ent[r][1][nameHeaders[i - 1]];

      tr.appendChild(td[i]);
      table.appendChild(tr);
    }
  }
}

createRow();

export function updatePage() {
  wrapper.appendChild(table);
  $root.appendChild(wrapper);
}

updatePage();

table.addEventListener("click", (e) => {
  if (e.target.nodeName === "TD") {
    changeValue(e);
  }
  if (e.target.nodeName === "TH") {
    sort(e.target.textContent);
  }
});
