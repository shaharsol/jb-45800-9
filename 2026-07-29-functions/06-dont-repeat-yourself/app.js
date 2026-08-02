// DRY - dont repeat yourself

const firstName = prompt('enter your first name')
const lastName = prompt('enter your last name')

// case1
console.log(`your full name is ${firstName} ${lastName}`)

const user = {
    name: {
        first: firstName,
        last: lastName
    }
}

// case2
console.log(`your full name is ${user.name.first} ${user.name.last}`)

// both case1 and case2 do essentially the same thing
// the fact that i copied the code and pasted it, is a proof

