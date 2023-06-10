# Typescript no React

```tsx
interface MyInterface {
  // Tipos primitivos
  name: string;
  age: number;
  isStudent: boolean;

  // Tipos de função
  calculateSum: (a: number, b: number) => number;
  greet: (name?: string) => void;
}
```

Neste exemplo, a interface MyInterface contém os seguintes tipos:

## Tipos primitivos:

- name: uma propriedade do tipo string.
- age: uma propriedade do tipo number.
- isStudent: uma propriedade do tipo boolean.

## Tipos de função:

- calculateSum: uma propriedade que representa uma função que recebe dois parâmetros numéricos a e b e retorna um valor numérico.
- greet: uma propriedade que representa uma função que possui um parâmetro opcional name do tipo string e não possui valor de retorno (void).
