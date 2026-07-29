// bad code

const age = +prompt("enter your age")

if (age < 6) {
    console.log('you pay $0')
} else if (age < 12) {
    console.log('you pay $5')
} else if (age < 18) {
    console.log('you pay $10')
} else if (age < 65) {
    console.log('you pay $20')
} else {
    console.log('you pay $0')
}