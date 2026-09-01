const prompt = require('prompt-sync')()

const Montant = prompt('Montant : ')

if (Montant > 500) {
  console.log('Livraison gratuite')
  console.log('Total à payer : ' + Montant)
} else {
  console.log('Livraison gratuite')
  console.log('Total à payer : ', (+Montant + 50))
}
