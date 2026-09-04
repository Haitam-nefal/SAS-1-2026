const prompt = require("prompt-sync")();

const Age = prompt("Entre Age : ")
console.log(calculerAgeChien(Age))
function calculerAgeChien(param){
    return param * 7
}


