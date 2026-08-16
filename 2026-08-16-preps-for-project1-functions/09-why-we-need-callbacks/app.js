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

// implement this function: should return only the failing grades
function filterFailingGrades(gradesArray) {

}

console.log(filterPassingGrades(grades))