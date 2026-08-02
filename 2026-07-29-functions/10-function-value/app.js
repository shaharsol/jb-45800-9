// EVERY function invocation generates a value
// as long as i don't set this value, it will be undefined
function getPower(num) {
    // console.log(num ** 2)
    return num ** 2
}

// because every function invocation generates a value
// i can treat an invocation as a value
console.log(getPower(3))

// how much is 5**2 + 9**2?
console.log(getPower(5) + getPower(9))