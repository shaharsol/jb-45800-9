
meni = {
    firstName: 'Meni',
    lastName: 'Isareli',
    phone: '055-555-5555',
    grades: [74,86,90]
}

yossi = {
    name: {
        first: 'Yossi',
        last: 'Cohen'
    },
    phone: '054-444-4444',
    grades: [76, 87, 91],
    address: {
        city: 'Rishon Lezion',
        zip: '564321',
        street: 'Hagvura 23'
    } 
}

for(property in yossi) {
    console.log(`${property}: ${yossi[property]}`)
}
