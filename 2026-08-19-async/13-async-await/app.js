// Promise hides the actual callback usage from the developer consuming the async operation

const getCurrentPosition = () => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            position => resolve(position), // <- this invokes the promise `then` callback
            error => reject(error) // <- this invokes the promise `catch` callback
        )
    })
}


// async/await is another syntax to use promises
// it has 3 rules:
// 1. this expression: `await somePromise` becomes equivalent to a promise resolution     
// 2. if a promise rejects, i can use an exception handler to catch the exception
// 3. the await keyword can be present only in an async block
const main = async () => {
    console.log(1)
    try {
        const position = await getCurrentPosition()
        console.log(position.coords.latitude)
    } catch (e) {
        console.log(e)
    }
    console.log(2)
}

main()

