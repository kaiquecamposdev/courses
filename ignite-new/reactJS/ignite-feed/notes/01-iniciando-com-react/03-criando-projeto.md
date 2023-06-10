# Criando um Projeto React com Vite (JavaScript)

Este guia irá ajudá-lo a criar um novo projeto React usando o Vite, uma ferramenta de construção rápida e moderna para aplicativos web. Vamos utilizar JavaScript como linguagem de programação. Aqui está um resumo dos passos para criar o projeto e uma breve explicação das pastas mais relevantes:

## Passo 1: Configuração do Ambiente

Certifique-se de ter o Node.js instalado em seu computador. Você pode verificar a instalação digitando node -v no seu terminal. Caso o Node.js não esteja instalado, você pode baixá-lo em: https://nodejs.org

## Passo 2: Criando um novo projeto com Vite

Abra o terminal e navegue até a pasta onde você deseja criar o projeto.
Execute o seguinte comando para criar um novo projeto React usando Vite:

```bash
npx create-vite meu-projeto --template react-js
```

O comando acima irá criar uma nova pasta chamada "meu-projeto" e instalará as dependências necessárias.

## Passo 3: Executando o projeto

Navegue até a pasta do projeto:

```bash
cd meu-projeto
```

Execute o comando para instalar as dependências do projeto:

```bash
npm i
```

Por fim, execute o comando para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

O servidor de desenvolvimento será iniciado e você poderá acessar seu projeto React em http://localhost:3000.

## Pastas Relevantes

Dentro do projeto criado, você encontrará várias pastas. Aqui estão as mais relevantes:

- src: Esta pasta contém os arquivos do código-fonte do seu projeto React. É aqui que você escreverá a maior parte do seu código.

- public: Esta pasta contém arquivos estáticos que serão copiados para a pasta de saída do projeto. Coloque aqui seus arquivos HTML, imagens ou outros recursos estáticos.

- node_modules: Esta pasta contém as dependências do projeto instaladas via npm. Você não precisa interagir diretamente com esta pasta.

- dist: Esta pasta será criada quando você executar o projeto para produção (npm run build). Ela conterá os arquivos otimizados e prontos para implantação.
