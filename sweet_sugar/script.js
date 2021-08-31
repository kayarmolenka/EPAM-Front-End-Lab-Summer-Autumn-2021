class Base {
    static #allUsers = []

    constructor(name) {
      this.name = name;
      Base.#allUsers.push(name);
    }
  
    sayHi() {
      console.log(`Hello, I'm ${this.name}`);
    }
}
  
class Stuff extends Base {
    constructor(name, stuff) {
        super(name);
        this.stuff = stuff;
    }
}

class Box extends Stuff {
    showStuff() {
        console.log(`I have ${this.stuff}`);
    }
}
  
class User extends Box {
    gender;

    constructor(name, stuff, surname) {
        super(name, stuff);
        this.surname = surname;
    }

    set gender(text) {
        this.gender = text; 
    }
    
    get gender() {
        return `Your gender is ${this.gender}`
    }
}
  
const data = {
    kos: {
        name: "Kanstantsin",
        stuff: ["watch", "T-shirt", "phone"],
        surname: "Yarmolenka"
    }
};

const {kos: {name, stuff, surname }} = data;
  
const koly = new User("Koly", ["pen", "pencil"], 'Borisenko');
const kosty = new User(name, stuff, surname);

console.log('USER Kosty :', kosty);
console.dir(Base);

console.log(kosty.sayHi());
console.log(kosty.showStuff());

console.log('USER Koly :', koly);
console.log(koly.showStuff());

kosty.gender = 'male';

console.log('USER Kosty :', kosty)