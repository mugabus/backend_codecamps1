// index.js
// where your node app starts

require('dotenv').config();
var express = require('express');
var app = express();

// Enable CORS
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// Serve static files
app.use(express.static('public'));

// Basic routing
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// Example endpoint
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

// Your /api/whoami endpoint
app.get('/api/whoami', (req, res) => {
  res.json({
    ipaddress: req.ip,
    language: req.headers['accept-language'],
    software: req.headers['user-agent']
  });
});

// Start server
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
