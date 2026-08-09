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