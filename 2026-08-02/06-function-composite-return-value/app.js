function calcTwoNumbers(a, b) {
    // return [a + b, a - b, a * b, a / b]
    return {
        sum: a + b,
        sub: a - b,
        mul: a * b,
        div: a / b
    }
}

console.log(calcTwoNumbers(3, 5))