# Webpack

  O Webpack é uma ferramenta que nos ajuda a lidar com os arquivos da nossa aplicação, como estilos CSS, arquivos SASS e scripts JavaScript. Ele converte esses arquivos para formatos que os navegadores entendem, como JavaScript, CSS e imagens otimizadas.

  Em resumo, o Webpack organiza e processa os arquivos da nossa aplicação, garantindo que sejam entregues ao navegador de forma otimizada e prontos para serem exibidos corretamente. Isso nos permite escrever nosso código de maneira mais conveniente, enquanto o Webpack cuida da conversão para os formatos corretos que os navegadores podem interpretar.

## Instalação

Para instalar o Webpack e o Webpack CLI em seu projeto, execute o seguinte comando no terminal:

`npm i webpack webpack-cli -D`

Após a instalação, siga os passos abaixo para configurar o arquivo webpack.config.js:

Crie um arquivo chamado webpack.config.js na raiz do seu projeto.

Adicione o seguinte código no arquivo webpack.config.js:

Para sistemas operacionais Mac/Linux:

```js
module.exports = {
  entry: 'src/index.jsx',
}
```

Para Windows:

```js
const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.jsx')
}
```

Utilizamos a propriedade entry para informar qual arquivo será o arquivo principal da nossa aplicação.

Adicione a seguinte configuração para o output no arquivo webpack.config.js:

```js
output: {
    path: "dist",
    filename: "bundle.js"
  },
```

O objeto output configura onde será a saída da compilação do Webpack. Nesse caso, os arquivos serão gerados na pasta dist, com o nome bundle.js.

A propriedade path indica a pasta de saída, e você pode usar o mesmo conceito do path.resolve para especificar o caminho.

A propriedade filename indica o nome do arquivo gerado.

Adicione a seguinte configuração para a resolução de extensões no arquivo webpack.config.js:

```js
resolve: {
    extensions: ['.js', '.jsx']
  },
```

Essa configuração indica que o Webpack irá ler arquivos com extensão .js e .jsx.

Por fim, adicione a seguinte configuração para as regras no arquivo webpack.config.js:

```js
module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: 'babel-loader', 
      }
    ]
  }
```

As regras indicam ao Webpack como lidar com cada extensão de arquivo em nossa aplicação.

A propriedade test indica o tipo de arquivo que queremos tratar.

A propriedade exclude indica ao Webpack que a pasta especificada não deve ser transpilada.

A propriedade use mostra qual compilador será usado para processar o arquivo.

Para instalar o babel-loader como devDependencies e transpilar os códigos do React e do arquivo App.jsx para a pasta dist/bundle.js, execute os seguintes comandos:

```bash
npm i babel-loader -D
npx webpack
```
Esses comandos irão instalar o babel-loader como uma dependência de desenvolvimento (devDependencies) e, em seguida, executar o Webpack para realizar a transpilação dos códigos do React e do arquivo App.jsx, gerando o resultado compilado na pasta dist/bundle.js.