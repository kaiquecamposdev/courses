# Métodos de Requisições 

- GET -> Leitura
- POST -> Criação
- PUT -> Atualização Completa
- DELETE -> Deleção
- PATCH -> Atualização Parcial 

## HTTP codes

- 1XX -> Informativo - solicitação aceita ou o processo continua em andamento

- 2XX -> Confirmação
  - 200 -> requisição bem sucedida
  - 201 -> created - foi criado mas não retorna um body

- 3XX -> Redirecionamento
  - 301 -> Moved Permanently
  - 302 -> Moved

- 4XX -> Erros do cliente
  - 400 -> Bad Request
  - 401 -> Unauthorized
  - 403 -> Forbidden
  - 404 -> Not Found
  - 422 -> Unprocessable Entity

- 5XX -> Erro no servidor - Servidor falhou ao concluir a solicitação
  - 500 -> Internal Server Error
  - 502 -> Bad Gateway

## Paramêtros das requisições

### Header Params

- Parametros que vão no cabeçalho da requisição
  - method
  - token
  - path

### Query Params

- Paramêtros inseridos no final de uma URL
  - http://endereco.com/api/v1/users?page=2&limit=50
  - Chave = page e limit
  - Valor = 2 e 50
  - Separação = &

- Route Params
  - http://endereco.com/v1/users/{id}
  - Usado para fazer buscas

### Body Params

- Quando é enviado informações pelo corpo da requisição

#### Boas práticas 

- Utilização correta dos métodos http
- Utilização dos status corretos no retorno das respostas
- Padrão de nomenclatura:
  - Busca de usuário -> GET
    - http://endereco.com/api/v1/users 

  - Busca de usuário por id -> GET
    - http://endereco.com/api/v1/users/1 

  - Busca de endereço do usuário -> GET
    - http://endereco.com/api/v1/users/1/address

  - Deleção de usuário passando o id -> DELETE
    - http://endereco.com/api/v1/users/1 

  - Atualização do status do usuário -> PATCH
    - http://endereco.com/api/v1/users/1/status