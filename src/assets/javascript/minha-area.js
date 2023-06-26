document.addEventListener('DOMContentLoaded', () => {

    window.addEventListener('DOMContentLoaded', function() {
        // Obtém os gatos cadastrados no LocalStorage
        var gatosCadastrados = JSON.parse(localStorage.getItem('gatos'));

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
            } else {
                var telaAnuncios = document.getElementById('tela-anuncios');
                telaAnuncios.innerHTML = '<div id="telaAnunciosVazio"><p>Você não possui gatos cadastrados</p></div>'; // Mensagem de nenhum gato cadastrado
            }
        });
    });

});