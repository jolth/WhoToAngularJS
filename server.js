var express = require('express');
var app = express();

console.log("server execute: "+__dirname);
app.use(express.static(__dirname+'/'))
   .get('*', function(req, res) {
        res.sendFile('/public/index.html', {root: __dirname});
   }).listen(3000);
