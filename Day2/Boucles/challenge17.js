const prompt = require("prompt-sync")()

let nbr = Number(prompt("Number : "))

let lengthNumbr = 0

while(parseInt(nbr) != 0){
    nbr = nbr / 10
    lengthNumbr++
}

console.log(lengthNumbr);
