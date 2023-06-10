# Programação Declarativa

A programação declarativa é mais parcial, porém efetiva, ao não fornecer muitos detalhes sobre a execução.

## Armazenando os comentários

```jsx
<textarea
  placeholder="Deixe um comentário"
  name="comment"
  value={newCommentText}
  onChange={handleSetNewCommentText}
></textarea>
```

Adicionamos uma função para armazenar o valor do TextArea em um estado sempre que houver uma mudança:

```jsx
function handleCreateNewComment() {
  event.preventDefault();

  setComment([...comment, newCommentText]);
  setNewCommentText("");
}
```

No mesmo contexto dessa função, configuramos o estado inicial dos comentários para uma string vazia e armazenamos os valores dos comentários em outro estado chamado "comment".

```jsx
const [comment, setComment] = useState(["Post muito bacana"]);
```

Este é o estado usado para armazenar os comentários inseridos no TextArea.

```jsx
const [newCommentText, setNewCommentText] = useState("");
```

Usamos esse estado para passar o valor para o "comment", que armazena todos os comentários.

```jsx
function handleSetNewCommentText() {
  setNewCommentText(event.target.value);
}
```

Essa função ouve as alterações no TextArea e atualiza o estado "newCommentText" para exibir o valor por meio do mapeamento do estado "comment".

```jsx
{
  comment.map((comment) => {
    return <Comment content={comment} />;
  });
}
```

Aqui estamos passando o comentário como parâmetro para o componente Comment, para que ele possa ser utilizado na exibição do cartão do comentário dessa maneira:

```jsx
<p>{content}</p>
```
