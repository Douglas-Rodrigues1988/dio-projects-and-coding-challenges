# Aventura na Masmorra

Este projeto apresenta um programa que simula uma jornada heróica por uma masmorra cheia de desafios e recompensas. Você percorrerá salas, enfrentará monstros e coletará tesouros, com o objetivo de superar todos os obstáculos e alcançar o final da masmorra.

---

## Descrição

O jogador se aventura por uma masmorra composta por um número específico de salas. Cada sala pode conter:
- **Tesouros**, que devem ser coletados.
- **Monstros**, que devem ser derrotados para continuar.

O programa percorre cada sala e verifica se há um tesouro ou um monstro, exibindo mensagens apropriadas para cada evento.

### Funcionalidade Principal

O programa utiliza a função `.includes()` do JavaScript para determinar se o número da sala atual está presente nos arrays `salasComTesouro` ou `salasComMonstro`. Estes arrays simulam as salas contendo tesouros e monstros, respectivamente.

---

## Requisitos de Entrada e Saída

### Entrada

- **Número total de salas:** Um número inteiro que define quantas salas existem na masmorra.

### Saída

- Para cada sala com um **tesouro**, o programa imprime:
Tesouro na sala X!

- Para cada sala com um **monstro**, o programa imprime:
Monstro na sala X!

---

## Exemplos

### Entrada e Saída Esperadas

| Entrada | Saída                                  |
|---------|----------------------------------------|
| 3       | Tesouro na sala 2!                    |
|         | Monstro na sala 3!                    |
|---------|----------------------------------------|
| 4       | Tesouro na sala 2!                    |
|         | Monstro na sala 3!                    |
|         | Tesouro na sala 4!                    |
|---------|----------------------------------------|
| 2       | Tesouro na sala 2!                    |

---

## Como Usar

1. Execute o programa.
2. Insira o número total de salas que deseja explorar.
3. Visualize as mensagens indicando tesouros e monstros em cada sala.

---

## Personalização

Sinta-se à vontade para modificar os arrays `salasComTesouro` e `salasComMonstro` para testar diferentes configurações da masmorra.

---

Boa sorte na busca pelas recompensas lendárias!