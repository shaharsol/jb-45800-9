function printFullName(firstName, lastName) {
    console.log(`your formal name is ${firstName} ${lastName}`)    
}


const fName = prompt('enter your first name')
const lName = prompt('enter your last name')

// case1
// console.log(`your full name is ${fName} ${lName}`)
printFullName(fName, lName)

const user = {
    name: {
        first: fName,
        last: lName
    }
}

// case2
// console.log(`your full name is ${user.name.first} ${user.name.last}`)
printFullName(user.name.first, user.name.last)

// both case1 and case2 do essentially the same thing
// the fact that i copied the code and pasted it, is a proof

printFullName()

