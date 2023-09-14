# Polimorfismo

Um mesmo comportamento com diferentes maneiras de executar

```java
public class ComputadorPedrinho {
	public static void main(String[] args) {
		
		ServicoMensagemInstantanea smi = null;
		
		/*
		    NÃO SE SABE QUAL APP 
		    MAS QUALQUER UM DEVERÁ ENVIAR E RECEBER MENSAGEM
		 */
		String appEscolhido="???"; 
		
		if(appEscolhido.equals("msn"))
			smi = new MSNMessenger();
		else if(appEscolhido.equals("fbm"))
			smi = new FacebookMessenger();
		else if(appEscolhido.equals("tlg"))
			smi = new Telegram();
		
			
		smi.enviarMensagem();
		smi.receberMensagem();
	}
}
```

Um outro tipo de modificador que podemos utilizar que o torna privado porém as classes filhas podem utilizar de seus métodos é o protected: 

```java
//mais um método que todos os filhos deverão implementar
	public abstract void salvarHistoricoMensagem();
	
	//somente os filhos conhecem este método
protected void validarConectadoInternet() {
		System.out.println("Validando se está conectado a internet");
	}
```

Colocaremos no final de nossa classe pai, dessa forma poderemos implementar nos nossos apps para que eles realizem a validação de conexão com a internet sem que o cliente fique ciente desse processo. Utilizamos de forma abstrata por simplesmente os apps possuírem sua própria forma de realizar essas validações.