function extraireChaine(chaine, debut, fin) {
    let newStr = "";
    for (let i = debut; i < fin; i++) {
        newStr += chaine[i]
    }
    console.log(newStr);
}

extraireChaine("JavaScript", 0, 4)

