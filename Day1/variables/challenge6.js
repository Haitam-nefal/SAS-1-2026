const prompt = require("prompt-sync")()

const score1 = prompt("Score partie 1 : ")
const score2 = prompt("Score partie 2 : ")
const score3 = prompt("Score partie 3 : ")
const score4 = prompt("Score partie 4 : ")

const total = (+score1) + (+score2) + (+score3) + (+score4)
const moyen = total / 4

console.log("Score total : ", total)
console.log("Moyenne : ", moyen)

