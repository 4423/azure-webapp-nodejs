var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req, res) {
  fs.readFile('index.html','UTF-8', (error, html) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(html);
    res.end();
  });
}).listen(8080);