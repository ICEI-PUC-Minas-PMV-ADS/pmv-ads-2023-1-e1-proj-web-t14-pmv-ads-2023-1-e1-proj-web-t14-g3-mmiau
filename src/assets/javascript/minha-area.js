document.addEventListener('DOMContentLoaded', () => {

    window.addEventListener('DOMContentLoaded', function() {
        // Obtém os gatos cadastrados no LocalStorage
       // var gatosCadastrados = JSON.parse(localStorage.getItem('gatos'));

       var gato = [{
        nome: "Vênus",
        sexo: "Macho",
        idade: "adulto",
        raca: "SRD",
        castracao: "castrado",
        vacinacao: "vacinado",
        foto: "assets/images/gato1.jpg"
      },{
        nome: "Nala",
        sexo: "Femea",
        idade: "adulto",
        raca: "SRD",
        castracao: "castrado",
        vacinacao: "vacinado",
        foto: "assets/images/gato2.jpg"
      }];

        var gatosCadastrados = gato;


       /*exibirAnuncios.addEventListener('click', () => {
        // Verifica se existem gatos cadastrados
            if (gatosCadastrados && gatosCadastrados.length > 0) {
            // Cria a tabela para exibir os gatos cadastrados
            var tabelaAnuncios = document.getElementById('tela-anuncios');
        
            var tabelaHTML = '<table class="tabela-anuncios"><thead><tr><th>Foto</th><th>Nome</th><th>Sexo</th><th>Idade</th><th>Raça</th><th>Castração</th><th>Vacinação</th></tr></thead><tbody>';
        
            // Itera sobre os gatos cadastrados e cria as linhas da tabela
            for (var i = 0; i < gatosCadastrados.length; i++) {
                var gatoCadastrado = gatosCadastrados[i];
        
                tabelaHTML += '<tr>';
                tabelaHTML += '<td><img src="' + gatoCadastrado.foto + '" alt="Foto do gato"></td>';
                tabelaHTML += '<td>' + gatoCadastrado.nome + '</td>';
                tabelaHTML += '<td>' + gatoCadastrado.sexo + '</td>';
                tabelaHTML += '<td>' + gatoCadastrado.idade + '</td>';
                tabelaHTML += '<td>' + gatoCadastrado.raca + '</td>';
                tabelaHTML += '<td>' + gatoCadastrado.castracao + '</td>';
                tabelaHTML += '<td>' + gatoCadastrado.vacinacao + '</td>';
                tabelaHTML += '</tr>';
            }
        
            tabelaHTML += '</tbody></table>';
        
            // Exibe a tabela de gatos cadastrados
            tabelaAnuncios.innerHTML = tabelaHTML;
            }
        }); */

        exibirAnuncios.addEventListener('click', () => {
            // Verifica se existem gatos cadastrados
            if (gatosCadastrados && gatosCadastrados.length > 0) {
              var telaAnuncios = document.getElementById('tela-anuncios');
              telaAnuncios.innerHTML = ''; // Limpa o conteúdo existente
          
              // Itera sobre os gatos cadastrados e cria os cartões de anúncios
              for (var i = 0; i < gatosCadastrados.length; i++) {
                var gatoCadastrado = gatosCadastrados[i];
          
                var cartaoAnuncio = document.createElement('div');
                cartaoAnuncio.classList.add('cartao-anuncio');
          
                var imagem = document.createElement('img');
                imagem.src = gatoCadastrado.foto;
                cartaoAnuncio.appendChild(imagem);
          
                var info = document.createElement('div');
                info.classList.add('info');
          
                var nome = document.createElement('p');
                nome.innerHTML = '<span>Nome:</span> ' + gatoCadastrado.nome;
                info.appendChild(nome);
          
                var sexo = document.createElement('p');
                sexo.innerHTML = '<span>Sexo:</span> ' + gatoCadastrado.sexo;
                info.appendChild(sexo);
          
                var idade = document.createElement('p');
                idade.innerHTML = '<span>Idade:</span> ' + gatoCadastrado.idade;
                info.appendChild(idade);
          
                var raca = document.createElement('p');
                raca.innerHTML = '<span>Raça:</span> ' + gatoCadastrado.raca;
                info.appendChild(raca);
          
                var castracao = document.createElement('p');
                castracao.innerHTML = '<span>Castração:</span> ' + gatoCadastrado.castracao;
                info.appendChild(castracao);
          
                var vacinacao = document.createElement('p');
                vacinacao.innerHTML = '<span>Vacinação:</span> ' + gatoCadastrado.vacinacao;
                info.appendChild(vacinacao);
          
                cartaoAnuncio.appendChild(info);
                telaAnuncios.appendChild(cartaoAnuncio);
              }
            }
          });
          
    });
  
});