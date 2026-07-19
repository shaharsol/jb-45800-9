num = +prompt('enter a number') // 22

// console.log(num + 1) // 23
// console.log(num + 2) // 24
// console.log(num + 3) // 25
// console.log(num + 4) // 26
// console.log(num + 5) // 27
// console.log(num + 6) // 28
// console.log(num + 7) // 29
// console.log(num + 8) // 30
// console.log(num + 9) // 31
// console.log(num + 10) // 32

// this loop will never be entered
// while (false) {
//     console.log('inside the 1st loop')
// }

// this is an endless loop:
// while (true) {
//     console.log('inside the 2nd loop')
// }

numberOfIterations = 0
// when the loop condition is dependant on some variable
// i can modify the variable inside the loop to control
// whether or not there will be a consecutive iteration
while (numberOfIterations < 10) {
    numberOfIterations = numberOfIterations + 1
    console.log(`current value: ${num + numberOfIterations}`)
}

console.log('program ended')
