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
        document.getElementById('state-counts').innerHTML = users.reduce((cumulative, { address: { state }}) => {
            const clonedCumulativce = [...cumulative]
            const currentState = clonedCumulativce.find(obj => obj.state === state)
            if (currentState) {
                currentState.count++
            } else {
                clonedCumulativce.push({
                    state,
                    count: 1
                })
            }
            return clonedCumulativce
        }, []).map(({state, count}) => `
            <tr>
                <td>${state}</td>
                <td>${count}</td>
            </tr>
        `).join('')
        

/*
[
    {
        state: 'Mississipi',
        count: 9
    },
    {
        state: 'Utah',
        count: 6
    }
]
*/
    } catch (e) {
        console.log(e)
    }

})()

