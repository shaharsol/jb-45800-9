grades = [90, 88, 80, 40, 98, 66, 79, 45]

// find minimum grade
min = 100
minOffset = -1
for (offset = 0; offset < grades.length; offset++) {
    if (grades[offset] < min) {
        min = grades[offset]
        minOffset = offset
    }
}
console.log(`minimum grade is ${min}, in offset ${minOffset}`)
