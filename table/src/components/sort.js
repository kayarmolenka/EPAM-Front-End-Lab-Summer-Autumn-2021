import { data, createRow } from '../index';

function sort(n) {
    if (data.firstUser[n] > data.secondUser[n]) {
        const row = document.querySelector(".first-Row");
        const row2 = document.querySelector(".second-Row");
        
        row.remove();
        row2.remove();

        const a = data.firstUser;
        const b = data.secondUser;

        data.firstUser = b;
        data.secondUser = a;

        createRow(data.firstUser, "first-Row");
        createRow(data.secondUser, "second-Row");
        console.log(data);
    }
}

export default sort;