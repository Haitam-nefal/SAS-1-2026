const prompt = require("prompt-sync")()

const utilisateur = "admin"
const password = "1234"

let tentative = 3

while (tentative) {
    const u = prompt("Utilisateur : ")
    const p = prompt("Password : ")

    if (u !== utilisateur || p !== password) {
        tentative--
        console.log(`Identifiants incorrects \nTentatives restantes : ${tentative}`)
    }else{
        console.log("Connexion réussie. \nBienvenue !");
        break
    }
}

if (!tentative) console.log("===Compte temporairement bloqué.===");
