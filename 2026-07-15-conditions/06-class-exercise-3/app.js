grade = +prompt('enter a grade')


if (grade > 100) {
    alert('invalid')
} else if (grade < 0) {
    alert('invalid')
} else if (grade > 60) {
    alert('pass')
} else if (grade == 60) { // <- to compare equality a single "=" is not sufficient, we need double: "=="
    alert('pass')
} else if (grade < 60) {
    alert('fail')
}
 