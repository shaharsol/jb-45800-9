const Chance = require('chance');
const chance = new Chance();

const generatePassword = (length, useSepcialChars = false) => {
    const pool = useSepcialChars ? 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ~!@#$%^&*()_+' : 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    return chance.string({
        length,
        pool
    })
}

module.exports = {
    generatePassword
}


/*

npm version

each package has a version combined from 3 numbers, e.g. 1.0.0

- 3rd number (patch) increments on bug fixes
- 2nd number (minor) increments on new features
- 1st number (major) increments on breaking changes from previous version

instructing npm which version to install:
let's say i want to use the `chance` npm package:
so i have this in package.json:

"dependencies": {
    "chance": "^1.1.13"
}

i can choose 4 options to tell npm what to install:
- "chance": "1.1.13". this means i want EXACTLY version 1.1.13 and NO OTHER VERSION
- "chance": "^1.1.13". this means i want any version starting from 1.1.13 and up but not a new major version
- "chance": "~1.1.13". this means i want any version starting from 1.1.13 and up but not a new major version and not a new minor version. in other words, only bug fixes
- "chance": "*". any version

*/