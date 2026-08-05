function manipulate() {
    const mySpan = document.getElementById('my-span')
    // mySpan.style = "color: red;"
    mySpan.className = "red"
    mySpan.classList.add("italic")
}

function addStatus() {
    const status = prompt("enter status")
    const statusDiv = document.getElementById('status')
    // statusDiv.innerHTML = `<p>${status}</p>`
    statusDiv.innerText = `<p>${status}</p>`
}
