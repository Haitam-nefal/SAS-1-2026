const prompt = require("prompt-sync")()

const nbr = prompt("N : ")

let sommePaire = 0;
let sommeInpaire = 0;

for (let i = 1; i <= nbr; i++) {
    i % 2 == 0 ? sommePaire += i : sommeInpaire += i
}

console.log(`Somme des pairs : ${sommePaire}`);
console.log(`Somme des impairs : ${sommeInpaire}`);
