function doSomething(someArgument) {
    console.log(`${someArgument} of type ${typeof someArgument}`)
    if(typeof someArgument === 'function') {
        someArgument()
    }
}

function doSomethingElse() {
    console.log('hello from doSomethingElse')
}


doSomething(doSomethingElse)