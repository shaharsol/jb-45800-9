num = +prompt('enter a number')  // 6

numberOfIterations = 1
currentLine = ''

while (numberOfIterations <= num) {
    currentLine = `${currentLine}*`
    console.log(currentLine)
    numberOfIterations = numberOfIterations + 1
}