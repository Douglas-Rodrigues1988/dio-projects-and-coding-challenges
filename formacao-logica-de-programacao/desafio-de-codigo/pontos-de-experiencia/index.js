// Entrada de dados: lê o nível do monstro e a dificuldade da batalha
let num1 = parseInt(gets());  // Nível do monstro
let num2 = parseInt(gets());  // Dificuldade da batalha

// Calcula o XP ganho usando a fórmula num1 * num2 * 100
const xpGanho = num1 * num2 * 100;

// Saída: imprime a quantidade de XP ganho
print("Voce ganhou " + xpGanho + " XP!");