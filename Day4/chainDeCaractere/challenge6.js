function repeterChaine(chaine, fois) {
    let b = ""
    for (let i = 0; i < fois; i++) {
        b += chaine
    }
    console.log(b);
}

repeterChaine("=", 100)