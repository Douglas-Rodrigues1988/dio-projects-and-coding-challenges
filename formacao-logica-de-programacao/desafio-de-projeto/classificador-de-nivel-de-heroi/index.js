const readline = require('readline');

// Criando interface para leitura de dados
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para obter o nome e a experiência do usuário
rl.question('Digite o nome do herói: ', (nome) => {
    rl.question('Digite a quantidade de XP do herói: ', (xp) => {
        let experiencia = parseInt(xp); // Converte a entrada para um número
        let nivel;

        // Verifica se a entrada de XP é um número válido
        if (isNaN(experiencia)) {
            console.log("Por favor, insira um número válido para a quantidade de XP.");
            rl.close();
            return;
        }

        // Estrutura de decisão para determinar o nível
        if (experiencia < 1000) {
            nivel = "Ferro";
        } else if (experiencia >= 1001 && experiencia <= 2000) {
            nivel = "Bronze";
        } else if (experiencia >= 2001 && experiencia <= 5000) {
            nivel = "Prata";
        } else if (experiencia >= 5001 && experiencia <= 7000) {
            nivel = "Ouro";
        } else if (experiencia >= 7001 && experiencia <= 8000) {
            nivel = "Platina";
        } else if (experiencia >= 8001 && experiencia <= 9000) {
            nivel = "Ascendente";
        } else if (experiencia >= 9001 && experiencia <= 10000) {
            nivel = "Imortal";
        } else {
            nivel = "Radiante";
        }

        // Exibindo a mensagem final
        console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);

        // Fechando a interface
        rl.close();
    });
});