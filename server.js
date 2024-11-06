const http = require('http');
var fs = require('fs');
fs.open('welcome.txt','w',function(err,fd){
    if(err){
        return console

    }fs.write(fd, 'Hello node', function(err){
        if(err){
            console.log(err)
        }
    } )




})
 http.createServer(function(req,res){
     res.writehead (200, { 'Content-Type': 'text/html' });
    res.end(  '<h1>Hello Node!!!!</h1>\n')


 }).listen(3000);