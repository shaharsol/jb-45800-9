// Implement this function.
// make sure it works by using it instead of lines 7-8
// this is the async/await version, which is quite long...
// const getData = async url => {
//     const response = await fetch(url)
//     const json = await response.json()
//     return json
// }

// this is the promise based version, which is a one liner
const getData = url => fetch(url).then(response => response.json());

// any JavaScript code that appears immediately before an IIFE,
// must end in ;
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

