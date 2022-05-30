
require('./config/config');

const express = require('express');
const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());


app.use(require('./routes/stock_routes'));


app.listen(process.env.PORT,() =>{
    console.log('Server Port',process.env.PORT);
});