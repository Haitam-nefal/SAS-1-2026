const prompt = require('prompt-sync')()

const Note = prompt('La Note: ')

if (Note >= 10) {
  console.log('Admis')
} else {
  console.log('Non Admis')
}
