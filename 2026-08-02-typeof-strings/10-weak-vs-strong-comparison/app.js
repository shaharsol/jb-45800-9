const myAge = 22
const yourAge = '22'

console.log(`22 vs '22'`)
// weak comparison
console.log(myAge == yourAge)

// strong comparison
console.log(myAge === yourAge)

console.log(`22 vs 22`)

console.log(myAge == myAge)
console.log(myAge === myAge)


const student1 = {
    name: 'israel',
    spouseName: 'israelit'
}

const student2 = {
    name: 'israel',
    spouseName: 'israelit'
}

console.log(`obj vs similar obj`)

console.log(student1 == student2)
console.log(student1 === student2)

console.log(`obj vs same obj`)

console.log(student1 == student1)
console.log(student1 === student1)

// in javascript, primitives are compared differently from objects
// primitives will compare the literal value for weak comparison
// and the actual value for string comparison

// obejcts (and arrays) however, are not comparing the values!
// they compare the address in memory of the variable

// from now on only strong comparisons
// and bare in mind!
// primitives compare values
// non-promitives compare memory addresses

function getAbs(number) {
    return number > 0 ? number : -number
}

const someFunc = getAbs // how many functions do i have now?

console.log(someFunc == getAbs)
console.log(someFunc === getAbs)

// strong comparisons:
// ===
// !==
// >==
// <==
// >
// <

