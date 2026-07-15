age = +prompt('enter your age')

switch(true) {
    case age > 65:
        alert('senior citizen')
        break
    case age > 18:
        alert('adult')
        break
    case age > 13:
        alert('youth')
        break
    case age > 5:
        alert('kid')
        break
    default:   
        alert('baby')
}