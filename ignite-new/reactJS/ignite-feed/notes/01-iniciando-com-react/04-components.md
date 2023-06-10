# Componentes no ReactJS

Os componentes são a base do ReactJS, uma biblioteca JavaScript utilizada para construir interfaces de usuário interativas e reativas. Eles são blocos de construção fundamentais que permitem dividir a interface do usuário em partes reutilizáveis e independentes. Neste guia, exploraremos os componentes no ReactJS em mais detalhes.

# Tipos de Componentes

Existem dois principais tipos de componentes no ReactJS: componentes de função (Function Components) e componentes de classe (Class Components).

# Componentes de Função

Os componentes de função são funções JavaScript que retornam elementos React. Eles são mais simples e fáceis de entender e usar. Para criar um componente de função, basta escrever uma função que retorna um elemento JSX.

```jsx
// Exemplo de um componente de função
function MeuComponente() {
  return <div>Olá, mundo!</div>;
}
```

# Componentes de Classe

Os componentes de classe são classes JavaScript que estendem a classe React.Component. Eles têm um ciclo de vida mais complexo e são usados para componentes com estado (stateful). Para criar um componente de classe, é necessário definir uma classe que herde de React.Component e implementar o método render().

```jsx
// Exemplo de um componente de classe
class MeuComponente extends React.Component {
  render() {
    return <div>Olá, mundo!</div>;
  }
}
```

# Composição de Componentes

Uma das principais vantagens do ReactJS é a capacidade de compor componentes para construir interfaces complexas. Isso significa que os componentes podem ser combinados e aninhados uns dentro dos outros para formar uma hierarquia de componentes. Os componentes podem ser reutilizados em diferentes partes da aplicação, o que melhora a modularidade e a manutenção do código.

```jsx
// Exemplo de composição de componentes
function App() {
  return (
    <div>
      <Cabecalho />
      <Conteudo />
      <Rodape />
    </div>
  );
}

function Cabecalho() {
  return <header>...</header>;
}

function Conteudo() {
  return <main>...</main>;
}

function Rodape() {
  return <footer>...</footer>;
}
```
