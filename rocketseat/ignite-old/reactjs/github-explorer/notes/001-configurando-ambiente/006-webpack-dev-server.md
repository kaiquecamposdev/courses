# Webpack Dev Server

`npm i webpack-dev-server -D`

Iremos definir no webpack.config.js as seguintes configurações:

```js
module.exports = {
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },
}
```

Após isso executaremos o comando `npx webpack serve`