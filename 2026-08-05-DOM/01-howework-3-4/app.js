const password = prompt("choose a password (instructions....): ")
const errors = []
const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numbers = '0123456789'
const specialChars = '!@#$%^&*()_+~'

function addErrorMessage(message) {
    errors.push(message)
}

function isLongEnough(password) {
    return password.length >= 6
}

function includesCharOfFamily(password, familyOfChars) {
    let isIncluded = false
    for (const char of password) {
        if(familyOfChars.includes(char)) {
            isIncluded = true
            break
        }
    }
    return isIncluded
}

function hasLowerCaseLetter(password) {
    return password.toUpperCase() !== password
}

function displayAllErrors() {
    let str = ''
    for (const error of errors) {
        str += `${error}\n`
    }
    alert(str)
}

function hasErrors() {
    return errors.length > 0 
}

if (!isLongEnough(password)) addErrorMessage('password must be at least 6 characters')
if (!hasLowerCaseLetter(password)) addErrorMessage('password must contain at least one lower case letter')

if (!includesCharOfFamily(password, upperCaseLetters)) addErrorMessage('password must contain at least one capital letter')
if (!includesCharOfFamily(password, numbers)) addErrorMessage('password must contain at least one number')
if (!includesCharOfFamily(password, specialChars)) addErrorMessage('password must contain at least one special character')

if (hasErrors()) displayAllErrors()    


/*
asked claude for a function-less solution just
to demonstrate how this code looks without "englishizing"
using function:

const password = prompt("choose a password (instructions....): ")
const errors = []
const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numbers = '0123456789'
const specialChars = '!@#$%^&*()_+~'

if (!(password.length >= 6)) errors.push('password must be at least 6 characters')
if (!(password.toUpperCase() !== password)) errors.push('password must contain at least one lower case letter')

let hasUpperCase = false
for (const char of password) {
    if (upperCaseLetters.includes(char)) {
        hasUpperCase = true
        break
    }
}
if (!hasUpperCase) errors.push('password must contain at least one capital letter')

let hasNumber = false
for (const char of password) {
    if (numbers.includes(char)) {
        hasNumber = true
        break
    }
}
if (!hasNumber) errors.push('password must contain at least one number')

let hasSpecialChar = false
for (const char of password) {
    if (specialChars.includes(char)) {
        hasSpecialChar = true
        break
    }
}
if (!hasSpecialChar) errors.push('password must contain at least one special character')

if (errors.length > 0) {
    let str = ''
    for (const error of errors) {
        str += `${error}\n`
    }
    alert(str)
}

*/
