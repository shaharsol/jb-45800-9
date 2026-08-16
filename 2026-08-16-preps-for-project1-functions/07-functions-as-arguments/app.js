function doSomething(someArgument) {
    console.log(`${someArgument} of type ${typeof someArgument}`)
}

function doSomethingElse(someOtherArgument) {
    console.log(someOtherArgument)
}

doSomething(1)
doSomething('blah blah blah')
doSomething(true)
doSomething({a: 1, b: 'c'})
doSomething([1,2,3])

doSomething(doSomethingElse)