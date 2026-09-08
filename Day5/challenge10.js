function trierTableau(tab) {
    const arr = tab
    const newArr = []

    for (let i = 0; i < tab.length; i++) {
        let min = tab[i];
        for (let j = i + 1; j < tab.length; j++) {
            if (tab[j] < min) {
                min = tab[j]
            }
        }
        newArr.push(min)
        arr.splice(arr.indexOf(min), 1)
        min = arr[i + 1]
    }

    return newArr
}

console.log(trierTableau([5, 3, 8, 1, 2]))
