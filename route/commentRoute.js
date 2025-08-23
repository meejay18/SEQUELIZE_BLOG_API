const express = require('express')
const { createComment, updateComment, deleteComment } = require('../controller/commentController')
const route = express.Router()

route.post('/comment/:postId', createComment)
route.put('/updatecomment/:commentId', updateComment)
route.delete('/deletecomment/:commentId', deleteComment)

module.exports = route
