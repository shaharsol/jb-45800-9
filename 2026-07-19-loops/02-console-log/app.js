number1 = +prompt('enter a number')
number2 = +prompt('enter a 2nd number')
number3 = +prompt('enter a 3rd number')

if (number1 > number2 && number1 > number3) {
    console.log(`${number1} is max`)
} else if (number2 > number1 && number2 > number3) {
    console.log(`${number2} is max`)
} else {
    console.log(`${number3} is max`)
}


