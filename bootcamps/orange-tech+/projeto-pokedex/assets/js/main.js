const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords = 151
const limit = 6
let offset = 0

let childWindowHandle = null

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `
            <button type="button" class="buttonPokemon" onclick="clickPokemon('${pokemon.number}', '${pokemon.name}', '${(pokemon.types[0])}', '${(pokemon.types)[1]}', '${pokemon.photo}', '${pokemon.height}', '${pokemon.weight}', '${(pokemon.abilities)[0]}', '${(pokemon.abilities)[1]}', '${(pokemon.stats)[0]}', '${(pokemon.stats)[1]}', '${(pokemon.stats)[2]}', '${(pokemon.stats)[5]}')">
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
function clickPokemon(id, name, typeOne, typeTwo = '', photo, height, weight, abilityOne, abilityTwo, statHp, statAtk, statDef, statSpd) {
    
    const pokemonDetail = {
        numero: id, 
        nome: name,
        tipoUm: typeOne,
        tipoDois: typeTwo,
        foto: photo,
        altura: height,
        peso: weight,
        habilidadeUm: abilityOne,
        habilidadeDois: abilityTwo,
        hp: statHp,
        atk: statAtk,
        def: statDef,
        vel: statSpd 
    }

    childWindowHandle = window.open('pokemon-detail.html', '_self')
    childWindowHandle.processParentMessage(pokemonDetail)

}
    


