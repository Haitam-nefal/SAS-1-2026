function trouverMax (tab) {
  let max = 0
  for (let ele of tab) {
    if (ele > max) max = ele
  }
  return max
}

console.log(trouverMax([12, 45, 7, 89, 23]));

