# Construtores

Construtores é uma forma de definir os atributos de uma Classe a partir da sua instância.

```java
public Pessoa (String cpf, String nome) {
    this.cpf = cpf;
    this.nome = nome;
}
```

Um dos requisitos para que seja criado um construtor, deveremos definir da seguinte forma sem retornar valor algum.

```java
public String getNome() {
		return nome;
}
public String getCpf() {
    return cpf;
}
public String getEndereco() {
    return endereco;
}
public void setEndereco(String newEndereco) {
    this.endereco = newEndereco;
}
```

Após isso, só precisaremos criar os métodos getter para poder buscar do objeto quando instanciado.

```java
public class SistemaCadastro {
	public static void main(String[] args) {
		//criamos uma pessoa no sistema
		Pessoa kaique = new Pessoa("123", "Kaique");
		
		//definimos o endereço de marcos
		kaique.setEndereco("RUA DAS MARIAS");
		
		//e como definir o nome e cpf do marcos ?
		
		//imprimindo o marcos sem o nome e cpf
		
		System.out.println(kaique.getNome() + "-" + kaique.getCpf() + "-" + kaique.getEndereco());
	}
}

```

Como nesse cadastro...