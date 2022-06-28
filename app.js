const prompt = require("prompt-sync")({ sigint: true });
const arithmetic = require("./arithmetic");

console.log("\nCalculator written in Node.js\n\n");

let firstNum = prompt("Enter first number: ");
let secondNum = prompt("Enter second number: ");

firstNum = parseFloat(firstNum);
secondNum = parseFloat(secondNum);

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
        console.log("\nAddition result: " + result);
        break;

    case 2:
        result = arithmetic.sub(firstNum, secondNum);
        console.log("\nSubtraction result: " + result);
        break;

    case 3:
        result = arithmetic.multiply(firstNum, secondNum);
        console.log("\nMultiplication result: " + result);
        break;

    case 4:
        result = arithmetic.divide(firstNum, secondNum);
        console.log("\nDivision result: " + result);
        break;

    default:
        console.log("\nInvalid operation");
}