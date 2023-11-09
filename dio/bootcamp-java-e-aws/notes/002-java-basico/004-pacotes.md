# Pacotes 

Define-se por o conjunto de classes do nosso projeto, para que haja uma melhor organização.

Os pacotes podem ser definidos da seguinte forma:

- comercial - com.microsoft
- governamental - gov.microsoft
- código aberto - org.microsoft

Além de disso, podemos criar uma estrutura de pacotes de acordo com a finalidade das nossas classes, por exemplo: **model, service, repository, controller e util.**

## Identificador 

Quando criamos pacotes devemos nos atentar a organização dos seus identificadores, dessa forma criamos o (**endereçamento do pacote + nome**) diferentemente de apenas o **nome simples** da classe. exemplo: considere uma classe chamada `Usuario` que está endereçada no pacote `com.controle.acesso.model`, sendo o nome qualificado o seguinte **`com.controle.acesso.model.Usuario`**

### Package versus Import

A palavra package é utilizada para sempre na **primeira linha** e só pode ser definida **uma vez por bloco de código**, por exemplo: 

```java
package com.mastersoft.clinical.service; // Definimos que essa classe é desse pacote

import com.mastersoft.clinical.model.Exame; // Aqui importamos a tipagem 

public class ExameService {
	void salvarExame(Exame exame) {
		
	}
}

```

