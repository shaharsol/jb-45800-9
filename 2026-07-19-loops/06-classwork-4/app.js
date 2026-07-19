num = +prompt('enter a number')  // 3
power = +prompt('enter a power')  // 4

// 3^4 = 3 * 3 * 3 * 3
// so i need a loop that iterates 3 times
// this is equal to power - 1

numberOfIterations = 1
result = num
while (numberOfIterations <= power - 1) {
    result = result * num
    numberOfIterations = numberOfIterations + 1
}
console.log(result)


