# Definição JavaScript Assíncrono

-   Assíncrono -> "Que não ocorre ou não se efetiva ao mesmo tempo";
    **- O JavaScript roda de maneira síncrona;**

## Promises

-   Objeto de de processamento assíncrono;
-   Inicialmente, seu valor é desconhecido. Ela pode, então, ser **resolvida** ou **rejeitada**.
-   Uma promise pode ter 3 estados
    1 - Pending
    2 - Fullfilled
    3 - Rejected

-   Ex:
    `const myPromise = new Promise((resolve, reject) => {window.setTimeout(() => { resolve(console.log('Resolvida')) }, 2000) })`

### Promises - manipulação

```
const myPromise = new Promise((resolve, reject) => {window.setTimeout(() => { resolve('Resolvida')}, 2000)
})

await myPromise.then((result) => result + ' passando pelo then')
.then((result) => result + ' e agora acabou!')
.catch((err) => console.log(err.message))

//Após 2 segundos, retornará o valor
//"Resolvida, passando pelo then e agora acabou!"
```

### - Async/await

-   Funções assíncronas precisam dessas duas palavras chave

```
    async function resolvePromise() {
        const myPromise = new Promise((resolve, reject) => {window.setTimeout(() => { resolve('Resolvida')}, 3000)
        })

        const resolved = await myPromise.then((result) => result + ' passando pelo then'
        .then((result) => result + ' e agora acabou!')
        .catch((err) => console.log(err.message))

        return resolved
    }
```

# Definição API

## O que são APIS?

-   Aplication Programming Interface
    -   Uma API é uma forma de intermediar os resultados do back-end com o que é apresentado no front-end;
    -   É possível acessá-la por meio doe URLS;
    -   É muito comum que APIs retornem seus dados no formato .json, portanto preciamos tratar esses dados quando os recebermos;
    -   JSON -> JavaScript Object Notation;

## Fetch

### Consumindo APIs

```
fetch(url, options)
    .then(response => response.json())
    .then(json => console.log(json))

// retorna uma Promise
```

Operações no banco (POST, GET, PUT, DELETE, etc)

```
fetch('https://endereco-api.com/', {
    method: 'GET',
    cache: 'no-cache',
})
    .then(response => response.json())
    .then(json => console.log(json))

// retorna uma Promise
```

```
fetch('https://endereco-api.com/', {
    method: 'POST',
    cache: 'no-cache',
    body: JSON.stringify(data)
})
    .then(response => response.json())
    .then(json => console.log(json))

// retorna uma Promise
```
