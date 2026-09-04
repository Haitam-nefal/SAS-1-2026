// first methode = >
function verifierEmail (email) {
  return email.endsWith('@gmail.com')
}

console.log(verifierEmail('test@gmail.com'))

// seconde methode = >
function verifierEmail2 (email) {
    return email.includes('@gmail.com')
}

console.log(verifierEmail2('test@gmail.com'))
