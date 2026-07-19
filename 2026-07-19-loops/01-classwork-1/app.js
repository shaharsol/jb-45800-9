number1 = +prompt('enter a number')
number2 = +prompt('enter a 2nd number')
number3 = +prompt('enter a 3rd number')

// method 1:
// if (number1 > number2) {
//     if(number1 > number3) {
//         alert(`${number1} is the max`)
//     } else {
//         alert(`${number3} is the max`)
//     }
// } else {
//    if(number2 > number3) {
//         alert(`${number2} is the max`)
//     } else {
//         alert(`${number3} is the max`)
//     } 
// }

// method2:
// if (number1 > number2 && number1 > number3) {
//     alert(`${number1} is max`)
// } else if (number2 > number1 && number2 > number3) {
//     alert(`${number2} is max`)
// } else {
//     alert(`${number3} is max`)
// }

// composite ternary:
alert(`${number1 > number2 && number1 > number3 ? number1 : (number2 > number1 && number2 > number3 ? number2 : number3)} is max`)

