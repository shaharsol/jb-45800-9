num = +prompt('enter a number') // 22

// numberOfIterations = 0
// while (numberOfIterations < 10) {
//     numberOfIterations = numberOfIterations + 1
//     console.log(`current value: ${num + numberOfIterations}`)
// }

for (numberOfIterations = 1 ; numberOfIterations <= 10; numberOfIterations = numberOfIterations + 1) {
    console.log(`current value: ${num + numberOfIterations}`)
}

console.log('program ended')
