var express=require('express');
var app=express();
var path = require('path');

var bodyParser=require('body-parser');

const formRoutes = require('./routes/form');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/*',function(req,res){
    res.sendFile(__dirname+ "/"+ "index.html")
});

app.use(formRoutes);

app.listen(3000);