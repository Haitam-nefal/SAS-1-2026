const prompt = require("prompt-sync")()

let nbrProduits = 0
let plusCher = 0
let Total = 0
let moinProduit = 0


while (true) {
    const prixProduit = Number(prompt("Prix : "))
    if (!nbrProduits) moinProduit = prixProduit
    if (!prixProduit) break
    if (prixProduit > plusCher) plusCher = prixProduit
    if (prixProduit < moinProduit) moinProduit = prixProduit
    nbrProduits++
    Total += prixProduit
}

console.log(`Nombre de produits : ${nbrProduits}`);
console.log(`Total : ${Total} DH`);
console.log(`Prix moyen : ${Total / nbrProduits} DH`);
console.log(`Plus cher : ${plusCher} DH`);
console.log(`Moins cher : ${moinProduit} DH`);




