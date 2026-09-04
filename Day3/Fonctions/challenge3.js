const prompt = require("prompt-sync")();

const Nom = prompt("Nom : ");
const PreNom = prompt("PreNom : ");

genererEmail(PreNom, Nom);

function genererEmail(prenom, nom) {
    console.log(`${prenom.toLowerCase()}.${nom.toLowerCase()}@entreprise.com`)
}


