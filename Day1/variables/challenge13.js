const prompt = require("prompt-sync")()

var number = prompt("Nombre : ")
let tab = ""

if (number - 128 >= 0) {
    number = number - 128
    tab += "1"
} else {
    tab += "0"
}

if (number - 64 >= 0) {
    number = number - 64
    tab += "1"
} else {
    tab += "0"
}

if (number - 32 >= 0) {
    number = number - 32
    tab += "1"
} else {
    tab += "0"
}

if (number - 16 >= 0) {
    number = number - 16
    tab += "1"
} else {
    tab += "0"
}

if (number - 8 >= 0) {
    number = number - 8
    tab += "1"
} else {
    tab += "0"
}

if (number - 4 >= 0) {
    number = number - 4
    tab += "1"
} else {
    tab += "0"
}


if (number - 2 >= 0) {
    number = number - 2
    tab += "1"
} else {
    tab += "0"
}


if (number - 1 >= 0) {
    number = number - 1
    tab += "1"
} else {
    tab += "0"
}

console.log("Binaire : ", tab)