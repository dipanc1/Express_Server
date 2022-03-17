const express = require('express')
const path = require('path')
const { title } = require('process')
const router = express.Router()
const blogs = require('../data/blogs')

router.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, '../templates/index.html'))
    res.render('home')
})

router.get('/blog', (req, res) => {
    res.render('blogHome', {
            blogs: blogs
        })
        // res.sendFile(path.join(__dirname, '../templates/blogHome.html'))
})

router.get('/blogpost/:slug', (req, res) => {
    myBlog = blogs.filter((e) => {
        return e.slug == req.params.slug
    })
    res.render('blogPage', {
            title: myBlog[0].title,
            content: myBlog[0].content
        })
        // console.log(myBlog)
        // res.sendFile(path.join(__dirname, '../templates/blogPage.html'))
})

module.exports = router