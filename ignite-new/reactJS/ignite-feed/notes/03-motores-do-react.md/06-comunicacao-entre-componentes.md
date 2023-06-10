# Comunicação entre componentes

A comunicação entre componentes é um conceito importante no React. Para realizar essa comunicação, podemos utilizar funções e passá-las como parâmetros entre os componentes.

Exemplo de uso:

```jsx
<Comment
  key={comment}
  content={comment}
  time={publishedDateRelativeToNow}
  onDeleteComment={deleteComment}
/>
```

Dessa forma, podemos lidar com o valor do estado através da função passada como parâmetro:

```jsx
function deleteComment(comments) {
  console.log(`Delete o comentário ${comments}`);
}
```

Agora, no componente Comment, podemos trabalhar com esse conteúdo:

```jsx
export function Comment({ content, time, onDeleteComment }) {
  function handleDeleteComment() {
    onDeleteComment(content);
  }
  // restante do código...
}
```

A função handleDeleteComment informa à função onDeleteComment que devemos excluir o comentário especificado.

```jsx
<Trash onClick={handleDeleteComment} size={24} />
```

Nesse exemplo, um ícone de lixeira é renderizado, e ao ser clicado, aciona a função handleDeleteComment.
