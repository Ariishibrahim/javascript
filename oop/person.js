// const person = {
//     name: 'John Doe',
//     greet() {
//         console.log(`Hello, my name is ${this.name}`);
//     }
//     };
//      person.greet(); // Hello, my name is John Doe


// function House(address, bedrooms, bathrooms, hasGarage) {
//     this.address = address;
//     this.bedrooms = bedrooms;
//     this.bathrooms = bathrooms;
//     this.hasGarage = hasGarage;

//     this.describe = function() {
//         console.log(`This house is located at ${this.address}, has ${this.bedrooms} bedroom(s), ${this.bathrooms} bathroom(s), and ${this.hasGarage ? 'has a garage.' : 'does not have a garage.'}`);
//     }
// }

// const myHouse1 = new House('123 London St', 3, 2, true);
// const myHouse2 = new House('123 Liverpool St', 3, 2, true);
// const myHouse3 = new House('123 Manchester St', 3, 2, true);
// const myHouse4 = new House('123 Scotland St', 3, 2, true);
// const myHouse5 = new House('123 Wales St', 3, 2, true);

// myHouse1.describe(); // Output: This house is located at 123 London St, has 3 bedroom(s), 2 bathroom(s), and has a garage.
// myHouse2.describe(); // Output: This house is located at 123 Liverpool St, has
// myHouse3.describe(); // Output: This house is located at 123 Manchester St, has
// myHouse4.describe(); // Output: This house is located at 123 Scotland St, has
// myHouse5.describe(); // Output: This house is located at 123 Wales St, has


class House {
    constructor(address, bedrooms, bathrooms, hasGarage) {
        this.address = address;
        this.bedrooms = bedrooms;
        this.bathrooms = bathrooms;
        this.hasGarage = hasGarage;
    }

    describe() {
        console.log(`This house is located at ${this.address}, has ${this.bedrooms} bedroom(s), ${this.bathrooms} bathroom(s), and ${this.hasGarage ? 'has a garage.' : 'does not have a garage.'}`);
    }
}

const myHouse1 = new House('123 London St', 3, 2, true);
myHouse1.describe(); 
// Output: This house is located at 123 London St, has 3 bedroom(s), 2 bathroom(s), and has a garage.

        