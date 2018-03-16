var http = require('http');
var url = require('url');
var fs = require('fs');
var PORT = 80;


http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  if (q.pathname == '/'){
    filename = './index.html';
  }
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }  
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
  
}).listen(PORT);
console.log('Listening Port : ' + PORT);