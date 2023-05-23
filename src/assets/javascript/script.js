
document.addEventListener('DOMContentLoaded', function() {
    // Acessando elementos do HTML
    const menuButton = document.querySelector('.menu-button');
    const menu = document.querySelector('.menu');
  
    // Verificando se os elementos foram encontrados
    if (menuButton && menu) {
      // Adicionando evento de clique ao botão de menu
      menuButton.addEventListener('click', function() {
        menu.classList.toggle('active');
        console.log('Clicado!');
      });
    } else {
      console.error('Elemento não encontrado!');
    }
  });
