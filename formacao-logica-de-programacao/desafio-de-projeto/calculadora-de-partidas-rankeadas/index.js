function calcularNivel(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    let nivel;

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    // Exibe o resultado no front-end
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `O Herói tem de saldo de ${saldoVitorias} e está no nível de ${nivel}`;
}

// Adiciona um evento ao botão para calcular o nível
document.getElementById("calcular").addEventListener("click", function() {
    const vitorias = parseInt(document.getElementById("vitorias").value);
    const derrotas = parseInt(document.getElementById("derrotas").value);
    
    calcularNivel(vitorias, derrotas);
});