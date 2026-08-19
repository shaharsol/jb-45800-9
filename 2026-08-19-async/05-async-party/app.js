console.log(1)

setTimeout(() => {
    console.log(2)
}, 10 * 1000)

console.log(3)

setTimeout(() => {
    console.log(4)
}, 5 * 1000)

console.log(5)

// 1, 3, 5, 4, 2
// 1, 3, 5, 4, 2