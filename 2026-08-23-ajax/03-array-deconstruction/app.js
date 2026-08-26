const main = async () => {
    try {
        const response = await fetch('https://dummyjson.com/users')
        const { users } = await response.json()

        const [ emily, michael ] = users    

        console.log('emily', emily)
        console.log('michael', michael)

    } catch (e) {
        console.log(e)
    }

}

main()