# Encapsulamento

Com base na classe [MSNMessenger](001-pilares.md/#prática), podemos notar como seria uma classe sem a utilização do pilar encapsulamento:

```java
/*
 * Simulação do uso da classe MSNMessenger
 */
public class ComputadorPedrinho {
	public static void main(String[] args) {
		//abrindo MSN Messenger
		MSNMessenger msn = new MSNMessenger();
		
		msn.validarConectadoInternet();
		msn.enviarMensagem();
		msn.salvarHistoricoMensagem();
		
		msn.receberMensagem();
	}
}
```

Com encapsulamento:

```java
/*
 * Simulação do uso da classe MSNMessenger
 */
public class ComputadorPedrinho {
	public static void main(String[] args) {
		//abrindo MSN Messenger
		MSNMessenger msn = new MSNMessenger();
		
		msn.enviarMensagem();
		
		msn.receberMensagem();
	}
}
```

Para isso mudaríamos a visibilidade de certas ações dentro da nossa classe MSNMessenger

```java
public class MSNMessenger {
	public void enviarMensagem() {
		//primeiro confirmar se esta conectado a internet
		validarConectadoInternet();
		
		System.out.println("Enviando mensagem");
		
		//depois de enviada, salva o histórico da mensagem
		salvarHistoricoMensagem();
		
		
	}
	public void receberMensagem() {
		System.out.println("Recebendo mensagem");
	}
	
	//métodos privadas, visíveis somente na classe
	private void validarConectadoInternet() {
		System.out.println("Validando se está conectado a internet");
	}
	private void salvarHistoricoMensagem() {
		System.out.println("Salvando o histórico da mensagem");
	}
}
```