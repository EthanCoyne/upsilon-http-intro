var app = angular.module('pokeApp', []);

app.controller('PokemonController', function(PokeService) {
  console.log('PokemonController is loaded');



  var ctrl = this;
  var currentlySelectedPokemon = {};


  ctrl.pokemonList = [{name: 'Squirtle'},
  {name: 'Bulbasaur'},
  {name: 'Charmander'},
  {name: 'Pikachu'},
  {name: 'Moltres'},
  {name: 'Articuno'},
  {name: 'Zapdos'}
];

  ctrl.currentPokemon = {};

  PokeService.getAllPokemon().then(function(pokeList) {
    ctrl.pokemonList = pokeList;
  }); // end PokeService.getAllPokemon()

  ctrl.iChooseYou = function (pokemon) {
    console.log('Chose: ', pokemon);
    PokeService.getPokemon(pokemon).then(function(imageUrl) {
      togglePokemon(pokemon);
      ctrl.currentPokemon.imageURL = imageUrl;
      ctrl.currentPokemon.name = pokemon.name;
    });
  };

  function togglePokemon(pokemon) {
    currentlySelectedPokemon.chosen = false;
    currentlySelectedPokemon = pokemon;
    pokemon.chosen = true;
  }

}); // end PokemonController
