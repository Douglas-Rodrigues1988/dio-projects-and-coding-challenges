# Sistema de Gerenciamento de Itens Mágicos

Este projeto apresenta um sistema que permite criar e gerenciar itens mágicos personalizados em um mundo cheio de aventuras e desafios. Cada item mágico tem atributos específicos e pode causar diferentes níveis de dano em combate, dependendo de seu tipo.

---

## Descrição

Você, como aventureiro, coleta diversos itens mágicos com atributos únicos. Este sistema ajuda a gerenciar esses itens, permitindo criar armas, armaduras, poções e outros objetos mágicos. Além disso, ele simula combates, calculando o dano causado por um item com base em seu tipo e atributos.

---

## Requisitos de Entrada e Saída

### Entrada

O programa solicita:
1. **Tipo do item mágico:** Uma string representando o tipo do item (e.g., "Espada", "Cajado", "Arco").
2. **Dano:** Um número inteiro representando o dano base do item.
3. **Resistência:** Um número inteiro representando a resistência do item.

### Saída

O programa exibe:
1. **Tipo do item:** O tipo fornecido pelo usuário.
2. **Dano:** O valor do dano base do item.
3. **Resistência:** O valor da resistência do item.
4. **Dano em combate:** O dano calculado com base no tipo do item.

#### Regras para cálculo do dano em combate:
- Se o tipo do item for "Arma", o dano é dobrado: `this.dano * 2`.
- Para outros tipos de itens, o dano em combate é igual ao dano base: `this.dano`.

---

## Exemplos de Entrada e Saída

| Entrada         | Saída                                                                 |
|------------------|----------------------------------------------------------------------|
| Espada, 200, 300 | Tipo: Espada<br>Dano: 200<br>Resistência: 300<br>Dano em combate: 200 |
| Cajado, 600, 800 | Tipo: Cajado<br>Dano: 600<br>Resistência: 800<br>Dano em combate: 600 |
| Arco, 900, 500   | Tipo: Arco<br>Dano: 900<br>Resistência: 500<br>Dano em combate: 900   |

---