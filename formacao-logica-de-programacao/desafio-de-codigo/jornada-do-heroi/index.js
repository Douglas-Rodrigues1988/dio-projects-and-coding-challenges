// Função para simular a jornada do herói
function jornadaHeroi() {
    // Lê a posição inicial do herói
    const posicaoInicial = parseInt(gets());
    // Lê o número total de passos que o herói deve dar
    const totalPassos = parseInt(gets());

    // Calcula a posição final do herói
    const posicaoFinal = posicaoInicial + totalPassos;

    // Imprime a posição final do herói
    print("Posicao final do heroi:", posicaoFinal);
}

// Chama a função para executar o algoritmo
jornadaHeroi();