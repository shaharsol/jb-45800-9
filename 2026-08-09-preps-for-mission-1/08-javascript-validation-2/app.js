function isCVcontainsEducation(cv) {
    return cv.includes('education')
}

function isFirstLetterCapital(str) {
    const firstLetter = str[0] // str.substr(0,1)
    return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(firstLetter)
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

    const tableBody = document.getElementById('user-table-body')

    tableBody.innerHTML += `
        <tr style="background-color: ${color};">
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${email}</td>
            <td>${category}</td>
            <td>${cv}</td>
            <td><img src="${pic}" /></td>
        </tr>
    `

    document.getElementById('user-form').reset()
    
}