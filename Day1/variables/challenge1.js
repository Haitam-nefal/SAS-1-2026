var prompt = require('prompt-sync')();

const Pseudo = prompt("Pseudo : ")
const Niveau = prompt("Niveau : ")
const Age = prompt("Age : ")
const Score = prompt("Score : ")
const Pays = prompt("Pays : ")

console.log({ Pseudo, Niveau, Age, Score, Pays })
