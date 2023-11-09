# Fundamentos do React

## SSR e SPA: Renderização no Lado do Servidor (SSR) e Aplicação de Página Única (SPA)

Quando se trata de desenvolvimento com React, é importante entender os conceitos de Renderização no Lado do Servidor (Server-Side Rendering, SSR) e Aplicação de Página Única (Single-Page Application, SPA).

SSR é um padrão de renderização em que todo o site é processado pelo lado do servidor. Isso significa que, quando uma requisição é feita ao servidor, ele gera o HTML completo da página e envia para o navegador do cliente. O navegador, por sua vez, apenas precisa renderizar o conteúdo já recebido. Essa abordagem é útil quando se deseja ter um melhor desempenho no carregamento inicial da página e também para melhorar a indexação pelos motores de busca, pois o conteúdo é pré-renderizado no servidor.

Por outro lado, o SPA divide os papéis de renderização entre o back-end e o front-end da aplicação. O back-end é responsável por fornecer os dados necessários para a renderização do front-end, geralmente no formato de um JSON. Esses dados são então utilizados pelo React para construir a interface do usuário no navegador. Nesse caso, o back-end fica encarregado principalmente de lidar com o banco de dados e retornar as informações necessárias, o que traz uma maior flexibilidade e praticidade no desenvolvimento da aplicação.

Portanto, ao escolher entre SSR e SPA, é importante considerar os requisitos específicos do projeto, como desempenho, SEO (otimização para motores de busca) e complexidade de implementação. O SSR é mais adequado quando o desempenho inicial e a indexação pelos motores de busca são prioridades, enquanto o SPA oferece uma maior flexibilidade e praticidade para o desenvolvimento da aplicação.e