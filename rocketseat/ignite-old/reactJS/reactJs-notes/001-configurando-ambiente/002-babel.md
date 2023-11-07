# Configurando Babel

- É uma ferramenta que compila nosso código para que todos os navegadores entendam nosso código.

## Instalando

- `npm i @babel/core @babel/cli @babel/preset-env -D`

- Será instalado como dependencia de desenvolvimento, por conta que iremos usar apenas quando estivermos desenvolvendo o projeto, pois quando for mandado para área de produção essa ferramenta não será necessária

- Sendo assim o código será compilado em ambiente de desenvolvimento depois que mandar para o online ele já estará compilado

## babel.config.js

- Criaremos o arquivo babel.config.js para adicionar as configs necessárias para o babel poder compilar 

```js
module.exports = {
  presets: [
    "@babel/preset-env"
  ]
}
```

## O que são as libs babel?

- @babel/core é a biblioteca do babel

- @babel/cli é para podermos executar o babel nas linhas de comando, podendo dar um `npm babel -h`, para que podemos acessar os comando do babel

## Utilizando o CLI

- `npm babel src/index.js --out-file dist/bundle.js`

- Será criado um arquivo na pasta dist, que mostrará o nosso código compilado

- `npm i @babel/preset-react -D` 

- Será necessário instalar outro preset do babel, que permitirá que o babel compile o código React

- Adicione aos presets o "@babel/preset-react", para que funcione

- *Como estou utilizando npm foi necessário criar um script no package.json com o nome build, com o código `babel src/index.js --out-file dist/bundle.js` para que eu possa rodar usando npm run build, o que facilita porém só por enquanto...*

- *A melhor forma alternativa do yarn, é instalando o npx e dar um `npx babel src/index.js --out-file dist/bundle.js`*
  