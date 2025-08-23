const express = require('express')
const { createLikes, calculateLikes } = require('../controller/likesController')
const route = express.Router()

route.post('/like/:postId', createLikes)
route.get('/calculatelikes/:postId', calculateLikes)

module.exports = route
