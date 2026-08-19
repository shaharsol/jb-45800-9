// Promise hides the actual callback usage from the developer consuming the async operation

const getCurrentPosition = () => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            position => resolve(position), // <- this invokes the promise `then` callback
            error => reject(error) // <- this invokes the promise `catch` callback
        )
    })
}

const promise = getCurrentPosition()
console.log(promise)
promise
    .then(position => {
        console.log(`your postion is ${position.coords.latitude},${position.coords.longitude}`)
        console.log(promise)
    })
    .catch(error => {
        console.log(`there was an error in gettung location: ${error.message}`)
        console.log(promise)
    })

