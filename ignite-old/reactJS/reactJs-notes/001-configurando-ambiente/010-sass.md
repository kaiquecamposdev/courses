# SASS

Primeiro, você precisa instalar o pacote sass-loader e também o node-sass. Execute o seguinte comando no terminal:

```bash
npm i sass-loader -D
npm i node-sass -D
```

Em seguida, adicione as configurações necessárias no arquivo webpack.config.js. Aqui está o código atualizado:

```js
module.exports = {
  // ... outras configurações do Webpack

  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },

  // ... outras configurações do Webpack
};
```

Com essas configurações, o Webpack será capaz de lidar com arquivos SCSS.

Lembre-se de que você também pode adicionar a extensão .scss aos arquivos que estiverem usando o pré-processador Sass. O mesmo se aplica aos arquivos que ainda estão usando a extensão .css. Você pode adicionar uma nova regra no webpack.config.js para lidar com os arquivos CSS:

```js
{
  test: /\.css$/,
  exclude: /node_modules/,
  use: [
    'style-loader',
    'css-loader'
  ],
}
```

Dessa forma, o Webpack poderá lidar com ambos os tipos de arquivos CSS e SCSS.
