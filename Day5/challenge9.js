function fusionnerTableaux (tab1, tab2) {
  const newArr = tab1
  for (let i = 0; i < tab2.length; i++) {
    newArr.push(tab2[i])
  }
  return newArr
}

console.log(fusionnerTableaux([1, 2], [3, 4]))
