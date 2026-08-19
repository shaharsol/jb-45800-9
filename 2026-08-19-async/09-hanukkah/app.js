// const getCandlesPerDay = dayNumber => dayNumber + 1
// console.log(`number of days on 4 day is ${getCandlesPerDay(4)}`)

// use this server mock to calc the number of
// candles used in Hannukah
// dont print garbage. provide a single answer and console log
// it when you are ready
const howManyCandlesPerDay = (dayNumber, callback) => {
    setTimeout(() => {
        callback(dayNumber + 1)
    }, 1 * 1000)
}


let sum = 0
howManyCandlesPerDay(1, candlesPerDay => {
    sum += candlesPerDay
    howManyCandlesPerDay(2, candlesPerDay => {
        sum += candlesPerDay
        howManyCandlesPerDay(3, candlesPerDay => {
            sum += candlesPerDay
            howManyCandlesPerDay(4, candlesPerDay => {
                sum += candlesPerDay
                howManyCandlesPerDay(5, candlesPerDay => {
                    sum += candlesPerDay
                    howManyCandlesPerDay(6, candlesPerDay => {
                        sum += candlesPerDay
                        howManyCandlesPerDay(7, candlesPerDay => {
                            sum += candlesPerDay
                            howManyCandlesPerDay(8, candlesPerDay => {
                                sum += candlesPerDay
                                console.log(`number of candles in hanuka is ${sum}`)
                            })    
                        })    
                    })    
                })    
            })
            
        })
    })
})



