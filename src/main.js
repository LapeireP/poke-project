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
  const zoekbalk = document.getElementById('zoek-input');
  const typeFilter = document.getElementById('type-filter');

  // Data ophalen
  const pokemonDetailsPromises = pokemonLijst.map(async (pokemon) => {
    const response = await fetch(pokemon.url);
    const data = await response.json();
    return {
      id: data.id,
      name: data.name,
      sprite: data.sprites.front_default,
      sprite2: data.sprites.front_shiny,
      type1: data.types[0]?.type.name || null,
      type2: data.types[1]?.type.name || null,
      basestats: data.stats[0]?.base_stat+data.stats[1]?.base_stat+data.stats[2]?.base_stat+data.stats[3]?.base_stat+data.stats[4]?.base_stat+data.stats[5]?.base_stat,
      ability: data.abilities[0]?.ability.name,
    };
  });

  // Promise
  const pokemonDetails = await Promise.all(pokemonDetailsPromises);

  // Aanmaken pokemon-kaarten
  function renderPokemons(pokemons) {
  pokemonLijstContainer.innerHTML = pokemons.map(pokemon => `
    <div class="pokemon-kaart">
    <div class="pokemon-kaartinfo">
    <button class="favorietenknop">♥</button>
      <img src="${pokemon.sprite}" alt="${pokemon.name}">
      <img src="${pokemon.sprite2}" alt="${pokemon.name}">
      <h3>${pokemon.id}</h3>
      <h3>${pokemon.name}</h3>
      <h3>${pokemon.type1}</h3>
      <h3>${pokemon.type2 || "none"}</h3>
      <h3>${pokemon.basestats}</h3>
      <h3>${pokemon.ability}</h3>
      </div>
    </div>
  `).join('');
}

  // Filterfunctie (zoek + type)
  function applyFilters() {
    const term = zoekbalk.value.toLowerCase();
    const selectedType = typeFilter.value;

    const gefilterd = pokemonDetails.filter(pokemon => {
      const matchName = pokemon.name.toLowerCase().includes(term);
      const matchType =
        !selectedType ||
        pokemon.type1 === selectedType ||
        pokemon.type2 === selectedType;

      return matchName && matchType;
    });

    renderPokemons(gefilterd);
  }

  renderPokemons(pokemonDetails);

  // Eventlisteners
  zoekbalk.addEventListener('input', applyFilters);
  typeFilter.addEventListener('change', applyFilters);
}
geefPokemonWeer();