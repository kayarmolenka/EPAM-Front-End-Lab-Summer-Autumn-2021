const $root = document.querySelector("#root");
const $list = document.querySelector("#sel");
const content = document.createElement("div");

function createContent(array, value) {
  content.innerHTML = "";
  array.forEach((el) => {
    const wrapperForData = document.createElement("div");
    wrapperForData.classList.add("item");
    wrapperForData.style.backgroundColor = `rgb(${generatingNumbers()}, ${generatingNumbers()}, ${generatingNumbers()})`;
    wrapperForData.textContent = el[value] || el;
    content.append(wrapperForData);
  });
}

function takeFetch(url) {
  fetch(`https://api.publicapis.org/${url}`)
    .then((res) => res.json())
    .then((res) => {
      switch (url) {
        case "entries":
          createContent(res.entries, "API");
          break;
        default:
          createContent(res);
          break;
      }
    })
    .catch((err) => console.log("ERROOR!!!", err));
}

function generatingNumbers() {
  return Math.round(Math.random() * 250);
}

$list.addEventListener("change", () => {
  $list.options[0].disabled = true;
  if ($list.value === "title") {
    takeFetch("entries");
  }
  if ($list.value === "category") {
    takeFetch("categories");
  }
});

$root.append(content);
