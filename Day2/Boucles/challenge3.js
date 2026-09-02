const prompt = require("prompt-sync")()

let somme = 0
const nbr = prompt("N : ")
for(let i = 1; i<= nbr; i++){
    somme += i
}

console.log(somme)