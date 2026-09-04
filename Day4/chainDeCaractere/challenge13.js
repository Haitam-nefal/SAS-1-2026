function obtenirInitiales (nomComplet) {
  return nomComplet
    .split(' ')
    .map(ele => ele[0].toUpperCase())
    .join('.')
}

console.log(obtenirInitiales('tayeb souini'))
