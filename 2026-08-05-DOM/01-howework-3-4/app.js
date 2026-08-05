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


