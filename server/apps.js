const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(cors({ origin: 'http://localhost:2424'}));
// api
const api = require('./route');
app.use('/api', api);

// front-end 
app.use(express.static(__dirname + '../../dist'));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
});

app.use(express.urlencoded({ extended: false }));
module.exports = app;