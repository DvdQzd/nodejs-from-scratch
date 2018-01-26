var http = require("http");

var promise = new Promise(function(resolve, reject){
    const FLAG = 5;

    // if (FLAG == 10){
    //     resolve("todo bien!");
    // }else{
    //     reject (Error("Algo salio mal."));
    // }

    // setTimeout(function(){
    //     resolve("todo bien");
    // }, 3000);

    setTimeout(resolve, 4000, "Todo bien!");
        

});

promise.then(function(response){
    console.log(response);
}, function(error){
    console.log(error);
});

var server = http.createServer(handler);

server.listen(8080);