const express = require('express');
const app = express();
const {getStock} = require('../controller/stock_controller')

app.get('/getStock',getStock);


module.exports = app;