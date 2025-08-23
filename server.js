const express = require('express')
const app = express()
app.use(express.json())
const postRoute = require('./route/postRoute')
const likeRoute = require('./route/likeRoute')
const commentRoute = require('./route/commentRoute')
app.use(postRoute)
app.use(likeRoute)
app.use(commentRoute)
const port = 2500

app.listen(port, () => {
  console.log(`server running on port ${port}`)
})
