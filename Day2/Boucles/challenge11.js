const prompt = require("prompt-sync")();

const N = prompt("N : ");
let result = 1;

for (let i = N; i >= 1; i--) {
    result *= i
}

console.log(`${N}! = ${result}`);
