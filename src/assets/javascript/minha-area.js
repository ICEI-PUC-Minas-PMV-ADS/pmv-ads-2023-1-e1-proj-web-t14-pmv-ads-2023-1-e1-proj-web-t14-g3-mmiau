document.addEventListener('DOMContentLoaded', () => {

    window.addEventListener('DOMContentLoaded', function() {
        // Obtém os gatos cadastrados no LocalStorage
        var gatosCadastrados = JSON.parse(localStorage.getItem('gatos'));
    
        // Verifica se existem gatos cadastrados
        if (gatosCadastrados && gatosCadastrados.length > 0) {
        // Cria a tabela para exibir os gatos cadastrados
        var tabelaAnuncios = document.getElementById('tela-anuncios');
    
        var tabelaHTML = '<table><thead><tr><th>Nome</th><th>Sexo</th><th>Idade</th><th>Raça</th><th>Castração</th><th>Vacinação</th><th>Foto</th></tr></thead><tbody>';
    
        // Itera sobre os gatos cadastrados e cria as linhas da tabela
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
    
        // Exibe a tabela de gatos cadastrados
        tabelaAnuncios.innerHTML = tabelaHTML;
        }
    });
  
});