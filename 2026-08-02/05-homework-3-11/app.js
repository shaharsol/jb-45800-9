function isPrimary(number) {
    let result = true
    for (let test = 2; test < number; test++) {
        if (number % test == 0) {
            result = false
            break
        }
    }
    return result
}
const number = +prompt('enter a number')
console.log(`${number} primacy is : ${isPrimary(number)}`)