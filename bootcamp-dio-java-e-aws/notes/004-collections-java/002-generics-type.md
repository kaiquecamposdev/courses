# Generics type

Uma classe genérica ou uma interface que é parametrizada em relação a tipos.

Exemplo com a classe Box: 

```java
public class Box {
  private Object object;

  public void set(Object object) { 
    this.object = object;
  }
  public Object get() { 
    return object;
  }
}
```

Podemos observar que a classe Box instancia um atributo object com o tipo Object.

Para podemos definir esse atributo utilizaremos a sua própria instancia como parametro para o set(), Depois retornaremos o object utilizando o método get().

## Simbolo diamond operator

O símbolo diamond operator surgiu no java 7, com o objetivo de lidar com contexto de tipos genéricos para inferir automaticamente o tipo com base no contexto.

exemplo de uso: 

```java
/**
Versão genérica da classe Box.
@param <T> o tipo do valor sendo armazenado
*/
public class Box<T> {
	// T representa "Type" (tipo)
  private T t;

  public void set(T t) { 
    this.t = t; 
  }
  public T get() {
    return t;
  }
}
```

Os nomes de parâmetros de tipo mais comumente usados são:

E - Elemento (usado extensivamente pelo Java Collections Framework)
K - Chave
N - Número
T - Tipo
V - Valor
S, U, V, etc. - 2º, 3º, 4º tipos

Vantagens da utilização do generics nas interfaces Collections:

- **Segurança do tipo de dados:** O generics garantirá que apenas objetos de tipo específico poderá ser adicionados nas Collections, podendo evitar erros de tipo.

- **Código mais legível:** Você pode especificar o tipo de dados esperado ou retornado pela coleção, o que torna o código mais fácil de entender e ler.

- **Lidar com erros:** O compilador detecta erros de tipos durante a compilação do código.

- **Reutilização de código:** Poderá criar classes e métodos genéricos que irão funcionar com diferentes tipos de coleções, evitando a necessidade de duplicar código para cada tipo específico.

- **Desempenho:** Poderá melhorar o desempenho, pois evita a necessidade de conversões de tipo desnecessárias.