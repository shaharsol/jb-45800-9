// HOF - Higher Order Function
// any function that gets a callback as an argument, is called HOF
// however, we usually refer as HOF only to a given set
// of array functions
// these array functions are the HOF implementations of all popular
// array operations.

const students = [{
    name: 'sasson',
    country: 'USA',
    age: 40,
    gender: 'male'
}, {
    name: 'lavie',
    country: 'France',
    age: 20,
    gender: 'male'

}, {
    name: 'Ruth',
    country: 'Italy',
    age: 30,
    gender: 'female'

}, {
    name: 'Judith',
    country: 'UK',
    age: 60,
    gender: 'female'

}, {
    name: 'Pierre',
    country: 'France',
    age: 38,
    gender: 'male'

}, {
    name: 'Edith',
    country: 'France',
    age: 70,
    gender: 'female'

}]

// filter
const studentsAbove50 = students.filter(student => student.age >= 50)
console.log(studentsAbove50)

// mapping
const namesAndAges = students.map(student => `student named ${student.name} is ${student.age} years old`)
console.log(namesAndAges)

// vanilla code to finding an item in an array
let result; // udefined
for (const student of students) {
    if (student.name === 'Judithhhh') {
        result = student
        break
    }
}
console.log('found judith', result)

// HOF find
const judith = students.find(student => student.name === 'Judith')
judith.age = 80
console.log(judith)
const judithhh = students.find(student => student.name === 'Judithhh')
console.log(judithhh)

// findIndex, identical to find, only returns the offset instead of the found object
// it the item is not found, findIndex returns -1
// you always mistake when ou use it's truthy/falsy value
// never do if(findIndex)
// always do if(findIndex !== -1)
const judithIdx = students.findIndex(student => student.name === 'Judith')
console.log(judithIdx)
const judithhhIdx = students.findIndex(student => student.name === 'Judithhh')
console.log(judithhhIdx)
if(judithhhIdx) { // <- never never never use the findIndex return value in an if
    console.log('we have judithhh')
}

// calc average
let sum = 0
for (const student of students) {
    sum += student.age
}
const average = sum / students.length

console.log(`average age of students is ${average}`)

// calc multiplication of ages
let mul = 1
for (const student of students) {
    mul = mul * student.age
}

console.log(`multiplication age of students is ${mul}`)

// reduce (implementation of a reduction)
// reduction is taking an array and realize a single value of it
// (single value can be another array, or an object, or whatever)
const sumAges = students.reduce((sum, student) => sum + student.age, 0)
console.log(`the average using hof is ${sumAges/students.length}`)

// sort

// forEach
// we use forEach whenever we can't find another HOF function to fulfill our needs
// forEach provides just a loop
students.forEach(student => console.log(student.name))

// a very common mistake is to abuse the map function instead of using forEach
// never do this:
// this is a classic case for forEach
const mapped = students.map(student => console.log(student.name))
console.log(mapped)

