const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8081;

// sendFile will go here
app.use('/', express.static(__dirname + '/'));
console.log(__dirname);
app.use('/pkg', express.static('../pkg'));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(port);
console.log('Server started at http://localhost:' + port);