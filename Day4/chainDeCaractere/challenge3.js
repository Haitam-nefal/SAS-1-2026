
function inverserChaine(chain) {
    let inverse = ""
    for (let i = chain.length - 1; i >= 0; i--) {
        inverse += chain[i]
    }
    console.log(inverse);
}

inverserChaine("hello")