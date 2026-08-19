console.log(1)
navigator.geolocation.getCurrentPosition(
    position => {
        console.log(3)
        document.getElementById('position').innerHTML = `
            you are at ${position.coords.latitude}, ${position.coords.longitude}
        `
    },
    error => {
        document.getElementById('error').innerHTML = error.message
        console.log(error)
    }
)
console.log(2)
