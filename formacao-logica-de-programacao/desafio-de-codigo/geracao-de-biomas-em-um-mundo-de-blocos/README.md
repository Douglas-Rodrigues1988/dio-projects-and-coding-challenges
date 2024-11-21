# Mestre Construtor: Minerando Recursos

Este projeto simula a tarefa de minerar minérios em um mundo de blocos, onde o jogador utiliza uma picareta para golpear uma rocha e obter recursos valiosos. Cada golpe pode render diferentes tipos de minérios, e o programa informa os resultados de cada tentativa.

---

## Descrição

Você é um mestre construtor encarregado de explorar um bioma rico em recursos. Para coletar minérios, você precisará golpear uma rocha com sua picareta. A cada golpe, um tipo de minério será obtido de forma aleatória. Os minérios possíveis são:

- **1: Carvão**
- **2: Ferro**
- **3: Diamante**
- **4: Pedra**

O programa utiliza loops para simular cada golpe e exibe os resultados com base no número de golpes dados.

---

## Requisitos de Entrada e Saída

### Entrada

- Um número inteiro positivo representando a **quantidade de golpes** que você deseja dar com a picareta.

### Saída

- Para cada golpe, o programa exibe:

### Exemplos de Saída

| Entrada | Saída                              |
|---------|------------------------------------|
| 4       | 1: Carvao                          |
|         | 2: Ferro                           |
|         | 3: Diamante                        |
|         | 4: Pedra                           |
|---------|------------------------------------|
| 3       | 1: Carvao                          |
|         | 2: Ferro                           |
|         | 3: Diamante                        |
|---------|------------------------------------|
| 2       | 1: Carvao                          |
|         | 2: Ferro                           |

---

## Como Funciona

1. O programa solicita ao jogador que insira um número inteiro positivo para representar a quantidade de golpes.
2. Para cada golpe:
   - Um tipo de minério será gerado aleatoriamente (1 a 4).
   - O resultado será exibido no formato `[número_do_golpe]: [minério_obtido]`.

---

## Como Usar

1. Execute o programa.
2. Insira o número de golpes que deseja dar.
3. Observe os resultados exibidos para cada golpe.

---

## Personalização

- **Minérios adicionais:** É possível adicionar novos tipos de minérios ajustando o range de números gerados aleatoriamente e definindo os nomes correspondentes.
- **Probabilidades ajustáveis:** Caso deseje que certos minérios sejam mais raros, ajuste a lógica de geração aleatória.

---

Boa mineração, mestre construtor! Que os diamantes sejam abundantes!
