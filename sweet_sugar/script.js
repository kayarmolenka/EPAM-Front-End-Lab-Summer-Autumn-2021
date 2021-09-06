class Base {
    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log(`Hello, I'm ${this.name}`);
    }
}

class Stuff extends Base {
    constructor(name, stuff1) {
        super(name);
        this.stuff1 = stuff1;
    }
}

class Box extends Base {
    stuff = [];
    
    constructor(name, stuff1, stuff2) {
        super(name, stuff1);
        this.stuff = stuff2;
    }
}

class User extends Base {
    box = []

    constructor(name, surname, box) {
        super(name);
        this.surname = surname;
        this.box = box;	
    }
}

const stuff = new Stuff('Fridge', 'apple, banana, watermelon');
const box = new Box('Red Box', ['ball', 'racket'], ['pen', 'pencil']);
const kos = new User('Kanstantsin', 'Yarmolenka', ['phone', 'watch']);


console.log('stuff :', stuff);
console.log('box :', box);
console.log('kos :', kos);

stuff.sayHi();
box.sayHi();
kos.sayHi();