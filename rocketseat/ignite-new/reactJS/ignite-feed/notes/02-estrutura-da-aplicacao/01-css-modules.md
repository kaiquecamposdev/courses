# CSS modules

No CSS modules, utilizamos a seguinte abordagem: definimos um arquivo CSS com o nome header.module.css, por exemplo, e dentro desse arquivo devemos estilizar usando classes em vez de IDs.

Para importar o arquivo CSS em um componente, usamos uma sintaxe baseada em objetos, semelhante à forma como importamos componentes em nossa aplicação:

```jsx
import styles from './Header.module.css';
```

No entanto, podemos desestruturar esse objeto, assim como qualquer outro objeto em JavaScript, o que torna nosso código mais legível:

```jsx
import { header } from './Header.module.css'
export function Header() {
  return(
    <strong className={header}>Ignite Feed</strong>
  )
}
```
Dessa forma, importamos apenas a classe que desejamos usar.

## Hash's

No CSS modules, um "hash" é gerado para cada classe criada em um arquivo, evitando conflitos futuros. Isso facilita a estilização, garantindo que as classes tenham nomes únicos. Com o uso de CSS modules, podemos escrever estilos de forma mais segura, evitando problemas com nomes de classes duplicados e garantindo que as estilizações sejam aplicadas corretamente. É uma abordagem útil em projetos grandes, onde várias equipes podem trabalhar em diferentes partes da aplicação, minimizando conflitos de estilos.