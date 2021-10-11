const $root = document.querySelector("#root");
const $list = document.querySelector("#sel");
const content = document.createElement("div");

$list.addEventListener("change", () => {
  $list.options[0].disabled = true;
  if ($list.value === "title") {
    fetch(`https://api.publicapis.org/entries`)
      .then((res) => res.json())
      .then((res) => {
        async function createList() {
          const data = await res;
          content.innerHTML = "";
          data.entries.forEach((el) => {
            const div = document.createElement("div");
            div.classList.add("item");
            div.style.backgroundColor = `rgb(${generatingNumbers()}, ${generatingNumbers()}, ${generatingNumbers()})`;
            div.textContent = el.API;
            content.append(div);
          });
        }
        createList();
      })
      .catch((err) => console.log("ERROOR!!!", err));
  }
  if ($list.value === "category") {
    fetch(`https://api.publicapis.org/categories`)
      .then((res) => res.json())
      .then((categories) => {
        content.innerHTML = "";
        categories.forEach((category) => {
          const div = document.createElement("div");
          div.textContent = category;
          div.classList.add("item");
          div.style.backgroundColor = `rgb(${generatingNumbers()}, ${generatingNumbers()}, ${generatingNumbers()})`;
          content.append(div);
        });
      })
      .catch((err) => console.log("ERROOR!!!", err));
  }
});

$root.append(content);

function generatingNumbers() {
  return Math.round(Math.random() * 250);
}
