const prompt = require("prompt-sync")()

const nbr = prompt("Nombre de participants : ")

for (let i = 1; i <= nbr; i++) {
    console.log("Participant ", i)
}