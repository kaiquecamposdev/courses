# HTML estático

Uma maneira de simplificar a configuração do HTML é usando o plugin disponível no Webpack. Esse plugin nos permite eliminar a prática de incluir uma tag script informando o arquivo dist/bundle.js.

Primeiro, instale o plugin com o seguinte comando:

`npm i html-webpack-plugin -D`

Após a instalação, no arquivo webpack.config.js, você precisa instanciar o html-webpack-plugin e adicionar a propriedade "plugins" da seguinte maneira:

```js
plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    })
  ],
```

Essa configuração permitirá que o Webpack gere automaticamente o arquivo HTML no diretório de saída (dist) com base no modelo especificado (template). Isso evitará que você precise adicionar manualmente a tag script para o arquivo bundle.js.
