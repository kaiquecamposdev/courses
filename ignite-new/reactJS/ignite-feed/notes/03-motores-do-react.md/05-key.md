# Key

A propriedade "key" é usada no React para otimizar a renderização evitando renderizações desnecessárias.

## Momentos que React renderiza:

- Mudança de estado: Quando o estado é alterado, o React renderiza todo o HTML novamente.

- Mudança nas propriedades: Se ocorrer uma mudança nas propriedades de um componente do React, todo o HTML desse componente será renderizado novamente.

- Renderização do componente pai: Quando o componente pai é renderizado novamente, todo o HTML será renderizado do zero.

A propriedade "key" permite ao React identificar se um elemento já foi renderizado anteriormente, evitando a renderização desnecessária do HTML. Utilizar o índice do array do objeto renderizado como "key" é prejudicial, pois o índice não é alterado conforme o posicionamento do elemento, permanecendo fixo, independentemente de o elemento ser substituído.