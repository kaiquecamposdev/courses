## Testes Automatizados

**Unitários** -> Unidade da sua aplicação, irá isolar o teste apenas para uma feature específica.

**Integração** -> Comunicação entre duas ou mais unidades, iremos testar várias features ao mesmo tempo.

**e2e (End-Two-End)** -> Simulam um usuário utilizando nossa aplicação. Não dependem de nenhuma tecnologia para serem feitos.

### Pirâmide de testes

A pirâmide de testes utiliza a estratégia de realizar todos os teste porém em pequenas doses, seguindo a lógica de poucos teste e2e, mais testes de integração e muitos teste unitários.

### Criando primeiro teste e2e

Iremos utilizar uma ferramenta chamada vitest que possui uma perfomance maior do que o jest que é mais comum desenvolvedores utilizar, para realizar nos primeiros testes.

Para isso iremos simplesmente instalar:

```bash
npm i vitest -D
```

Criar uma pasta 

```md
.
└── ./src
   └── ./tests
      └─── ./example.spec.ts
```

Dentro dessa pasta já podemos criar nosso primeiro teste:

```ts
import { expect, test } from 'vitest'

test("O usuário consegue criar uma nova transação", () => {
  
  const responseStatus = 500

  expect(responseStatus).toEqual(201)
})
```

Primeiro parametro do test será o enunciado, segundo parametro será a ação que ele irá executar.

A lógica que podemos criar será caso a resposta dessa chamada HTTP que faremos for status igual 201 o teste foi validado. Para isso utilizamos o expect que será o esperado para após essa execução.

Para rodar o teste apenas executamos o comando `npx vitest` para que não fiquemos utilizando o comando npx vitest, podemos colocar no script o comando `test`:

```json
{
// restante do código...
"test": "vitest"
// restante do código...
}
```

Irá servir mais como uma forma de tornar nosso código mais semântico.

### Realizando uma chamada HTTP nos testes

Para que possamos iniciar os testes devemos destruturar a criação do nosso server da parte que cadastra os plugins, para que possamos criar outro server e não dê conflito com a porta do server em desenvolvimento/produção.

Sendo assim criaremos um arquivo `app.ts`

```ts
import { transactionsRoutes } from '@/routes/transactionsRoutes'
import cookie from '@fastify/cookie'
import fastify from 'fastify'

export const app = fastify()

app.register(cookie)
app.register(transactionsRoutes, {
  prefix: 'transactions',
})
```

Esse arquivo terá a cadastração de todos os nossos plugins. Dessa forma no `server.ts` precisaremos apenas importar nosso arquivo `app`.

Podendo nos testes trabalhar com o arquivo app sem que haja conflito com a porta do server da nossa aplicação.

```ts
import { app } from '@/app'
import request from 'supertest'
import { test } from 'vitest'

test("User can create a new transaction", async () => {
  await request(app.server)
    .post('/transactions')
    .send({
      title: 'New Transaction',
      type: 'debito',
      amount: 10000,
    }).expect(201)
})
```

Para que possamos realizar nossos testes sem que precisemos subir nosso server, utilizaremos uma lib chamada `supertest` que permite com que nós possamos fazer uma chamada na nossa API sem precisar subir o server.

Irá ocorrer um erro quando rodar um test retornando um 404 - Not Found. Porque isso ocorre?

Nossa API é assyncrona, ou seja, para que possamos realizar os testes devemos criar uma função que esperar o `app.ts` cadastre todos os nossos plugins e depois realizar os testes, e assim finalizar tirando a aplicação da memória para isso iremos utilizar o beforeAll e afterAll da biblioteca `supertest`:

```ts
import { app } from '@/app'
import request from 'supertest'
import { afterAll, beforeAll, test } from 'vitest'

beforeAll(async () => {
  await app.ready()
})

afterAll(async () => {
  await app.close()
})

test("User can create a new transaction", async () => {
  await request(app.server)
    .post('/transactions')
    .send({
      title: 'New Transaction',
      type: 'debito',
      amount: 10000,
    }).expect(201)
})
```

### Categorizando nossos testes

Utilizando o `describe` do `vitest` poderemos categorizar nossos testes de cada rota da nossa aplicação, exemplo:

```ts
import { app } from '@/app'
import request from 'supertest'
import { afterAll, beforeAll, test, describe } from 'vitest'

describe("Transactions routes", () => {
  beforeAll(async () => {
  await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  test("User can create a new transaction", async () => {
    await request(app.server)
      .post('/transactions')
      .send({
        title: 'New Transaction',
        type: 'debito',
        amount: 10000,
      }).expect(201)
  })
})
```

Isso tornar a forma de lidar com falhas nos testes algo mais semântico, podendo facilitar o entendimento de qual erro e qual teste falhou de qual rota, exemplo de um erro.

```bash
FAIL src/tests/example.spec.ts > Transactions routes > User can create a new transaction

Error: expected 400 "Bad Request", got 201 "Created"

# restante do erro..
```

**SEMÂNTICA**: No momento de realizar os testes podemos utilizar dois métodos o método test() e o métodos it(), ambos relizam a mesma ação porém o it() traz um padrão para todos seus enunciados, o que acaba entrando no conceito de semântica. exemplo: 

```ts
// Few Semantic
test("should be able to create a new a transactions")

// Most Semantic
it("should be able to create a new a transactions")
```

### Criando testes para listagem de transactions

Para que possamos listar todas as transactions iriamos precisar do cookie que é disponibilizado quando criamos uma transaction, com isso em mente a primeira solução que vem é de alguma forma a partir do teste de criação pegar o `session_id` para validar se já existe aquele usuário.

```ts
it.only("should be able to list the transactions", async () => {
  const createNewTransaction = await request(app.server)
      .post('/transactions')
      .send({
        title: 'New Transaction',
        type: 'credito',
        amount: 5000,
      })

  const cookies = createNewTransaction.get('Set-Cookie')

  const listTransactions = await request(app.server)
      .get('/transactions')
      .set('Cookie', cookies)
      .expect(200)
    
  expect(listTransactions.body.transactions).toEqual([
    expect.objectContaining({
      title: 'New Transaction',
      amount: 5000,
    })
  ])
})
```

Para que possamos buscar os cookies do usuário que criou a transaction, primeiro criamos a transaction e depois buscamos o `cookies`, com isso poderemos "setar" o cookie de pois fazer a listagem.

### Criando banco de testes 

Para que nosso banco não receba muitas linhas dos nossos testes, iremos criar um banco que será apenas para armazenar nossas criações ocasionadas pelo nossos testes.

Criaremos um arquivo chamado `.env.test` esse arquivo vai ficar responsável por ter as variáveis com o caminho de criação do banco de testes e a variável informando em que ambiente estamos:

```env
NODE_ENV="test"
DATABASE_PATH="./db/test.db"
```

No arquivo que definimos o schema para nossa `process.env`, adicionaremos a lógica caso nosso ambiente estiver em ambiente de teste, da seguinte forma:

```ts
if(process.env.NODE_ENV === 'test') {
  config({
    path: '.env.test'
  })
} else {
  config()
}
```

Informando o caminho que deverá está "linkado" a process.env, caso esteja em ambiente de teste.

Com essas configurações já podemos realizar nossos testes sem se preocupar com nosso banco de desenvolvimento enchendo.

Porém devemos adicionar uma função antes dos nossos testes, que ficará responsável por enviar no console os comandos para resetar nosso banco e depois criar novamente a cada teste que executarmos, isso também irá evitar duplicata de criações.