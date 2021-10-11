import { data, createRow, createHeaders } from "../index";

function sort(nameCell) {
  function callbackSort() {
    data.sort(function (a, b) {
      return comparator(a, b, nameCell);
    });
    re_render();
  }
  callbackSort();

  function comparator(a, b, field) {
    if (a[field] > b[field]) {
      return 1;
    }
    if (a[field] < b[field]) {
      return -1;
    }
    return 0;
  }

  function re_render() {
    const tr = document.querySelectorAll("tr");
    tr.forEach((el) => el.remove());

    createHeaders();
    createRow();
  }
}

export default sort;
