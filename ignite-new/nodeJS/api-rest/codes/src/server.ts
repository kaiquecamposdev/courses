import fastify from 'fastify'
import { env } from './env'
import { transactionsRoutes } from './routes/transactionsRoutes'

const app = fastify()

app.register(transactionsRoutes, {
  prefix: 'transactions',
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('Servidor rodando na porta ::' + env.PORT)
  })
