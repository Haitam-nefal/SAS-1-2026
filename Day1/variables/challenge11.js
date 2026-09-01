const prompt = require("prompt-sync")()

const Longueur = prompt("Longueur : ")
const Largeur = prompt("Largeur : ")

const Surface = Longueur * Largeur
const Perimetre = 2 * (+Longueur + +Largeur)

console.log("Surface : ", Surface)
console.log("Périmètre : ", Perimetre)