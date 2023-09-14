# Introduction

### HTTP Methods 

- GET : buscar informações no servidor
- POST : adicionar informação no servidor
- PUT : atualizar informações de um recurso por completo
- PATCH : atualizar uma informação específica
- DELETE : deletar uma informação 

<hr/>

### Stateful and Stateless

Stateful trabalha com memória local, o que acaba trazendo o risco de quando a aplicação parar, todos os dados serem perdidos. Diferentemente da Stateless que trabalha com armazenamentos externos, banco de dados e/ou arquivos de textos.

<hr/>

### Metadados/Headers

Tem como objetivo trazer configurações adicionais na nossa request e response, como por exemplo: 

```js
// restante do código...

if(method === 'GET' && url === '/users') {
  return res
  .setHeader('Content-type', '- application/json')
  .end(JSON.stringify(users))
}

// restante do código...
```

`Content-type` permite que possamos definir o tipo do conteúdo que enviaremos.
Entre vários tipos que podemos passar para `Content-type` são eles:

- Application
- Audio
- Image
- Multipart
- Text
- Video
- VND (Vendor-specific)

<hr/>

#### Application

- application/java-archive
- application/EDI-X12
- application/javascript
- application/xml
- application/pdf
- application/octet-stream
- application/ogg
- application/zip
- application/xhtml+xml
- application/x-shockwave-flash
- application/json
- application/x-www-form-urlencoded
- application/ld+json
- application/EDIFACT

#### Audio

- audio/mpeg
- audio/vnd.rn-realaudio
- audio/x-wav
- audio/x-ms-wma

#### Image

- image/gif
- image/tiff
- image/vnd.djvu
- image/jpeg
- image/svg+xml
- image/png
- image/x-icon
- image/vnd.microsoft.icon

#### Multipart

- multipart/mixed
- multipart/related
- multipart/form-data
- multipart/alternative

#### Text

- text/css
- text/javascript (obsolete)
- text/plain
- text/html
- text/xml
- text/csv

#### Video

- video/mpeg
- video/x-ms-wmv
- video/x-msvideo
- video/webm
- video/mp4
- video/x-flv
- video/quicktime

#### VND ( Vendor-specific ) 

- application/vnd.android.package-archive
- application/vnd.openxmlformats-officedocument.presentationml.presentation
- application/vnd.mozilla.xul+xml
- application/vnd.oasis.opendocument.text
- application/vnd.oasis.opendocument.presentation
- application/vnd.oasis.opendocument.spreadsheet
- application/vnd.ms-powerpoint
- application/vnd.oasis.opendocument.graphics
- application/vnd.ms-excel
- application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
- application/vnd.openxmlformats-officedocument.wordprocessingml.document
- application/msword

<hr/>

### Status code 

- **1xx (Informativo)** : A solicitação foi recebida, continuando o processo 
- **2xx (Bem sucedido)** : A solicitação foi recebida, compreendida e aceita com sucesso 
- **3xx (Redirecionamento)** : Outras ações precisam ser tomadas para concluir a solicitação 
- **4xx (Erro do cliente)** : A solicitação contém sintaxe incorreta ou não pode ser atendida 
- **5xx (erro do servidor)** : O servidor não conseguiu atender a uma solicitação aparentemente válida