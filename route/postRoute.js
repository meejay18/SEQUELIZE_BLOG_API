const express = require('express')
const { createPost, updatePost, deletePost } = require('../controller/postController')
const route = express.Router()

route.post('/post', createPost)
route.put('/updatepost/:postId', updatePost)
route.delete('/deletepost/:postId', deletePost)

module.exports = route
