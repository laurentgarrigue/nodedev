var express = require('express');
var app = express();
app.get('/', function (req, res) {
    res.send('Hello from Docker\n');
});

app.listen(3000);
console.log('Running on http://localhost:3000');

// TESTS
console.log('Hey');
console.log('Hey2');
app.get('/hep/', function (req, res) {
    res.send('Hello from HEP !\n');
});