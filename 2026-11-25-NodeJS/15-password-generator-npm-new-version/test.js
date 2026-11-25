const { generatePassword } = require('./password-generator')

console.log(generatePassword(10))
console.log(generatePassword(10))
console.log(generatePassword(10))
console.log(generatePassword(8))
console.log(generatePassword(6))

console.log(generatePassword(30, true))