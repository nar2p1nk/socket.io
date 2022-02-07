const express = require('express')
const ws = require('ws')

const app = express();

const wsServer = new ws.Server({noServer:true});

wsServer.on('connection', socket =>{
    socket.on('message', message => console.log(message))
})
