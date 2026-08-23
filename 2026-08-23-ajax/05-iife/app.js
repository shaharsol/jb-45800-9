const main = async () => {
    try {
        const response = await fetch('https://dummyjson.com/users')
        const json = await response.json()
    
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

}

main()