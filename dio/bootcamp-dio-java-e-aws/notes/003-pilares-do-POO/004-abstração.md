# Abstração

Para você ser é preciso você fazer...

O pilar abstração diz que todos objetos que possuem a mesma ação de certa forma irão realizar-las de uma maneira diferente.

Como informamos que a classe é abstrata ?

```java
public abstract class ServicoMensagemInstantanea {
	public abstract void EnviarMensagem();
	public abstract	void ReceberMensagem();
}
```

A classe pai terá o abstract informando que aquelas ações ocorre porém podendo vir de outras formas.

