songs = []

for(song = 0; song < 3; song++) {
    // songName = prompt("enter a song name")
    // songs.push(songName)
    songs.push(prompt("enter a song name"))
}
console.log(songs)

// ["sweet dreams", "wonder wall", "oasis"]
songs.splice(1, 1)

console.log(songs)