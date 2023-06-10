# Iteração

Nesta aula, criamos a lógica para lidar com a iteração das informações de cada post. Veja como é feito:

```jsx
const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/kaiquecamposdev.png",
      name: "Kaique de Campos M.",
      role: "Frontend Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-05-29 20:00:00"),
  },
];
```

Primeiro, criamos o array posts que será iterado para exibir os nossos posts.

Para passar essas propriedades para o componente Post, devemos fazer o seguinte:

```jsx
{
  posts.map((post) => {
    return (
      // eslint-disable-next-line react/jsx-key
      <Post
        author={post.author}
        content={post.content}
        publishedAt={post.publishedAt}
      />
    );
  });
}
```

Dessa forma, podemos utilizar os valores dessas props no componente.
