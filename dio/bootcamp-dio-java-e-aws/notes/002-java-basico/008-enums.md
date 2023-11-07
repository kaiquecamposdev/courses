# Enum / Enum'erações

Tipo especial de classe onde os objetos são previamente criados, imutáveis e disponibilizados por toda a aplicação

Usamos quando nosso modelo de negócio possui objetos pré-estabelecidos, ou seja quando não houver alterações de valores.

```java
public enum EstadoBrasileiro {
	SAO_PAULO ("SP","Sao Paulo", 11),
	RIO_JANEIRO ("RJ", "Rio de Janeiro", 12),
	PIAUI ("PI", "Piaui", 13),
	MARANHAO ("MA","Maranhao", 14),
	CEARA ("CE", "Ceara", 15);
	
	private String nome;
	private String sigla;
	private int ibge; 
	
	private EstadoBrasileiro(String sigla, String nome, int ibge) {
		this.sigla = sigla;
		this.nome = nome;
		this.ibge = ibge;
	}
	public String getSigla() {
		return sigla;
	}
	public String getNome() {
		return nome;
	}
	public int getIbge() {
		return ibge;
	}
	public String getNomeMaiusculo() {
		return nome.toUpperCase();
	}
}
```

Criamos o Enum da seguinte forma, após isso podemos instaciar em qualquer lugar da nossa aplicação.

```java
public class PesquisaIbge {
	public static void main(String[] args) {
		for(EstadoBrasileiro eb: EstadoBrasileiro.values()) {
			System.out.println(eb.getNome() + "-" + eb.getSigla() + "-" + eb.getIbge());
		}
		
		EstadoBrasileiro ufSelecionado = EstadoBrasileiro.SAO_PAULO; 
		
		System.out.println(ufSelecionado.getNome());
		System.out.println(ufSelecionado.getSigla());
		System.out.println(ufSelecionado.getNomeMaiusculo());
		System.out.println(ufSelecionado.getIbge());
		
	}
}
```

Podemos observar que utilizamos um método global do Java que é o for() e values().

for() é o tal conhecido que percorre objetos e armazena em uma variável.

values() é o método disponível para poder retornar os valores presentes em um class.