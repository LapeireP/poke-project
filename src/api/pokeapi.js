export async function fetchPokemonData(offset = 0, limit = 151) {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
}