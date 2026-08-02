function getAbs(number) {
    return number > 0 ? number : -number
}

number = +prompt('enter a number')
console.log(`absolute value of ${number} is ${getAbs(number)}`)

