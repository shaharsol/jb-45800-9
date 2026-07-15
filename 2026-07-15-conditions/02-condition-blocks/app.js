age = +prompt('enter your age')

isAdult = age > 18

// when i want an if statement to execute >1 commands
// i need to wrap them up in a block
// a block in JavaScript starts with "{" and ends with "}"
// if (isAdult) { // <- block starts
//     alert('welcome')
//     alert('here is a voucher to the restaurant, enjoy!')
//     alert('yoyoyo!')
// } // <- block ends
// else {
//     alert('go home kid')
//     alert('come back tomorrow morning')
// }

if (isAdult) { // <- block starts
    alert('welcome')
    alert('here is a voucher to the restaurant, enjoy!')
    alert('yoyoyo!')
} // <- block ends
else alert('go home kid')
