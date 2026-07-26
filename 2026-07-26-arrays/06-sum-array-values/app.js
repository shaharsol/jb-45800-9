grades = [90, 88, 100, 80, 40]

// i can get the length of an array using grades.length
console.log(`there are ${grades.length} grades in the array`)

sum = 0
for (offset = 0; offset < grades.length; offset++) {
    sum += grades[offset]
}

console.log(`the average grade is ${sum / grades.length}`)

