var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
   
    fs.readFile("index.html", function (error, pgResp) {
            if (error) {
                res.writeHead(404);
                res.write('Contents you are looking are Not Found');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(pgResp);
            }
             
  res.end();
        
           });
    

}).listen(3000, '127.0.0.1');
console.log('Server running at http://127.0.0.1:3000/');
    
    
    