# Rotas

### Separando as rotas

Para criar nossas rotas, iremos criar um novo arquivo `routes.js` nele irá conter um array com objetos que serão nossas rotas:

```js
import { Database } from './database.js';
import { randomUUID } from 'node:crypto';
import { json } from './middlewares/json.js';

const database = new Database()
export const routes = [
  {
    method: 'GET',
    path: '/users',
    handler: (req, res) => {
      const users = database.select("json:usuarios")

      return res
      .end(JSON.stringify(users))
    }
  },
  {
    method: 'POST',
    path: '/users',
    handler: (req, res) => {
      const { name, email } = req.body
     
      const users = {
        id: randomUUID(),
        name,
        email,
      }
      database.insert("json:usuarios", users)

      return res.writeHead(201).end()
    },
  }
]
```
Já no server apenas realizarmos a lógica seguinte, para que consigamos acessar as rotas:

```js
  // Restante do código...

  const { method, url } = req

  await json(req, res)
  const route = routes.find((route) => route.method === method && route.path === url)

  if (route) {
    return route.handler(req, res)
  } else {
    return res.writeHead(404).end('Not Found!')
  }

  // Restante do código...
```

Criamos uma variável `route` que irá **armazenar cada rota que possui o método que requisitamos**.

Com a seguinte condição, se possuímos `route` retornamos o `route.handler()` passando como parametro a `request` e `response` que já foi tratada pelo nosso middleware `json(req, res)`

#### Parameters

- **Query Parameters** - São todos os parametros que for passado após a rota sendo iniciado com uma `?` e o nome do parametro, esse tipo de parametro é utilizado apenas quando a url é `Stateful`, que seria uma url que poderá passar informações nos seus parametros que não sejam sensíveis, por exemplo:
  - Filtros
  - Paginação
  - Buscas
  ##### Exemplo de URL
  `http://localhost:8080/users?id=1`
<br>

- **Route Parameters** - Parametros não nomeados que também ficam na rota, por esse parametro não ser nomeado, utilizamos o conjunto de `método` com `parametro`, como exemplo, o método `DELETE` é comumente utilizado o *id* do usuário como um `Route Parameter` da seguinte forma `http://localhost:8080/users/${id}`.
  - Identificação de recursos.

- **Request Body** - É usado para envio de informações de formulários pelo frontend.

#### RegEx

```js
export function buildRoutePath(path) {
  const routeParametersRegex = /:([a-zA-Z]+)/

  return path.matchAll(routeParametersRegex)
}
```
`RegEx` estamos utilizando como uma forma de lidar com a validação do `id` que será mandado por meio do `Route Parameters`.

```js
export function buildRoutePath(path) {
  const routeParametersRegex = /:([a-zA-Z]+)/

  // String.replaceAll() 
  // Pega o Regex routeParametersRegex e troca por outro Regex, que será o Regex do id do usuário
  const pathWithParams = path.replaceAll(routeParametersRegex, '([a-z0-9\-_]+)')
  // ([a-z0-9\-_]+) 
  // Caracteres de a-z ou 0-9
  // \- Deve ter o -, deve colocar o contra-barra para barrar o - da separação que o Regex usa
  // _ tem que conter underline
  // + está indicado que deve conter mais do padrão definido => ([a-z0-9\-_])

  // ^ - indica que deve começar com o Regex que definimos
  // Caso não tenha será criado um Regex informando que nossa String contém e não começa
  const pathRegex = new RegExp(`^${pathWithParams}`)

  return pathRegex
}
```

Após a criação da Regex para podermos implementar ela devemos realizar o seguinte procedimento:

```js
{
  method: 'GET',
  path: buildRoutePath('/users'),
  handler: (req, res) => {
    const users = database.select("json:usuarios")

    return res
    .end(JSON.stringify(users))
  }
},
```

Devemos passar a função para cada `path` de cada `method`, para que possa realizar essa validação do Regex, como no exemplo a cima.

Como agora cada `path` terá um retorno de uma **Regex**, poderemos utilizar do método `RegExp.test()` para validar em cada url o Regex que passamos:

```js
const route = routes.find((route) => {
  return route.method === method && route.path.test(url)
})
```

Após isso nossa aplicação já estará funcionando. Mas podemos observar alguns detalhes como o retorno que esse Regex está nos trazendo.

```js
if (route) {
  const routeParams = req.url.match(route.path)

  console.log(routeParams)

  return route.handler(req, res)
}
``` 

O método `String.prototype.match()` irá usar a `Regex` que for passada como parametro, para validar se a `String` está válida, e irá retornar um `RegExpMatchArray`: 

```js
[
  '/users/6665d84d-9c5a-413a-afc2-5ee7b5b2bfcc',
  '6665d84d-9c5a-413a-afc2-5ee7b5b2bfcc',
  index: 0,
  input: '/users/6665d84d-9c5a-413a-afc2-5ee7b5b2bfcc',
  groups: [Object: null prototype] {
    id: '6665d84d-9c5a-413a-afc2-5ee7b5b2bfcc',
  }
]
```

Desse Array podemos retirar algumas informações como, o id do usuário no primeiro index e o caminho completo no index 0.
No objeto groups, podemos ver que foi nomeado como id o id do usuário, isso foi possível por conta do seguinte trecho do nosso Regex:

```js
const pathWithParams = path.replace(routeParametersRegex, '(?<$1>[a-z0-9\-_]+)')
```

No trecho `?<$1>` estamos pegando esse nome que passamos na url `path: buildRoutePath('/users/:id')` o `:id` foi passado como nome do que passamos na rota. Isso nos permite transformar em variáveis o que for passado na rota facilitando o entendimento, para quando houver mais rotas para frente como essa `/users/:id/groups/:groupId`.

