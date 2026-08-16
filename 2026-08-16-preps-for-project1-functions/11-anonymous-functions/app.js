const students = [{
    firstName: 'sasson',
    lastName: 'Cohen',
    country: 'USA',
    age: 40,
    gender: 'male'
}, {
    firstName: 'lavie',
    lastName: 'hefetz',
    country: 'France',
    age: 20,
    gender: 'male'

}, {
    firstName: 'Ruth',
    lastName: 'Moav',
    country: 'Italy',
    age: 30,
    gender: 'female'

}, {
    firstName: 'Judith',
    lastName: 'Lauren',
    country: 'UK',
    age: 60,
    gender: 'female'

}, {
    firstName: 'Pierre',
    lastName: 'Dechamp',
    country: 'France',
    age: 38,
    gender: 'male'

}, {
    firstName: 'Edith',
    lastName: 'Piaf',
    country: 'France',
    age: 70,
    gender: 'female'

}]


function mapArray(array, callback) {
    const result = []
    for (const item of array) {
        result.push(callback(item))
    }
    return result
}

// the 2nd param to mapArray is an anonymous function
// it is created only for the purpose of mapArray invokation
// it will be received in mapArray in the argument name ('callback')
// so naming the function is completely useless
// therefore we dont name the function
const mappedArray = mapArray(students, function (student) {
    return {fullName: `${student.firstName} ${student.lastName}`}
})

console.log(mappedArray)
