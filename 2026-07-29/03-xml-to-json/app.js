user = {
    friends: [
        {
            id: 1,
            name: 'Charlie',
            following: [1, 2, 3]
        },
        {
            id: 2,
            name: 'Diana',
            following: [1, 2, 3]
        },
        {
            id: 3,
            name: 'Bob',
            following: [1, 2, 3]
        }
    ]
}

userJson = JSON.stringify(user)

console.log(user)
console.log(userJson)