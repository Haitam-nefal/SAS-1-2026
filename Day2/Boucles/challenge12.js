const prompt = require("prompt-sync")()

const nbr = prompt("Nombre : ")
let nbrDiviseur = 0

for (let i = 1; i <= nbr; i++) {
    if (nbr % i === 0) {
        console.log(i);
        nbrDiviseur++
    }
}

console.log(`Nombre de diviseurs : ${nbrDiviseur} `);
