// Set up

class Game {

    // constructor takes in an array of sockets
    constructor(firstPlayer, secondPlayer) {
        this._players = [firstPlayer, secondPlayer]
        this._playersID = [firstPlayer.id, secondPlayer.id]
        this._scores = [0, 0]
        this._startlogic()
        this._serverListeners()
        this._playerTurns = [true, true]
    }

    _startlogic() {
        this._players.forEach((player) => {
            player.emit('welcome', 'Two players have joined, start game!')
        })
    }

    _serverListeners() {
        this._drawLines()
        this._drawPlayerRects()
        this._drawDotList()
        this._connectedPairs()
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
}

module.exports = Game;
console.log("Game file has loaded server side")