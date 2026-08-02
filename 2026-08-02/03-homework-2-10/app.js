function displayArrayAverage(array) {
    let sum = 0
    for(const value of array) {
        sum += value
    }
    console.log(`average is ${sum / array.length}`)
}    

displayArrayAverage([10, 20, 30, 40])