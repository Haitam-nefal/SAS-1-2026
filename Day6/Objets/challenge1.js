const prompt = require("prompt-sync")();
const obj = {}

const prenom = prompt("Prenom : ");
const nom = prompt("Nom : ");
const age = Number(prompt("Age : "));
const ville = prompt("Ville : ");

obj.prenom = prenom;
obj.nom = nom;
obj.age = age;
obj.ville = ville;

console.log(`${obj.prenom} $4{obj.nom} a ${obj.age} ans et habite à ${obj.ville}.`);

