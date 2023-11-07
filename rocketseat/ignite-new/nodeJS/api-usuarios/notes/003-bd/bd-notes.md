# Banco de dados

### Criando banco de dados em JSON

Para que nossas mudanças sejam salvas utilizaremos um banco de dados em JSON, que será em um arquivo fisico para facilitar nosso desenvolvimento.

```js
class Database {
  #database = {}

  select(table) {
    const data = this.#database[table] ?? []

    return data
  }
  insert(table, data) {
    if(Array.isArray(this.#database[table])) {
      this.#database[table].push(data);
    } else {
      this.#database[table] = [data]
    }

    return data;
  }
}
```

Criamos uma classe `Database` e instanciamos o objeto `database`, que será posteriormente transformado em `array` para armazenar nossos **usuários** em `objeto`.

Para isso criamos os seguintes métodos:

```js
select(table) {
    const data = this.#database[table] ?? []

    return data
  }
```

`select` será responsável por nos fornecer o banco para podermos visualizarmos os dados inseridos nele, o método `select` seria um método do tipo **getter**, o atributo `table` será uma `string` que será o nome da tabela.

Criamos uma `const data` instanciando o nosso banco, e caso a `table` exista dentro de `database` armazena em `data`, caso contrário armazena um array vazio.

Proximo método é:

```js
insert(table, data) {
    if(Array.isArray(this.#database[table])) {
      this.#database[table].push(data);
    } else {
      this.#database[table] = [data]
    }

    return data;
  }
```

O método `insert` entra como um método **setter**, que com os dois atributos **table** como uma `string` trazendo o nome da tabela que irá inserir os dados, e `data` no tipo de `objeto`

#### Executando os métodos

Para executar os métodos na nossa aplicação podemos fazer da seguinte forma 

```js
import { Database } from './database.js';

const database = new Database()

const server = http.createServer(async (req, res) => {
  const { method, url } = req

  await json(req, res)

  if(method === 'GET' && url === '/users') {
    const users = database.select("json:usuarios")

    return res
    .end(JSON.stringify(users))
  }

  if(method === 'POST' && url === '/users') {
    const { name, email } = req.body
     
    const users = {
      id: randomUUID(),
      name,
      email,
    }
    database.insert("json:usuarios", users)

    return res.writeHead(201).end()
  }

  return res.writeHead(404).end('Not Found!')
})
```

Importamos o `Database` *devemos colocar na class o **export class** para conseguimos realizar o **import***, após isso instaciamos o `Database` com o operador new do método contructor. 

Já na requisição do método `POST` inserimos uma tabela com o nome `"json:usuarios"` passando o novo usuário `users`, no método `GET` criamos uma variável users e chamado a tabela passando o nome `"json:usuarios"` que é o nome da nossa tabela, no método que criamos no `database` o método `select()`

#### Encapsulamento no NodeJS

Para que a nossa variável database não seja compartilhada com outras classes ou arquivos dentro da nossa aplicação, podemos utilizar o caractere coringa `#` antes do seu nome, para que o escopo seja compartilhado apenas com o escopo da classe pai

#### Persistindo banco de dados

Para que possamos trabalhar com arquivos no node devemos importar uma lib do próprio node chamada `fs` ou `fs/promises`, optamos por utilizar a `fs/promises` por estarmos utilizando promises nas nossas lógicas. 

```js
import fs from 'node:fs/promises'

const databasePath = new URL("../db.json", import.meta.url)

export class Database {
  #database = {}

  constructor() {
    fs.readFile(databasePath, "utf-8").then((data) => {
      this.#database = JSON.parse(data)
    })
    .catch(() => {
      this.#persist()
    })
  }

  #persist() {
    fs.writeFile(databasePath, JSON.stringify(this.#database))
  }

  this.#persist();
}
```

Criaremos o método **privado** `#persist()` que será o método que irá persistir em arquivar os dados que passarmos para o nosso banco de dados. 
Utilizando o método `fs.writeFile()`. Esse método pede como primeiro parametro *o caminho que será criado o arquivo*, e no segundo parametro *os dados que serão prescritos para o arquivo criado em formato `JSON`*.

Foi utilizado no formato do caminho o contrutor `URL` junto do caminho do objeto `import.meta.url`:

```js
const databasePath = new URL("../db.json", import.meta.url)
```

Primeiro parametro será o nome do arquivo que iremos criar, e o segundo parametro a url completa da nossa máquina até o arquivo atual.

No contructor da nossa class:

```js
constructor() {
  fs.readFile(databasePath, "utf-8").then((data) => {
    this.#database = JSON.parse(data)
  })
  .catch(() => {
    this.#persist()
  })
}
```

O método `fs.readFile()` pede como primeiro parametro o *caminho do arquivo* e o segundo parametro o *tipo de enconding*. 
Como iremos ler o arquivo como o método diz, ele virá como uma promise que para acessarmos deveremos utilizar o `then` e *parsear* o data para o `#database` poder receber esses dados.
Na tratativa de erro iremos instaciar o método `#persist()` mesmo com o banco vazio, para que o banco seja mostrado mesmo sendo vazio.



