const prompt = require("prompt-sync")()

const nbr = prompt("N = ")

for (let i = 1; i <= nbr; i++) {
    let s = ""
    for (let j = 1; j <= i; j++) {
        s += i
    }
    console.log(s);
}
