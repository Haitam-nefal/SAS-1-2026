function masquerCarte(numeroCarte) {
    let a = "*";``
    console.log(`${a.repeat(12)}${numeroCarte.slice(numeroCarte.length - 4, numeroCarte.length)}`);
}

console.log(masquerCarte("1234567812345678"));

