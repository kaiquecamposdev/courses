Nessa aula criamos uma função de clique para dar likes(palmas) em nossos comentários

```jsx
function handleLikeComment() {
  setLikeCount(likeCount + 1);
}

// restante do código...

<button onClick={handleLikeComment}>
  <ThumbsUp size={20} />
  Aplaudir <span>{likeCount}</span>
</button>;

// restante do código...

```

Porém foi passado pelo diegão que todo onClick no react só deve receber uma função para que possa ser executado, nunca deve ser passado uma lógica de execução ou a chamada da função, ou utiliza anonymo arrow function ou apenas a função separada como da forma que fizemos.
