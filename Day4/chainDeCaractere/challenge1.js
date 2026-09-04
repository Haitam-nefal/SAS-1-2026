const prompt = require("prompt-sync")();

const varChain = prompt("Chain : ")
let lengthChain = 0

function compterCaracteres(chain) {
    for (_ of chain) {
        lengthChain++
    }
    return lengthChain
}

console.log(compterCaracteres(varChain));
