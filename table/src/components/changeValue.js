import { data, createRow } from '../index';

function changeValue(cell) {
    console.log(cell);
    cell.innerHTML = `<input class="field" value= ${cell.textContent}>`;
  
    const input = document.querySelector(".field");
  
    input.addEventListener("focusout", (e) => {
        const row = document.querySelector(".first-Row");
        const row2 = document.querySelector(".second-Row");
        row.remove();
        row2.remove();

        const a = data.firstUser;
        const b = data.secondUser;

        if (cell.className === "1" || cell.className === "2" || cell.className === "3") {
            console.log(cell.className);
            a[cell.className] = input.value;
        }

        data.firstUser = b;
        data.secondUser = a;

        createRow(data.firstUser, "first-Row");
        createRow(data.secondUser, "second-Row");
        console.log(data);
    });
}

export default changeValue;