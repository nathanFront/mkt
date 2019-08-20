var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(function(req, res, next){
    res.header('Acess-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, PATCH');
    res.header('Access-Control-Allow-Headers', 'Content-type');
    next();
});



app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use(require('./produtos'));




app.listen(3000, () => {
    console.log("Server running on port 3000");
});
