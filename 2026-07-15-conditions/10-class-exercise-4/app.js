age = +prompt('enter your age')

if (age > 120 || age < 0) {
    alert('invalid age')
} else if (age > 65 || age < 5) {
    alert('enter free')
} else if (age > 18) {
    alert('adult pay 60 nis')
} else if (age > 13) {
    alert('youth, pay 50 nis')
} else {
    alert('kids price, pay 40')
}
