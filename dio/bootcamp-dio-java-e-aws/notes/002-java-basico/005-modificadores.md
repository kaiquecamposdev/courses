# Modificadores 

Visibilidade dos nossos recursos desenvolvidos

Tipos de visibilidade:

- public
  - Qualquer outra classe e pacote. Poderá visualizar esse recurso.

- private
  - Será restrito apenas para a classe e suas funções, nenhuma outra classe terá acesso a essa função dessa classe. 

```java
public class Atendente {
	public void servindoMesa() {
		pegarLancheCozinha();
		System.out.println("SERVINDO A MESA");
	}
	private void pegarLancheCozinha() {
		System.out.println("PEGANDO O LANCHE NA COZINHA");
	}
}
```

- default
  - Está totalmente atrelado a organização das classes por pacote, ele restringe a visibilidade apenas para o pacote que irá realizar a ação. exemplo:

```java
package lanchonete.atendimento.cozinha;

public class Almoxarife {
	public void controlarEntrada() {
		System.out.println("CONTROLANDO A ENTRADA DOS ITENS");
	}
	public void controlarSaida() {
		System.out.println("CONTROLANDO A SAIDA DOS ITENS");
	}
	void entregarIngredientes() {
		System.out.println("ENTREGANDO INGREDIENTES");
		//...?
	}
	void trocarGas() {
		System.out.println("ALMOXARIFE TROCANDO O GÁS");
	}
}
```

As duas ultimas funções representam esse modificador default.