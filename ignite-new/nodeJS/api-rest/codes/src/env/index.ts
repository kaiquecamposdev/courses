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