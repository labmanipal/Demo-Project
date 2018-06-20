// Get dependencies
var express = require('express'),
  path = require('path'),
  http = require('http')
  // config = require('config')


var app = express();

// Point static path to dist
app.use(express.static(path.join(__dirname, '../dist/demo-app')));

// Get port from environment and store in Express
const port = '8084';
app.set('port', port);

// Create HTTP server
const server = http.createServer(app);

// Listen on provided port
server.listen(port, () => console.log(`API running on localhost:${port}`));