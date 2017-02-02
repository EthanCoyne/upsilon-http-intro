app.service('PokeService', function($http) {
  var API = 'http://pokeapi.co/api/v2';

  this.getAllPokemon = function() {
    // return the promise to the caller
    return $http.get(API + '/pokemon').then(function(response) {
      console.log('You caught the pokemon!', response);
      return response.data.results;

    }).catch(function(err){
      console.log('The pokemonAPI ran away!', err);
    }); // end $http.get()
  }; // end this.getAllPokemon()

  this.getPokemon = function(pokemon) {
    console.log('Pokemon info: ', pokemon.data);
    return $http.get(pokemon.url).then(function(response) {
      var foundPokemon = response.data;
      return foundPokemon.sprites.front_default // image
    }).catch(function(err) {
      console.log('The pokemonAPI ran away!', err);
    });
  }




}); // end app.service()
