function creerCompteur(param = 0) {

    function incrementValue() {
        console.log(++param);
    }
    return incrementValue
}

let closure = creerCompteur(10)
closure()
closure()
closure()