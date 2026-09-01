const prompt = require("prompt-sync")()

const montantMAD = prompt("Montant Dirham : ")
const montantEUR = montantMAD / 11

const converToString = `${montantEUR}`
const indexOfPoint = converToString.indexOf(".")


console.log("Budget en MAD : ", montantMAD)
console.log("Budget en EUR : ", converToString.slice(0, indexOfPoint+3))
