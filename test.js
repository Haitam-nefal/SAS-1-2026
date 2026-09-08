const prompt = require("prompt-sync")();

const arr = []
let id = 0

let choix

do {
    Menu()

    choix = Number(prompt("Entrer Votre Choix : "))
    SelectChoix(choix)

} while (choix !== 5)


console.log("Exit...");


function Menu() {
    console.log(`Menu : `);
    console.log(` 1 => Add : `);
    console.log(` 2 => Suprime `);
    console.log(` 3 => modifier `);
    console.log(` 4 => Afficher `);
    console.log(` 5 => Exit `);
}

function SelectChoix(choix) {
    switch (choix) {
        case 1: {
            Ajout()
            break;
        }
        case 2: {
            console.log("choix2");
            break
        }
        case 3: {
            console.log("choix3");
            break
        }
        case 4: {
            Affichage()
            break
        }
        default: {
            console.log("choix pas exist !");
        }
    }
}

function Ajout() {
    const nom = prompt("Nom : ")
    const age = Number(prompt("Age : "))
    arr.push({ id: id, nom: nom, age: age })
    id++
}

function Affichage() {
    for (let i = 0; i < arr.length; i++) {
        AffichageComplet(arr[i])
    }
}

function AffichageComplet(obj) {
    console.log(`Nom : ${obj.nom}`);
}

