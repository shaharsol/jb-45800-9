// meni = ['meni israeli', '055-555-5555', [74,86,90]]
// yossi = ['yossi cohen', '054-444-4444', [45, 90, 100]]
// sagit = ['sagit herzog', '058-888-8888', [65, 56, 77]]
// danny = ['danny zvulun', '058-888-8888', ['geography', 'math'] , [65, 56, 77]]

meni = {
    firstName: 'Meni',
    lastName: 'Isareli',
    phone: '055-555-5555',
    grades: [74,86,90]
}

console.log(meni)

// access specific property using {object}.{property}
console.log(meni.phone)

// adding properties
meni.gender = 'Male'
console.log(meni)

// delete a property
delete meni.gender
console.log(meni)

// i can access properties using a [] notation
console.log(meni.firstName)
console.log(meni['firstName'])
propName = 'lastName'
console.log(meni.propName) // this is undefined
console.log(meni[propName])

yossi = {
    name: {
        first: 'Yossi',
        last: 'Cohen'
    },
    phone: '054-444-4444',
    grades: [76,87,91],
    address: {
        city: 'Rishon Lezion',
        zip: '564321',
        street: 'Hagvura 23'
    } 
}

console.log(yossi.address.zip)


// p1 = 'address'
// p2 = 'zip'
// yossi[p1][p2]

