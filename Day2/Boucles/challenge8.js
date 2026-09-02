const prompt = require("prompt-sync")()

const nbrMission = prompt("Nombres de missions : ")

for (let i = 1; i <= nbrMission; i++) {
    console.log(`Mission ${i} → Score : ${i * 100}`);
}