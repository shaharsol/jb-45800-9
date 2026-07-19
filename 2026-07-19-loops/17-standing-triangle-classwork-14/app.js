rows = +prompt('how many rows?')

for (currentRow = 1; currentRow <= rows; currentRow = currentRow + 1) {
    row = ''
    for (currentCol = 1; currentCol <= rows - currentRow + 1; currentCol = currentCol + 1) {
        row = `${row}*`
    }
    console.log(row)
}