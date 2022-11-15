function clickPokemon(id, name, typeOne, typeTwo = '') {
    const pokemonNumber = id
    const pokemonName = name
    const pokemonTypeOne = typeOne
    const pokemonTypeTwo = typeTwo

    window.alert(`Id: ${pokemonNumber}, Nome: ${pokemonName}, Tipo01: ${pokemonTypeOne}, Tipo02: ${pokemonTypeTwo}`)
}