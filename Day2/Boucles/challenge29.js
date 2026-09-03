const prompt = require("prompt-sync")();

console.log(`Le Menu :
    \n1 → Retirer de l'argent
    \n2 → Consulter le solde
    \n3 → Déposer de l'argent
    \n4 → Quitter`)

let solde = 1000

while (true) {
    const choix = Number(prompt("Choix : "))
    if (choix === 4) break
    
    switch (choix) {
        case 1: {
            const montant = Number(prompt("Montant : "))
            if (montant <= 0 || montant > solde) {
                console.log("le montant negatif ou Montant superieur au solde")
            } else {
                console.log(`Retrait effectué.
                    \nNouveau solde : ${solde -= montant} DH`);
            }
            break;
        }
        case 2: {
            console.log(`Le solde est ${solde}`);
            break;
        }
        case 3: {
            const montant = Number(prompt("Montant : "))
            if (montant == 0) console.log("Le montant egale 0");
            if (montant < 0) {
                console.log("Le Montant est negatif")
            }
            else {
                solde += montant
                console.log(`Le Montant actuelle : ${solde}`);
            }
            break;
        }
    }
}