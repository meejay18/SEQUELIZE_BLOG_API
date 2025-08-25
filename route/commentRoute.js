const express = require('express')
const {
  createComment,
  updateComment,
  deleteComment,
  getAllComment,
} = require('../controller/commentController')
const route = express.Router()

route.post('/comment/:postId', createComment)
route.put('/updatecomment/:commentId', updateComment)
route.delete('/deletecomment/:commentId', deleteComment)
route.get('/getAllComment', getAllComment)

module.exports = route
