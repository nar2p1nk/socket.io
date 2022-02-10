const express = require('express')
const app = express();
const http = require('http');
const httpServer = http.createServer(app)
const {Server} = require('socket.io');

const io = new Server(httpServer);

app.use(express.static(__dirname + '/public'));


app.get('/',(req,res) =>{
    res.sendFile(__dirname + '/index.html')
});

io.on('connection',socket=>{
    console.log('user connected');
});


httpServer.listen(8080, ()=>{
    console.log('server listening on: localhost:8080')
})
