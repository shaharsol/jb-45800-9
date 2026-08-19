// const getCandlesPerDay = dayNumber => dayNumber + 1
// console.log(`number of days on 4 day is ${getCandlesPerDay(4)}`)

// use this server mock to calc the number of
// candles used in Hannukah
// dont print garbage. provide a single answer and console log
// it when you are ready
// to take a callback and wrap a promise around it is called `promisification`
const howManyCandlesPerDay = (dayNumber, callback) => {
    setTimeout(() => {
        callback(dayNumber + 1)
    }, 1 * 1000)
}

const howManyCandlesPerDayPromise = (dayNumber) => {
    return new Promise((resolve, reject) => {
        howManyCandlesPerDay(dayNumber, numberOfCandles => resolve(numberOfCandles))
    })
}

// promise is used to get rid of callback hell
// by chaining `then` functions
// the reliance on `then` functions is called `thenification`
let sum = 0
howManyCandlesPerDayPromise(1)
    .then(numberOfCandles => {
        sum += numberOfCandles
        return howManyCandlesPerDayPromise(2)        
    })
    .then(numberOfCandles => {
        sum += numberOfCandles
        return howManyCandlesPerDayPromise(3)        
    })
    .then(numberOfCandles => {
        sum += numberOfCandles
        return howManyCandlesPerDayPromise(4)        
    })
    .then(numberOfCandles => {
        sum += numberOfCandles
        return howManyCandlesPerDayPromise(5)        
    })
    .then(numberOfCandles => {
        sum += numberOfCandles
        return howManyCandlesPerDayPromise(6)        
    })
    .then(numberOfCandles => {
        sum += numberOfCandles
        return howManyCandlesPerDayPromise(7)        
    })
    .then(numberOfCandles => {
        sum += numberOfCandles
        return howManyCandlesPerDayPromise(8)        
    })
    .then(numberOfCandles => {
        sum += numberOfCandles
        console.log(`number of candles in hanuka is ${sum}`)        
    })
    

// let sum = 0
// howManyCandlesPerDay(1, candlesPerDay => {
//     sum += candlesPerDay
//     howManyCandlesPerDay(2, candlesPerDay => {
//         sum += candlesPerDay
//         howManyCandlesPerDay(3, candlesPerDay => {
//             sum += candlesPerDay
//             howManyCandlesPerDay(4, candlesPerDay => {
//                 sum += candlesPerDay
//                 howManyCandlesPerDay(5, candlesPerDay => {
//                     sum += candlesPerDay
//                     howManyCandlesPerDay(6, candlesPerDay => {
//                         sum += candlesPerDay
//                         howManyCandlesPerDay(7, candlesPerDay => {
//                             sum += candlesPerDay
//                             howManyCandlesPerDay(8, candlesPerDay => {
//                                 sum += candlesPerDay
//                                 console.log(`number of candles in hanuka is ${sum}`)
//                             })    
//                         })    
//                     })    
//                 })    
//             })
            
//         })
//     })
// })



