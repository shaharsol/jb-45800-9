digit = +prompt('enter a digit name')


switch(digit) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 9:
        alert('odd')
        break
    case 2:
    case 4:
    case 6:
    case 8:
    case 0:
        alert('even')
        break
    default:   
        alert('invalid') 
}