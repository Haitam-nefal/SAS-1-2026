const prompt = require("prompt-sync")()

const dureFilm = prompt("Durée en Minute : ")

if (dureFilm < 60) {
    console.log("Court métrage")
} else if (dureFilm < 120) {
    console.log("Film standard")
} else {
    console.log("Film long")
}