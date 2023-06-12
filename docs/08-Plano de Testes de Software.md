# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

Apresente os cenários de testes utilizados na realização dos testes da sua aplicação. Escolha cenários de testes que demonstrem os requisitos sendo satisfeitos.

Enumere quais cenários de testes foram selecionados para teste. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.

|Caso de Teste: |CT-001 – Validação de campos vazios no cadastro do gato|
|------|-----------------------------------------|
|Pré-Condições: |Estar na tela "Anunciar"|
|Procedimentos: |`1` O ator deve preencher todos os campos e clicar no botão "Anunciar"|
|Resultado esperado (RE): |Mensagem de erro sinalizando os campos pendentes de preenchimento|
|Dados de entrada: |Campo "Raça" vazio|
|Resultado Obtido (RO): |Mensagem de erro “Selecione um item na lista.”  (RE=RO) |

|Caso de Teste: |CT-002 – Responsividade do menu principal|
|------|-----------------------------------------|
|Pré-Condições: |Estar em qualquer tela do site, acessando de um dispositivo cuja resolução de tela seja inferior a 880px|
|Procedimentos: |`1` O ator deve reduzir o tamanho da tela ou acesssar o site de um dispositivo com resolução de tela inferior a 880px (exemplos: smartphones, tablets) <br> `2`Para acessar novamente o menu principal, o ator deverá clicar no ícone "menu hambúrguer" que será exibido no canto superior direito da tela.<br>`3` Para retrair o menu, o ator deverá clicar sobre o ícone de "X" no canto superior direito da tela.|
|Resultado esperado (RE): |O menu principal deve se recolher à direita, expandir ao clicar no ícone de "menu hambúrguer" e retrair-se ao clicar no ícone "X"|
|Dados de entrada: |    |
|Resultado Obtido (RO): |Menu se retrai em telas de resolução inferiores a 880px, e é exibido e retraído ao cliclar nos respectivos ícones (RE=RO) |
 
## Ferramentas de Testes (Opcional)

Comente sobre as ferramentas de testes utilizadas.
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
