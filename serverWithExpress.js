const modularizedFunctions = require('/Users/seongjoon/Desktop/Express_API/modularizedFunctions')
const express = require('express');
const app = express()

app.use(express.json())

//get 요청 처리 라우팅
app.get('/ping', (req, res) => {res.json({ message: '/pong'})})
app.get('/users', modularizedFunctions.getUsers)
app.get('/users/:userId', modularizedFunctions.getUserByUserId)
app.get('/posts', modularizedFunctions.getPosts)

//post 요청 처리 라우팅
app.post('/users', modularizedFunctions.createUser)
app.post('/posts', modularizedFunctions.createPost)

//patch 요청 처리 라우팅
app.patch('/posts/:postId', modularizedFunctions.updatePost)

//delete 요청 처리 라우팅
app.delete('/posts/:postId', modularizedFunctions.deletePost)

app.listen(3000, "127.0.0.1", function() {
  console.log('listening on port 3000')
})