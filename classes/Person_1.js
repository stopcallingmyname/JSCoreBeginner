class Person {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }

    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Country: ${this.country}`);
    }
}

const person1 = new Person("Nick", 30, "BLR");
const person2 = new Person("Andrew", 25, "USA");

person1.displayInfo();
person2.displayInfo();
