import { data, createRow, createHeaders } from "../index";

function changeValue(e) {
  const cell = e.target;
  cell.innerHTML = `<input class="field" value= ${cell.textContent}>`;

  const input = document.querySelector(".field");

  input.addEventListener("focusout", () => {
    data.forEach((obj) => {
      if (
        cell.classList.contains("10") &&
        Number(obj.id) === Number(cell.classList[1])
      ) {
        obj.id = input.value;
      }
      if (cell.classList.contains("11") && obj.name === cell.classList[1]) {
        obj.name = input.value;
      }
      if (cell.classList.contains("12") && obj.surname === cell.classList[1]) {
        obj.surname = input.value;
      }
    });

    const tr = document.querySelectorAll("tr");
    tr.forEach((el) => el.remove());

    createHeaders();
    createRow();
  });
}

export default changeValue;
