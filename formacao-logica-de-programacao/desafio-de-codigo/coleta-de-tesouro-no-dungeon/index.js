// Entrada de dados. Lembre-se: O parseInt(()) é importante para a conversão dos valores de entrada(String) para um valor numérico(int).
const totalSalas = parseInt(gets());
// Aqui temos uma demonstração de array com valores já predefinidos:
const salasComTesouro = [2, 4, 7];
const salasComMonstro = [3, 6, 8];

// Aqui temos uma forma de loop para percorrer cada sala da masmorra:
for (let sala = 1; sala <= totalSalas; sala++) {
    // Utilizamos o .includes() para verificar se um número está presente nos arrays:
    const temTesouro = salasComTesouro.includes(sala);
    const temMonstro = salasComMonstro.includes(sala);

    // Implementando as condições necessárias para verificar e exibir se há tesouro na sala e se há monstro na sala:
    if (temTesouro) {
        print("Tesouro na sala " + sala + "!");
    }
    if (temMonstro) {
        print("Monstro na sala " + sala + "!");
    }
}