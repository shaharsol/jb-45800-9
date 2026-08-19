const myFunc = async () => {
    return 1
}



const main = async () => {
    const result = myFunc()
    const result2 = await myFunc()
    console.log(result)
    console.log(typeof result)
    console.log(result2)
    console.log(typeof result2)

}

main()
