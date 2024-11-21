let heroi;

class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar(tipoAtaque) {
        let ataque;
        switch (this.tipo) {
            case 'Mago':
                ataque = tipoAtaque === 'especial' ? 'Usou um feitiço poderoso' : 'Usou magia';
                break;
            case 'Guerreiro':
                ataque = tipoAtaque === 'especial' ? 'Desferiu um golpe devastador' : 'Usou espada';
                break;
            case 'Monge':
                ataque = tipoAtaque === 'especial' ? 'Realizou um movimento secreto' : 'Usou artes marciais';
                break;
            case 'Ninja':
                ataque = tipoAtaque === 'especial' ? 'Lançou uma bomba de fumaça' : 'Usou shuriken';
                break;
            default:
                ataque = 'Ataque desconhecido';
        }
        const message = `O ${this.tipo} atacou usando ${ataque}`;
        document.getElementById('attack-message').innerText = message;
    }
}

document.getElementById('create-hero-button').addEventListener('click', () => {
    const nome = document.getElementById('hero-name').value;
    const idade = document.getElementById('hero-age').value;
    const tipo = document.getElementById('hero-type').value;

    heroi = new Heroi(nome, idade, tipo);
    document.getElementById('hero-info').innerText = `Nome: ${heroi.nome}, Idade: ${heroi.idade}, Tipo: ${heroi.tipo}`;
    document.getElementById('attack-button').style.display = 'block'; // Exibe o botão de ataque
});

document.getElementById('attack-button').addEventListener('click', () => {
    if (heroi) {
        const tipoAtaque = document.getElementById('attack-type').value;
        heroi.atacar(tipoAtaque);
    }
});