grades = [90, 88, -4, 80, 40, 108, 98, 66, -90, 79, 45]
validGrades = []
for (grade of grades) {
    if(grade >= 0 && grade <= 100) validGrades.push(grade) 
}
console.log(grades)
console.log(validGrades)