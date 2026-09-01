const prompt = require("prompt-sync")()

const montantMAD = prompt("Montant Dirham : ")
const montantEUR = montantMAD / 11


console.log("Budget en MAD : ", montantMAD)
console.log("Budget en EUR : ", montantEUR)
