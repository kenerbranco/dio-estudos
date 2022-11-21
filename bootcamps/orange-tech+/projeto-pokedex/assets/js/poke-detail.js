function processParentMessage(objDetail = {}) {

    const pokemon = objDetail
    const pokemonTipos = [pokemon.tipoUm, pokemon.tipoDois]

    if (pokemon.habilidadeDois == 'undefined') {
        pokemon.habilidadeDois = 'NA'
    }
    
    if (pokemonTipos[1] == 'undefined') {
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
                <main class="pokemonAbout ${pokemonTipos[0]}">
                    <div class="backPage">
                        <button id="voltar" type="button" onclick="location.href='index.html';">Voltar</button>
                    </div>
                
                    <h1>${pokemon.nome}</h1>
                    <section class="types">
                        <div class="type ${pokemonTipos[0]}">${pokemonTipos[0]}</div>
                    </section>
                    <p class="img">
                        <img src="${pokemon.foto}" alt="${pokemon.nome}">
                    </p>
                    <section class="stats">
                        <div class="about">
                            <h2>About</h2>
                            <ul class="listData">
                                <li>Id: ${pokemon.numero}</li>
                                <li>Height: ${pokemon.altura}m</li>
                                <li>Weight: ${pokemon.peso}Kg</li>
                                <li class="abilities">Abilities: ${pokemon.habilidadeUm} / ${pokemon.habilidadeDois}</li>
                            </ul>
                        </div>
                        <div class="base">
                            <h2>Base Stats</h2>
                            <ul class="listData">
                                <li>
                                    <div class="typeStats">HP</div>
                                    <label for="hp">${pokemon.hp}</label>
                                    <progress id="hp" value="${pokemon.hp}" max="150"></progress>
                                </li>
                                <li>
                                    <div class="typeStats">Attack</div>
                                    <label for="atk">${pokemon.atk}</label>
                                    <progress id="atk" value="${pokemon.atk}" max="150"></progress>
                                </li>
                                <li>
                                    <div class="typeStats">Defense</div>
                                    <label for="def">${pokemon.def}</label>
                                    <progress id="def" value="${pokemon.def}" max="150"></progress>
                                </li>
                                <li>
                                    <div class="typeStats">Speed</div>
                                    <label for="speed">${pokemon.vel}</label>
                                    <progress id="speed" value="${pokemon.vel}" max="150"></progress>
                                </li>
                            </ul>
                        </div>
                    </section>
                </main>
            
                <script src="assets/js/poke-detail.js"></script>
            </body>
            </html>
        `)
    } else {
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
                <main class="pokemonAbout ${pokemonTipos[0]}">
                    <div class="backPage">
                        <button id="voltar" type="button" onclick="location.href='index.html';">Voltar</button>
                    </div>
                
                    <h1>${pokemon.nome}</h1>
                    <section class="types">
                        ${pokemonTipos.map((tipo) => `<div class="type ${tipo}">${tipo}</div>`).join('')}
                    </section>
                    <p class="img">
                        <img src="${pokemon.foto}" alt="${pokemon.nome}">
                    </p>
                    <section class="stats">
                        <div class="about">
                            <h2>About</h2>
                            <ul class="listData">
                                <li>Id: ${pokemon.numero}</li>
                                <li>Height: ${pokemon.altura}m</li>
                                <li>Weight: ${pokemon.peso}Kg</li>
                                <li class="abilities">Abilities: ${pokemon.habilidadeUm} / ${pokemon.habilidadeDois}</li>
                            </ul>
                        </div>
                        <div class="base">
                            <h2>Base Stats</h2>
                            <ul class="listData">
                                <li>
                                    <div class="typeStats">HP</div>
                                    <label for="hp">${pokemon.hp}</label>
                                    <progress id="hp" value="${pokemon.hp}" max="150"></progress>
                                </li>
                                <li>
                                    <div class="typeStats">Attack</div>
                                    <label for="atk">${pokemon.atk}</label>
                                    <progress id="atk" value="${pokemon.atk}" max="150"></progress>
                                </li>
                                <li>
                                    <div class="typeStats">Defense</div>
                                    <label for="def">${pokemon.def}</label>
                                    <progress id="def" value="${pokemon.def}" max="150"></progress>
                                </li>
                                <li>
                                    <div class="typeStats">Speed</div>
                                    <label for="speed">${pokemon.vel}</label>
                                    <progress id="speed" value="${pokemon.vel}" max="150"></progress>
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
}
