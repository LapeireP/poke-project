import './style.css'
import { fetchPokemonData } from '/api/pokeapi.js';

//Testje of de data in de console wordt gezet
async function testFetchData() {
  try {
    const pokemon = await fetchPokemonData(0, 10);
    console.log(pokemon);
  } catch (error) {
    console.error("Er is een fout opgetreden:", error);
  }
}
testFetchData();

async function geefPokemonWeer() {
  const pokemonLijst = await fetchPokemonData();
  const pokemonLijstContainer = document.getElementById('pokemon-lijst');
  
  // Data ophalen
  const pokemonDetailsPromises = pokemonLijst.map(async (pokemon) => {
    const response = await fetch(pokemon.url);
    const data = await response.json();
    return {
      id: data.id,
      name: data.name,
      sprite: data.sprites.front_default,
    };
  });

  // Promise
  const pokemonDetails = await Promise.all(pokemonDetailsPromises);

  // Aanmaken pokemon-kaarten
  pokemonLijstContainer.innerHTML = pokemonDetails.map(pokemon => `
    <div class="pokemon-kaart">
    <div class="pokemon-kaartinfo">
    <button class="favorietenknop">♥</button>
      <h3>${pokemon.id}</h3>
      <h3>${pokemon.name}</h3>
      <img src="${pokemon.sprite}" alt="${pokemon.name}">
      </div>
    </div>
  `).join('');
}

geefPokemonWeer();