# Estrutura do React

Para renderizar o React no HTML, devemos seguir alguns passos:

No arquivo public/index.html, crie uma <div> com o id "root". Essa div será o ponto de entrada para o React renderizar os componentes.

No arquivo src/index.jsx, importe a função render do pacote react-dom:

```jsx
import { render } from 'react-dom';
```

A função render tem como objetivo renderizar o código HTML criado nos arquivos JSX. Para indicar onde e o que será renderizado, utilize a seguinte sintaxe:

```jsx
render(
  <App />,
  document.getElementById('root')
)
```
Isso renderizará o componente App dentro da div com o id "root" no public/index.html.

## Linkando o React em todos os arquivos

Para importar o React em todos os arquivos que utilizam a extensão .jsx, faça a seguinte configuração no arquivo babel.config.js:

```js
module.exports = {
  presets: [
    "@babel/preset-env",
    ["@babel/preset-react", {
      runtime: 'automatic'
    }]
}
```

Dessa forma, você evitará erros do tipo "react is not defined" ao utilizar o React nos arquivos JSX.

## Modos do Webpack

Existem dois modos principais de execução do Webpack: development e production.

O modo development é utilizado durante o desenvolvimento do projeto. Ele é mais rápido e facilita as atualizações contínuas que fazemos enquanto estamos trabalhando no projeto. Nesse modo, o Webpack geralmente não realiza otimizações de código avançadas, para que seja mais fácil depurar e entender o código durante o desenvolvimento. Também é comum ter informações detalhadas e úteis nos logs e mensagens de erro.

O modo production é utilizado quando o desenvolvimento do projeto está concluído. Nesse modo, o Webpack realiza uma série de compilações e otimizações no código, a fim de gerar um pacote final otimizado para produção. Ele pode fazer coisas como minificar e agrupar arquivos, remover comentários e variáveis de depuração, entre outras otimizações. O objetivo é reduzir o tamanho do pacote e melhorar o desempenho do aplicativo em produção. Nesse modo, os logs e mensagens de erro geralmente são mais sucintos e focados nos problemas mais críticos.

Ao configurar o Webpack, você pode especificar o modo de execução no arquivo webpack.config.js através da propriedade mode. Por exemplo:

```js
module.exports = {
  mode: 'development', // ou 'production'
  // outras configurações do Webpack
};
```

Dessa forma, você pode alternar entre os modos development e production de acordo com as necessidades do seu projeto.