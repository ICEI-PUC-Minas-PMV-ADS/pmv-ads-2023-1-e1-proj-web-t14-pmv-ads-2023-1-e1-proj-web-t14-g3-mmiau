# Especificações do Projeto

Nesta seção, serão detalhados os requisitos funcionais e não funcionais, bem como as limitações e restrições do projeto. É importante destacar que as especificações aqui descritas foram definidas pela equipe com base na entrevistas com os usuários, buscando compreender suas necessidades, a fim de garantir um site de qualidade e com alto nível de satisfação dos usuários.

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

## Personas

Isabela Nunes, 31 anos, é arquiteta, e Catarina Gonçalves, 29 anos, é advogada. São casadas, moram juntas e possuem uma filha. Procuram uma nova adição para a família, com o objetivo de dar companhia para sua filha enquanto estão trabalhando. Saber o temperamento e as necessidades do animal facilitará a adoção.

Filipe Bragança Batista tem 26 anos, é tatuador e proprietário de um estúdio de tatuagens e modificações corporais. Deseja adotar um gato pequeno e independente, que possa permanecer tanto em seu apartamento ou em seu estúdio, de temperamento dócil e que não perturbe os clientes.

Silvia Araujo Gomes,aposentada, tem 65 anos, cuida de diversos gatos de rua em seu bairro, adoraria encontrar um lar para os gatinhos. Busca um local de anúncio para os gatos em seu cuidado, para que possam ser adotados por pessoas responsáveis, pois seus familiares e amigos não têm interesse em adotar os pets.

Manoela Goulart, é estudante de medicina veterinária e tem 21 anos. Gosta muito de animais, especialmente gatos, e gostaria de apoiar a causa dos animais em situação de rua de alguma forma, porém mora em uma república em que não é permitido ter animais domésticos.

Bruna Santos, 31 anos, é bacharel em medicina veterinária e presidente de uma ONG para resgate e adoção de gatos de rua. Deseja gerenciar um ambiente web que possibilite a outras pessoas: adotar os gatos resgatados por sua ONG; contribuir financeiramente com a manutenção dos cuidados desses animais; disponibilizar para adoção os gatos em seus cuidados para evitar que sejam abandonados

 
 ## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Adotante  | Adotante	encontrar um site de fácil acesso que disponibilize informações sobre as características dos animais	adotar um gato calmo, que se adapte facilmente com crianças e permitir que convivam harmonicamente em minha casa           | adotar um gato calmo, que se adapte facilmente com crianças e permitir que convivam harmonicamente em minha casa               |
|Adotante       | visualizar um catálogo de informação sobre cuidados com os gatos, suas necessidades e adaptabilidade                 | me certificar de que estou apto a adotar um gato e me preparar para a chegada de um pet, para garantir o bem-estar do animal após a entrega aos meus cuidados |
|Adotante       | pesquisar animais disponíveis em minha região, e verificar suas características e necessidades, sem que seja necessário sair de casa                 |conhecê-lo remotamente antes de decidir adotar, pois a minha rotina não permite deslocamento até um centro de adoção|
|Tutor       | encontrar um local seguro e confiável em que eu possa disponibilizar os gatos em meus cuidados para adoção | Tutor	encontrar um local seguro e confiável em que eu possa disponibilizar os gatos em meus cuidados para adoção	os gatos possam ser adotados por pessoas responsáveis e recebam os cuidados necessários para garantir seu bem-estar |
|Apoiador       | contribuir com a causa de alguma forma, realizando doações, sem que seja necessário adotar um gato                 | prestar auxílio financeiro aos cuidadores dos gatos para manutenção da saúde e do bem-estar dos felinos que ainda não foram adotados, pois não tenho condições para adotar um animal |
|Administrador do projeto       | Administrador do projeto	administrar um site para facilitar a adoção dos gatos da minha ONG por pessoas responsáveis, e permitir que as pessoas possam contribuir (disponibilizando gatos ou com auxílio financeiro)	reduzir o número de gatos de rua ou em iminência de abandono; conscientizar a população acerca da importância da adoção consciente                 | reduzir o número de gatos de rua ou em iminência de abandono; conscientizar a população acerca da importância da adoção consciente |



## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Responsável |
|---|---|---|---|
|RF-001|O sistema gerencia o cadastro de usuários	|ALTA| Emile |
|RF-002|	O sistema exibe usuários cadastrados     |ALTA| Emile |
|RF-003|	O sistema gerencia o cadastro de gatos |ALTA| Márcio |
|RF-004|	O sistema gerencia a adoção de gatos, conforme etapas e regras de negócio pré-estabelecidos |ALTA|  Gustavo |
|RF-005|	O sistema exibe gatos cadastrados conforme critérios de busca (localização, palavras-chave, status de adoção ou nenhum critério especificado) |ALTA| Márcio |
|RF-006|	O sistema permite ao usuário realizar doação por meio de PIX |ALTA|
|RF-007|	O sistema exibe histórico de doações	|ALTA| Vitor |
|RF-008| O sistema exibe página de informações sobre o projeto, requisitos para adoção, cuidados com os gatos e suas necessidades |ALTA| Igor |



### Requisitos não Funcionais

|ID     | Descrição do Requisito  |
|---|---|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel| 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 
|RNF-003| O sistema executa na internet| 
|RNF-004| O sistema deve permitir a visualização em diferentes resoluções de tela (monitor, tablet, smartphone)| 
|RNF-005| O sistema deve ser compatível com os navegadores (Google Chrome, Mozilla Firefox e Microsoft EDGE |

## Requisitos de domínio de negócio

|ID| Descrição do Requisito  |
|---|---|
|RN-001|	Para poder se cadastrar, o usuário deverá ser maior de idade, possuir CPF e residir em Belo Horizonte e região metropolitana|
|RN-002|	Os gatos cadastrados por usuários só serão anunciados para adoção mediante preenchimento completo e aprovação do formulário de anúncio de gatos|
|RN-003|	Para adotar um gato, é necessário que o adotante seja um usuário cadastrado no site|
|RN-004|	O gato só será reservado ao adotante após este preencher o formulário de adoção, para avaliação pelo administrador do projeto|
|RN-005|	A adoção será confirmada somente após a aprovação do formulário de adoção|
|RN-006|	Caso o formulário de adoção seja reprovado por não cumprir os requisitos para adoção, a reserva do animal será cancelada|
|RN-007|	Após submissão dos formulários, toda a comunicação com o adotante será realizada via e-mail
|RN-008| No ato da entrega, o voluntário do projeto realizará a inspeção no ambiente, a fim de validar as respostas do formulário de adoção e se certificar de que o animal estará seguro|
|RN-009|	O animal só será entregue ao adotante após a aprovação da inspeção do voluntário do projeto|
|RN-010|	A adoção só será considerada efetivada após a entrega do animal pelo voluntário do projeto|
|RN-011| O mesmo adotante não poderá reservar mais que 3 (três) gatos simultaneamente|
|RN-012|	O tempo de avaliação dos formulários é de até 7 dias úteis|
|RN-013|	As doações deverão ser realizadas somente via PIX, conforme chave pix divulgada na seção específica do site. É de inteira responsabilidade do doador a garantia de que os dados da transação estejam corretos|
|RN-014|	O valor doado não poderá ser devolvido após a efetivação do pagamento|


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|---|---|
|RE-001|	O projeto deve ser entregue até o final do período letivo (12/07)|
|RE-002|	A equipe desenvolvedora deve possuir até 6 integrantes|

