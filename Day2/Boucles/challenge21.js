const prompt = require("prompt-sync")()

const debut = prompt("Debt : ")
const fin = prompt("Fin : ")
let somme = 0

for (let i = debut; i <= fin; i++) {
    let k = 0
    for (let j = 2; j <= (i / 2); j++) {
        if (i % j == 0) k++
    }
    if (!k) {
        console.log(i)
        somme += i
    }
}

console.log(`Somme : ${somme}`);
