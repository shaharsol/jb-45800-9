width = +prompt('enter width')
height = +prompt('enter height')

// shortening plus operations
// rowNumber = rowNumber + 1
// rowNumber += 1
// rowNumber++

// rowNumber = rowNumber + 1
// rowNumber += 5

for (rowNumber = 1 ; rowNumber <= height ; rowNumber++) {
    row = ''
    if (rowNumber == 1 || rowNumber == height) {
        for (col = 1; col <= width; col++) {
            row += '*'
        }
    } else {
        row += '*'
        for (col = 1; col <= width -2; col ++) {
            row += ' '
        }
        row += '*'
    }
    console.log(row)
}