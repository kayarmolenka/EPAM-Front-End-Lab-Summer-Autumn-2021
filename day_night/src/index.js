import changeThemePage from "./changeThemePage";
import check from "./check";
import logIn from "./logIn";

import "./styles.scss";

const $root = document.querySelector("#root");
const $list = document.querySelector("#sel");
const content = document.createElement("div");

function setColorBody() {
  if (localStorage.getItem("Theme") === "rgb(18, 18, 18)") {
    document.body.classList.toggle("dark-theme");
  }
}

setColorBody();

export function createContent(array, value) {
  content.innerHTML = "";
  array.forEach((el) => {
    const wrapperForData = document.createElement("div");
    wrapperForData.classList.add("item");
    wrapperForData.style.backgroundColor = `rgb(${generatingNumbers()}, ${generatingNumbers()}, ${generatingNumbers()})`;
    wrapperForData.textContent = el[value] || el;
    content.append(wrapperForData);
  });
}

function generatingNumbers() {
  return Math.round(Math.random() * 250);
}

function listener() {
  $list.addEventListener("change", () => {
    $list.options[0].disabled = true;
    if ($list.value === "title") {
      import("./takeFetch.js").then((module) => module.default("entries"));
    }
    if ($list.value === "category") {
      import("./takeFetch.js").then((module) => module.default("categories"));
    }
  });
}

listener();

$root.append(content);

changeThemePage();
logIn();
check();
