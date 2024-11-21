// Definindo a função "combinandoNomesPokemons" que recebe um parâmetro chamado (palavra)
function combinandoNomesPokemons(palavra) {
    // Criando a variável "palavraPokemon" com a concatenação
    var palavraPokemon = palavra + "saur"; // Concatenando a palavra com "saur"
    
    // Retornando a palavra pokemon
    return palavraPokemon; // Retornando a nova palavra
}

// Entrada da palavra usando o gets():
var nomeEntrada = gets();

// Chamando a função "combinandoNomesPokemons" com o nome pokemon informado e armazenando o resultado na variável "palavraGerada":
var palavraGerada = combinandoNomesPokemons(nomeEntrada);

// Exibindo a palavra gerada:
print(palavraGerada);