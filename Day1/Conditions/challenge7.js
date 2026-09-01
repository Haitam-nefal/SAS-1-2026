const prompt = require('prompt-sync')()

console.log(`
    1. Lundi,
    2.  Mardi,
    3.  Mercredi,
    4.  Jeudi,
    5.  Vendredi,
    6.  Samedi,
    7.  Dimanche
`)

const numero = prompt('Numero : ')

switch (numero) {
  case '1':
    console.log('Lundi')
    break
  case '2':
    console.log('Mardi')
    break
  case '3':
    console.log('Mercredi')
    break
  case '4':
    console.log('Jeudi')
    break
  case '5':
    console.log('Vendredi')
    break
  case '6':
    console.log('Samedi')
    break
  case '7':
    console.log('Dimanche')
    break
  default:
    console.log('Numero invalide')
}
