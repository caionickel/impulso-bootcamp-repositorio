## HTTP Request

-   Texto em ASCII
-   Estrutura:

```
Get:/somedir/page.html HTTP/1.1
Host: www.someschool.edu
Connection: close
User-agent: Mozilla/5.0
Accept-laanguage:fr
```

-   Metodos mais utilizados:

    -   GET
    -   POST

-   Outros metodos:

    -   GET -> solicita um recurso do servidor
    -   HEAD -> GET sem corpo de resposta
    -   POST -> submete uma entidade a um recurso
    -   PUT -> substituição de recursos pelos dados da requisição
    -   DELETE -> remoção de um recurso
    -   TRACE -> chamada de loop-back a um determinado recurso
    -   OPTION -> opções de comunicação com recurso
    -   CONNECT -> tunelamento identificadoo pelo recurso
    -   PATCH - modificação parcial

-   GET/POST/Option -> Metodos seguros por serem Readonly
    -   Metodo seguro: é considerado seguro quando não há modificação expressa por ordem do cliente;

## HTTP Response

```
HTTP/1.1 200 OK
Connection: close
Date: Tue,09 Aug 2011 15:44:04 GMT
Server: Apache/2.2.3(CentOS)
Last-Modified:Tue, 09 Aug 2011 15:11:03 GMT
Content-Length: 6821
Content-Type: text/html
(data, data, ...)
```

-   Tipos de Response:
    -   200 OK: request bem sucedida e objeto enviado;
    -   301 Moved Permanently: objeto realocado nova URL no campo Location;
    -   400 Bad Request: resposta genérica - servidor não entendeu a mensagem;
    -   404 Not found: o documento solicitado é inexistente;
    -   505 HTTP Version Not Supported: versão do protocolo não suportada pelo servidor

### Classificação dos Status Code

    - Information Response (100 - 199)
    - Successful response (200 - 299)
    - Redirection response (300 - 399)
    - Client error response (400 - 499)
    - Server error response (500 - 599)

-   WebDav (Web Distributed Authoring and Versioning)
    -   102 - Processing
    -   207 - Multi-status
    -   208 - Already Reported
    -   422 - Unprocessable Entity
    -   423 - Locked
    -   424 - Failed Dependency
