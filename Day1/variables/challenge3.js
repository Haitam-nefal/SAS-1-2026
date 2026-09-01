const prompt = require("prompt-sync")()

const Gigaoctets = prompt("GigaOctets : ")
const Megaoctets = Gigaoctets * 1024

console.log("Stockage : ", Gigaoctets, " GB")
console.log("Résultat : ", Megaoctets, " MB")