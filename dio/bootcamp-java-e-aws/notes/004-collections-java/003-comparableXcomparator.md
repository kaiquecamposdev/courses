# Comparable X Comparator

Elas permitem que você especifique como os elementos de uma coleção devem ser ordenados, mas de maneiras diferentes.

**Comparable** é utilizado 

A interface **Comparable** é implementada pela classe cujos objetos você deseja comparar e ordenar.

Define um método chamado **compareTo** que recebe outro objeto do mesmo tipo e retorna um valor inteiro que indica a relação de ordem entre os dois objetos.

```java
public class Pessoa implements Comparable<Pessoa> {
    private String nome;
    private int idade;

    public int compareTo(Pessoa outraPessoa) {
        return this.idade - outraPessoa.idade;
    }
}
```