const express = require('express')
const app = express();
const http = require('http');
const httpServer = http.createServer(app)
const {Server} = require('socket.io');
const {log} = require('util');

const io = new Server(httpServer);

app.use(express.static(__dirname + '/public'));


app.get('/',(req,res) =>{
    res.sendFile(__dirname + '/index.html')
});

io.on('connection',socket=>{
    console.log('user connected');
    socket.on('chat message',(msg)=>{ io.emit('chat message', msg)})
    socket.on('disconnect',()=>{console.log('use disconnected')})
});

httpServer.listen(8080, ()=>{
    log('server listening on: localhost:8080')
})
