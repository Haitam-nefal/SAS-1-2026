const prompt = require("prompt-sync")();

let nbrs = prompt("Number (1 2 3 ...) : ")

function additionnerTout(...n) {
    let somme = 0;
    n.forEach((e) => somme += Number(e))
    return somme
}

const numberOfArray = nbrs.split(" ")
console.log(additionnerTout(...numberOfArray));
