const prompt = require("prompt-sync")()

let depart = prompt("Depart : ")

while (depart >= 0) {
    console.log(depart--)
}