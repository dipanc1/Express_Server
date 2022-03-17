const express = require('express')
const path = require('path')
const app = express()

// app.use(express.static(path.join(__dirname, 'static')))
app.use('/', require(path.join(__dirname, './routes/blog')))

app.listen(3000, () => {
    console.log(`Blog app listening on port http://localhost:3000`)
})