# Repository Pattern

Os Repositories possuem a função de abstrair a persistência de dados no banco. Utilizando desse padrão podemos abstrair mais a nossa aplicação, tornando o código mais legível e de fácil manutenção.

```ts
import { Prisma, User } from '@prisma/client'

export class PrismaUsersRepository {
  async create(data: Prisma.UserCreateInput) {
    const user = await prisma.user.create({
      data,
    })

    return user
  }
}
```

O método que criamos possui a função de criar o usuário e persistir no banco, com o `data` que recebemos como parâmetro.

Nas tipagens do *Prisma* podemos encontrar algo muito interessante, quando necessitamos inferir tipos para um objeto que conterá propriedades que o schema que criamos possui, podemos utilizar o `CreateInput` uma das propriedades que existe na classe *Prisma*, como o nome já define o que essa propriedade armazena podemos entender que, essa é uma interface do input de criação de um usuário.