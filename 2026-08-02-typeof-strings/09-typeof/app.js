function getAbs(number) {
    // usually at the beginning of a function
    // it will validate it's input

    console.log(`typeof ${number} param is ${typeof number}`)


    if(typeof number != 'number') // deal with bad input
    // either return a constant that represent an error, e.g. -999, or false
    // throw an exception which we will learn in the future
    return number > 0 ? number : -number
}

const someNumber = 99 // number
const someFloat = 99.99 // number
const someString = 'djskfjdskgjfskd' // string
const someBoolean = true // boolean

const someObject = {a: 1, b: 2} // object
const someArray = [1, 2, 3, 4] // object

// if something is an object (i.e. the array)
// it means i can trun it to json
// JSON.stringify(someArray)


let someUndefined // undefined
let someNull = null // object

let someFunc = getAbs // function

console.log(`absolute value of ${someFloat} is ${getAbs(someFunc)}`)

