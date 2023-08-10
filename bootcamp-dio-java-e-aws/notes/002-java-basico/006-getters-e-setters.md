# Getters e Setters

Getters - busca os valores dos atributos
Setters - define novos valores para o atributo especificado

```java
public class Aluno {	
	private String nome;
	private int idade;
	
	public String getNome() {
		return nome;
	}
	public void setNome(String newNome) {
		nome = newNome;
	}
	public int getIdade() {
		return idade;
	}
	public void setIdade(int newIdade) {
		this.idade = newIdade;
	}
}
```

getNome() é o método criado para buscar e retornar a variável nome.

setNome() é o método responsável por criar um novo nome e depois assinar na variável nome.