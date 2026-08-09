function changeButtonColor(buttonId) {
    const button = document.getElementById(buttonId)
    button.classList.add('party')
}

function restoreButtonColor(buttonId) {
    const button = document.getElementById(buttonId)
    button.classList.remove('party')
}