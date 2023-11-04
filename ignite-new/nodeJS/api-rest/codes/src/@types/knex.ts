declare module 'knex/types/tables' {
  interface Tables {
    transactions: {
      id: string
      title: string
      amount: number
      type: 'debito' | 'credito'
      created_at: string
      session_id?: string
    }
  }
}
