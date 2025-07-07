// let person1= {
//     name: "John",
//     age: 30,
//     occupation: "Developer",
//     address: {
//         street: "123 Main St",
//         city: "Anytown",
//         state: "CA",
//         zip: "12345"
//         },
//     hobbies: ["reading", "hiking", "coding"],
// }

// person1.name = "Jane";
// console.log(person1.name)

// let animal = {}
// let animal = new Object();
// animal.name = "Fido"
// animal.age = 3
// animal.breed = "Golden Retriever"
// animal.color = "Golden"
// animal.size = "Medium"
// animal.weight = 50
// animal.hobbies = ["chasing balls", "playing fetch", "snuggling"]
// animal.address = {
//     street: "123 Dogwood Dr",
//     city: "Pawville",
//     state: "CA",
//     zip: "12345"
//     }
//     console.log(animal)

let footballer = {
    name: "Cristiano Ronaldo",
    age: 37,
    position: "Forward",
    team: "Al Nassr",
    shirtNumber: 7,
     kick : function() {
    console.log(this. name + " Kick the ball")
 },
     score: function() {
    console.log(this.name + " Score a goal")
 },

}
footballer.score()

// for (const key in footballer) {
//        console.log(key) 
//     }

// console.log(footballer.position)
// console.log(footballer['position'])

