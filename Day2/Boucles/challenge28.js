const prompt = require("prompt-sync")();

let nbrValeur = 0, somme = 0, plusGrand = 0, plusPetit = 0, positifs = 0, negatifs = 0

while (true) {
    const nbr = Number(prompt("Saisie : "))
    if (!nbr) break
    if (!nbrValeur) plusPetit = nbr
    nbrValeur++
    somme += nbr
    nbr > 0 ? positifs++ : negatifs++
    if (nbr > plusGrand) plusGrand = nbr
    if (nbr < plusPetit) plusPetit = nbr
}

console.log(`Nombre de valeurs : ${nbrValeur}`);
console.log(`Somme : ${somme}`);
console.log(`Moyenne : ${somme / nbrValeur}`);
console.log(`Plus grand : ${plusGrand}`);
console.log(`Plus petit : ${plusPetit}`);
console.log(`Positifs : ${positifs}`);
console.log(`Négatifs : ${negatifs}`);
