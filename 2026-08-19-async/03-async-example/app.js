const changeColor = () => {
    document.getElementById('color-button').style.backgroundColor = document.getElementById('color-button').style.backgroundColor === 'red' ? 'blue' : 'red'
}

const getData = () => {
    // for (let i = 0 ; i < 300000; i++ ) {
    //     console.log(i)
    // }
    // document.getElementById('data').innerHTML = 'here is the data from the server...'


    setTimeout(() => {
        document.getElementById('data').innerHTML = 'here is the data from the server...'
    }, 5 * 1000)
}