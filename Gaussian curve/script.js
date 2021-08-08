function randn_bm() {
    var u = 0, v = 0;
    while(u === 0) u = Math.random(); 
    while(v === 0) v = Math.random();
    return Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v ) * 2 | 0;
}

function createObject() {
    const array = [];
    const root = document.querySelector('#root');

    for(let i = 0; i < 10; i++){
        array.push(randn_bm());
    }
    
    const mainObject = array.reduce((acc, item) => {
        acc[item] = (acc[item] || 0) + 1;
        return acc;
    }, {});
    
    for(let ob in mainObject) {
        root.innerHTML += `${ob} : ${mainObject[ob]} </br>`;
    }
}

createObject();