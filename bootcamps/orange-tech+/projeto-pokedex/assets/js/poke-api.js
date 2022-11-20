const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types  // Primeira posição array
    
    pokemon.types = types
    pokemon.type = type
    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    // Incremento do desafio, + detalhes para "pokemon-detail.html"
    pokemon.height = pokeDetail.height / 10 // Convertido para cm
    pokemon.weight = pokeDetail.weight / 10 // COnvertido para Kg

    const abilities = pokeDetail.abilities.map((abilitySlot) => abilitySlot.ability.name)
    pokemon.abilities = abilities

    const stats = pokeDetail.stats.map((baseStat) => baseStat.base_stat)
    pokemon.stats = stats
    /* 
        Valores Array "pokemon.stats"

        posição 0 - valor hp
        posição 1 - valor attack
        posição 2 - valor defense
        posição 5 - valor speed
    */

    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
            .then((response) => response.json())
            .then(convertPokeApiDetailToPokemon)
}

pokeApi.getPokemons = (offset=0, limit=05) => {
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`

    return fetch(url)  // Requisição na API
        .then((response) => response.json())  // Converte para json
        .then((jsonBody) => jsonBody.results)  // Lista dos pokemons até limit
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail)) // Transf. lista p/ detail
        .then((detailRequests) => Promise.all(detailRequests))  // Faz e espera todas req.
        .then((pokemonDetails) => pokemonDetails)
}

/*
    Função Arrow (exemplo)
    .then((response) => response.json())

    Original
    .then(function(response) {
        return response.json()
    })
*/
