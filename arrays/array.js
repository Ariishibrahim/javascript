// let name1 = "Ali";
// let name2 = "Ahmed";
// let name3 = "Mohammed";
// let name4 = "Ariish";
// let name5 = "Bob";
// let name6 = "John";
// console.log(name1);
// console.log(name2);


let names = ["John", "Bob", "Ali", "Ahmed", "Mohammed", "Ariish"];
names[2] = "Muna";
names.push("adam")
names.unshift("Ahmed")
names.pop();
names.shift();
names.splice(2, 0, "Sara");
names.splice(2, 1);

names.forEach[(x) => console.log(x + "is nice ")];

