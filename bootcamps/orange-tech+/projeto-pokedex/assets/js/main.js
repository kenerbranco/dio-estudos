const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords = 151
const limit = 6
let offset = 0

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `
            <a href="pag002.html">
                <li class="pokemon ${pokemon.type}" onclick="clickPokemon('${pokemon.number}', '${pokemon.name}', '${pokemon.types[0]}', '${pokemon.types[1]}')">
                    <span class="number">#${pokemon.number}</span>
                    <span class="name">${pokemon.name}</span>

                    <div class="detail">
                        <ol class="types">
                            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                        </ol>
                        
                        <img src="${pokemon.photo}" alt="${pokemon.name}">
                    </div>
                </li>
            </a>  
        `).join('')
        
        pokemonList.innerHTML += newHtml
        // .map() = msm função do for, percorre todos results e adiciona numa lista
        // .map(value, index, array) = parâmetros da função
        // .map((pokemon) => convertPokemonToLi(pokemon)) == .map(convertPokemonToLi)
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit

    const qtdRecordsNextPage = offset + limit

    if (qtdRecordsNextPage >= maxRecords) {
        const newLimit = maxRecords - qtdRecordsNextPage
        loadPokemonItens(offset, limit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }

})
