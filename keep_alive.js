var http = require('http');

http.createServer(function (req, res) {
  res.write(":)");
  res.end();
}).listen(8080);
