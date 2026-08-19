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

const howManyCandlesPerDayPromise = (dayNumber) => {
    return new Promise((resolve, reject) => {
        howManyCandlesPerDay(dayNumber, numberOfCandles => resolve(numberOfCandles))
    })
}

const main = async () => {
    try {
        const promises = []

        for (let i = 1; i <=8; i++) {
            promises.push(howManyCandlesPerDayPromise(i))
        }

        const results = await Promise.allSettled(promises)
        console.log(results)
        const total = results.reduce((total, current) => current.status === 'fulfilled' ? total + current.value : total, 0)
        console.log(total)
    } catch (e) {
        console.log(e)
    }
}

main()






