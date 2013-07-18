var http = require('http')
  , through = require('through')
  ;

var upper = through(function(buf) {
    this.queue(buf.toString().toUpperCase());
});

var server = http.createServer(function(req, res) {
    if (req.method === "POST") {
        req.pipe(upper).pipe(res);
    }
});

server.listen(8000);