const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords = 151
const limit = 6
let offset = 0

let childWindowHandle = null

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `
            <button type="button" onclick="clickPokemon('${pokemon.number}', '${pokemon.name}', '${pokemon.type}', '${pokemon.types}', '${pokemon.photo}')">
                <li class="pokemon ${pokemon.type}">
                    <span class="number">#${pokemon.number}</span>
                    <span class="name">${pokemon.name}</span>

                    <div class="detail">
                        <ol class="types">
                            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                        </ol>
                        
                        <img src="${pokemon.photo}" alt="${pokemon.name}">
                    </div>
                </li>
            </button>
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

// Extrai dados do pokemon selecionado e envia para page "pokemon-detail.html"
function clickPokemon(id, name, type, types, photo) {
    
    const pokemonDetail = {
        numero: id, 
        nome: name,
        tipo: type,
        tipos: types,
        foto: photo
    }

    childWindowHandle = window.open('pokemon-detail.html', '_self')
    childWindowHandle.processParentMessage(pokemonDetail)

}
    


