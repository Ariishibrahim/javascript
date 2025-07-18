let person = {
    name: "John",
    age: 30,
    occupation: "Developer"
};
//console.log(person['age'])

//let{occupation, age}=person //destructuring 
//console.log(age) //Developer





let listOfNames = ["John", "Alice", "Bob", "Charlie"];
// let oneName = listOfNames[0];
// console.log(oneName)

let [,,oneName] = listOfNames;
console.log(oneName) //John
