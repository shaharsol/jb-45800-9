const Chance = require('chance');
const chance = new Chance();

const generatePassword = length => chance.string({
    length,
    pool: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
})

module.exports = {
    generatePassword
}