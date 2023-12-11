var HTTPServer = require('http-server');

var httpServer = new HTTPServer({
  root: './public'
});

httpServer.start();