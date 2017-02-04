var express = require('express');
var fs = require('fs');
var app = express();

//app.use('/songs', express.static('songs'))

var data = {}

app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.htm" );
})

app.get('/songs/:chunk', function(req, res) {
   res.send(new Buffer(data[req.params.chunk], "binary"))
})

data['1'] = fs.readFileSync('songs/1.mp3');

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})