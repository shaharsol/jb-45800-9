number = +prompt('enter a number')

for (rowNumber = 1 ; rowNumber <= number; rowNumber = rowNumber + 1) {
    row = ''

    // the row '   121' is a combination of '   ' + '12' + '1'
 
    // loop for preliminary blank spaces 
    for (blank = 1; blank <= number - rowNumber; blank = blank + 1) {
        row = row + ' '
    }

    // loop for ascending numbers
    for (asc = 1; asc <= rowNumber; asc = asc + 1 ) {
        row = row + asc
    }

    // loop for decsending numbers
    for (desc = rowNumber - 1; desc >= 1; desc = desc - 1) {
        row = row + desc
    }    


    console.log(row)    
}