class Name {
    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log(this.name);
    }
}

class Stuff extends Name {
    constructor(stuff) {
        super();
        this.stuff= [...stuff];
    }
}

class Box extends Stuff {
    enumerateStuff() {
        console.log(this.stuff);
    }
}

class User extends Box {
    constructor(name,surname) {
        super(name);
        this.surname = surname;
    }

    presentYourself() {
        console.log(`My full name is ${this.name} ${this.surname}`);
    }
}

const kosty = new User('Kanstantsin', 'Yarmolenka')

console.log(kosty)