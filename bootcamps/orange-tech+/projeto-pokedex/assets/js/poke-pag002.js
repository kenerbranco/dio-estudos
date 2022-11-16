function clickPokemon(id, name, typeOne, typeTwo = '', photo) {

    const pokemonNumber = id
    const pokemonName = name
    const pokemonTypeOne = typeOne
    const pokemonTypeTwo = typeTwo
    const pokemonPhoto = photo

}

function loadPage() {

    const pokemonHtml = document.getElementById('pokemonAbout')

    const newHtml = `
        <div class="backPage">
            <button id="voltar" type="button" onclick="location.href='index.html';">Voltar</button>
        </div>

        <h1>${pokemonName}</h1>
        <section class="types">
            <div class="type">${pokemonTypeOne}</div>
            <div class="type">${pokemonTypeTwo}</div>
        </section>
        <p class="img">
            <img src="${pokemonPhoto}" alt="${pokemonName}">
        </p>
        <section class="stats">
            <div class="about">
                <h2>About</h2>
                <ul class="listData">
                    <li>Id: ${pokemonNumber}</li>
                    <li>Height: 0.7cm</li>
                    <li>Weight: 6.9Kg</li>
                    <li>Abilities: Overgrow / Chlorophyl</li>
                </ul>
            </div>
            <div class="base">
                <h2>Base Stats</h2>
                <ul class="listData">
                    <li>
                        <div class="typeStats">HP</div>
                        <label for="hp">10</label>
                        <progress id="hp" value="10" max="100"></progress>
                    </li>
                    <li>
                        <div class="typeStats">Attack</div>
                        <label for="atk">20</label>
                        <progress id="atk" value="20" max="100"></progress>
                    </li>
                    <li>
                        <div class="typeStats">Defense</div>
                        <label for="def">30</label>
                        <progress id="def" value="30" max="100"></progress>
                    </li>
                    <li>
                        <div class="typeStats">Speed</div>
                        <label for="speed">40</label>
                        <progress id="speed" value="40" max="100"></progress>
                    </li>
                </ul>
            </div>
        </section>
    `
    pokemonHtml.innerHTML = newHtml
}
