const prompt = require("prompt-sync")()

const nbr = prompt("N : ")
let somme = 0

for (let i = 0; i < nbr; i++) {
    if (i % 2 == 0) somme += i
}

console.log(somme == nbr ? `${nbr} est un nombre parfait` : `${nbr} est un nombre pas parfait.`);
