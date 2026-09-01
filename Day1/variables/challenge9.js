const prompt = require("prompt-sync")()

console.log("Enter la valeur de La position A :")
const Ax = prompt("   Position Ax : ")
const Ay = prompt("   Position Ax : ")
const Az = prompt("   Position Ax : ")

console.log("Enter la valeur de La position B :")
const Bx = prompt("   Position Bx : ")
const By = prompt("   Position By : ")
const Bz = prompt("   Position Bz : ")


const Distance = ((( (Bx - Ax) ** 2) + ((By - Ay) ** 2) + ((Bz - Az) ** 2)) ** .5)

console.log("Distnace : ", Distance)