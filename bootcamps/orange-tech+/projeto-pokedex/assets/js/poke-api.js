const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.order
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types  // Primeira posição array
    
    pokemon.types = types
    pokemon.type = type
    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
            .then((response) => response.json())
            .then(convertPokeApiDetailToPokemon)
}

pokeApi.getPokemons = (offset=0, limit=10) => {
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`

    return fetch(url)  // Requisição na API
        .then((response) => response.json())  // Converte para json
        .then((jsonBody) => jsonBody.results)  // Lista dos pokemons até limit
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail)) // Transf. lista p/ detail
        .then((detailRequests) => Promise.all(detailRequests))  // Faz e espera todas req.
        .then((pokemonDetails) => pokemonDetails)
}
