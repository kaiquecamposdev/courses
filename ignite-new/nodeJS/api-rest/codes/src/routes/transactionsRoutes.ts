import { randomUUID } from 'crypto'
import { FastifyInstance } from 'fastify'
import * as z from 'zod'
import { checkSessionIdExist } from '../middlewares/check-session-id-exist'
import { knexDb } from '../utils/database'

const schemaBody = z.object({
  title: z.string(),
  type: z.enum(['debito', 'credito']),
  amount: z.number(),
})
const schemaParams = z.object({
  id: z.string().uuid(),
})
type SchemaBodyType = z.infer<typeof schemaBody>
type SchemaParamsType = z.infer<typeof schemaParams>

export async function transactionsRoutes(app: FastifyInstance) {
  app.get('/', 
  { 
    preHandler: checkSessionIdExist
  }, async (req, res) => {
    try {
      const transactions = await knexDb('transactions').where('session_id', req.cookies.session_id).select()
      
      if (!transactions) throw new Error('Transactions not found!')

      return {transactions}
    } catch (error) {
      throw new Error('Internal server error!')
    }
  })
  app.get('/:id', 
  { 
    preHandler: checkSessionIdExist 
  }, async (req, res) => {
    if(!req.params) throw new Error('Params is undefined!')

    try {
      const { id } = req.params as SchemaParamsType
      const transaction = await knexDb('transactions').where({
        id,
        session_id: req.cookies.session_id,
      }).select()
      
      if (!transaction) throw new Error('Transactions not found!')

      return {transaction}
    } catch (error) {
      throw new Error('Internal server error!')
    }
  })
  app.get('/summary', 
  { 
    preHandler: checkSessionIdExist 
  }, async (req, res) => {
    if(!req.params) throw new Error('Params is undefined!')

    try {
      const summary = await knexDb('transactions')
        .where('session_id', req.cookies.session_id)
        .sum('amount', { as: 'amount' })
        .first()
      
      if (!summary) throw new Error('Summary not found!')

      return {summary}
      
    } catch (error) {
      throw new Error('Internal server error!')
    }
  })
  app.post('/', async (req, res) => {
    if (!req.body) throw new Error('Body is undefined!')

    try {
      const { title, type, amount } = req.body as SchemaBodyType
      
      let session_id = req.cookies.session_id

      if(!session_id) {
        session_id = randomUUID()
        res.cookie('session_id', session_id, {
          path: '/',
          maxAge: 1000 * 60 * 60 * 24 * 7 // 7 days
        })
      }

      const transactions = await knexDb('transactions')
        .insert({
          id: randomUUID(),
          title,
          amount: type === 'credito' ? amount : amount * -1,
          created_at: new Date().toISOString(),
          session_id,
        })

      return {transactions}
      
    } catch (error) {
      throw new Error('Internal server error!')
    }
  })
  app.delete('/:id', async (req) => {
    if(!req.params) throw new Error('Params is undefined!')

    try {
      const { id } = req.params as SchemaParamsType
      const transactions = await knexDb('transactions').select('id').where({id}).delete()
      
      if (!transactions) throw new Error('Transactions not found!')

      return { message: 'Transaction deleted with success!' }
    } catch (error) {
      throw new Error('Internal server error!')
    }
  })
}
