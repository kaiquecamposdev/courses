# Validando Formulário

Nesta aula, criamos uma função para lidar com inputs vazios em nosso textarea.

## required and onInvalid

```jsx
<textarea
  placeholder="Deixe um comentário"
  name="comment"
  value={newCommentText}
  onChange={handleSetNewCommentText}
  onInvalid={handleNewCommentInvalid}
  required
></textarea>
```

O atributo required no HTML impede que o usuário deixe o campo vazio e exibe uma mensagem indicando que o preenchimento é obrigatório.

No entanto, podemos personalizar a mensagem exibida com o onInvalid, que nos permite modificar o texto da mensagem. Essa é apenas uma das possibilidades que foram apresentadas na aula.

```jsx
function handleNewCommentInvalid() {
  event.target.setCustomValidity("Esse campo é obrigatório");
}
```

Essa função é um exemplo de como podemos alterar a mensagem exibida pelo campo obrigatório.

## Button and disabled

Com o atributo disabled no HTML, podemos definir um valor booleano (true ou false). No entanto, no React, podemos ir além e adicionar condicionais dentro de um escopo.

```jsx
const isNewCommentEmpty = newCommentText.length === 0

// restante dp código...

<button 
type="submit" 
disabled={isNewCommentEmpty}
>
  Publicar
</button>

// restando do código...

```

Dessa forma, podemos trabalhar com CSS em nosso botão da seguinte maneira:

```css
.comentForm button[type=submit]:not(:disabled):hover {
  background: var(--green-300);
}
.comentForm button[type=submit]:disabled{
  opacity: 0.7;
  cursor: not-allowed;
}
```

A função not() cria uma condição semelhante a uma condicional em JavaScript, permitindo que criemos lógicas dentro do CSS.

Quando o :disabled não estiver ativado e o mouse passar por cima do botão, o background será alterado. Já quando o botão estiver desabilitado, a opacidade será reduzida e o cursor será alterado para "not-allowed".