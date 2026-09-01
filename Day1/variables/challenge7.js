const prompt = require("prompt-sync")();

const controle_continu = prompt("Contrôle continu :")
const projet = prompt("Projet :")
const examen = prompt("Examen :")

const Note_finale = (controle_continu * 2 + projet * 3 + examen * 5) / 10

console.log("Note finale : ", Note_finale)
