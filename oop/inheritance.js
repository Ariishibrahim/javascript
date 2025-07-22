class Animal {
    constructor(name) {
        this.name = name;
        }

    eat() {
        console.log(`${this.name} is eating`);
    }
}

class Dog extends Animal {
    bark() {
        console.log(`${this.name} says Woof!`);
    }
}


class Cat extends Animal {
    meow() {
        console.log(`${this.name} says meow!`);
    }
}

const dog = new Dog('Buddy');
dog.eat(); // Output: Buddy is eating
dog.bark(); // Output: Buddy says Woof!