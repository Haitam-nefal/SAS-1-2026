const prompt = require("prompt-sync")()


let nbr = Number(prompt("Nombre : "))

let nbr2 = nbr
let palindromNbr = 0

while (nbr != 0) {
    const a = nbr % 10
    palindromNbr = palindromNbr * 10 + a
    nbr = parseInt(nbr / 10)
}


console.log(palindromNbr === nbr2 ? `${nbr2} → palindrome` : `${nbr2} → pas palindrome`);
