const arithmetic = require("./arithmetic");

console.log("\nCalculator written in Node.js\n\n");

console.log("Addition:")
for (let i = 0; i < 5; i++) {
    let firstNum = Math.floor(Math.random() * 5000);
    let secondNum = Math.floor(Math.random() * 1000);
    console.log(arithmetic.add(firstNum, secondNum));
}

console.log("Subtraction:")
for (let i = 0; i < 5; i++) {
    let firstNum = Math.floor(Math.random() * 1000);
    let secondNum = Math.floor(Math.random() * 1000);
    console.log(arithmetic.sub(firstNum, secondNum));
}

console.log("Multiplication:")
for (let i = 0; i < 6; i++) {
    let firstNum = Math.floor(Math.random() * 1000);
    let secondNum = Math.floor(Math.random() * 1000);
    console.log(arithmetic.multiply(firstNum, secondNum));
}

console.log("Division:")
for (let i = 0; i < 5; i++) {
    let firstNum = Math.floor(Math.random() * 1000);
    let secondNum = Math.floor(Math.random() * 1000);
    console.log(arithmetic.divide(firstNum, secondNum));
}