# Simulador de Ganho de XP

Este projeto apresenta um programa que simula o ganho de pontos de experiência (XP) após enfrentar e derrotar um monstro em um mundo mágico. O cálculo de XP considera o nível do monstro e a dificuldade da batalha, proporcionando recompensas maiores para desafios mais difíceis.

---

## Descrição

Você é um herói em um mundo mágico repleto de monstros e desafios. Sua missão é enfrentar inimigos e acumular pontos de experiência (XP) para se tornar um lendário campeão. 

O programa calcula a quantidade de XP ganhos ao derrotar um monstro com base na seguinte fórmula:

XP = nível_do_monstro * dificuldade_da_batalha * 100

### Componentes da Fórmula

- **nível_do_monstro (num1):** O nível do monstro enfrentado. Quanto maior o nível, mais XP você ganhará.
- **dificuldade_da_batalha (num2):** Um valor entre 1 e 100 que indica a dificuldade da batalha. Desafios mais difíceis resultam em maiores recompensas.
- **100 (multiplicador constante):** Um fator que determina a escala geral da recompensa de XP.

---

## Requisitos de Entrada e Saída

### Entrada

1. **Nível do Monstro:** Um número inteiro representando o nível do monstro.
2. **Dificuldade da Batalha:** Um número inteiro de 1 a 100 representando a intensidade do desafio.

### Saída

- A quantidade total de XP ganhos será exibida no formato:
Voce ganhou [quantidade] XP!

---

## Exemplos

### Entrada e Saída Esperadas

| Entrada              | Saída                     |
|----------------------|---------------------------|
| Nível: 45, Dificuldade: 40 | Voce ganhou 180000 XP! |
| Nível: 41, Dificuldade: 38 | Voce ganhou 155800 XP! |
| Nível: 15, Dificuldade: 20 | Voce ganhou 30000 XP!  |

---

## Como Usar

1. Execute o programa.
2. Insira os valores:
   - **Nível do Monstro**
   - **Dificuldade da Batalha**
3. O programa calculará e exibirá a quantidade de XP ganhos.

---

## Personalização

Sinta-se à vontade para ajustar os valores de entrada ou a fórmula para refletir diferentes estilos de batalha e recompensas.

---

Boa sorte em sua jornada para se tornar um campeão lendário!