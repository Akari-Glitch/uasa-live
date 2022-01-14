// server.js
const app = require('express')()
const server = require('http').Server(app)
const io = require('socket.io')(server, {
  cors:{
    origin: "*"
    methods:["GET", "POST"]
  }
})
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const nextHandler = nextApp.getRequestHandler()


io.on('connection', socket => {
  console.log(socket.id)
  socket.on('message', (data) => {
    socket.broadcast.emit('message:received', data)
  })
})


nextApp.prepare().then(() => {
  
  app.get('/messages', (req, res) => {
    
    res.json(messages)
  })

  app.get('*', (req, res) => {
    
    return nextHandler(req, res)
  })

  server.listen(3000, (err) => {
    if (err){ 
      process.exit(0)
      console.log('error')
    }
    console.log('> Ready on http://localhost:3000')
  })
})

