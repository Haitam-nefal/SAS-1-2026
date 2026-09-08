function calculerSomme(tab){
    let sommme = 0;
    for(let i =0; i<tab.length; i++){
        sommme += tab[i]
    }
    return sommme
}


console.log(calculerSomme([5, 10, 15]));
