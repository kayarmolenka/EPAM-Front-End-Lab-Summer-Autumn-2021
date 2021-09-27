import { data, createRow, createHeaders, creteTable, updatePage } from '../index';

function changeValue(cell) {
    cell.innerHTML = `<input class="field" value= ${cell.textContent}>`;
  
    const input = document.querySelector(".field");
  
    input.addEventListener("focusout", () => {
        const table = document.querySelector('.table');
        table.remove();

        creteTable();
        createHeaders();

        const a = data.firstUser;
        const b = data.secondUser;
        
        if (cell.className === "id" || cell.className === "name" || cell.className === "surname") {
          a[cell.className] = input.value;
        }

        data.firstUser = b;
        data.secondUser = a;
        
        createRow(data.firstUser, "first-Row");
        createRow(data.secondUser, "second-Row");
        updatePage();
        console.log(data);
    });
}

export default changeValue;