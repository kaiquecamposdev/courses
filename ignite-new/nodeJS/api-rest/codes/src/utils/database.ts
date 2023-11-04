import knex, { Knex } from 'knex'
import { env } from '../env'

export const config: Knex.Config = {
  client: env.DATABASE_CLIENT,
  connection: 
    env.DATABASE_CLIENT === 'sqlite' 
      ? {
          filename: env.DATABASE_PATH,
        } 
      : env.DATABASE_PATH,
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}

export const knexDb = knex(config)
