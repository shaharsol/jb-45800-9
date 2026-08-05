function addUser() {
    const firstName = prompt("first name")
    const lastName = prompt("last name")
    const email = prompt("email")

    const tableBody = document.getElementById('user-table-body')

    tableBody.innerHTML += `
        <tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${email}</td>
        </tr>
    `
    
}