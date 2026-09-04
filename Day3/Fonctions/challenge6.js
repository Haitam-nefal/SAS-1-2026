
function verifierMotDePasse(code){
    if(code.length < 8 || code.indexOf("@") == -1) return false;
    return true
}

console.log(verifierMotDePasse("haha@"));
