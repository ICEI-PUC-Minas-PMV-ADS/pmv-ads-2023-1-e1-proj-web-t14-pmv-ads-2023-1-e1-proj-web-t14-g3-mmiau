// anunciar.js

document.getElementById('cadastro-gato').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário
  
    // Obtém os valores dos campos do formulário
    var nome = document.getElementById('nome-gato').value;
    var sexo = document.getElementById('sexo-gato').value;
    var idade = document.getElementById('idade-gato').value;
    var raca = document.getElementById('raca-gato').value;
    var castracao = document.getElementById('castracao-gato').value;
    var vacinacao = document.getElementById('vacinacao-gato').value;
    var foto = document.getElementById('foto-gato').value;
  
    // Cria um objeto com os dados do gato
    var gato = {
      nome: nome,
      sexo: sexo,
      idade: idade,
      raca: raca,
      castracao: castracao,
      vacinacao: vacinacao,
      foto: foto
    };
  
    // Verifica se já existem gatos cadastrados no LocalStorage
    var gatosCadastrados = localStorage.getItem('gatos');
    if (gatosCadastrados) {
      // Se já existem gatos cadastrados, converte a string JSON em um array
      gatosCadastrados = JSON.parse(gatosCadastrados);
    } else {
      // Se não existem gatos cadastrados, cria um novo array vazio
      gatosCadastrados = [];
    }
  
    // Adiciona o novo gato ao array
    gatosCadastrados.push(gato);
  
    // Converte o array em uma string JSON e armazena no LocalStorage
    localStorage.setItem('gatos', JSON.stringify(gatosCadastrados));
  
    // Limpa os campos do formulário
    document.getElementById('cadastro-gato').reset();
  
    // Exibe uma mensagem de sucesso ou redireciona para outra página, se necessário
  });
  