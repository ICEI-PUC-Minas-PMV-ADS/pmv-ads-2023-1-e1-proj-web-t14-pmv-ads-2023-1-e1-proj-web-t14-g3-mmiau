// minha-area.js

window.addEventListener('DOMContentLoaded', function() {
    // Obtém os gatos cadastrados no LocalStorage
    var gatosCadastrados = localStorage.getItem('gatos');
    if (gatosCadastrados) {
      // Converte a string JSON em um array de objetos
      gatosCadastrados = JSON.parse(gatosCadastrados);
  
      // Exibe os gatos cadastrados na seção "Meus Anúncios"
      var tabelaAnuncios = document.getElementById('tela-anuncios');
  
      if (gatosCadastrados.length > 0) {
        var tabelaHTML = '<table><thead><tr><th>Nome</th><th>Sexo</th><th>Idade</th><th>Raça</th><th>Castração</th><th>Vacinação</th><th>Foto</th></tr></thead><tbody>';
  
        for (var i = 0; i < gatosCadastrados.length; i++) {
          var gato = gatosCadastrados[i];
  
          tabelaHTML += '<tr>';
          tabelaHTML += '<td>' + gato.nome + '</td>';
          tabelaHTML += '<td>' + gato.sexo + '</td>';
          tabelaHTML += '<td>' + gato.idade + '</td>';
          tabelaHTML += '<td>' + gato.raca + '</td>';
          tabelaHTML += '<td>' + gato.castracao + '</td>';
          tabelaHTML += '<td>' + gato.vacinacao + '</td>';
          tabelaHTML += '<td><img src="' + gato.foto + '" alt="Foto do gato"></td>';
          tabelaHTML += '</tr>';
        }
  
        tabelaHTML += '</tbody></table>';
        tabelaAnuncios.innerHTML = tabelaHTML;
      } else {
        tabelaAnuncios.innerHTML = '<p>Nenhum anúncio de gato cadastrado.</p>';
      }
    }
  });
  