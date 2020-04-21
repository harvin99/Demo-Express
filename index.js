const express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('Hello, this is the first time run express complete !');
})
var port = 3000;
app.listen(port, function(){
    console.log('Server listening on port: '+ port );
})