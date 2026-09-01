const prompt = require('prompt-sync')()

const number = prompt('Nombre : ')
if (number > 0) {
  console.log('Le nombre est positif')
} else if (number < 0) {
  console.log('Le nombre est négatif')
} else {
  console.log('Le nombre est égal à zéro')
}
