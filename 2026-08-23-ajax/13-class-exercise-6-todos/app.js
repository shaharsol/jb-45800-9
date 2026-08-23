// get the todos list from https://dummyjson.com/todos
// generate a table of users and their todos count
// for example:
// 162, 2
// 71, 3
// 4, 1

const getData = url => fetch(url).then(response => response.json());

(async () => {
    try {
        const { todos } = await getData('https://dummyjson.com/todos')
        document.getElementById('todos-counts').innerHTML = todos
            .reduce((cumulative, { userId }) => {
                const clonedCumulativce = [...cumulative]
                const currentUserId = clonedCumulativce.find(obj => obj.userId === userId)
                if (currentUserId) {
                    currentUserId.count++
                } else {
                    clonedCumulativce.push({
                        userId,
                        count: 1
                    })
                }
                return clonedCumulativce
            }, [])
            .map(({userId, count}) => `
                <tr>
                    <td>${userId}</td>
                    <td>${count}</td>
                </tr>
            `)
            .join('')
        

/*
[
    {
        userId: 167,
        count: 9
    },
    {
        userId: 45,
        count: 6
    }
]
*/
    } catch (e) {
        console.log(e)
    }

})()

