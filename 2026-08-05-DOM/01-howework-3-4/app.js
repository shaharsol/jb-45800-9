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

function hasCapitalLetter(password) {
    let isCapitalLetterPresent = false
    for (const char of password) {
        if(upperCaseLetters.includes(char)) {
            isCapitalLetterPresent = true
            break
        }
    }
    return isCapitalLetterPresent
}

function hasNumber(password) {
    let isNumberPresent = false
    for (const char of password) {
        if(numbers.includes(char)) {
            isNumberPresent = true
            break
        }
    }
    return isNumberPresent
}

function hasSpecialChar(password) {
    let isSpecialChar = false
    for (const char of password) {
        if(specialChars.includes(char)) {
            isSpecialChar = true
            break
        }
    }
    return isSpecialChar
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
if (!hasCapitalLetter(password)) addErrorMessage('password must contain at least one capital letter')
if (!hasLowerCaseLetter(password)) addErrorMessage('password must contain at least one lower case letter')
if (!hasNumber(password)) addErrorMessage('password must contain at least one number')
if (!hasSpecialChar(password)) addErrorMessage('password must contain at least one special character')

if (hasErrors()) displayAllErrors()    


