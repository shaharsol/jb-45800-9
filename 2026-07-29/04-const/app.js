// whenever we use a new variable
// and we don't want to allow a another assigment
// to that same variable, then we mark it with the `const` keyword
const age = +prompt('enter your age')
// age++ => age = age + 1
// age = 100
const anotherAge = 80
const anotherAnotherAge = age

console.log(age)

// const prevents assigment
// assigment is the operation that is done using 
// the `=` operand


// i can modify the variable, just not by re-assigment
const users = ['Alice', 'Bob', 'Diana', 'Charlie']
console.log(users)
users.push('Gustav')
console.log(users)

users[1] = 'Jane'
console.log(users)

// obejcts
const student = {
    id: 1,
    name: {
        first: 'moshe',
        last: 'cohen'
    }
}

// student = {id: 2}
student.id = 2
console.log(student)

student.address = "wall and tower 23"
console.log(student)

delete student.id
console.log(student)
























if (age > 65) {
    console.log('you are a senior citizen')
} else {
    console.log('you are not a senior citizen')
}