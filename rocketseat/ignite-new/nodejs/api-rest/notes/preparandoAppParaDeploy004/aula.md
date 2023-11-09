### Criando a pasta build

Para que o sistema de deploy que utilizarmos, poder entender nosso código typescript devemos instalar uma biblioteca chamada `tsup`, criamos no package.json o script:

```json
"build": "tsup src --out-dir build",
```

Rode o comando para criar a pasta build