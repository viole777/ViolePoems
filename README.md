# ViolePoems

O **ViolePoems** é uma plataforma front-end para pessoas que gostam de escrever e compartilhar poemas. O projeto foi criado para oferecer um espaço simples de expressão, com uma interface temática, navegação entre páginas e formulários para interação com o visitante.

Este foi o **projeto de conclusão do curso de Front-end**, desenvolvido para aplicar na prática conceitos de estruturação de páginas, estilização responsiva, manipulação do DOM, validação de formulários e requisições assíncronas.

## Funcionalidades

- Página inicial com apresentação do projeto e acesso à navegação principal.
- Publicação de poemas diretamente na página, com validação de título e conteúdo.
- Limite de 500 caracteres para o texto do poema.
- Exibição dos poemas publicados durante a sessão atual.
- Formulário de contato com validação de nome e mensagem.
- Página de sugestões para interação com o usuário.
- Exemplo de requisição com `fetch` e tratamento de estado de carregamento em `ajax.html`.
- Layout adaptado para telas menores, como celulares e tablets.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Google Fonts, com a fonte Viaoda Libre
- API JSONPlaceholder, utilizada no exemplo de requisição AJAX

## Estrutura do projeto

```text
ViolePoems/
├── ajax.html              # Página de demonstração de requisição assíncrona
├── ajax.js                # Exemplo de uso da Fetch API
├── contato.html           # Página de contato
├── ferramentas.md         # Anotações sobre ferramentas do projeto
├── index.html             # Página inicial
├── publicar.html          # Formulário e lista de poemas
├── README.md              # Documentação do projeto
├── sobremim.html          # Página sobre o autor
├── sugestao.html          # Página de sugestões
├── css/
│   └── index.css          # Estilos compartilhados
├── imagens/
│   └── photo-1519682337058-a94d519337bc.avif
└── js/
	 ├── contato.js         # Validação do formulário de contato
	 ├── publicar.js        # Publicação e exibição de poemas
	 └── sugestao,js        # Validação do formulário de sugestões
```

## Como executar

Por ser um projeto front-end estático, não é necessário instalar dependências ou configurar um servidor backend.

1. Clone este repositório:

	```bash
	git clone https://github.com/viole777/ViolePoems.git
	```

2. Acesse a pasta do projeto:

	```bash
	cd ViolePoems
	```

3. Abra o arquivo `index.html` no navegador.

Para uma experiência de desenvolvimento mais prática, também é possível abrir a pasta no Visual Studio Code e utilizar a extensão **Live Server**.

## Observações

Os poemas são inseridos dinamicamente na página e ficam disponíveis enquanto a página permanece aberta. Como este é um projeto exclusivamente front-end, os dados ainda não são enviados para um banco de dados ou para uma API própria.

## Autor

Desenvolvido por **Luiz Guilherme** (`@7lugui7`) como projeto de conclusão do curso de Front-end.
