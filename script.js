var button = $(`.button`);
button.on("click", pokemon);

function pokemon() {
  event.preventDefault();
  var image1 = $('.image1');
  var image2 = 'https://purepng.com/public/uploads/large/purepng.com-pokemonpokemonpocket-monsterspokemon-franchisefictional-speciesone-pokemonmany-pokemonone-pikachu-17015277846874rzz8.png';
  var poke = ["1", "2", "3", "4", "5"];
  var pokee = Math.random() * poke.length
  var pokeee = Math.floor(pokee)
  var message = $('h2');
  if (pokeee == "1") {
    message.text(`Good work! You've caught Pikachu! Refresh to continue playing.`);
    $(".button").attr('src', image2)
  } else if (pokeee == "2"){
    message.text(`Better luck next time!`)
  } else if (pokeee == "3"){
    message.text(`Whew! That was a close call.`)
  } else if (pokeee == "4"){
    message.text(`Pikachu sticks their tongue out and waddles away`)
  } else {
    message.text(`Pikachu's lightning crackles and you run away.`)
}
}
