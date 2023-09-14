# Introdução NodeJS

NodeJS é uma plataforma open source permitindo executar JS do lado do servidor.

### Interpretadores

V8 - criado pela Google, permitindo uma execução mais rápida do JS

### Biblioteca 

libuv - biblioteca em C multiplataforma que providência entrada/saída assíncrona baseado em laços de eventos 

## O que veio resolver ?

- Criador Ryan Dahl

- Observando a barra de progresso do flickr, Ryan percebeu que o processo I/O(Inside and Outside) não possuia um bom suporte, o que veio a ideia de criar o NodeJS que lidaria com I/O de uma maneira assíncrona, tornando o processo mais perfomático.

### Características do NodeJS

- Trabalha com arquitetura evento loop
  - Call Stack -> Pilha de funções

- Single thread 

- Non-blocking I/O -> É o processo assíncrona que o node executa as funções 

- Módulos Próprios:
  - HTTP -> permite a criação de servidores com o seu uso
  - DNS -> Domain Name System
  - FS -> File System permite trabalhar com arquivos
  - Buffer -> Um espaço que armazena dados binários

### Event Loop 

- É responsável por escutar a Call Stack(Pilha de funções)

- Ele distribui por suas threads de acordo com quais estão disponíveis, que por padrão são 4 threads

### Gerenciadores de pacotes

- NPM e Yarn
  - Permite instalar dependências externas
  - Disponibilizar nossas bibliotecas
  - Será utilizado o yarn nesse curso 

### Frameworks 

- Express -> Bem robusto
- Egg.Js -> Node Ecoa por trás 
- Nest.Js 
- Adonis 