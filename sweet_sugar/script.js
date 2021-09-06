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
    
    constructor(name, stuff) {
        super(name);
        this.stuff = stuff;
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

class Company extends Base {
    offices = []

    constructor(name, employee, offices) {
        super(name);
        this.employee = employee;
        this.offices = offices;
    }
}


const stuff = new Stuff('Fridge', 'apple, banana, watermelon');
const box = new Box('Red Box',  stuff);
const user = new User('Kanstantsin', 'Yarmolenka', box);
const company = new Company('EPAM', user, ['Rechitski', 'International'])

console.log('stuff :', stuff);
console.log('box :', box);
console.log('user :', user);

user.box.sayHi()
console.log('user.box.stuff.stuff1:', user.box.stuff.stuff1)