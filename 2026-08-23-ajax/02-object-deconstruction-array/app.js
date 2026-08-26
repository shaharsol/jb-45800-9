const main = async () => {
    try {
        const response = await fetch('https://dummyjson.com/users')
        const { users } = await response.json()
    
        // const html = json.users.map(user => `
        const html = users.map(({ firstName, lastName }) => `
            <tr>
                <td>${firstName}</td>
                <td>${lastName}</td>
            </tr>
        `).reduce((total, current) => `${total}${current}`, '')
        console.log(html)

        document.getElementById('users').innerHTML = html

    } catch (e) {
        console.log(e)
    }

}

main()