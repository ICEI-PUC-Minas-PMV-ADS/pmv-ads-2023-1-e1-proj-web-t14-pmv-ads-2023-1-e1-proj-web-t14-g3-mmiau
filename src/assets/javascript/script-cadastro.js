// Função para cadastrar um novo usuário
function cadastrarUsuario(name, email, password) {
  if(!name || !email || !password) console.log('nada aqui...')

  localStorage.setItem("name", name)
  localStorage.setItem("email", email)
  localStorage.setItem("password", password)
}

  document.addEventListener('DOMContentLoaded', function() {
    // Evento de submit do formulário
    document.getElementById('userForm').addEventListener('submit', function(event) {
      event.preventDefault();
  
      // Obtém os valores dos campos de e-mail e senha
      var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;
      cadastrarUsuario(name, email, password)
  
      // Limpa os campos do formulário
      document.getElementById('email').value = '';
      document.getElementById('password').value = '';
    });
  
  
    // // Função para realizar o login do usuário
    // function fazerLogin(email, password) {
    //     // Obtém o objeto do usuário cadastrado
    //     var name = JSON.parse(localStorage.getItem('loginForm'));
  
    //     // Verifica se o usuário existe e se a senha está correta
    //     if (user_email === email && user_password === password) {
    //       alert('Login realizado com sucesso!');
    //       return true;
    //     }
    //   }
  
    //   alert('E-mail ou senha inválidos!');
    }  );