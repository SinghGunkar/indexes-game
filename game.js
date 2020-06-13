// Set up

class Game {

    // constructor takes in an array of sockets
    constructor(firstPlayer, secondPlayer) {
        this._players = [firstPlayer, secondPlayer]
        this._playersID = [firstPlayer.id, secondPlayer.id]
        this._scores = [0, 0]
        this._data = {}
        this._startlogic()
        this._serverListeners()
    }

    _startlogic() {
        this._players.forEach((player) => {
            player.emit('welcome', 'Two players have joined, start game!')
        })
    }

    _serverListeners() {
        this._serverShowOptions()
    }

    _serverShowOptions() {
        this._players.forEach((player) => {
            player.on('showOptions', (data) => {
                this._data = data
                this._serverEmitShowOptions()
            })
        })
    }

    _serverEmitShowOptions() {
        this._players.forEach((player) => {
            player.emit('showOptionsFromServer', 'test')
            console.log(`${player.id} has emitted and event`)
        })
    }
}

module.exports = Game;
console.log("Game file has loaded server side")