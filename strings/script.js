//different ways of creating strings
let firstName = "John"; //using double quotes
let lastName= 'Doe'; // single quotes
let myName = `${firstName} ${lastName}`; // using template literals or back ticks
let age = 30;
let isMarried = false;
let city = new String("New York"); //using string constructor
console.log(firstName,lastName,age,isMarried,city.toString())

//How to access strings

console.log(firstName.indexOf("J"));
console.log(firstName.lastIndexOf("n"));

//string methods
let str = "Hello, World!";
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.trim());
console.log(str.replace("World", "Earth"));
console.log(str.split(","));
console.log(str.split("")); //splitting a string into an array of characters
console.log(str.substring(0,5));
console.log(str.slice(0,5));
console.log(str.slice(-5));
console.log(str.slice(7,13));
console.log(str.slice(-7,13));
console.log(str.slice(7,-7));
console.log(str.slice(7,-7,2));
console.log(str.slice(7,-7,3));
    git



