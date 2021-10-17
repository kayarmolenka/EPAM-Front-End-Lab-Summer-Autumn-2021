const $root = document.querySelector("#root");
const $list = document.querySelector("#sel");
const content = document.createElement("div");

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

async function listener() {
  $list.addEventListener("change", () => {
    const dynamicImport = await import("./takeFetch");
    $list.options[0].disabled = true;
    if ($list.value === "title") {
      dynamicImport("entries");
    }
    if ($list.value === "category") {
      dynamicImport("categories");
    }
  });
}

listener();

$root.append(content);
