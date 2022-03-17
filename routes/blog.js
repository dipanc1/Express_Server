const express = require('express')
const path = require('path')
const router = express.Router()
const blogs = require('../data/blogs')

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../templates/index.html'))
})

router.get('/blog', (req, res) => {
    // blogs.forEach(blog => {
    //     console.log(blog.title)
    // })
    res.sendFile(path.join(__dirname, '../templates/blogHome.html'))
})

router.get('/blogpost/:slug', (req, res) => {
    myBlog = blogs.filter((e) => {
            return e.slug == req.params.slug
        })
        // console.log(myBlog)
    res.sendFile(path.join(__dirname, '../templates/blogPage.html'))
})

module.exports = router