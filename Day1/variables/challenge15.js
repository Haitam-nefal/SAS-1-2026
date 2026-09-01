const prompt = require("prompt-sync")()

const PrixBillet = prompt("Prix d'un billet : ")
const Nombrebillets = prompt("Nombre de billets : ")

const PrixBoisson = prompt("Prix boisson :")
const NombreBoissons = prompt("Nombre de boissons :")

const TotalBillets = PrixBillet * Nombrebillets
const TotalBoissons = PrixBoisson * NombreBoissons

console.log("Totale : ", TotalBillets + TotalBoissons, " DH")