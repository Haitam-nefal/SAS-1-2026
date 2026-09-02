const prompt = require("prompt-sync")()

const nbr = prompt("Nombre : ")
let isPremier = true

for (let i = 2; i < nbr; i++) {
    if (nbr % i == 0) {
        isPremier = false
        break
    }
}

console.log(isPremier ? `${nbr} est un nombre premier.` : ` ${nbr} n'est pas un nombre premier.`);