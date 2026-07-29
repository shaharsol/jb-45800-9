const firstName = prompt('enter your first name')
const lastName = prompt('enter your last name')

console.log(`your full name is ${firstName} ${lastName}`)

const user = {
    name: {
        first: firstName,
        last: lastName
    }
}

console.log(`your full name is ${user.name.first} ${user.name.last}`)

