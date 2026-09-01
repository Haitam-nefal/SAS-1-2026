const prompt = require("prompt-sync")()

const code = prompt("Code : ")

console.log("Premier chiffre : ", code[4%1])
console.log("Deuxième chiffre : ", code[4/4])
console.log("Troisième chiffre : ", code[4/2])
console.log("Quatrième chiffre : ", code[12/4])
