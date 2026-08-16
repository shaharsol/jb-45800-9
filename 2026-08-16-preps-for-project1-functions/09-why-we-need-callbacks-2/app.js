const grades = [10, 90, 87, 65, 44, 88, 95]
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

function filterArray(array, isIncludeItemInResult) {
    let includedItems = []
    for (const item of array) {
        if (isIncludeItemInResult(item)) {
            includedItems.push(item)
        }
    }
    return includedItems
}

// lets filter grades above 40
const gradesAboveForty = filterArray(grades, function isAboveForty(grade) { 
    return grade > 40
})

console.log('gradesAboveForty', gradesAboveForty)

// lets filter only students from France
const studentsFromFrance = filterArray(students, function isFromFrance(student) { 
    return student.country === 'France'
})

console.log('studentsFromFrance', studentsFromFrance)

// lets filter only students from France, that are woman, and are aged above 30
const studentsFromFranceWomanAbove30 = filterArray(students, function isFromFranceWomanAbove30(student) { 
    return student.country === 'France' && student.age > 30 && student.gender === 'female'
})

console.log('studentsFromFranceWomanAbove30', studentsFromFranceWomanAbove30)

