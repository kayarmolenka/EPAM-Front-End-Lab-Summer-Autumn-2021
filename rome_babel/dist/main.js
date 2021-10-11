"use strict";

var $root = document.querySelector("#root");
var $list = document.querySelector("#sel");
var content = document.createElement("div");

$list.addEventListener("change", function () {
  $list.options[0].disabled = true;
  if ($list.value === "title") {
    fetch("https://api.publicapis.org/entries")
      .then(function (res) {
        return res.json();
      })
      .then(function (res) {
        async function createList() {
          var data = await res;
          content.innerHTML = "";
          data.entries.forEach(function (el) {
            var div = document.createElement("div");
            div.classList.add("item");
            div.style.backgroundColor =
              "rgb(" + generatingNumbers() + ", " + generatingNumbers() + ", " + generatingNumbers() + ")";
            div.textContent = el.API;
            content.append(div);
          });
        }
        createList();
      })
      .catch(function (err) {
        return console.log("ERROOR!!!", err);
      });
  }
  if ($list.value === "category") {
    fetch("https://api.publicapis.org/categories")
      .then(function (res) {
        return res.json();
      })
      .then(function (categories) {
        content.innerHTML = "";
        categories.forEach(function (category) {
          var div = document.createElement("div");
          div.textContent = category;
          div.classList.add("item");
          div.style.backgroundColor =
            "rgb(" + generatingNumbers() + ", " + generatingNumbers() + ", " + generatingNumbers() + ")";
          content.append(div);
        });
      })
      .catch(function (err) {
        return console.log("ERROOR!!!", err);
      });
  }
});

$root.append(content);

function generatingNumbers() {
  return Math.round(Math.random() * 250);
}
