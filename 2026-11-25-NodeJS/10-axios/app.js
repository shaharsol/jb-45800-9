const axios = require('axios');

(async() => {
    const { data: { users } } = await axios('https://dummyjson.com/users')

    console.log(users.map(({firstName, lastName}) => `${firstName} ${lastName}`).join('\n'))

})()

