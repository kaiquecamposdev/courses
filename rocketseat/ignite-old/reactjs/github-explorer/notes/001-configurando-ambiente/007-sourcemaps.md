# Source map

O source map é uma ferramenta utilizada no desenvolvimento ou produção de projetos JavaScript. Ele proporciona uma melhor visualização de erros em nossos projetos, facilitando a identificação e correção após encontrar um erro.

Exemplo de configuração no arquivo de configuração (webpack.config.js):

```js
devtool: 'eval-source-map',
```

Essa configuração específica, 'eval-source-map', é comumente usada em ambientes de desenvolvimento. Em breve, serão apresentadas outras ferramentas que podem ser úteis em ambientes de produção, ou seja, enquanto a aplicação está em execução.