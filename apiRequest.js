var Request = require("request");
var http = require("http");

// Request.get("http://pokeapi.co/api/v2/pokemon/1/", (error, response, body) => {
//     if(error) {
//         return console.dir(error);
//     }
//     console.dir(JSON.parse(body));
// });

var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();

var getPokemon = function(name){
  P.getPokemonByName(name) // with Promise
.then(function(response) {
   console.log(response);
  //return response.name;
})
.catch(function(error) {
  console.log('There was an ERROR: ', error);
});
}

// getPokemon('lugia');


var handler = function(request,response){
  console.log("Request received");
  response.setHeader('Access-Control-Allow-Origin', 'http://localhost');
  response.writeHeader(200, {"Content-Type": "application/json"}); 

  var pokemon = "";

  request.on('data', function (chunk) {
      pokeName = chunk.toString('utf8');
      console.log("Data of " + pokeName);
                  // console.log(JSON.stringify(getPokemon('lugia')));
      //getPokemon(chunk.toString('utf8'));
      //  response.write(getPokemon(pokeName));
      //console.log(JSON.stringify(getPokemon(pokeName)));

      pokemon = getPokemon(pokeName);

      //  response.end(getPokemon(pokeName));
  });     

  response.on('end', () => {
    console.log(JSON.parse(getPokemon(pokeName)));
  });

  //response.end(pokemon);
  //response.write("oji");
};

var server = http.createServer(handler);

server.listen(8080);


// P.resource(['/api/v2/pokemon/36', 'api/v2/berry/8', 'https://pokeapi.co/api/v2/ability/25/'])
//     .then(function(response) {
//       console.log(response); // resource function accepts singles or arrays of URLs/paths
//     });
// var pikachu = P.getPokemonByName('pikachu');

// console.log(pikachu);

// P.getPokemonByName(34, function(response, error) { // with callback
//   if(!error) {
//     console.log(response);
//   } else {
//     console.log(error)
//   }
// });

// P.resource(['/api/v2/pokemon/36', 'api/v2/berry/8', 'https://pokeapi.co/api/v2/ability/9/'])
// .then(function(response) {
//   console.log(response); // resource function accepts singles or arrays of URLs/paths
// });

// P.getGenerationByName("generation-vi")
//     .then(function(response) {
//       console.log(response.types);
//     })
//     .catch(function(error) {
//       console.log('There was an ERROR: ', error);
//     });