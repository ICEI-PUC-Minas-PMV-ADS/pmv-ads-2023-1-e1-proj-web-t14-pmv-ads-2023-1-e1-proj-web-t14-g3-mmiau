# Programação de Funcionalidades

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="4-Metodologia.md"> Metodologia</a>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="5-Arquitetura da Solução.md"> Arquitetura da Solução</a>

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo

|ID    | Descrição do Requisito  | Prioridade | Responsável |
|---|---|---|---|
|RF-001|O sistema gerencia o cadastro de usuários	|ALTA| `Emile`|
|RF-002|	O sistema exibe usuários cadastrados     |ALTA| `Emile` |

## RF-003

|ID    | Descrição do Requisito  | Prioridade | Responsável | 
|---|---|---|---|
|RF-003|	O sistema gerencia o cadastro de gatos |ALTA| `Márcio`|

### Artefatos:

- `anunciar.html`: Essa página contém um formulário de cadastro do gato.
- `minha-area.html`: Essa página contém a seção *"Meus anúncios"*, onde o usuário visualiza os gatos cadastrados.
- `anunciar.js`: Esse script contém a lógica para capturar os dados do formulário, armazená-los no LocalStorage do navegador e resgatá-los para exibir em *"Meus anúncios"*.

### Estruturas de dados:

- `LocalStorage`: Os dados dos gatos cadastrados são armazenados no LocalStorage do navegador.

### Instruções de acesso:

1. **Cadastrar Gatos:** 
    - Acesse a página "Anunciar" (anunciar.html).
    - Preencha todos os campos do formulário com as informações do gato que deseja cadastrar.
    - Clique no botão "Anunciar" para enviar o formulário.
    - Os dados do gato serão armazenados no LocalStorage.

2. **Visualizar Gatos Cadastrados (Seção "Meus Anúncios" na página "Minha Área"):**
    - Acesse a página "Minha Área" (minha-area.html).
    - Role até a seção "Meus Anúncios".
    - Clique no botão "Visualizar os gatinhos que você disponibilizou para adoção" para expandir a tabela.
    - A tabela será preenchida com os gatos cadastrados, mostrando suas informações, como nome, sexo, idade, raça, castração, vacinação e foto.

|ID    | Descrição do Requisito  | Prioridade | Responsável |
|---|---|---|---|
|RF-004|	O sistema gerencia a adoção de gatos, conforme etapas e regras de negócio pré-estabelecidos |ALTA|  `Gustavo`|

|ID    | Descrição do Requisito  | Prioridade | Responsável |
|---|---|---|---|
|RF-005|	O sistema exibe gatos cadastrados conforme critérios de busca (localização, palavras-chave, status de adoção ou nenhum critério especificado) |ALTA| `Vitor`|

|ID    | Descrição do Requisito  | Prioridade | Responsável |
|---|---|---|---|
|RF-008| O sistema exibe página de informações sobre o projeto, requisitos para adoção, cuidados com os gatos e suas necessidades |ALTA| `Igor`|

Devido à prioridade baixa, os requisitos abaixo serão implementados apenas caso haja tempo hábil
|ID    | Descrição do Requisito  | Prioridade | Responsável |
|---|---|---|---|
|RF-006|	O sistema permite ao usuário realizar doação por meio de PIX |BAIXA|    |
|RF-007|	O sistema exibe histórico de doações	|BAIXA|  |

> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)