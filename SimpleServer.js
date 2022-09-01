var http = require('http');

var server = http.createServer(function (req, res) {});

server.listen(9000); //Listen on 9000

console.log('Node.js web server at port 9000 is running...')

server.close();
console.log('Node.js web server at port 9000 was closed...')