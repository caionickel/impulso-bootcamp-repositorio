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

```const myPromise = new Promise((resolve, reject) => {window.setTimeout(() => { resolve('Resolvida')}, 2000)
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
