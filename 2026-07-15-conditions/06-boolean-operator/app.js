grade = +prompt('enter a grade')


if (grade > 100 || grade < 0) {
    alert('invalid')
} else if (grade > 60 || grade == 60) {
    alert('pass')
} else {
    alert('fail')
} 