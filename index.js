const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'public')))

// respond with "hello world" when a GET request is made to the homepage
app.get('/about/:name', (req, res) => {
    res.send('hello world ' + req.params.name)
        // res.sendFile(__dirname + '/index.html')
})

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
})