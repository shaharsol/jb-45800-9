const { readFile } = require('node:fs/promises');

(async () => {
    const data = await readFile('./data.txt', 'utf-8')

    console.log(data)
})()
