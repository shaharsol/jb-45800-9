// present a table with 3 columns: full name, age, email
// populate it will all the users from https://dummyjson.com/users

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
        `).reduce((total, current) => `${total}${current}`, '')

        document.getElementById('users').innerHTML = html

    } catch (e) {
        console.log(e)
    }

})()

