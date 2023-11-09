# Herança

Nem tudo se copia, as vezes se herda

```java
public class ServicoMensagemInstantanea {
	public void enviarMensagem() {
		
		validarConectadoInternet();
		System.out.println("Enviando mensagem");
		
		salvarHistoricoMensagem();
	}
	public void receberMensagem() {
		System.out.println("Recebendo mensagem");
	}
	
	private void validarConectadoInternet() {
		System.out.println("Validando se está conectado a internet");
	}
	private void salvarHistoricoMensagem() {
		System.out.println("Salvando o histórico da mensagem");
	}
}
```

Essa será uma classe responsável pode definir a herança entre todas as classes que precisam do seu serviço que nesse caso são:

- MSNMessenger
- FacebookMessenger
- Telegram

Exemplo da classe MSNMessenger:

```java
public class MSNMessenger extends ServicoMensagensInstantaneas {
  // Lógica que será implementada envolvendo os outros pilares...
}
```

Como podemos realizar a lógica da herança? Utilizaremos o extends para extender todas suas propriedades e métodos do outro objeto. 