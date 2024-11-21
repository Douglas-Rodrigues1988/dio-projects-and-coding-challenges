// Lê a quantidade de golpes informada pelo usuário. 
const quantidadeGolpes = parseInt(gets());

// Defina aqui os tipos de minerais Carvao, Ferro, Diamante e Pedra
let minerais = ["Carvao", "Ferro", "Diamante", "Pedra"];

// Loop para cada golpe, de 1 até a quantidade informada
for (let i = 1; i <= quantidadeGolpes; i++) {
  // Calcula o índice do mineral usando o operador de módulo (%) para garantir que o índice esteja dentro do tamanho do array
  let minaIndex = (i - 1) % minerais.length; // Corrigido para começar do índice 0
  
  // Agora exiba o índice i, concatene com o caractere ":", após, concatene com tipo de minerais[minaIndex]:
  print(i + ": " + minerais[minaIndex]);
}