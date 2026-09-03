const prompt = require("prompt-sync")()

let nbr = prompt("Nombre : ")
let inv = 0

while (nbr != 0) {
    let a = nbr % 10
    inv = inv * 10 + a
    nbr = parseInt(nbr / 10)
}

console.log(inv);
