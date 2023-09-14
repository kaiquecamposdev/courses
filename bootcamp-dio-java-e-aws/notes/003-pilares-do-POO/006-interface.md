# Interface

Vem para resolver problemas de Herança Multipla, quando necessitamos que um objeto seja herdado por outro objeto utilizamos a interface para fazer um contrato.

Objetivo dela é de atribuir características relacionado a flexibilidade de responsabilidade de uma classe.

```java
public class EquipamentoMultifuncional implements Impressora, Copiadora, Digitalizadora {
	public void imprimir() {
		System.out.println("IMPRIMINDO VIA EQUIPAMENTO MULTIFUNCIONAL");
	}
	public void copiar() {
		System.out.println("COPIANDO VIA EQUIPAMENTO MULTIFUNCIONAL");
	}
	public void digitalizar() {
		System.out.println("DIGITALIZANDO VIA EQUIPAMENTO MULTIFUNCIONAL");
	}
}
```

Nessa classe utilizamos o implements que basicamente implementa todas as características das classes mencionadas 

```java
public class Fabrica {
	public static void main(String[] args) {
		EquipamentoMultifuncional em = new EquipamentoMultifuncional();
		Impressora deskjet = new Deskjet();
		
		Impressora impressora = deskjet;
		Copiadora copiadora = deskjet;
		Digitalizadora digitalizadora = deskjet;
		
		impressora.imprimir();
		copiadora.copiar();
		digitalizadora.digitalizar();
	}
}
```

Dessa forma poderemos utilizar na função main, porém quando passamos a tipagem Copiadora para deskjet, é constado que não será possível chamar os métodos dessa inteface pelo motivo de que o deskjet não possui as mesmas características das outras interfaces.  