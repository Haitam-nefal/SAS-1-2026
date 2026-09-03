const prompt = require("prompt-sync")();

let nbr = prompt("Nombre : ")

let somme = 0

while (nbr != 0) {
    const a = nbr % 10
    console.log(a);
    somme += a
    nbr = parseInt(nbr / 10)
}

console.log(`Somme : ${somme}`);
