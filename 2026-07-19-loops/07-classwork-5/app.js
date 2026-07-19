num = +prompt('enter a number')  // 6
// 0 + 1 + 2 + 3 + 4 + 5 + 6

// numberOfIterations = 0
// result = 0
// while (numberOfIterations < num) {
//     result = result + numberOfIterations + 1
//     numberOfIterations = numberOfIterations + 1
// }
// console.log(result)

numberOfIterations = 1
result = 0
while (numberOfIterations <= num) {
    result = result + numberOfIterations
    numberOfIterations = numberOfIterations + 1
}
console.log(result)

