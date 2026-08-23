// present a table with 3 columns: full name, age, email
// populate it will all the users from https://dummyjson.com/users

const getData = url => fetch(url).then(response => response.json());

(async () => {
    try {
        const json = await getData('https://dummyjson.com/users')
    
        const html = json.users.map(user => `
            <tr>
                <td>${user.firstName}</td>
                <td>${user.lastName}</td>
            </tr>
        `).reduce((total, current) => `${total}${current}`, '')
        console.log(html)

        document.getElementById('users').innerHTML = html

    } catch (e) {
        console.log(e)
    }

})()

