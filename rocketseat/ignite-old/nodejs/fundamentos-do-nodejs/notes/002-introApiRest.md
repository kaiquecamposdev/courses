### O que é API?

- Acrônimo para Application Programming Interface(Interface de programação de aplicativos
)
- É um conjunto de especificações possíveis interações entre aplicações 

### Importancia 

- **Documentação para desenvolvedor**

### O que é Rest

- Representation State Transfer (Transferência Representacional de Estado)
- Modelo de arquitetura

### Regras para ser uma API Rest

- São 6 regras:
  1. Client-Server

  2. Stateless - Poderá enviar quantas requisições quiser

  3. Cache

  4. Interface Uniforme 
    - Identificação de recursos 
      - http://endereco.com/products
      - http://endereco.com/clients
    - Representação de recursos 
    - Mensagens auto-descritivas 
    - HATEOAS (Hypertext As The Engine Of Application State) -> Poder retornar links dentro de nossas requisições

  5. Camadas -> por exemplo, balanceamento de cargas e segurança.

  6. Código Sob Demanda -> Permite que as funcionalidades dos clientes sejam extendidads em forma scripts e aplicativos