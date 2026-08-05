const someString = 'Welcome to Jamaica man, we can have a lot of fun'

// Upper case the entire string
console.log(someString.toUpperCase())

// Lower case the entire string
console.log(someString.toLowerCase())

// is starting with?
console.log(someString.startsWith('Welcome'))
console.log(someString.startsWith('We'))
console.log(someString.startsWith('We '))
console.log(someString.startsWith('welcome')) // case sensitive (the opposite is case insensitive)

// is ending with?
console.log(someString.endsWith('fun'))
console.log(someString.endsWith('n'))

// is includes?
console.log(someString.includes('ca man, w'))
console.log(someString.includes('London'))
console.log(someString.includes(' '))

// what is the exact location of a substring within a given string?
console.log(someString.indexOf('ca man, w'))
console.log(someString.indexOf('Welcome'))
console.log(someString.indexOf('London')) // indexOf returns -1 as indication for not found
// you will see a lot of if(str.indexOf('whatever...') > -1)

// when do we usually need index of? 
// when we want to cut a string out of a given string
const jamaicaPosition = someString.indexOf('Jamaica')
console.log(jamaicaPosition)
const jamaica = someString.substring(jamaicaPosition, jamaicaPosition + 7)
console.log(jamaica)
const jamaicaAndTheRest = someString.substring(jamaicaPosition)
console.log(jamaicaAndTheRest)

console.log(someString.substring(someString.indexOf('Jamaica'), someString.indexOf('have') + 'have'.length))


// trim
const untrimmedMessage = '    Welcome to Jamaica man, we can have a lot of fun    '
console.log(untrimmedMessage)
console.log(untrimmedMessage.length)
const trimmed = untrimmedMessage.trim() // will remove blank spaces from left and right
console.log(trimmed)
console.log(trimmed.length)





