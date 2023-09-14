# Pratica 2

Classe Livro:

```java
package list.Pesquisa;

public class Livro {

    private String titulo;
    private String autor;
    private int anoPublicacao;

    public Livro(String titulo, String autor, int anoPublicacao) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
    }

    public String getTitulo() {
        return titulo;
    }
    public String getAutor() {
        return autor;
    }
    public int getAnoPublicacao() {
        return anoPublicacao;
    }

    @Override
    public String toString() {
        return "Livro{" +
                "titulo='" + titulo + '\'' +
                ", autor='" + autor + '\'' +
                ", anoPublicacao=" + anoPublicacao +
                '}';
    }

    public static void main(String[] args) {
        CatalogoLivros catalogoLivros = new CatalogoLivros();

        catalogoLivros.adicionarLivro("As Receitas Inglesas na Era Da Instabilidade", "Leonardo Trevisan", 2000);
        catalogoLivros.adicionarLivro("Minha Biografia", "Bill Gates", 2020);
        catalogoLivros.adicionarLivro("Minha Biografia", "Bill Gates", 2020);
        catalogoLivros.adicionarLivro("Livro 5", "Autor 4", 2019);
        catalogoLivros.adicionarLivro("Livro 5", "Autor 4", 2019);



        System.out.println(catalogoLivros.pesquisarPorAutor("Bill Gates"));
    }
}
```

Classe CatalogoLivros: 

```java
package list.Pesquisa;

import java.util.ArrayList;
import java.util.List;

public class CatalogoLivros {
    List<Livro> catalogoLivros;

    public CatalogoLivros() {
        this.catalogoLivros = new ArrayList<>();
    }

    public void adicionarLivro(String titulo, String autor, int anoPublicacao) {
        catalogoLivros.add(new Livro(titulo, autor, anoPublicacao));
    }
    public List<Livro> pesquisarPorAutor(String autor) {
        List<Livro> livrosPorAutor = new ArrayList<>();

        if(!catalogoLivros.isEmpty()) {
            for(Livro t : catalogoLivros) {
                if(t.getAutor().equalsIgnoreCase(autor)) {
                    livrosPorAutor.add(t);
                }
            }
        }
        return livrosPorAutor;
    }
    public List<Livro> pesquisarPorIntervaloAnos(int anoInicial, int anoFinal) {
        List<Livro> livrosPorIntervaloAnos = new ArrayList<>();
        if(!catalogoLivros.isEmpty()) {
            for(Livro t : catalogoLivros) {
                if(t.getAnoPublicacao() >= anoInicial && t.getAnoPublicacao() <= anoFinal) {
                    livrosPorIntervaloAnos.add(t);
                }
            }
        }
        return livrosPorIntervaloAnos;
    }
    public Livro pesquisarPorTitulo(String titulo) {
        Livro livroPorTitulo = null;
        if(!catalogoLivros.isEmpty()) {
            for(Livro t : catalogoLivros) {
                if(t.getTitulo().equalsIgnoreCase(titulo)) {
                    livroPorTitulo = t;
                    break;
                }
            }
        }
        return livroPorTitulo;
    }
}
```