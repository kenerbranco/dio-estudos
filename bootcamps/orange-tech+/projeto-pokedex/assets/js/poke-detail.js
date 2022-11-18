function processParentMessage(objDetail = {}) {

    const pokemon = objDetail
    
    document.write(`
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Pokedex</title>
        
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500;700&display=swap" rel="stylesheet">
        
            <link rel="shortcut icon" href="assets/images/favicon.ico" type="image/x-icon">
            <link rel="stylesheet" href="assets/css/pokemon-detail.css">
        </head>
        <body>
            <main id="pokemonAbout">
                <div class="backPage">
                    <button id="voltar" type="button" onclick="location.href='index.html';">Voltar</button>
                </div>
            
                <h1>${pokemon.nome}</h1>
                <section class="types">
                    <div class="type">tipo 1</div>
                    <div class="type">tipo 2</div>
                </section>
                <p class="img">
                    <img src="${pokemon.foto}" alt="${pokemon.nome}">
                </p>
                <section class="stats">
                    <div class="about">
                        <h2>About</h2>
                        <ul class="listData">
                            <li>Id: ${pokemon.numero}</li>
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
            </main>
        
            <script src="assets/js/poke-detail.js"></script>
        </body>
        </html>
    `)
}
