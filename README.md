
<p align="center">
<img src="https://user-images.githubusercontent.com/729786/83943228-cfd37780-a7d0-11ea-9ffd-d34ee5517fb3.png"/>
</p>

<p align="center">
<strong> <a href="#frontend---web">Frontend</a> | <a href="#-backend-">Backend</a> | <a href="#mobile">Mobile</a></strong>
</p>
<p align="center">
<img src="https://badgen.net/npm/types/react/" />
<img src="https://badgen.net/npm/types/tslib" />
</p>

<h1>♻️ Ecoleta  - 👨🏻‍🚀 nlw1 </h1>

<p>
Projeto criado na primeira semana Next Level Week da <strong>🚀 RocketSeat</strong>, utilizando as <i>stacks: NodeJs, React, React Native</i> .
Aplicando o <strong>typeScript</strong> em todo o projeto, destacando as vantagens de usar uma tipagem estática no javascript e explorar o <a href="https://docs.microsoft.com/pt-br/visualstudio/ide/using-intellisense?view=vs-2019#:~:text=O%20IntelliSense%20%C3%A9%20uma%20ajuda,Informa%C3%A7%C3%B5es%20R%C3%A1pidas%20e%20Completar%20Palavra.&text=V%C3%A1rios%20aspectos%20do%20IntelliSense%20s%C3%A3o%20espec%C3%ADficos%20do%20idioma.">IntelliSense</a> da IDE.
</p>

<h2>Configuração para rodar o projeto</h2>

1.  Abra o terminal.
2.  Faça um clone desse repositório rodando:  
    `git clone https://github.com/Heverson/ecolab-app.git`;
3.  Entre em cada pasta (/web, /backend, /mobile) pelo terminal;
4.  Em cada pasta rode o comando `yarn`  para instalar as dependências do projeto;
5.  Após isso poderá rodar:
	-  Na pasta **backend**: `yarn start` para iniciar a aplicação. Lembrando que você precisa rodar as migrations e a seeds, para ter seus banco de dados preparado para a aplicação.
	-  Na pasta **web**: `yarn dev` para iniciar a aplicação.
	-  Na pasta **mobile**: `yarn start` para iniciar a aplicação. Lembrando  que precisa ter o <a href="https://www.youtube.com/watch?v=eSjFDWYkdxM&vl=pt">*Expo* instalado</a>.


<h2> Backend </h2>
<p>Com Node utilizamos o express junto com o (<i>Query Builder</i>) - <a href="http://knexjs.org/">knexJS</a>.</p>
<p>
Com o knexJS podemos criar as migrations de pontos e items de coleta para o banco de dados.
Assim vamos ter nossas tabelas e dados do banco ao iniciar a aplicação, para isso rode os seguintes comandos:

 - `yarn knex migrate:up` 
 - `yarn knex seed:run`

O Banco de dados usado foi o SQLite, pela rapidez do desenvolvimento durante a semana, e por estar rodando na máquina sem precisar de instalações relacionadas ao banco de dados. O que facilita para você rodar.  
<p>

<h2>Frontend - /web</h2>
<p>Com ReactJs utilizamos o serviço de mapa da <a href="https://leafletjs.com/">LeafLet</a>, para o usuário marcar os pontos de coleta e registrar a latitude e longitude.</p>
<p>Para upload da foto do estabelecimento de coleta utilizamos o component <a href="https://github.com/react-dropzone/react-dropzone">Dropzone</a>, melhorando a usabilidade da aplicação.</p>
<p align="center">
<img src="https://user-images.githubusercontent.com/729786/83943224-ccd88700-a7d0-11ea-91dd-1b1c811a2dc6.png" width="600"/>
</p>


<h2>Mobile</h2>
<p>Para o mobile usamos o Expo que traz muitas facilidades para o desenvolvimento no React Native, como por exemplo utilização de fontes customizadas usando o Google Fonts, rodar o app em ambiente de desenvolvimento sem a necessidade de uma IDE para Android e outra para iOS.</p>
<table><tr><td>
<img src="https://user-images.githubusercontent.com/729786/83943130-df05f580-a7cf-11ea-97d9-922ef727f7ee.gif" width="300" /></td><td>
<img src="https://user-images.githubusercontent.com/729786/83943127-d9101480-a7cf-11ea-8781-b75e1d40c3ed.gif" width="300" />
</td></tr></table>


*Projeto criado por Heverson Damasceno, faz parte da NLW1 🚀 <strong>RocketSeat.</strong>*
