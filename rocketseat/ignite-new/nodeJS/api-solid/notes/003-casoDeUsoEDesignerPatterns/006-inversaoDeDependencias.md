# Inversão de Dependências

Tem o intuito de tornar nossa aplicação mais flexível e evitar o acoplamento, na versão anterior de nosso código estávamos instanciando o nosso repository e utilizando o método create, porém futuramente quando tivermos outros casos de uso, isso se tornaria um problema para legibilidade e manutenção do nosso código.

Com isso em mente realizamos a seguinte lógica: 

```ts
export class RegisterUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({ name, email, password }: RegisterUseCaseRequest) {
    const password_hash = await hash(password, 6)

    const userWithSameEmail = await this.usersRepository.findByEmail(email)

    if (userWithSameEmail) {
      throw new UserAlreadyExistsError()
    }

    await this.usersRepository.create({
      name,
      email,
      password_hash,
    })
  }
}
```

Criamos a classe RegisterUseCase, que terá o usersRepository como parâmetro utilizando a tipagem UsersRepository, que é o repository responsável por persistir os dados na tabela de usuários. Agora utilizamos os métodos do repository de usuários, `create()` e `findByEmail()`.

Com isso, no controller dos nossos usuários, apenas passamos o repository que queremos persistir os dados e utilizamos o método para executar o caso de uso.

```ts
import { FastifyRequest, FastifyReply } from 'fastify' 

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

Instanciamos o repository do prisma para persistir na tabela dos usuários, e passamos como parâmetro da nossa classe de registro dos casos de uso, e enfim executamos o método passando os dados recebidos no nosso controller. 