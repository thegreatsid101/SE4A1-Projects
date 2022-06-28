const prompt = require("prompt-sync")({ sigint: true });
const arithmetic = require("./arithmetic");

console.log("\nCalculator written in Node.js\n\n");

let firstNum = prompt("Enter first number: ");
let secondNum = prompt("Enter second number: ");

firstNum = parseInt(firstNum);
secondNum = parseInt(secondNum);

console.log("\n1 - Addition")
console.log("2 - Subtraction")
console.log("3 - Multiplication")
console.log("4 - Division")

let operation = prompt("\nSelect operation: ");
operation = parseInt(operation);

let result;

switch (operation) {
    case 1:
        result = arithmetic.add(firstNum, secondNum);
        console.log("Addition result: " + result);
        break;
    case 2:
        result = arithmetic.sub(firstNum, secondNum);
        console.log("Subtraction result: " + result);
    case 3:
        result = arithmetic.multiply(firstNum, secondNum);
        console.log("Multiplication result: " + result);
    case 4:
        result = arithmetic.divide(firstNum, secondNum);
        console.log("Division result: " + result);
    default:
        console.log("Invalid operation");
}