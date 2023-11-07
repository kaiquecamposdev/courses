# Typescript

```tsx
interface User {
  name: string;
  bio: string;
  age: number;
}

function sumAge(users: User[]){
  let sum = 0;

  for(const sum of users) {
    sum += user.age;
  }

  return sum
}

const sumOfAllUsersAge = sumAge([
  {
    name: 'Kaique',
    bio: 'Frontend Developer',
    age: 27,
  }
])

```

## Tipagem dinâmica e tipagem estática

- Tipagem estática

No TypeScript, você precisa definir explicitamente os tipos das suas variáveis durante a escrita do código. Isso ajuda a pegar erros de tipo antes de executar o programa e fornece documentação clara sobre os tipos esperados.

- Tipagem dinâmica

O TypeScript também usa inferência de tipos para determinar automaticamente os tipos das variáveis com base no contexto do código. Isso significa que você não precisa digitar os tipos o tempo todo, pois o TypeScript tenta descobri-los por conta própria.

## Inferência de tipos

O Typescript utiliza inferência de tipos, o que significa que, na maioria das vezes, ele é capaz de determinar automaticamente os tipos das variáveis com base na lógica do programa. Isso evita que o desenvolvedor precise especificar manualmente os tipos das variáveis, permitindo que o TS as atribua dinamicamente.