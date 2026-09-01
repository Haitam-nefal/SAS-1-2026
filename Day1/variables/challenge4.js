const prompt = require("prompt-sync")()

const qantiteQarburant = prompt("Qantite Qarburant : ")
const distance = prompt("Distance  : ")

const consomation = (qantiteQarburant / distance) * 100

console.log("Consomation : ", consomation, " L/100 Km")