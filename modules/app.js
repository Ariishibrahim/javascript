import multiply, {add, subtract} from './math.js';

console.log("Addition: 5+3", add(5, 3));
console.log("Subtraction: 5-3", subtract(10, 4));
console.log("Multiplication: 5*3", multiply(6, 7));

document.getElementById("output").innerHTML= `
<p>Addition: 5+3 = ${add(5, 3)}</p>
<p>Subtraction: 10-4 = ${subtract(10, 4)}</p>
<p>Multiplication: 6*7 = ${multiply(6, 7)}</p>
`;