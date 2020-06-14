// Set up

class Game {

    // constructor takes in an array of sockets
    constructor(firstPlayer, secondPlayer) {
        this._players = [firstPlayer, secondPlayer]
        this._playersID = [firstPlayer.id, secondPlayer.id]
        this._scores = [0, 0]
        this._startlogic()
        this._serverListeners()
        this._playerTurns = [true, false]
    }

    _startlogic() {

        // Send welcome message
        this._players.forEach((player) => {
            player.emit('welcome', 'Two players have joined, start game!')
        })

        // Set up player turns
        this._players[0].emit('player1', 'You are P1')
        this._players[1].emit('player2', 'You are P2')
    }

    _serverListeners() {
        this._drawLines()
        this._drawPlayerRects()
        this._drawDotList()
        this._connectedPairs()
        this._turnChange()
    }

    _drawLines() {
        this._players.forEach((player) => {
            player.on('drawLines', (p1, p2) => {
                const playerToEmitTo = this._getOtherPlayer(player) 
                playerToEmitTo.emit('drawLines', p1, p2)             
            })
        })
    }

    _drawPlayerRects() {
        this._players.forEach((player) => {
            player.on('drawPlayerRects', (player_rects, dotList, state, dot) => {
                const playerToEmitTo = this._getOtherPlayer(player) 
                playerToEmitTo.emit('drawPlayerRects', player_rects, dotList, state, dot)             
            })
        })
    }

    _drawDotList() {
        this._players.forEach((player) => {
            player.on('drawDotList', (dotList) => {
                const playerToEmitTo = this._getOtherPlayer(player) 
                playerToEmitTo.emit('drawDotList', dotList)             
            })
        })
    }

    _connectedPairs() {
        this._players.forEach((player) => {
            player.on('connectedPairs', (obj) => {
                const playerToEmitTo = this._getOtherPlayer(player) 
                playerToEmitTo.emit('connectedPairs', obj)             
            })
        })
    }

    _getOtherPlayer(currentPlayer) {
        var $_otherPlayer
        this._players.forEach((player) => {
            if (currentPlayer.id != player.id) {
                $_otherPlayer = player
            }
        })
        return $_otherPlayer
    }

    _turnChange() {
        this._players.forEach((player) => {
            player.on('turnChange', (bool) => {
                this._players.forEach((player) => {
                    player.emit('turnChange', bool)
                })
            })
        })
    }
}

module.exports = Game;
console.log("Game file has loaded server side")