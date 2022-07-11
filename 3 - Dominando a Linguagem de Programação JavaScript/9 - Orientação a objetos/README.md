# Orientação a Objetos

## Paradigmas

-   Imperativo : foca na resolução dos problemas
    -> Procedural
    -> Objeto orientado
    -> Processamento em paralelo
-   Declarativo:
    -> Lógico
    -> Funcional
    -> Database

Os programas são "objetos" que possuem uma série de propriedades.
**Pilares:**

-   Herança
-   Polimorfismo
-   Encapsulamento
-   Abstração

## Pilares da Orientação a Objetos

### Abstração

"Processo mental que consiste em isolar um aspecto determinado de eum estado de coisas relativamente complexo, a fim de simplificar a sua avaliação, classificação ou para permitir a comunicação do mesmo"

Ou seja, temos um problema complexo e tentamos **abstrair** para torná-lo simples.
Ex: Veículo -> Veículo de rodas -> carro
-> carro com duas portas
-> carro com 4 portas

### Herança

-   O objeto filho herda propriedades e métodos do objeto pai.

### Encapsulamento

-   Cada classe tem propriedades e métodos independentes do restante do código

### Polimorfismo

-   Objetos podem herdar a mesma classe pai, mas se comportarem de forma diferente quando invocamos seus métodos.

# OOJS - Oriented Object JavaScript

## Protótipos

Todos os objetos Javascript herdam propriedades e métodos de um prototype. O objeto Object.protoype está no topo desta cadeia.

## Classes

**- Syntatic Sugar**: uma sintaxe feita para facilitar a escrita;

-   Javascript não possui classes nativamente. Todas as classes são objetos e a herança se dá por protótipos

-   Construtor, getter e setter, super, método
