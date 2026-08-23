// populate it will all the users from https://dummyjson.com/users

// also, below the table present the average weight for female and for male

const getData = url => fetch(url).then(response => response.json());

(async () => {
    try {
        const { users } = await getData('https://dummyjson.com/users')
    
        const html = users.map(({firstName, lastName, age, email}) => `
            <tr>
                <td>${firstName} ${lastName}</td>
                <td>${age}</td>
                <td>${email}</td>
            </tr>
        `).join('')

        document.getElementById('users').innerHTML = html

        // men
        const men = users.filter(({gender}) => gender === 'male')
        document.getElementById('average-men-weight').innerHTML = men.reduce((total, {weight}) => total + weight, 0) / men.length

        // women
        const women = users.filter(({gender}) => gender === 'female')
        document.getElementById('average-women-weight').innerHTML = men.reduce((total, {weight}) => total + weight, 0) / women.length


        const sumWeight = users.reduce((total, { weight }) => total + weight, 0)

        document.getElementById('averageWeight').innerHTML = sumWeight / users.length
    } catch (e) {
        console.log(e)
    }

})()

