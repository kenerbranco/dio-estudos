
function convertPokemonTypesToLi(pokemonTypes) {
    return pokemonTypes.map((typeSlot) => `<li class="type">${type}</li>`)
}

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type">${type}</li>`).join('')}
                </ol>
                
                <img src="${pokemon.photo}" alt="${pokemon.name}">
            </div>
        </li>
    
    `
}

const pokemonList = document.getElementById('pokemonList')

pokeApi.getPokemons().then((pokemons = []) => {
    
    pokemonList.innerHTML = pokemons.map(convertPokemonToLi).join('')
    // .map() = msm função do for, percorre todos results e adiciona numa lista
    // .map(value, index, array) = parâmetros da função
    // .map((pokemon) => convertPokemonToLi(pokemon)) == .map(convertPokemonToLi)

})
