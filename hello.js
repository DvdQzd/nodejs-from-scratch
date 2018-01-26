var http = require("http");

var handler = function(request, response){
    console.log("new request");
    response.end("Hola mundo");
}


var server = http.createServer(handler);

server.listen(8080);