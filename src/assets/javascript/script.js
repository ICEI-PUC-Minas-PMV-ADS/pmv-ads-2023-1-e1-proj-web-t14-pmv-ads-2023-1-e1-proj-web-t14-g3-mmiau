document.addEventListener('DOMContentLoaded', () => {
    
    // ABRIR E FECHAR O MENU
    
    openMenu.addEventListener('click', () => {
      menu.style.display = 'flex';
      menu.style.right = (menu.clientWidth * -1) + 'px';
      openMenu.style.display = 'none';
  
      setTimeout(() => {
        menu.style.opacity = '1';
        menu.style.right = '0';
      }, 10);
    });
  
    closeMenu.addEventListener('click', () => {
      menu.style.opacity = '0';
      menu.style.right = (menu.clientWidth * -1) + 'px';
  
      setTimeout(() => {
        menu.removeAttribute('style');
        openMenu.removeAttribute('style');
      }, 200);
    });
 
    //CADASTRO GATO

  document.getElementById('cadastro-gato').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que o formulário seja enviado
  
    // Obtenha os valores dos campos
    var nome = document.getElementById('nome-gato').value;
    var fotos = document.getElementById('foto-gato').files;
  
    // Crie um objeto para representar o gato
    var gato = {
      nome: nome,
      fotos: fotos,
    };
  
    // Salve os dados no LocalStorage
    localStorage.setItem('gato', JSON.stringify(gato));
  
    // Limpe os campos do formulário
    document.getElementById('cadastro-gato').reset();
  
    // Exiba uma mensagem de sucesso
    alert('Gato cadastrado com sucesso!');
  });
  


// Função para cadastrar um novo gato
function cadastrarGato() {
  // Obter os valores dos campos do formulário
  var nome = document.getElementById('nome-gato').value;
  var sexo = document.getElementById('sexo-gato').value;
  var idade = document.getElementById('idade-gato').value;
  var raca = document.getElementById('raca-gato').value;
  var descricao = document.getElementById('descricao-gato').value;
  var castracao = document.getElementById('castracao-gato').value;
  var vacinas = obterVacinasSelecionadas();
  var foto = document.getElementById('foto-gato').value.replace(/.*[\\\/]/, '');

  // Criar um objeto para representar o gato
  var gato = {
    nome: nome,
    sexo: sexo,
    idade: idade,
    raca: raca,
    descricao: descricao,
    castracao: castracao,
    vacinas: vacinas,
    foto: foto
  };

  // Verificar se já existem gatos cadastrados no localStorage
  var gatosCadastrados = JSON.parse(localStorage.getItem('meusGatos')) || [];
  
  // Verificar se o limite de gatos foi atingido (máximo 3 gatos)
  if (gatosCadastrados.length >= 3) {
    alert('Você já cadastrou o máximo de gatos permitidos.');
    return;
  }

  // Adicionar o novo gato à lista de gatos cadastrados
  gatosCadastrados.push(gato);

  // Salvar a lista atualizada de gatos no localStorage
  localStorage.setItem('meusGatos', JSON.stringify(gatosCadastrados));

  // Limpar os campos do formulário
  document.getElementById('nome-gato').value = '';
  document.getElementById('sexo-gato').value = 'campo-vazio';
  document.getElementById('idade-gato').value = 'campo-vazio';
  document.getElementById('raca-gato').value = 'campo-vazio';
  document.getElementById('descricao-gato').value = '';
  document.getElementById('castracao-gato').value = 'campo-vazio';
  desmarcarTodasVacinas();
  document.getElementById('foto-gato').value = '';

  alert('Gato cadastrado com sucesso!');
}

// Função auxiliar para obter as vacinas selecionadas
function obterVacinasSelecionadas() {
  var vacinasSelecionadas = [];
  var checkboxes = document.querySelectorAll('#vacinas-gato input[type="checkbox"]:checked');
  checkboxes.forEach(function(checkbox) {
    vacinasSelecionadas.push(checkbox.id);
  });
  return vacinasSelecionadas;
}

// Função auxiliar para desmarcar todas as vacinas
function desmarcarTodasVacinas() {
  var checkboxes = document.querySelectorAll('#vacinas-gato input[type="checkbox"]');
  checkboxes.forEach(function(checkbox) {
    checkbox.checked = false;
  });
}

});   