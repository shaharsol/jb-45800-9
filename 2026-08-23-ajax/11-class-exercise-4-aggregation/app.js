// populate it will all the users from https://dummyjson.com/users

// also, save half the iterations required for summing the weights
// and convert the code to use a single loop to calculate the weight
// for both men and women
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

        const reduction = users.reduce((cumulative, { gender, weight }) => {
            const clonedCumulative = {...cumulative}
            clonedCumulative[gender].sum += weight
            clonedCumulative[gender].count++
            return clonedCumulative
        }, {
            male: {
                sum: 0,
                count: 0
            },
            female: {
                sum: 0,
                count: 0
            }
        })

        document.getElementById('average-men-weight').innerHTML = reduction.male.sum / reduction.male.count
        document.getElementById('average-women-weight').innerHTML = reduction.female.sum / reduction.female.count

    } catch (e) {
        console.log(e)
    }

})()

