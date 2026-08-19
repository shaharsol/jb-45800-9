console.log(1)

setTimeout(() => {
    console.log(2)
}, 10 * 1000)

console.log(3)

setTimeout(() => {
    console.log(4)
}, 5 * 1000)

console.log(5)

for (let i = 0; i < 100000000 ; i++ ) {
    console.log(i)    
}

// 1, 3, 5, 4, 2
// 1, 3, 5, 4, 2