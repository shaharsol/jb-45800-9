function addUser() {
    // dont submit the form
    event.preventDefault()
    // instead run my code
    const firstName = document.getElementById('first-name').value
    const lastName = document.getElementById('last-name').value
    const email = document.getElementById('email').value

    const tableBody = document.getElementById('user-table-body')

    tableBody.innerHTML += `
        <tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${email}</td>
        </tr>
    `

    document.getElementById('user-form').reset()
    
}