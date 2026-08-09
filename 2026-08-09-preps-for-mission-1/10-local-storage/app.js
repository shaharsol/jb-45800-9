const user = {
    id: 1,
    email: "shahar@gnift.com",
    name: "Shahar"
}
localStorage.setItem("user", JSON.stringify(user))

const anotherInstanceOfUser = JSON.parse(localStorage.getItem("user"))
console.log('info from localstorage', anotherInstanceOfUser)
