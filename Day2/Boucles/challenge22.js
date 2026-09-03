const prompt = require("prompt-sync")()

const limit = prompt("Linit : ")

for (let i = 1; i <= limit; i++) {
    let somme = 0
    for (let j = 1; j < i; j++) {
        if (i % j === 0) somme += j
    }
    if (somme === i) console.log(i);
}

