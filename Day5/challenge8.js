function supprimerDoublons (tab) {
  const newArr = []

  for (let i = 0; i < tab.length; i++) {
    let isExist = false
    for (let j = 0; j < newArr.length; j++) {
      if (tab[i] === newArr[j]) isExist = true
    }
    !isExist && newArr.push(tab[i])
  }
  return newArr
}

console.log(
  supprimerDoublons([1, 2, 2, 3, 4, 4, 1, 4, 5, 6, 6, 7, 8, 90, 9, 9, 20])
)
