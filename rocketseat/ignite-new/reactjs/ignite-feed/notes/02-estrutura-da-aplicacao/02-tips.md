# Dicas CSS

```css
.profile {
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: calc(0px 1.5rem - 6px);
}

.profile .avatar {
  width: calc(3rem + 12px);
  height: calc(3rem + 12px);
  border-radius: 8px;
  border: 4px solid var(--gray-800);
  outline: 2px solid var(--green-500);
}
```

Nesta versão simplificada, removemos a propriedade box-sizing: initial; e atualizamos os valores de width e height para levar em consideração a largura adicional da borda e do contorno. No margin-top, ajustamos o cálculo para calc(0px - 1.5rem - 6px). Essas alterações ajudam a lidar com a distorção causada pela estilização da borda e do contorno, mantendo o elemento de imagem com as dimensões corretas.

## :focus

```css
:focus {
  outline: transparent;
  box-shadow: 0 0 0 2px var(--green-300);
}
```

Essa é uma estratégia para adicionar foco com acessibilidade. Será criada uma sombra (box-shadow) de 2px, semelhante a uma borda ou contorno do CSS, tornando nossa aplicação mais amigável.

## :focus-within

```css
.comentForm footer {
  visibility: hidden;
  max-height: 0;
}
.comentForm:focus-within footer {
  visibility: visible;
  max-height: none;
}
```

Para criar uma interação entre a área de texto (textarea) e o botão (button), utilizamos a pseudo-classe :focus-within. Essa pseudo-classe indica que, se ocorrer um foco no elemento ao qual ela é aplicada, haverá uma estilização no elemento especificado a seguir. Portanto, o elemento footer, onde o botão está localizado, se tornará visível para o usuário.

## Utilizado lógica nas props

Para tornar as imagens dos avatares mais interativas em nossa aplicação, utilizamos props e um pouco de lógica em JavaScript, resultando no seguinte código:

```jsx
<Avatar 
src="https://github.com/jakeliny.png" 
hasBorder={false} 
/>
```

Criamos um componente chamado Avatar, que é responsável por exibir as imagens dos avatares em comentários, posts e perfis. Para o componente que não deve ter uma borda, passamos a propriedade hasBorder como false, um valor booleano que determina logicamente a ausência da borda. Em nosso componente, lidamos com esse valor da seguinte maneira:

```css
.avatar {
  width: 3rem;
  height: 3rem;
  border-radius: 8px;
}
.avatarWithBorder {
  width: calc(3rem + 12px);
  height: calc(3rem + 12px);
  border-radius: 8px;
  border: 4px solid var(--gray-800);
  outline: 2px solid var(--green-500);
}
```
```jsx
import styles from './Avatar.module.css';
// eslint-disable-next-line react/prop-types
export function Avatar({hasBorder = true, src}) {
  return (
    <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
    src={src} />
  )
}
```

No componente, utilizamos a destruturação do objeto que guarda as propriedades passadas, permitindo definir um valor padrão para a propriedade hasBorder, o que facilita nossa lógica para definir a classe do elemento. Nela, dizemos que se hasBorder for verdadeiro, adicionamos a classe avatarWithBorder, caso contrário, definimos a classe como avatar.

## Responsividade

Para tornar nossa aplicação responsiva, utilizamos a estratégia de media queries. Com isso, podemos definir estilos para a aplicação com base na largura da tela. Veja como estilizamos a aplicação para dispositivos móveis:

```css
@media (max-width: 768px) {
  html {
    font-size: 87.5%;
  }
  .wrapper {
    grid-template-columns: 1fr;
  }
}
```

Nessa regra, quando a largura da tela for igual a 768px, o grid será alterado para uma única coluna (1fr). No caso do font-size, fizemos um cálculo proporcional para manter a responsividade da aplicação. Inicialmente, o tamanho da fonte era 16px, e para torná-la responsiva, usamos a seguinte proporção:

16px --> 100%
14px --> x

Resolvendo essa regra de três, obtemos o valor de x como 87.5%. Assim, aplicamos esse valor ao font-size para telas médias e está pronto.

*IMPORTANTE* -> Essa lógica só será possível se todas as medidas da aplicação estarem com a medida relativa rem


