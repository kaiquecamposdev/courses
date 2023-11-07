Sempre que for atualizar uma informação, e essa informação depende do valor que ela possuia anteriormente é sempre bom utilizar esse padrão de funções:

```jsx
function Component() {
const [like, setLike] = useState(0)

function addLike() {
  setLike((state) => {
    return state + 1
  })
    setLike((state) => {
    return state + 1
  })
}
}
```

Quando puxamos a props state, estamos pegando o valor mais recente daquele state