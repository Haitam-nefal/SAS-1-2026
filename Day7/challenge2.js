let notes = [6, 4, 1, 3];

function trieABulles(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let a = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = a
            }
        }
    }
    return arr
}

console.log(
    trieABulles(notes)
);