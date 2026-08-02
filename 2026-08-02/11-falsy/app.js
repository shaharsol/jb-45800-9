const someBoolean = true

// i can use an if on a boolean variable
console.log('boolean variable')
if (someBoolean) {
    console.log('true')
} else {
    console.log('false')
}

// i can use an if on a boolean exression
console.log('boolean expression')
if (100 < 3) {
    console.log('true')
} else {
    console.log('false')
}

console.log('string variable')
const phoneNumber = prompt('enter phone number')
// an empty string is false
// any other string is true
if (phoneNumber) {
    console.log('true')
} else {
    console.log('false')
}

console.log('some variable')
let someVariable
// undefined is false
if (someVariable) {
    console.log('true')
} else {
    console.log('false')
}

console.log('number variable')
const someNumber = 0
// with numbers 0 is false
// all other numbers are true
if (someNumber) {
    console.log('true')
} else {
    console.log('false')
}

console.log('null variable')
const someNull = null
// null is false
if (someNull) {
    console.log('true')
} else {
    console.log('false')
}

const user = {
    id: 1,
    name: 'shahar',
    deathDate: null
}

if(!user.deathDate) {
    // send tzav8
} else {

}

const someObj = {}
// object is never false, even an empty object
console.log('object')
if (someObj) {
    console.log('true')
} else {
    console.log('false')
}

const someArray = []
// object is never false, even an empty object
console.log('array')
if (someArray) {
    console.log('true')
} else {
    console.log('false')
}

