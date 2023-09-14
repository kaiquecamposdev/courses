# Desafio carrinho de compras

## Desafio Pedido

Crie uma classe chamada "CarrinhoDeCompras" que representa um carrinho de compras online. O carrinho deve ser implementado como uma lista de itens.

Cada item é representado por uma classe chamada "Item" que possui atributos como nome, preço e quantidade. Implemente os seguintes métodos:

- `adicionarItem(String nome, double preco, int quantidade)`: Adiciona um item ao carrinho com o nome, preço e quantidade especificados.
- `removerItem(String nome)`: Remove um item do carrinho com base no seu nome.
- `calcularValorTotal()`: Calcula e retorna o valor total do carrinho, levando em consideração o preço e a quantidade de cada item.
- `exibirItens()`: Exibe todos os itens presentes no carrinho, mostrando seus nomes, preços e quantidades.

### Lógica implementada

Classe CarrinhoDeCompras:

```java
package list.desafioCarrinhoDeCompras;

import list.OperacoesBasicas.Tarefa;

import java.util.ArrayList;
import java.util.List;

public class CarrinhoDeCompras {

    private List<Item> carrinhoDeCompras;

    public CarrinhoDeCompras() {
        this.carrinhoDeCompras = new ArrayList<>();
    }

    public void adicionarItem(String nome, double preco, int quantidade) {
        carrinhoDeCompras.add(new Item(nome, preco, quantidade));
    }

    public void removerItem(String nome) {
        List<Item>listaParaRemover = new ArrayList<>();
        for(Item t : carrinhoDeCompras) {
            if(t.getNome().equalsIgnoreCase(nome)) {
                listaParaRemover.add(t);
            }
        }
        carrinhoDeCompras.removeAll(listaParaRemover);
    }

    public double calcularValorTotal() {
        double valorTotal = 0;
        for(Item t : carrinhoDeCompras) {
            valorTotal = t.getPreco() * t.getQuantidade() + valorTotal;
        }
        return valorTotal;
    }

    public void exibirItens() {
        System.out.println(carrinhoDeCompras);
    }
}

```

Classe Item: 

```java
package list.desafioCarrinhoDeCompras;

import list.OperacoesBasicas.ListaTarefa;

public class Item {
    String nome;
    double preco;
    int quantidade;

    public Item(String nome, double preco, int quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    public String getNome() {
        return nome;
    }
    public double getPreco() {
        return preco;
    }
    public int getQuantidade() {
        return quantidade;
    }

    @Override
    public String toString() {
        return "Item{" +
                "nome='" + nome + '\'' +
                ", preco=" + preco +
                ", quantidade=" + quantidade +
                '}';
    }

    public static void main(String[] args) {
        CarrinhoDeCompras carrinhoDeCompras = new CarrinhoDeCompras();

        carrinhoDeCompras.adicionarItem("Café", 20.55, 10);
        carrinhoDeCompras.adicionarItem("Café", 20.20, 10);
        carrinhoDeCompras.adicionarItem("Café", 20.43, 10);
        carrinhoDeCompras.adicionarItem("Pão", 14.44, 25);
        carrinhoDeCompras.exibirItens();
        System.out.println(carrinhoDeCompras.calcularValorTotal());

        carrinhoDeCompras.removerItem("Café");
        carrinhoDeCompras.exibirItens();
        System.out.println(carrinhoDeCompras.calcularValorTotal());
    }
}
```

