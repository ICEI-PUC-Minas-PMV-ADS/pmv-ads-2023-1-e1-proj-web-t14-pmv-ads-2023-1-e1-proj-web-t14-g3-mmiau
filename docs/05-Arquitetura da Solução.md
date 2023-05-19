<h1> Arquitetura da Solução </h1>

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

<<<<<<< Updated upstream
Alterei o texto da Arquitetura!!!! -marcio

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.
=======
Nesta seção são apresentados os detalhes técnicos da solução criada pela equipe, tratando dos componentes que fazem parte da solução e do ambiente de hospedagem da solução.
>>>>>>> Stashed changes

<h2> Diagrama de componentes </h2>

Diagrama que permite a modelagem física de um sistema, através da visão dos seus componentes e relacionamentos entre os mesmos.

Os componentes que fazem parte da solução são apresentados na Figura 01.

<img src="C:\Users\mizuq\Documents\GitHub\pmv-ads-2023-1-e1-proj-web-t14-pmv-ads-2023-1-e1-proj-web-t14-g3-mmiau\docs\img\236988241-46534002-8945-4873-b833-1e4fcd5c4fb0.png">>
<p> Figura 01 - Arquitetura da Solução </p>

<<<<<<< Updated upstream
<center><img src="https://user-images.githubusercontent.com/131212345/236988241-46534002-8945-4873-b833-1e4fcd5c4fb0.PNG"></center>
<center>Figura 01 - Arquitetura da Solução</center>

A solução implementada conta com os seguintes módulos:

## Client-side: 
HTML, CSS e JavaScript, que são as tecnologias básicas para construir a interface do site e suas funcionalidades.

## Server-side: 
Para o servidor, pode-se utilizar o Node.js, que é uma plataforma JavaScript que permite a construção de servidores web escaláveis e de alto desempenho.

## Banco de dados: 
Para armazenar os dados do site, pode-se utilizar o MySQL, PostgreSQL ou MongoDB, que são bancos de dados populares e acessíveis. 
=======
<h3> A solução implementada conta com os seguintes módulos: </h3>

<p> <strong> Client-side:</strong> HTML, CSS e JavaScript, que são as tecnologias básicas para construir a interface do site e suas funcionalidades. <break>

<strong> Server-side: </strong> Para o servidor, pode-se utilizar o Node.js, que é uma plataforma JavaScript que permite a construção de servidores web escaláveis e de alto desempenho. <break>

<strong> Banco de dados: </strong> Para armazenar os dados do site, pode-se utilizar o MySQL, PostgreSQL ou MongoDB, que são bancos de dados populares e acessíveis. <break>

<strong> API's: </strong>
APIs de redes sociais: como a API do Facebook, Twitter e Instagram. <break>
APIs de e-mail: como o serviço de e-mails da Google (Gmail) ou Microsoft (Outlook). <break>
API RESTful: para comunicação entre front-end e back-end.
</p>
>>>>>>> Stashed changes

> **Links Úteis**:
>
> - [Whimsical](https://whimsical.com/)



A imagem a seguir ilustra a o fluxo do usuário em nossa solução. Assim
que o usuário entra na plataforma, ele é apresentado à tela inicial
(Tela 1) onde ele é confrontado com as opões de editar seu perfil ou
então visualizar sua galeria.

Caso ele opte por seguir pelo primeiro caminho (Editar Perfil), ele é
redirecionado para a tela de edição de perfil (Tela 2), onde pode
atualizar seus dados cadastrais. Nessa tela, o usuário também pode
escolher para editar sua foto de perfil. Ao selecionar essa opção, ele é
redirecionado para a Tela 3, onde ele a imagem expandida do perfil do
usuário é mostrado. Ao selecionar a opção para atualizar a imagem, uma
nova janela abre pedindo para o usuário fazer o upload da nova foto.
Assim que o processo termina um pop-up exibe o status para o usuário
(Tela 4) e o usuário é redirecionado para a Tela 2.

Caso o usuário opte seguir pelo segundo caminho (Visualizar Galeria) ele
é redirecionado para a Tela 5 com todas as fotos que o usuário possui. O
usuário pode clicar em um post qualquer para visualizar os detalhes do
post (Tela 6). Nessa tela, ele pode então escolher editar o post, sendo
redirecionado para a Tela 7. Ao editar as informações, o usuário pode
escolher salvar ou deletar o post. Em ambos os casos o status é
notificado para o usuário (Tela 8) e em seguida ele é redirecionado
para a Tela 2.

<h2> Diagrama de Classes: </h2>

<img src="C:\Users\mizuq\Documents\GitHub\pmv-ads-2023-1-e1-proj-web-t14-pmv-ads-2023-1-e1-proj-web-t14-g3-mmiau\docs\img\236987970-d373b4e3-652e-4180-a2c5-463b06a7f9b5.jpg">

<h2> Tecnologias Utilizadas </h2>
 
 <img src= C:\Users\mizuq\Documents\GitHub\pmv-ads-2023-1-e1-proj-web-t14-pmv-ads-2023-1-e1-proj-web-t14-g3-mmiau\docs\img\Tecnologias.png>


<h2> Hospedagem: </h2>

GITHUB PAGES!!!!!
Explique como a hospedagem e o lançamento da plataforma foi feita.

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)
