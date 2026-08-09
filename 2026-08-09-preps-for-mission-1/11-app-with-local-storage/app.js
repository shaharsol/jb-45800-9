// this is the convention to name a variable which stands as a logical constant
const USERS_LOCAL_STORAGE_KEY = 'users'

// read users from the localStorage
function getUsers() {
    // const users = localStorage.getItem(USERS_LOCAL_STORAGE_KEY)
    // if (users) return JSON.parse(users)
    // return []    
    return JSON.parse(localStorage.getItem(USERS_LOCAL_STORAGE_KEY) || "[]")    
}

function saveUsers(users) {
    localStorage.setItem(USERS_LOCAL_STORAGE_KEY, JSON.stringify(users))
    syncToDom()
}

// will read from localstorage (SSOT) and sync to dom
function syncToDom() {
    const users = getUsers()
    
    const tableBody = document.getElementById('user-table-body')
    let newRows = ''

    for (user of users) {

        newRows += `
            <tr style="background-color: ${user.color};">
                <td>${user.firstName}</td>
                <td>${user.lastName}</td>
                <td>${user.email}</td>
                <td>${user.category}</td>
                <td>${user.cv}</td>
                <td><img src="${user.pic}" /></td>
                <td><button class="delete-button" onclick="deleteRow()">Delete</button></td>
            </tr>
        `        
    }

    tableBody.innerHTML = newRows

}

// principals:
// 1. each data operation begins with getUsers
// 2. each data modification should be done on the returned json (SSOT) and then sent back to saveUsers


function isCVcontainsEducation(cv) {
    return cv.includes('education')
}

function isFirstLetterCapital(str) {
    const firstLetter = str[0] // str.substr(0,1)
    return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(firstLetter)
}

function deleteRow() {
    event.target.parentElement.parentElement.remove()
}

function addUser() {
    // dont submit the form
    event.preventDefault()
    // instead run my code
    const firstName = document.getElementById('first-name').value
    const lastName = document.getElementById('last-name').value
    const email = document.getElementById('email').value
    const cv = document.getElementById('cv').value
    const category = document.getElementById('category').value
    const color = document.getElementById('color').value
    const pic = document.getElementById('pic').value

    if(!isFirstLetterCapital(firstName)) {
        alert('First name must start with a capital letter')
        return
    }
    if (!isCVcontainsEducation(cv)) {
        alert('CV must contain an Education section')
        return
    }

    const users = getUsers()
    users.push({
        firstName,
        lastName,
        email,
        cv,
        category,
        color,
        pic
    })
    saveUsers(users)

    document.getElementById('user-form').reset()
    
}