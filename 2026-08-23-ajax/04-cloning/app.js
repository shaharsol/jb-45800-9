const pizza = {
    diameter: 18,
    price: 30,
    slices: 8,
    toppings: 3,
}

const age = 26

// if a primitive value is sent as an argument to function,
// it is duplicated for the function execution
const printAge = age => {
    age = age + 2
    console.log(`in two years your age will be  ${age}`) 
}


// if an object (also array) is sent as an argument to function,
// it is not duplicated for the function execution
// and each modification the function does to the object
// affect the original object
const printPizza = pizza => {
    // it is very not recommended to mutate an input argument
    // because in javascript it will affect the original
    // variable that was sent to the function as argument
    // this is relevant ONLY to objects
    // not to primitvies

    // THIS IS THE CLONING:
    const clonedPizza = {...pizza, hasEnchobe: false}
    clonedPizza.price = clonedPizza.price * 1.18
    console.log(clonedPizza)
    console.log(`is same object? ${clonedPizza === pizza}`)
} 

printPizza(pizza)
printPizza(pizza)

printAge(age)
printAge(age)

// cloning an array
const printUsers = users => {

    // this is the way to clone an array
    const clonedUsers = [...users]

    clonedUsers.push('shlomo')
    clonedUsers.map(user => console.log(user))
}

const users = ['moshe', 'gilad', 'shoval']
printUsers(users)
printUsers(users)

// a nicer way to push to an array...
users.push('galit')

// this is equivalent to 
const printUsers2 = users => {

    // this is the way to clone an array
    const clonedUsers = ['yossi', ...users, 'shlomo']

    clonedUsers.map(user => console.log(user))
}


// the ... in javascript is called "the spread operator" and it has many uses