myInstagramFeed = [
    {
        id: 1,
        image: 'http://mypic.com/?id=1',
        user: 'sagit',
        comments: 8,
        likes: 12
    }, 
    {
        id: 2,
        image: 'http://mypic.com/?id=2',
        user: 'samson',
        comments: 19,
        likes: 11
    }, 
    {
        id: 3,
        image: 'http://mypic.com/?id=3',
        user: 'irit',
        comments: 9,
        likes: 1
    }
]

for (post of myInstagramFeed) {
    console.log(post.image)
}