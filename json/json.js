//javascript object
let person = {
    firstName: "Nimca",
    lastName: "Abdi",
    age: 25,
    isMarried: false,
};
console.log(person);

//convert the js object to json text
let json = JSON.stringify(person);
console.log(Json);

//convert the json string to js object
let person2 = JSON.parse(json);
console.log(person2);