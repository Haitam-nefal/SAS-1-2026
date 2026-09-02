const prompt = require("prompt-sync")()

const N = prompt("N : ")
const X = prompt("X : ")

for (let i = 1; i < N; i++) {
    if (i * X > N) break
    console.log(X * i)
}
