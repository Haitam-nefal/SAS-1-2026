function masquerCarte(numeroCarte) {
    let a = "*";``
    console.log(`${a.repeat(12)}${numeroCarte.slice(numeroCarte.length - 4, numeroCarte.length)}`);
}

console.log(masquerCarte("1234567812345678"));


// let a = "haitam"

// let b = a.slice(0, 2)

// console.log("a : ", a);
// console.log("b : ", b);
