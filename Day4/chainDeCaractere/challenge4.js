function compterVoyelles(chaine) {
    let i = 0;
    for (const element of chaine) {
        if (element == "a" || element == "u" || element == "e" || element == "y" || element == "o" || element == "i") 
            i++
    }
    console.log(i);
    
}

compterVoyelles("developpeur");
