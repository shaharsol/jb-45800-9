const grades = [10, 90, 87, 65, 44, 88, 95]

// this function will get an existing grades array as input
// and return a new array with only the filtered results
function filterPassingGrades(gradesArray) {
    let passingGrades = []
    for (grade of gradesArray) {
        if (grade > 60) {
            passingGrades.push(grade)
        }
    }
    return passingGrades
}

function filterFailingGrades(gradesArray) {
    let failingGrades = []
    for (grade of gradesArray) {
        if (grade <= 60) {
            failingGrades.push(grade)
        }
    }
    return failingGrades
}

// the filterArray function needs some values as input params: e.g. array
// but it also needs to get some "logic" as param. this can be implemented
// using a callback function
function filterArray(array, isIncludeItemInResult) {
    let includedItems = []
    for (const item of array) {
        if (isIncludeItemInResult(item)) {
            includedItems.push(item)
        }
    }
    return includedItems
}

console.log("native filter results....")
console.log(filterPassingGrades(grades))
console.log(filterFailingGrades(grades))

console.log("functions that receive callback filter results....")

console.log(filterArray(grades, function isPassingGrade(grade) {
    return grade > 60
}))
console.log(filterArray(grades, function isFailingGrade(grade) {
    return grade <= 60
}))