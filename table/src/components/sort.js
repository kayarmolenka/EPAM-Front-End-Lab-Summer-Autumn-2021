import { data, createRow, createHeaders } from "../index";

function sort(nameCell) {
  function sss() {
    data.sort(function (a, b) {
      if (nameCell === "name") {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      }
      if (nameCell === "id") {
        if (a.id > b.id) {
          return 1;
        }
        if (a.id < b.id) {
          return -1;
        }
        return 0;
      }
      if (nameCell === "surname") {
        if (a.surname > b.surname) {
          return 1;
        }
        if (a.surname < b.surname) {
          return -1;
        }
        return 0;
      }
    });
    re_render();
  }
  sss();

  function re_render() {
    const tr = document.querySelectorAll("tr");
    tr.forEach((el) => el.remove());

    createHeaders();
    createRow();
  }
}

export default sort;
