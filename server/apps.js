const express = require('express');
const app = express();
    
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// use only dev
// var cors = require('cors')
// app.use(cors())
// app.options("*", cors())

// api
const api = require('./route');
app.use('/api', api);

// front-end 
app.use(express.static(__dirname + '../../dist'));
app.get('/', function (req, res, next) {
  res.sendFile(__dirname + '/index.html')
});

app.use(express.urlencoded({ extended: false }));

module.exports = app;