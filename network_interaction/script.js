const $root = document.querySelector("#root");
const $list = document.querySelector("#sel");
const content = document.createElement("div");

function createContent(array, value) {
  array.forEach((el) => {
    const wrapperForData = document.createElement("div");
    wrapperForData.classList.add("item");
    wrapperForData.style.backgroundColor = `rgb(${generatingNumbers()}, ${generatingNumbers()}, ${generatingNumbers()})`;
    wrapperForData.textContent = el[value] || el;
    content.append(wrapperForData);
  });
}

$list.addEventListener("change", () => {
  $list.options[0].disabled = true;
  if ($list.value === "title") {
    fetch(`https://api.publicapis.org/entries`)
      .then((res) => res.json())
      .then((res) => {
        content.innerHTML = "";
        createContent(res.entries, "API");
      })
      .catch((err) => console.log("ERROOR!!!", err));
  }
  if ($list.value === "category") {
    fetch(`https://api.publicapis.org/categories`)
      .then((res) => res.json())
      .then((categories) => {
        content.innerHTML = "";
        createContent(categories);
      })
      .catch((err) => console.log("ERROOR!!!", err));
  }
});

$root.append(content);

function generatingNumbers() {
  return Math.round(Math.random() * 250);
}
