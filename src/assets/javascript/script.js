// Script para funcionamento do menu
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
  
// Função para verificar se o localStorage é suportado pelo navegador
function isLocalStorageSupported() {
  try {
    var testKey = 'test';
    localStorage.setItem(testKey, testKey);
    localStorage.removeItem(testKey);
    return true;
  } catch (e) {
    return false;
  }
}

// Função para cadastrar um novo usuário
function cadastrarUsuario(name, email, password) {
  // Verifica se o localStorage é suportado
  if (isLocalStorageSupported()) {
    // Cria um objeto com as informações do usuário
    var user = {
      name: name,
      email: email,
      password: password
    };

    // Salva o objeto no localStorage
    localStorage.setItem('user', JSON.stringify(user));

    return true;
  }

  return false;
}

  document.addEventListener('DOMContentLoaded', function() {
    // Evento de submit do formulário
    document.getElementById('loginForm').addEventListener('submit', function(event) {
      event.preventDefault();
  
      // Obtém os valores dos campos de e-mail e senha
      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;
  
      // Realiza o login do usuário
      fazerLogin(email, password);
  
      // Limpa os campos do formulário
      document.getElementById('email').value = '';
      document.getElementById('password').value = '';
    });
  
    // Função para verificar se o localStorage é suportado pelo navegador
    function isLocalStorageSupported() {
      try {
        var testKey = 'test';
        localStorage.setItem(testKey, testKey);
        localStorage.removeItem(testKey);
        return true;
      } catch (e) {
        return false;
      }
    }
  
    // Função para realizar o login do usuário
    function fazerLogin(email, password) {
      // Verifica se o localStorage é suportado
      if (isLocalStorageSupported()) {
        // Obtém o objeto do usuário cadastrado
        var user = JSON.parse(localStorage.getItem('user'));
  
        // Verifica se o usuário existe e se a senha está correta
        if (user && user.email === email && user.password === password) {
          alert('Login realizado com sucesso!');
          return true;
        }
      }
  
      alert('E-mail ou senha inválidos!');
    }
  });
  