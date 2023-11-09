# Interface do repositório 

A interface nos permite a substituição de implementações sem modificar o código cliente, ou seja utilizando a interface e passando para nosso repository estamos criando um *contrato*, esse contrato não pode ser quebrado, o que digo com isso, temos regras a se seguir portanto devemos utilizar os métodos e propriedades definidas em nossa interface.

Exemplo da utilização:

## Interface

```ts
export interface UsersRepository {
  findByEmail(email: string): Promise<User | null>
  create(data: Prisma.UserCreateInput): Promise<User>
}
```

### Repository

```ts
export class PrismaUsersRepository implements UsersRepository {
  async findByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    return user
  }
  async create(data: Prisma.UserCreateInput) {
    const user = await prisma.user.create({
      data,
    })

    return user
  }
}
```

Nesse caso não retornará nenhum erro, porém caso uma das propriedades definidas na interface não estivesse instanciada na classe `PrismaUsersRepository` teríamos um erro do typescript estourando em nosso console e nosso código.