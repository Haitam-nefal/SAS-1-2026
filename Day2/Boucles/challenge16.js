const prompt = require("prompt-sync")()

const nbr = 20

while (true) {
    let tentative = prompt("Tentative : ")
    if (tentative < nbr) {
        console.log("Trop petit");
    } else if (tentative > nbr) {
        console.log("Trop grand");
    } else {
        console.log("Bravo !");
        break
    }
}
