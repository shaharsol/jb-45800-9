grades = [90, 88, 100, 80, 40]


// sum = 0
// for (offset = 0; offset < grades.length; offset++) {
//     sum += grades[offset]
// }

// if i use a for loop to scan an array
// then instead of (offset = 0; offset < grades.length; offset++)
// JavaScript gave me a special for loop
// this is called a for-of loop
sum = 0
for (grade of grades) {
    sum += grade
}

console.log(`the average grade is ${sum / grades.length}`)

