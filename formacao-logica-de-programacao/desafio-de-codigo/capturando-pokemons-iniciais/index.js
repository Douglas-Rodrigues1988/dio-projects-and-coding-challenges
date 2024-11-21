// Lê a escolha do treinador
let escolhaDoTreinador = parseInt(gets()); // Converte a entrada para um número inteiro
let pokemonEscolhido; 

// Implementa as condições para determinar qual Pokémon foi escolhido
if (escolhaDoTreinador === 1) {
    pokemonEscolhido = "Bulbasaur";
} else if (escolhaDoTreinador === 2) {
    pokemonEscolhido = "Charmander";
} else if (escolhaDoTreinador === 4) {
    pokemonEscolhido = "Pikachu";
} else if (escolhaDoTreinador === 5) {
    pokemonEscolhido = "Mewtwo";
} else {
    // Se a escolha não corresponder a nenhum Pokémon, podemos definir um valor padrão ou uma mensagem
    pokemonEscolhido = "Escolha inválida"; // Caso a entrada não esteja entre os valores válidos
}

// Imprime a mensagem de boas-vindas com o Pokémon escolhido
console.log("Voce escolheu o " + pokemonEscolhido + " como seu Pokemon inicial.");