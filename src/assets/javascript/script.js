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
  
});   