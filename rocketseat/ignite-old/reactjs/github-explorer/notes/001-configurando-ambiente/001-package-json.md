# Package.json

- Iniciando nosso projeto comandaremos um `npm init -y` ou `yarn init -y`. Depende do gerenciador de pacotes você estiver usando

## O que é ?

- Um arquivo json que armazena configurações de bibliotecas e configurações de terceiros necessárias para nosso projeto React 

## Primeira biblioteca

- `npm i react` ou `yarn add react` irá instalar o nosso react

## Node_modules

- Armazena o código das dependencias da nossa aplicação

- Foram instaladas algumas outras bibliotecas que são necessárias para o funcionamento do react, que nesse caso é `object-assign` e `loose-envify`

## react-dom

- `npm i react-dom` 

- É a lib necessária para podermos lidar com os elementos da web, sendo assim o react irá saber como lidar com esses elementos

- É necessário dividir em outra lib, por conta que o react pode trabalhar com todo tipo de aplicação seja ela web, mobile para TV's.

## Pastas

- src será armazenado todo nosso código que foi criado por nós

- public ficará arquivos públicos, como favicons, icons, robot.txt

- robot.txt são arquivos que falam com o navegador, se deverá ser indexado essa página ou não. Qualquer arquivo que deve ser acessado do meio externo