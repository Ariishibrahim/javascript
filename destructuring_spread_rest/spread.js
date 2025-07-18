// const originalArray = [10, 2, 3, 4, 5];
// console.log(originalArray)

// const copiedArray = [...originalArray];
// console.log(copiedArray)

// const array1 = [1, 2, 3, 4, 5];
// const array2 = [6, 7, 8, 9, 10];

// const combinedArray = [...array1, ...array2];
// console.log(combinedArray); // Output: [1, 2, 3, 4

// const numbers = [ 2, 3, 4];
// const newNumbers = [1, ...numbers, 5];
// console.log(newNumbers); // Output: [1, 2, 3, 4,

let person = {
    name: "John",
    age: 30,
    occupation: "Developer"
};
const newPerson = {...person, occupation: "Engineer", city: "New York"};
console.log(newPerson); // Output: { name: 'John', age: 30, occupation