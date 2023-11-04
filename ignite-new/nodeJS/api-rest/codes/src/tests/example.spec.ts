import { execSync } from 'node:child_process'
import request from 'supertest'
import { afterAll, beforeAll, beforeEach, describe, expect, it } from 'vitest'
import { app } from '../app'

describe('Transactions routes', () => {
  beforeAll(async () => {
    await app.ready()
  })
  
  afterAll(async () => {
    await app.close()
  })
  
  beforeEach(() => {
    execSync('npm run knex migrate:rollback --all')
    execSync('npm run knex migrate:latest')
  })

  it("should be able to create a new transactions", async () => {
    await request(app.server)
      .post('/transactions')
      .send({
        title: 'New Transaction',
        type: 'debito',
        amount: 10000,
      })
      .expect(200)
  })

  it("should be able to list all transactions", async () => {
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

  it("should be able to get the specific transaction", async () => {
    const createNewTransaction = await request(app.server)
        .post('/transactions')
        .send({
          title: 'New Transaction',
          type: 'credito',
          amount: 5000,
        })

    const cookies = createNewTransaction.get('Set-Cookie')

    const listTransactionsResponse = await request(app.server)
      .get('/transactions')
      .set('Cookie', cookies)
      .expect(200)

    const transactionId = listTransactionsResponse.body.transactions[0].id
    
    const getTransactionResponse = await request(app.server)
        .get(`/transactions/${transactionId}`)
        .set('Cookie', cookies)
        .expect(200)
      
    expect(getTransactionResponse.body.transaction).toEqual([
      expect.objectContaining({
        title: 'New Transaction',
        amount: 5000,
      })
    ])
  })

  it("should be able to get the summary", async () => {
    const createNewCreditTransaction = await request(app.server)
        .post('/transactions')
        .send({
          title: 'New Transaction',
          type: 'credito',
          amount: 5000,
        })

    const cookies = createNewCreditTransaction.get('Set-Cookie')

    await request(app.server)
      .post('/transactions')
      .set('Cookie', cookies)
      .send({
        title: 'New Transaction',
        type: 'debito',
        amount: 2000,
      })

    const summaryResponse = await request(app.server)
      .get('/transactions/summary')
      .set('Cookie', cookies)
      .expect(200)
      
    expect(summaryResponse.body.summary).toEqual({
      amount: 3000,
    })
  })

  it("should be able to delete transaction", async () => {
    const createNewTransaction = await request(app.server)
        .post('/transactions')
        .send({
          title: 'New Transaction',
          type: 'credito',
          amount: 5000,
        })

    const cookies = createNewTransaction.get('Set-Cookie')

    const listTransactionsResponse = await request(app.server)
      .get('/transactions')
      .set('Cookie', cookies)
      .expect(200)

    const transactionId = listTransactionsResponse.body.transactions[0].id
    
    const deleteTransactionResponse = await request(app.server)
        .delete(`/transactions/${transactionId}`)
        .set('Cookie', cookies)
        .expect(200)
      
    expect(deleteTransactionResponse.body).toEqual({
      message: 'Transaction deleted with success!'
    })
  })
})