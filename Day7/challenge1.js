function rechercheDansTableau(arr, number) {
    let isFind = false
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === number) {
            isFind = true
            break
        }
    }
    return isFind

}

console.log(rechercheDansTableau([4, 8, 15, 16, 23, 42], 1));




