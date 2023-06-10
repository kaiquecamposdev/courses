# Propriedades do Post

## Lidando com Datas

Existem duas formas comuns de lidar com datas: utilizando o Intl do JS ou a biblioteca date-fns.

### Intl

```jsx
const publishedDateFormatted = new Intl.DateTimeFormat("pt-br", {
  day: "2-digit",
  month: "long",
  hour: "2-digit",
  minute: "2-digit",
}).format(publishedAt);
```

### date-fns

Comando para instalação da biblioteca:

```bash
npm i date-fns
```

### format()

Para usar a biblioteca em nossa aplicação:

```jsx
import { format, formatDistanceToNow } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";
```

```jsx
const publishedDateFormatted = format(
  publishedAt,
  "d 'de' LLLL 'às' HH:mm'h'",
  {
    locale: ptBr,
  }
);
```

Após instalar a biblioteca, podemos utilizar algumas funções, como format e formatDistanceToNow. Com essas funções, podemos criar a formatação da nossa data utilizando format().

O primeiro parâmetro é a propriedade publishedAt, que contém um objeto Date.

O segundo parâmetro é uma string contendo a estrutura que usaremos para apresentar a data. Podemos usar palavras para dar mais sentido à visualização, passando essas palavras entre aspas simples, para não interferir nos comandos da biblioteca date-fns. Você pode consultar esses comandos na _[documentação](https://date-fns.org/)_.

O terceiro parâmetro é um objeto opcional que pode conter informações adicionais, como o formato da data em relação ao país, utilizando a propriedade locale.

Depois disso, podemos usar a variável publishedDateFormatted em nossa aplicação para apresentar o título da tag time.

```jsx
<time title={publishedDateFormatted} dateTime="2023-05-28 10:00:00">
  {publishedDateFormatted}
</time>
```

### formatDistanceToNow

```jsx
const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
  locale: ptBr,
  addSuffix: true,
});
```

Essa função tem o objetivo de retornar a diferença de tempo entre a data definida e o horário atual da máquina.

No primeiro parâmetro, passamos o objeto Date, e no segundo parâmetro, um objeto com informações adicionais, incluindo a localidade para que a data seja ajustada ao país. Também é possível definir a propriedade addSuffix como true ou false, indicando se queremos um prefixo como "há cerca de" ou outros. O nome "suffix" é utilizado porque em inglês o que chamamos de "prefixo" em nossa língua é chamado de "sufixo" na deles.

### Iteração

```jsx
{
  content.map((line) => {
    if (line.type === "link") {
      return (
        <p>
          <a href="#">{line.content}</a>
        </p>
      );
    } else if (line.type === "paragraph") {
      return <p>{line.content}</p>;
    }
  });
}
```

Essa iteração segue a lógica de renderizar um parágrafo com um link se o tipo da linha for 'link'. Caso contrário, se o tipo da linha for 'paragraph', apenas um parágrafo é retornado.
