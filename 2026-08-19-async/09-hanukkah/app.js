// const getCandlesPerDay = dayNumber => dayNumber + 1
// console.log(`number of days on 4 day is ${getCandlesPerDay(4)}`)

const howManyCandlesPerDay = (dayNumber, callback) => {
    setTimeout(() => {
        callback(dayNumber + 1)
    }, 1 * 1000)
}
