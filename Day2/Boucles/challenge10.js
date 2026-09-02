const prompt = require("prompt-sync")()

let nbrSaisie = 0
let somme = 0

while (true) {
    const nbr = prompt("Saisie : ")
    if (nbr === "0") break
    nbrSaisie++
    somme += Number(nbr)
}
console.log(`Nombre de valeurs :  ${nbrSaisie}`);
console.log(`somme : ${somme}`);
