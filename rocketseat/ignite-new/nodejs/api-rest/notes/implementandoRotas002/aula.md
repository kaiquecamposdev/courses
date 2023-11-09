## Criando cookies

Para que podemos facilitar o acesso do usuário na nossa aplicação utilizamos os cookies, o que são os cookies?

Cookies são uma forma do back-end guardar informações necessárias do usuário para o acesso a nossa API através de um id. Com fastify para que possamos criar nosso primeiro cookie devemos instalar a biblioteca `@fastify/cookie`, seguindo com a instalação:

```bash
npm i @fastify/cookie
```

Logo após a instalação já podemos integrar na nossa api.

No arquivo de criação do nosso server, e registramos o plugin cookies. 

```ts
import cookie from '@fastify/cookie'

// restante do código...

app.register(cookie)

// restante do código...
```

Com o plugin cookie integrado, já podemos criar cookies onde iremos precisar, no caso será na rota criação de uma transactions. 

No nossa esquema do banco deixamos uma coluna session_id, essa coluna será onde iremos armazenar o id do nosso cookie para cada usuário.

```ts
// restante do código...

let session_id = req.cookies.session_id

if(!session_id) {
  session_id = randomUUID()
  res.cookie('session_id', session_id, {
    path: '/',
    maxAge: 1000 * 60 * 60 * 24 * 7 // 7 days
  })
}

// restante do código...
```

Nessa lógica armazenamos o session_id o id do nosso cookie, porém se não existir session_id irá receber um randomUUID(), que será a forma de verificamos se existe o cookie, e depois enviamos o cookie referenciando session_id, nas configurações do cookie iremos passar `path` indicando qual rota o cookie poderá atuar, e também um `maxAge` sendo o tempo de expiração do cookie passando para seu valor utilizando as boas práticas do Clean Code, como sendo 7 dias de duração.

Com isso já podemos utilizar o cookie e nossas consultas no banco por exemplo:

```ts
const summary = await knexDb('transactions')
  .where('session_id', req.cookies.session_id)
  .sum('amount', { as: 'amount' })
  .first()
```

Porém para que esse cookie sejá validado deveremos utilizar uma função chamada Middleware, que possui a função de verificar um requisito antes de bater na rota da nossa aplicação.

No fastify para que possamos utilizar dessa função devemos passar um objeto de opções antes da rota dessa forma:

```ts
app.get('/summary', 
  { 
    preHandler: checkSessionIdExist 
  }, async (req, res) => {

    // restante do código...

  })
```

E esse middleware vai realizar o que sugere seu nome, checar se o session_id que é o ID do nosso cookie, se ele existe:

```ts
import { FastifyReply, FastifyRequest } from "fastify";

export async function checkSessionIdExist(req: FastifyRequest, res: FastifyReply) {
  const { session_id } = req.cookies

  if(!session_id) {
    return res.status(401).send({
      error: 'Unauthorized',
    })
  }
}
```

Caso não existe retorna status 401 - Unauthorized