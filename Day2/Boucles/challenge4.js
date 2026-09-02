const prompt = require("prompt-sync")()

const nbr = prompt("Nombre : ")

for(let i = 1; i <= 10; i++){
    console.log(`${nbr} x ${i} = ${nbr * i}`)
}