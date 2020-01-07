const express = require('express');
const app = express();
const router = express.Router();
    
const bodyParser = require('body-parser');
const mysql = require('mysql');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Rotas
const fornecedorRoute = require('./routes/fornecedorRoute');
app.use('/fornecedor', fornecedorRoute);
app.use(express.static(__dirname + '../../dist'));
app.get('/', function (req, res, next) {
  res.sendFile(__dirname + '/index.html')
});

module.exports = app;