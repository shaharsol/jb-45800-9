// Node.js had to add capabilities to JavaScript
// that were not required in browsers, e.g. file system access
// so Ryan Dahl had to develop some extra capabilities
// but since they are external to the language, he also
// had to build a code import mechanism
// he created a mechanism named CommonJS
// that enables to import/export external code
// there are two types of external code:
// 1. built in modules that are distributed with Node.js itself
//      for example : fs (file system), os (operation system), util (various utilities)
// 2. modules developed by the community


// (async () => {
    const response = await fetch('https://dummyjson.com/users')
    const { users } = await response.json()
    console.log(users.map(({firstName, lastName}) => `${firstName} ${lastName}`).join('\n'))
// })()