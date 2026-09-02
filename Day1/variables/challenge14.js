const prompt = require("prompt-sync")()

let jA = prompt("Joueur A : ")
let jB = prompt("Joueur B : ")

let x = jA

jA = jB
jB = x

console.log("Joueur A : ", jA)
console.log("Joueur B : ", jB)