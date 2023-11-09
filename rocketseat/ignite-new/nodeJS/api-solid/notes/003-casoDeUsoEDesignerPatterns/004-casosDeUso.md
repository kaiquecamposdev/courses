# Casos de Uso

Casos de uso são utilizados para orquestrar as entidades e regras da aplicação, ou seja, quando eu precisar criar um usuário eu terei de abstrair essa parte do nosso código do controller, e apenas deixar o controller lidando com a intermediação das requisições. Que no caso seria validar os dados do body da requisição com o zod e enviar para os casos de uso.

```ts
export async function register(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
  })

  const { name, email, password } = registerBodySchema.parse(request.body)

  try {
    const prismaUsersRepository = new PrismaUsersRepository()
    const registerUseCase = new RegisterUseCase(prismaUsersRepository)

    await registerUseCase.execute({ name, email, password })
  } 

  // restante do código...
}
```