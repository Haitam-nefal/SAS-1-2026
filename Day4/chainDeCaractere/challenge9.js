function nettoyerEspaces(chaine) {
    let newStr = "";

    for(let i = 0; i<chaine.length; i++){
        if(chaine[i] === " " && chaine[+1] === " "){
            if(i != 0){
            }
        }
        if(chaine[0] === " ") newStr = newStr
    }

    console.log(newStr);
}

nettoyerEspaces(" chaine  ")
