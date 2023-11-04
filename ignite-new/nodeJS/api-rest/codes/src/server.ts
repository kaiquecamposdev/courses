import { app } from "./app"
import { env } from "./env"

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('✨ Servidor rodando na porta ::' + env.PORT)
  })
