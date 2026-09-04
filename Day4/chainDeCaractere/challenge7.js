function remplacerCaractere(chaine, ancien, nouveau) {
    let newCaractere = "";
    for (const element of chaine) {
        element === ancien ? newCaractere += nouveau : newCaractere += element
    }
    console.log(newCaractere);
}

remplacerCaractere("banana", "a", "o")
