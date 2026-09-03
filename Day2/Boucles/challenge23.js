const prompt = require("prompt-sync")()

const n = prompt("N = ")
let a = 0, b = 1, c = 0

console.log(a);
console.log(b);

for (let i = 2; i < n; i++) {
    c = a + b
    console.log(c);
    a = b
    b = c
}

