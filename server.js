var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var urlencodedParser=bodyParser.urlencoded({extended: false})

app.use(express.static('public'));
app.get('/',function(req,res){
    res.sendFile(__dirname+ "/"+ "index.html")
});

app.post('/submit', urlencodedParser ,function(req,res){

    response={
        first_name:req.body.first_name,
        last_name:req.body.last_name
        
    };
    console.log(response);
    res.end(JSON.stringify(response));
});
app.listen(3000);