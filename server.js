'use strict'

const http = require('http')
const express = require('express')
const socketio = require('socket.io')
const Game = require('./game')

const app = express()

const clientPath = `${__dirname}/game_files`
console.log(`Serving static from ${clientPath}`)

app.use(express.static(clientPath))

const server = http.createServer(app)

const io = socketio(server)

let waitingPlayer = null

io.on('connection', (socket) => {
    console.log(`Socket with id ${socket.id} has connected`)

    if (waitingPlayer) {
        // start a game
        new Game(waitingPlayer, socket)
        waitingPlayer = null
    } else {
        waitingPlayer = socket
        waitingPlayer.emit('waitMessage', 'Waiting for an opponent')
        socket.on('disconnect', function() {
            console.log(`${socket.id} has disconnected`)
            waitingPlayer = null
        })
    }
})

server.on('error', (err) => {
    console.log("Server error:")
})

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
    console.log('______________________')
})