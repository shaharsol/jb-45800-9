number1 = +prompt('enter a number')
number2 = +prompt('enter antother number')

if (number1 > number2) {
    alert('number1 is bigger')
} else {
    // inside a block, otther if/else statements and 
    // blocks can appear
    if (number2 > number1) {
        alert('number2 is bigger')
    } else {
        alert('they are equal')
    }
}

