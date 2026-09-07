const prompt = require("prompt-sync")();

let fruit = ""
const fruits = [];

do {
    fruit = prompt("Entrer fruit : ")
    if (fruit != "exit") fruits.push(fruit)
} while (fruit != "exit")

console.log(fruits);


for(let ele of fruits){
    if(ele.startsWith("b") || ele.startsWith("B")) console.log(ele);
}