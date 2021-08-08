const root = document.querySelector('#root');
const wrapper = document.createElement('div');
const h1 = document.createElement('h1');

h1.textContent = 'JavaScript Type Conversion';

const p = document.createElement('p');
const value1 = true;
const value2 = false;
const value3 = 12;
const value4 = '6';
const value5 = 'number';
const value6 = 15;
const value7 = 3;
const value8 = [1];
const value9 = null;
const value10 = 'foo';
const value11 = 'bar';
const value12 = 'true';
const value13 = 'false';
const value14 = 'x';
const value15 = ['x'];
const value16 = 1;
const value17 = [1, 2, 3];
const value18 = {};
const value19 = [];
const value20 = '';
const arr = [];

function createlist(content){
    arr.push(content)
}

createlist(`true + false = ${value1 + value2}`);
createlist(`12 / 6 = ${value3 / value4}`);
createlist(`"number" + 15 + 3 = ${value5 + value6 + value7} `);
createlist(`15 + 3 + "number" = = ${value6 + value7 + value5}`);
createlist(`[1] > null =  ${value8 > value9}`);
createlist(`"foo" + + "bar" =  ${value10 + + value11}`);
createlist(`'true' == true = ${value12 == value1}`);
createlist(`false == 'false' = ${value2 == value13}`);
createlist(`null == '' = ${value19 == value20}`);
createlist(`!!"false" == !!"true" = ${!!value13 == !!value12}`);
createlist(`['x'] == 'x' = ${value15 == value14}`);
createlist(`[] + null + 1 = ${value19 + value9 + value16}`);
createlist(`[1,2,3] == [1,2,3] = ${value17 == value17}`);
createlist(`{}+[]+{}+[1] = ${+ value19 + value18 + value8}`);
createlist(`!+[]+[]+![] = ${! + value19 + value19 + !value19}`);

wrapper.append(h1, p);

const arr2 = arr.map((el) => {
    const ul = document.createElement('ul');
    const li = document.createElement('li');

    li.textContent = el;
    ul.append(li);

    wrapper.appendChild(ul)
})

function createImages(){
    let img = document.createElement('img');
    img.src = './img/1.png';
    let img2 = document.createElement('img');
    img2.src = './img/2.png';
    let img3 = document.createElement('img');
    img3.src = './img/3.png';
    let img4 = document.createElement('img');
    img4.src = './img/4.png';

    wrapper.append(img, img2, img3, img4)
}

createImages()

const text = document.createElement('div');
text.innerHTML +=
`<div class="textContent">
Type coercion can be explicit Number(value) and implicit 1 == null.<br>
For an explicit conversion just apply the Number() function, same as you did with Boolean() and String() .
Implicit conversion is tricky, because it’s triggered in more cases:
<ul>
    <li>comparison operators (>, <, <=,>=)</li>
    <li>bitwise operators ( | & ^ ~)</li>
    <li>arithmetic operators (- + * / % ). Note, that binary+ does not trigger numeric conversion, when any operand is a string.</li>
    <li>unary + operator</li>
    <li>loose equality operator == (incl. !=).</li>
</ul>
Note that == does not trigger numeric conversion when both operands are strings.
<br>
Moral of the story:
Always use 3 equals unless you have a good reason to use 2.
</div>`

wrapper.append(text);

root.append(wrapper);

