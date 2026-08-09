const user = {
    id: 1,
    email: "shahar@gnift.com",
    name: "Shahar"
}
// puts a string of information int the local storage, labeled "user"
localStorage.setItem("user", JSON.stringify(user))

// reads a string labeled "user" from the local storage, and converts it back to JavaScript (if the string is json)
const anotherInstanceOfUser = JSON.parse(localStorage.getItem("user"))
console.log('info from localstorage', anotherInstanceOfUser)
