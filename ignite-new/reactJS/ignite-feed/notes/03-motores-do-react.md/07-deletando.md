# Deletando o comentário

- Imutabilidade

A imutabilidade implica que nada é modificado diretamente, mas sim que novos objetos são criados.

## Deletando um comentário

```jsx
function deleteComment(commentToDelete) {
  const commentsWithoutDeletedOne = comments.filter((comment) => {
    return comment !== commentToDelete;
  });

  setComments(commentsWithoutDeletedOne);
}
```

Para deletar um comentário em nossa aplicação, criamos um novo array que exclui o comentário desejado. Utilizamos o método filter, que retorna um novo array com base em uma condição. Neste caso, estamos retornando um array com todos os comentários, exceto o comentário que queremos excluir, representado pela variável commentToDelete.
