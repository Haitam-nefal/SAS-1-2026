
function estPalindrome(chain) {
    let reverse = ""
    for (let i = chain.length - 1; i >= 0; i--) {
        reverse += chain[i];
    }
    return chain === reverse
}

console.log(estPalindrome("ok"));
