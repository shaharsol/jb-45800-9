grades = [90, 88, 80, 40, 98, 66, 79, 45]

// find maximum grade
max = 0
for (grade of grades) {
    if (grade > max) {
        max = grade
    }
}
console.log(`maximum grade is ${max}`)
