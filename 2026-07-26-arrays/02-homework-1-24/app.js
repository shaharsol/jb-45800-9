number = +prompt('enter a number')

// 8415
helper = number
sum = 0
while (helper > 0) {
    remainder = helper % 10

    sum = sum + remainder

    helper = (helper - remainder) / 10
}

console.log(`the sum of digits of ${number} is ${sum}`)