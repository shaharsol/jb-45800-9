const sum = (a, b) => {
    return a + b
}

const logMessage = (message) => {
    console.log(message)
}

const sayHello = () => {
    console.log('hello')
    alert('hello')
}

// 1. if there is only 1 argument, we can omit the parnthsis
const logMessage = message => {
    console.log(message)
}

// 2. if there is only 1 line of code in the code block we can omit the {}
const logMessage = message => console.log(message)
const sum = (a, b) => return a + b

// 3. if there is only 1 command and no {}, then i don't need the 'return' keyword
const sum = (a, b) => a + b

// 3.a if i omit the {} for a single command function, even if there was no return before
// now there is
const logMessage = message => console.log(message)

