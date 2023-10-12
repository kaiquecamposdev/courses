import { FastifyInstance } from 'fastify'
import * as z from 'zod'
import { knexDb } from '../database'

const SchemaBody = z.object({
  description: z.string(),
  type: z.enum(['debito', 'credito']),
  amount: z.number(),
})

export async function transactionsRoutes(app: FastifyInstance) {
  app.get('/', async () => {
    const transactions = await knexDb('transactions').select('*')

    return transactions
  })
  app.post('/', async (req) => {
    const { description, type, amount } = SchemaBody.parse(req.body)
    const transactions = await knexDb('transactions').insert({
      description,
      type,
      amount,
      created_at: new Date(),
      session_id: null,
    })

    return transactions
  })
}
