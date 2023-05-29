
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
 // JavaScript para manipulação do formulário
 document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita o envio do formulário

  // Obtém os valores dos campos
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  // Exibe os valores no console (você pode modificar essa parte para enviar os dados para um servidor)
  console.log('Nome:', name);
  console.log('E-mail:', email);
  console.log('Senha:', password);

  // Limpa os campos do formulário
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('password').value = '';
});


