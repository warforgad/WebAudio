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

function pushChunk()
{
    pushChunk.index = pushChunk.index + 1 || 0;
    data[pushChunk.index] = fs.readFileSync('songs/' + pushChunk.index + '.mp3');
}

setInterval(pushChunk, 3000);

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})