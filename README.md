# Site de Rafael Rezende

Site estático (HTML, CSS e JavaScript, sem build) com os projetos e os contatos de Rafael Rezende, advogado que desenvolve ferramentas para a prática jurídica.

Publicado em https://ragrezende.github.io/portfolio-website/

## Para que servem o site e o perfil do GitHub

São duas portas de entrada para públicos diferentes, com o conteúdo em **um lugar só**, para não voltarem a divergir.

| Onde | Para quem | O que tem |
|---|---|---|
| **Este site** | Colegas advogados e quem chega pelo LinkedIn ou pelo e-mail, sem usar GitHub | Descrição e estado de **cada projeto**, sobre, contato. É a fonte única |
| **Perfil do GitHub** (`ragrezende/ragrezende`) | Quem navega pelo GitHub | Apresentação curta e o link para este site. Não descreve projetos |
| **README de cada projeto** | Quem vai usar ou contribuir | Uso, limites, como contribuir |

## Regra do site

Só aparece o que existe ou o que está assumido como próximo passo, sempre com o estado real à vista: **disponível**, **em desenvolvimento** ou **planejado**. Nada de projeto sem código ou sem demonstração apresentado como pronto. Sem formulário de contato que não envie nada.

## Como adicionar um projeto

1. Crie o repositório do projeto, com README próprio.
2. Copie o `<article class="card">` do projeto existente em `index.html` e troque título, descrição e links. Uma etiqueta de estado (`Disponível`, `Em desenvolvimento` ou `Planejado`) é obrigatória.
3. Com dois ou mais projetos, remova a classe `unico` do `<div class="grid cards unico">`, para os cartões formarem colunas.
4. Só se o projeto passar a ser o principal, atualize a linha "Projeto principal" do perfil do GitHub.

## Estrutura

```
index.html      página única
css/style.css   estilos, com tema escuro e claro
js/main.js      ano do rodapé, alternância de tema, rolagem suave
```

## Como atualizar

Edite os arquivos e faça o commit no `main`: o GitHub Pages publica sozinho. Para ver antes, abra o `index.html` no navegador.
