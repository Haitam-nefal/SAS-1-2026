function contientElement (tab, valeur) {
  let isContient = false
  for (let i = 0; i < tab.length; i++) {
    if (tab[i] === valeur) {
      isContient = true
      break
    }
  }
  return isContient
}

console.log(contientElement(['pomme', 'banane'], 'banan'))
