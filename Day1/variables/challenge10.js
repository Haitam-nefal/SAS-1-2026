const prompt = require("prompt-sync")()

const rayon = prompt("Le rayon du réservoir : ")
const hauteur = prompt("La hauteur du réservoir : ")

const Volume = 3.14159 * (rayon ** 2) * hauteur

console.log("Volume : ",Volume)

