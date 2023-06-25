document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('cadastro-gato-form');

    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Evitar o envio do formulário por padrão
  
      var nome = document.getElementById('nome-gato').value;
      var sexo = document.getElementById('sexo-gato').value;
      var idade = document.getElementById('idade-gato').value;
      var raca = document.getElementById('raca-gato').value;
      var castracao = document.getElementById('castracao-gato').value;
      var vacinacao = document.getElementById('vacinacao-gato').value;
      var foto = document.getElementById('foto-gato').value;

      // Criar um objeto com os dados do gato
      var gato = {
        nome: nome,
        sexo: sexo,
        idade: idade,
        raca: raca,
        castracao: castracao ? 'Castrado' : 'Não castrado',
        vacinacao: vacinacao ? 'Vacinado' : 'Não vacinado',
        foto: foto
      };

      // Obter os gatos cadastrados do localStorage
      var gatosCadastrados = JSON.parse(localStorage.getItem('gatos')) || [];

      // Adicionar o gato cadastrado à lista
      gatosCadastrados.push(gato);

      // Armazenar a lista atualizada no localStorage
      localStorage.setItem('gatos', JSON.stringify(gatosCadastrados));
      
      // Exibir a mensagem de sucesso em um alerta
      alert('Gato cadastrado com sucesso!');
          
      // Limpar os campos do formulário
      form.reset();

    });
  });
});