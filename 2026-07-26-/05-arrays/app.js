// lets say i am a teacher of a class
// and lets say i have 5 pupils
// and lets say i gave them grades for a test
// and i want to calculate the average grade

grade1 = 90
grade2 = 88
grade3 = 100
grade4 = 80
grade5 = 40

sum = grade1 + grade2 + grade3 + grade4 + grade5 
average = sum / 5

console.log(`average is ${average}`)

// instead of declaring a variable for eacg grade
// i can declare a single array to contain ALL values
grades = [90, 88, 100, 80, 40]

console.log(grades)

// accessing an array item using an offset (offset is usually named index)
console.log(`the third grade is ${grades[2]}`)

// i can modify the value of each array item
grades[4] = 65
console.log(grades)

// i can add values to the end of the array
grades.push(78)
console.log(grades)

// i can mix types of values in an array
// however, there is no reason in the world to do it
// when dealing with data
classGrades = ['english', 100, 80, 92]
console.log(classGrades)

// this is a logical array
classes = ['english', 'math', 'geography']

// removes the last item in the array
value = grades.pop()
console.log(grades)
console.log(value)






