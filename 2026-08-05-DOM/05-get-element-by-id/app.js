// lets say i want to modify the span
const mySpan = document.getElementById('my-span')
console.log(mySpan)

console.log(document.getElementById('my-div').children[0].children[2].children[0])

console.log(document.querySelectorAll('#my-div > div > p > span')[0])