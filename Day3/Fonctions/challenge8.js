


const formatMad = (val) => `${val} DH`

function convertirMontant(montant, taux, callBack) {
    const montantFinal = montant * taux
    return callBack(montantFinal)
}



console.log(convertirMontant(200, .04, formatMad));
