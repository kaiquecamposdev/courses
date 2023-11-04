# knex.

Uma forma para lidarmos com o acesso ao banco de dados será com o query builder knex, que além de facilitar o acesso ao banco para acelerarmos o processo de aprendizado, iremos utilizar da sintaxe do SQL dentro do nosso código.

```ts
interface User {
  id: number
  name: string
  age: number
}

knex('users')
  .where('id')
  .first()

knex<User>('users')
  .where('id', 1)
  .first()
```

Quando utilizamos um query builder, a sintaxe será reaproveitada em todos os bancos de dados, só precisaremos trocar a url de conexão e o knex irá conseguir integrar e entender qualquer banco de dados que tiver na lista da documentação do knex.

### Configurando knex.

Instalação do knex: 

```bash
  npm i knex sqlite3
```

Instalamos o knex e o driver do banco que iremos utilizar, e após isso criaremos a configuração do knex dentro de `./src/database.ts`

```ts
// ./src/database.ts
import knex from 'knex'

export const knexDb = knex({
  client: 'sqlite',
  connection: {
    filename: './tmp/app.db',
  },
  useNullAsDefault: true,
})
```

Passamos um objeto de configurações informando qual o banco que utilizaremos `client: sqlite` e onde será a conexão, passamos um objeto contendo `filename: './tmp/app.db'` que será onde vai se localizar o nosso banco. Passamos o `useNullAsDefault: true` para que como default seja passado `null` como valor de cada propriedade do banco. 

Para testarmos se o banco está funcionando enviamos uma requisição para uma tabela que sempre é gerada pelo próprio knex como dafault:

```ts
app.get('/', async () => {
  const tables = await knexDb('sqlite-schema').select('*')

  return tables
})
```

### Primeira Migration

Criaremos um script que irá executar o binário do knex utilizando o tsx, da seguinte forma:

```bash
node --no-warnings --loader tsx ./node_modules/.bin/knex
```

O comando `--no-warnings` que irá tirar todos os warnings que o node dá, agora podemos utilizar o comando para testar o knex:

```bash
npx knex -- -h
```

Irá listar todos os comandos possíveis para utilizar com knex.

Depois disso vamos utilizar o comando, para criar as migrations: 

```bash
npm run knex migrate:make create-documents
```

A pasta migrations está sendo criada na pasta root do projeto nós iremos alterar esse caminho, setando a seguinte configuração no nosso knex:

```ts
import knex, { Knex } from 'knex'

export const config: Knex.Config = {
  client: 'sqlite',
  connection: {
    filename: './tmp/app.db',
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}

export const knexDb = knex(config)
```

Passando a extensão que está sendo utilizada para as migrations, que no caso é `.ts`, depois o diretório que será mandado `./db/migrations`.

### Criando session ID.

```ts
import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable('transactions', (table) => {
    table.uuid('session_id').after('id').index()
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable('transactions', (table) => {
    table.dropColumn('session_id')
  })
}
```

Session ID é uma forma de lidar com o registro de interações dos usuários com nossa aplicação 

### zod

```ts
import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('production'),
  DATABASE_PATH: z.string(),
  PORT: z.number().default(8000),
})

const _env = envSchema.safeParse(process.env)

if (_env.success !== true) {
  console.error('Invalid enviroment variables!', _env.error.format())

  throw new Error('Invalid environment variables.')
}

export const env = _env.data
``` 

Para validar as variáveis de ambiente utilizaremos o zod, ele define um objeto e depois faz um `parse()` na variável global `process.env` para que a tipagem seja definida nas variáveis ambiente.

Para que possamos fazer a tratação de erros utilizamos o `safeParse()` que nos traz um objeto com o propriedade `success` dessa forma caso `_env.success` não for `true` estora um erro informando que as variáveis são inválidas. exportamos por final a variável.