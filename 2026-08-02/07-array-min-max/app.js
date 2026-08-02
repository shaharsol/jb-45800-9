function getArrayMinMax(array) {
    let max = -Infinity // in grades in would be 0
    let min = Infinity // in grades it would be 100
    
    for (const number of array) {
        if (number > max) max = number
        if (number < min) min = number
    }

    // return {
    //     max: max,
    //     min: min
    // }

    return {
        min,
        max
    }
}

console.log(getArrayMinMax([45000, -78, 96000000000, -200000000, 760]))