function filtrerPairs (tab) {
  const newArr = []
  for (let i = 0; i < tab.length; i++) {
    if (tab[i] % 2 === 0) newArr.push(tab[i])
  }
  return newArr
}

console.log(filtrerPairs([1, 2, 3, 4, 5, 6, 9, 8, 7, 11, 22, 20]))
