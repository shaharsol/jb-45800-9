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

function isArrayPrimary(array) {
    for (const number of array) {
        if(!isPrimary(number)) return false
    }
    return true
}

const nonePrimary = [4, 6, 8, 10, 12]
const oneNotPrimary = [7, 11, 14, 17, 19]
const allPrimary = [7, 11, 13, 17, 19]

console.log(`array primacy of ${nonePrimary} is ${isArrayPrimary(nonePrimary)}`)
console.log(`array primacy of ${oneNotPrimary} is ${isArrayPrimary(oneNotPrimary)}`)
console.log(`array primacy of ${allPrimary} is ${isArrayPrimary(allPrimary)}`)

