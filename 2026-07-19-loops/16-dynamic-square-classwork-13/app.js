maxRows = +prompt('how many rows?')
maxColumns = +prompt('how many columns?')

for (currentRow = 1; currentRow <= maxRows; currentRow = currentRow + 1) {
    // console.log('********')
    row = ''
    for (currentColumn = 1; currentColumn <= maxColumns; currentColumn = currentColumn + 1) {
        row = `${row}*`
    }
    console.log(row)
}