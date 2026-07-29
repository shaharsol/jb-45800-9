function printCost(amount) {
    console.log(`you pay $${amount}`)
}

const age = +prompt("enter your age")

if (age < 6) {
    printCost(0)
} else if (age < 12) {
    printCost(5)
} else if (age < 18) {
    printCost(10)
} else if (age < 65) {
    printCost(20)
} else {
    printCost(0)
}