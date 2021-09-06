class Base {
    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log(`Hello, I'm ${this.name}`);
    }
}

class Stuff extends Base {
    constructor(name, ...stuff) {
        super(name);
        this.stuff = stuff;
    }
}

class Box extends Base {
    stuff = [];
    
    constructor(name, ...stuff1) {
        super(name);
        this.stuff.push(stuff1);
        this.st = this.stuff; 		
}

    getStuffs() {
        this.st.flat().map(el => console.log(el));
    } 
}

const boxKosty = new Box('redBox', 'phone','pen', 'pencil');

class User extends Base {
    box = {stuff: boxKosty.stuff.flat()};

    constructor(name, surname) {
        super(name);
        this.surname = surname;
        this.littleBox = this.box;	
    }

    showStuffs() {
        console.log(this.littleBox);
    }
}

const stuff = new Stuff('stuffes of Kosty','apple','banana','watermelon');
const kosty = new User('Kanstantsin','Yarmolenka');


console.log('stuff :', stuff);
console.log('boxKosty :', boxKosty);
console.log('kosty :', kosty);

kosty.sayHi();
kosty.showStuffs();
boxKosty.getStuffs();