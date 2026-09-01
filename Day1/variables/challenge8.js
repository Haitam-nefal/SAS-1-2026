const prompt = require("prompt-sync")()

const U = prompt("Tension :")
const I = prompt("Intensité :")
const T = prompt("Temps :")

const Energie = U * I * T

console.log("Energie : ", Energie, " Wh")