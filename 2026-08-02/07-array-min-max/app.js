function getArrayMinMax(array) {
    let max = -Infinity
    let min = Infinity
    
    for (const number of array) {
        if (number > max) max = number
        if (number < min) min = number
    }

    return {
        max: max,
        min: min
    }
}

console.log(getArrayMinMax([45000, -78, 96000000000, -200000000, 760]))