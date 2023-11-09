# Estado(useState)

```jsx
<form onSubmit={handleCreateNewComment} className={styles.comentForm}>
  <strong>Deixe seu feedback</strong>
  <textarea placeholder="Deixe um comentário"></textarea>
  <footer>
    <button type="submit">Comentar</button>
  </footer>
</form>
```

No código acima, adicionamos a propriedade onSubmit ao formulário e atribuímos a ela uma função para lidar com o evento do botão.

```jsx
const [comments, setComments ] = useState([1, 2, ])
```

Utilizamos o useState para definir uma variável de estado chamada comments, inicializada com um array contendo os valores 1 e 2.

```jsx
function handleCreateNewComment() {
  event.preventDefault();

  setComments([...comments, comments.length + 1]);
}
```

Na função handleCreateNewComment, utilizamos event.preventDefault() para evitar que a página seja recarregada quando o botão submit for clicado. Isso é necessário porque, por padrão, o botão submit redireciona para outra página.

O useState permite que atualizemos o valor da variável comments, e nesse caso utilizamos o spread operator para criar um novo array. A cada iteração, adicionamos um novo item ao array, baseado no tamanho atual do array de comentários mais um.

O React acaba controlando o escopo de cada Post, por isso que a cada submit apenas um dos Post será alterado.