#### Remover Usuário

Iremos criar um outro método na nossa class Database:

```js
delete(table, id) {
  const rowIndex = this.#database[table].findIndex((row) => row.id === id)

  if(rowIndex > -1) {
    this.#database[table].splice(rowIndex, 1)
    this.#persist()
  }
}
```

Pegamos o index do elemento que iremos remover do banco, se o `rowIndex` for maior que -1 removeremos com o método `splice()` passando o `index` e `deleteCount` que é quantidade de elementos que será removido, como parametro do método.
Após isso usamos o `persist()` para persistir no banco, modificando o banco e substituindo o arquivo para o mais recente.

Depois utilizamos o método: 

```js
{
  method: 'DELETE',
  path: buildRoutePath('/users/:id'),
  handler: (req, res) => {
    const { id } = req.params

    database.delete("json:usuarios", id)

    return res.writeHead(204).end()
  }
}
```

#### Atualizando usuários

Para atualizar usuários podemos seguir a mesma lógica do método `delete()` mudando apenas algumas coisas... criaremos o método `update()` que irá receber como parametro `table`, `id` e `data` com os dados passados pelo body. 

`this.#database[table][rowIndex] = { id, ...data }`

Instaciamos o banco passando o nome da tabela e o index do item dentro da tabela, e trocamos por um objeto contendo o id e o restante do data que será o `name` e `email`.

```js
update(table, id, data) {
  const rowIndex = this.#database[table].findIndex((row) => {
    return row.id === id 
  }) 

  if(rowIndex > -1) {
    this.#database[table][rowIndex] = { id, ...data }
    this.#persist()
  }
}
```

Por fim destruturamos o `req.body` pegando apenas o `name` e `email`.

```js
{
  method: 'PUT',
  path: buildRoutePath('/users/:id'),
  handler: (req, res) => {
    const { id } = req.params
    const { name, email } = req.body

    database.update("json:usuarios", id, {
      name,
      email,
    })

    return res.writeHead(204).end()
  }
},
```

#### Capturando Query Parameters

Primeiramente iremos utilizar do Regex para podermos capturar as querys

```js
const pathRegex = new RegExp(`^${pathWithParams}(?<query>\\?(.*))?$`)
```

Nessa Regex primeiramente criamos um grupo `(?<query>)` irá aparecer no console da seguinte forma `{ query: }`, depois fora do grupo `?$` a interrogação indica que é opcional essa Regex e o cifrão indica que não poderá ter nada além dessa Regex no final.

Adicionamos um contra barra `\\?` com a interrogação porque toda `Query Parameters` possui uma interrogação antes da variável, e por final `(.*)` . indicando qualquer caractere e * indicando inumeras vezes.

##### Capturando

Pegando uma query como referencia iremos fazer a seguinte, queremos separar elas para colocar cada uma dentro de um objeto que está dentro de um array.

```js
// ?search=Kaique&page=1

export function extractQueryParams(query) {
  return query.substring(1).split('&').reduce((queryParams, params) => {
    const [key, value] = params.split('=')
    
    queryParams[key] = value
    return queryParams
  }, {})
}
```

Pegamos a query damos um `substring(1)` que irá manter a string do primeiro index para frente, apagando qualquer caractere anterior. Depois damos um split na separação `&` que é usada quando temos duas query. 

Por fim daremos um `reduce()` que vai ter `queryParams` que será o objeto final que iniciaremos vazio, e params que será as querys como no nosso exemplo: `search=Kaique` e `page=1`.

Nesses `params` iremos dar um `split('=')` que irá apagar todos os operadores de atribuição e separar cada um em string, usaremos a destruturação de array para atribuir cada valor a uma variável, como `key` sendo da primeira string de cada query e assim sucessivamente, retornando no final o seguinte:

```js
// { key: value } 
{ 'search': 'Kaique' }
{ 'page': '1' }
```

#### Filtrando lista do banco de dados

```js
select(table, search) {
  let data = this.#database[table] ?? []
  // { 'name':'Kaique', 'email':'Kaique' } 
  if(search) {
    data = data.filter((row) => {
      return Object.entries(search).some(([key, value]) => {
        return row[key].toLowerCase().includes(value.toLowerCase())
      })
    })
  }

  return data
}
```

O `data` é nosso banco que é um array, iremos utilizar o método `filter()` para filtrar todos as linhas(Objetos) do nosso banco de dados que possuir o valor que está no `search` porém teremos que extrair apenas o valor desse search...

Transformamos o `search` em array, irá transformar o `key` e `value` em strings armazenados dentro de um array, utilizando o **método construtor** `entries()` que ficará da seguinte forma: 

```js
[ ['name', 'Kaique'], ['email', 'Kaique'] ]
```

Usaremos o método `some()` que irá percorrer o array, permitindo que nós transformamos os array de dentro em variáveis `key` e `value`, fazendo com que possamos retornar e se o `usuário(row)` com a chave `row[key]` possui incluído `includes(value)` o valor passando como parametro do método.

```js
// src/routes.js
  handler: (req, res) => {
    const { search } = req.query
    
    const users = database.select("json:usuarios", search ? {
      name: search,
      email: search,
    } : null)

    return res
    .end(JSON.stringify(users))
  }
// resto do código...
```

No arquivo de rotas iremos passar o `search` como definimos como parametro do método `select()`, e passaremos um objeto contendo em cada chave o valor search para que possamos buscar por cada informação do usuário. Após isso criamos uma condição para caso o retorno de search possa vir undefined, dizendo que se o search existir passe o objeto, caso não exista retorne `null`