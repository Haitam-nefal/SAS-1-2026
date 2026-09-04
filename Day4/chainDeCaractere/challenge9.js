function nettoyerEspaces(chaine) {
    let newStr = "";
    for (const element of chaine) {
        if (element !== " ") newStr += element
    }
    console.log(chaine.length);
    console.log(newStr.length);
    console.log(newStr);
}

nettoyerEspaces(" chaine   ")
