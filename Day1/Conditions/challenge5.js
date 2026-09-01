const prompt = require('prompt-sync')()

const Note = prompt('Note : ')

if (Note < 10) {
  console.log('Echec')
} else if (Note >= 10 && Note < 11.99) {
  console.log('Passable')
} else if (Note >= 12 && Note < 13.99) {
  console.log('Assez Bien')
} else if (Note >= 14 && Note < 15.99) {
  console.log('Bien')
} else if (Note >= 16 && Note < 17.99) {
  console.log('Très Bien')
} else {
  console.log('Excellent')
}
