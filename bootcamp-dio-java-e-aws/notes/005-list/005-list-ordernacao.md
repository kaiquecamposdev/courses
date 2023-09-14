# Ordenando listas

```java
class ComparatorPorAltura implements Comparator<Pessoa> {
    @Override
    public int compare(Pessoa p1, Pessoa p2) {
        return Double.compare(p1.getAltura(), p2.getAltura());
    }
}
```

Para podermos ordenar uma lista utilizamos um Comparator criando uma outra class dentro da class pai, para que possamos ordenar um valor do tipo Double.

```java 
public List<Pessoa> ordenarPorAltura() {
    List<Pessoa> pessoaPorAltura = new ArrayList<>(pessoaList);
    if(!pessoaList.isEmpty()) {
        Collections.sort(pessoaPorAltura, new ComparatorPorAltura());
        return pessoaPorAltura;
    } else {
        throw new RuntimeException("A lista está vazia!");
    }
}
```