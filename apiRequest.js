var Request = require("request");

// Request.get("http://pokeapi.co/api/v2/pokemon/1/", (error, response, body) => {
//     if(error) {
//         return console.dir(error);
//     }
//     console.dir(JSON.parse(body));
// });

var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();

P.getPokemonByName('pikachu') // with Promise
.then(function(response) {
  console.log(response.name);
})
.catch(function(error) {
  console.log('There was an ERROR: ', error);
});


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

P.getGenerationByName("generation-vi")
    .then(function(response) {
      console.log(response.types);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });