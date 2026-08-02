
const length = +prompt("enter a length")

// when i declare a new variable (the first time i assign to it)
// the variable is saved in some `scope` - an area of other variables
// as long as i don't say anything else, the variable is scoped to the 
// global javascript object
let row = ''
for (let col = 0; col < length; col++) {
    console.log(col)
    row = `${row}*`
}
let col = 'surprise'
console.log(col)
console.log(row)

const grades = [45,56,78,89]
for (const grade of grades) {
    console.log(grade)
}
