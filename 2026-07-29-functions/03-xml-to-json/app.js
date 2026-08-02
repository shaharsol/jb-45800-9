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

// let's say we received JSON data from some other app and we want
// to use the data in our code

data = `
{
    "cars": [
        {
            "make": "audi",
            "volume": 1800
        },
        {
            "make": "volvo",
            "volume": 2200
        },
        {
            "make": "nissan",
            "volume": 1200
        }
    ]
}
`

cars = JSON.parse(data)
console.log(data)
console.log(cars)
console.log(cars.cars[1].volume)
console.log(data[1].volume)


