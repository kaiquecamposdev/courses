# Importando css

Para que o React possa entender nossas estilizações CSS, é necessário definir algumas regras dentro do Webpack, uma vez que o React não compreende arquivos CSS por padrão.

Primeiro, você precisa instalar os pacotes style-loader e css-loader. Você pode fazer isso executando o seguinte comando no terminal:

```bash
npm i style-loader css-loader -D
```

Em seguida, você precisa adicionar as regras de configuração no arquivo webpack.config.js. Veja como ficaria:

```js
module.exports = {
  // ... outras configurações do Webpack
  
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader'
        ],
      }
    ]
  }
  
  // ... outras configurações do Webpack
}
```

Após adicionar essas regras, o Webpack será capaz de processar arquivos CSS. Agora você pode estilizar seus componentes React usando arquivos CSS.
