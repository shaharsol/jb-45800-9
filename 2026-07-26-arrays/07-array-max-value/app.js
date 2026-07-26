grades = [90, 88, 80, 40, 98, 66, 79, 45]

// find maximum grade
max = 0
maxOffset = -1
for (offset = 0; offset < grades.length; offset++) {
    if (grades[offset] > max) {
        max = grades[offset]
        maxOffset = offset
    }
}
console.log(`maximum grade is ${max}, in offset ${maxOffset}`)
