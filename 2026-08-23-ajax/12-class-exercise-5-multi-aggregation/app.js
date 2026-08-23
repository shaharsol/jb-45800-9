// get the users list from https://dummyjson.com/users
// generate a table of states, and how mnay users are from this state.
// for example:
// Mississipi, 2
// Alabama, 3
// Tenessee, 1

const getData = url => fetch(url).then(response => response.json());

(async () => {
    try {
        const { users } = await getData('https://dummyjson.com/users')
    
    } catch (e) {
        console.log(e)
    }

})()

