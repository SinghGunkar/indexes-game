const express = require('express')

const app = express()
app.use(express.static('game_files'))

app.get('/', function(request, response){
    response.sendFile(__dirname + '/game_files/index.html');
    console.log('test')
});

app.listen(3000, function () {
console.log('Example app listening on port 3000!');
});