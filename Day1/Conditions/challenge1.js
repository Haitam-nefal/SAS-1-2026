const prompt = require('prompt-sync')()

const age = parseInt(prompt('Age : '))
if (age >= 18) {
  console.log('Accès autorisé')
} else {
  console.log('Accès refusé')
}
