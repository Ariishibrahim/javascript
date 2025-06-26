for(let counter=10; counter > 0; counter--) {
console.log(counter, "adam", "ali");nter=10
}

for(let counter=0; counter < 10; counter++) {
    if(counter==5){
     //break;
     continue;
    }
    console.log(counter, "adam", "ali");
}

let counter = 0;
while(counter < 10) {
    console.log("Ariish");
    counter++;
}

for (let index = 0; index < 10; index++) {
    console.log("Ariish")
    
}

let i = 0;
do {
    console.log("Ariish")
    i++;
} while (i >10);

for(; ;) {
    console.log("Ariish");
}

const fruits = ["apple", "banana", "cherry", "date", "elderberry"];

for (let fruit of fruits) {
    console.log(fruit);
}

const person = {
    name: "Ariish",
    age: 25,
    occupation: "Software Engineer"
};
for(let key in person) {
    console.log(key + ": " + person[key]);
}