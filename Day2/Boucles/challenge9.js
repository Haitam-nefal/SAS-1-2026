const prompt = require("prompt-sync")()

const base = prompt("Base : ")
const exposant = prompt("Exposant : ")

let result = 1

while (result !== base ** exposant) {
    result *= base
}

console.log("Result : ", result);