users = [
    {
        id: 1,
        name: 'Alice',
        following: [25, 46, 106]
    },
    {
        id: 2,
        name: 'Bob',
        following: [78, 46, 25]
    },
    {
        id: 3,
        name: 'Diana',
        following: [25, 106, 79]
    }
]

// prompt the user for a user id
// calculate how many followers this user id have

userId = +prompt("enter the user id")
numberOfFollowers = 0

for (user of users) {
    for(followingId of user.following) {
        if(userId == followingId) {
            numberOfFollowers++
            break
        }
    }    
}

console.log(`user id ${userId} has ${numberOfFollowers} followers`)