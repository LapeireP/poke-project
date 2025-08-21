import { fetchPokemonData } from '/api/pokeapi.js';

/* Testje of de data in de console wordt gezet
async function testFetchData() {
  try {
    const pokemon = await fetchPokemonData(0, 10);
    console.log(pokemon);
  } catch (error) {
    console.error("Er is een fout opgetreden:", error);
  }
}
testFetchData();
*/

// Themaschakelaar
function laadThema() {
  const opgeslagenThema = localStorage.getItem('thema') || 'licht';
  document.documentElement.setAttribute('data-theme', opgeslagenThema);
}

function wisselThema() {
  const huidigThema = document.documentElement.getAttribute('data-theme');
  const nieuwThema = huidigThema === 'licht' ? 'donker' : 'licht';
  document.documentElement.setAttribute('data-theme', nieuwThema);
  localStorage.setItem('thema', nieuwThema);
}

// Eventlistener voor themaschakelaar
document.getElementById('themaschakelaar').addEventListener('click', wisselThema);

laadThema();

let pokemonDetails = [];

// Favorieten

function getFavorieten() {
  const favorieten = localStorage.getItem('favorieten');
  return favorieten ? JSON.parse(favorieten).map(Number) : [];
}

function saveFavorieten(favorieten) {
  localStorage.setItem('favorieten', JSON.stringify(favorieten));
}

window.toggleFavoriet = function(pokemonId) {
  const favorieten = getFavorieten();
  if (favorieten.includes(pokemonId)) {
    // Verwijderen uit favorieten
    const index = favorieten.indexOf(pokemonId);
    favorieten.splice(index, 1);
  } else {
    // Voeg toe aan favorieten
    favorieten.push(pokemonId);
  }
  saveFavorieten(favorieten);
  renderPokemons(pokemonDetails);
  renderFavorieten(pokemonDetails);
}

function renderFavorieten(pokemons) {
  const favorietenContainer = document.getElementById('favorieten-lijst');
  const favorieten = getFavorieten();
  const favorietenPokemons = pokemons.filter(p => favorieten.includes(p.id));
  
  if (favorietenPokemons.length === 0) {
    favorietenContainer.innerHTML = `<p>Jouw lijst met favorieten is leeg.</p>`;
    return;
  }
  
  favorietenContainer.innerHTML = favorietenPokemons.map(pokemon => `
    <div class="pokemon-kaart">
      <div class="pokemon-kaartinfo">
        <button 
          class="favorietenknop" 
          style="color: ${favorieten.includes(pokemon.id) ? 'red' : 'grey'}"
          data-id="${pokemon.id}">
          ♥
        </button>
        <img src="${pokemon.sprite}" alt="${pokemon.name}">
        <img src="${pokemon.sprite2}" alt="${pokemon.name}">
        <h3 class="kenmerkfavo">ID: ${pokemon.id}</h3>
        <h3 class="kenmerkfavo">Naam: ${pokemon.name}</h3>
      </div>
    </div>
  `).join('');

  favorietenContainer.querySelectorAll('.favorietenknop').forEach(btn => {
    btn.addEventListener('click', () => toggleFavoriet(Number(btn.dataset.id)));
  });
}

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
      id: Number(data.id),
      name: data.name,
      sprite: data.sprites.front_default,
      sprite2: data.sprites.front_shiny,
      type1: data.types[0]?.type.name || null,
      type2: data.types[1]?.type.name || null,
      basestats: data.stats.reduce((sum, stat) => sum + (stat.base_stat || 0), 0),
      ability: data.abilities[0]?.ability.name,
    };
  });

  // Promise
  pokemonDetails = await Promise.all(pokemonDetailsPromises);

  // Aanmaken pokemon-kaarten
  function renderPokemons(pokemons) {
  const favorieten = getFavorieten();
  pokemonLijstContainer.innerHTML = pokemons.map(pokemon => `
    <div class="pokemon-kaart">
    <div class="pokemon-kaartinfo">
    <button class="favorietenknop" data-id="${pokemon.id}"
     style="color: ${favorieten.includes(pokemon.id) ? 'red' : 'grey'}">♥</button>
      <img src="${pokemon.sprite}" alt="${pokemon.name}">
      <img src="${pokemon.sprite2}" alt="${pokemon.name}">
      <h3 class="kenmerkjs">ID: ${pokemon.id}</h3>
      <h3 class="kenmerkjs">Naam: ${pokemon.name}</h3>
      <h3 class="kenmerkjs">Type 1: ${pokemon.type1}</h3>
      <h3 class="kenmerkjs">Type 2: ${pokemon.type2 || "none"}</h3>
      <h3 class="kenmerkjs">Base Stats: ${pokemon.basestats}</h3>
      <h3 class="kenmerkjs">Ability: ${pokemon.ability}</h3>
      <h3>${pokemon.id}</h3>
      <h3>${pokemon.name}</h3>
      <h3>${pokemon.type1}</h3>
      <h3>${pokemon.type2 || "none"}</h3>
      <h3>${pokemon.basestats}</h3>
      <h3>${pokemon.ability}</h3>
      </div>
    </div>
  `).join('');

    //Eventlistener favorietenknoppen
    pokemonLijstContainer.querySelectorAll('.favorietenknop').forEach(btn => {
      btn.addEventListener('click', () => toggleFavoriet(Number(btn.dataset.id)));
    });
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
  renderFavorieten(pokemonDetails);

  // Eventlisteners
  zoekbalk.addEventListener('input', applyFilters);
  typeFilter.addEventListener('change', applyFilters);
}
geefPokemonWeer();