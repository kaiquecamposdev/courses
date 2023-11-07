# Propriedades (Props) no ReactJS

As propriedades (props) são um conceito fundamental no ReactJS, permitindo que os componentes sejam configuráveis e recebam dados do componente pai. As props são objetos JavaScript que são passados para os componentes como atributos e podem ser acessados dentro do componente.

# Passando Propriedades

As props são passadas de um componente pai para um componente filho através da declaração de atributos no JSX. Por exemplo, se tivermos um componente pai chamado Pai e um componente filho chamado Filho, podemos passar uma propriedade nome para o componente filho da seguinte forma:

```jsx
// Componente Pai
function Pai() {
  return <Filho nome="João" />;
}
// Componente Filho
function Filho(props) {
  return <p>Olá, {props.nome}!</p>;
}
```

No exemplo acima, a propriedade nome é passada para o componente Filho como um atributo. Dentro do componente Filho, podemos acessar essa propriedade usando o objeto props.

# Utilizando Propriedades

Dentro de um componente, as propriedades podem ser acessadas através do objeto props. No exemplo anterior, a propriedade nome é acessada como props.nome dentro do componente Filho.

As propriedades são usadas para tornar os componentes mais flexíveis e reutilizáveis. Podemos passar diferentes valores para as propriedades e o componente se adaptará a eles. Além disso, podemos utilizar as propriedades para realizar lógica condicional ou para exibir dinamicamente conteúdo com base nos valores passados.
