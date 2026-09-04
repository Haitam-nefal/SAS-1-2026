

function compterLettre(chain, lettre) {
    let a = 0;
    for (const b of chain) {
        if (b === lettre) a++
    }
    return a;
}

console.log(compterLettre("haitam", "m"));



