function inverserTableau (tab) {
  const newTab = []
  for (let ele of tab) {
    newTab.unshift(ele)
  }
  return newTab
}

console.log(inverserTableau([1, 2, 4]))
