// first methode =>
function separerMots (chaine) {
  let str = ''
  let arr = []

  for (let ele of chaine) {
    if (ele !== ' ') {
      str += ele
    } else {
      arr.push(str)
      str = ''
    }
  }
  arr.push(str)
  return arr
}

console.log(separerMots('Apprendre le JavaScript'))



