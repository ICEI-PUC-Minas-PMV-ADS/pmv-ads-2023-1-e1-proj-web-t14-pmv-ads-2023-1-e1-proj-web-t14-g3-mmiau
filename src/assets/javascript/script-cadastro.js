// // Função para cadastrar um novo usuário
// function cadastrarUsuario(name, email, password) {
//   if(!name || !email || !password) console.log('nada aqui...')

//   localStorage.setItem("username", name)
//   localStorage.setItem("email", email)
//   localStorage.setItem("password", password)
// }

// document.addEventListener('DOMContentLoaded', function() {

//   // Evento de submit do formulário
//     document.getElementById('userForm').addEventListener('submit', function(event) {
//       event.preventDefault();
  
//       // Obtém os valores dos campos de e-mail e senha
//       const username = document.getElementById('username').value;
//       const email = document.getElementById('email').value;
//       const password = document.getElementById('password').value;
//       cadastrarUsuario(username, email, password)
  
//       // Limpa os campos do formulário
//       document.getElementById('email').value = '';
//       document.getElementById('password').value = '';
//     });
//     }  );

//   // Verifica se o usuário já existe no localStorage
//   const users = JSON.parse(localStorage.getItem("users")) || [];
//   const existingUser = users.find((user) => user.username === username);

//   if (existingUser) {
//     window.alert("Username already exists");
//   } else {
//     const newUser = {
//       username: username,
//       password: password,
//       email: email
//     };

//     users.push(newUser);
//     localStorage.setItem("users", JSON.stringify(users));

//     window.alert("Sign up successful! Please login.");
//     // Limpe os campos do formulário de registro ou redirecione para a página de login
//   }



//   // Função para realizar o login
// function login() {
//   const username = document.getElementById("login-username").value;
//   const password = document.getElementById("login-password").value;

//   // Verifica se o usuário existe no localStorage
//   const users = JSON.parse(localStorage.getItem("users")) || [];
//   const user = users.find((user) => user.username === username && user.password === password);

//   if (user) {
//     alert("Login successful!");
//     // Faça o redirecionamento ou execute outras ações necessárias após o login
//   } else {
//     alert("Invalid username or password");
//   }
// }


document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((user) => user.username === username && user.password === password);

    if (user) {
      alert("Login successful!");
      // Redirecionar ou executar outras ações após o login
    } else {
      alert("Invalid username or password");
    }
  });

  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("signup-username").value;
    const password = document.getElementById("signup-password").value;
    const email = document.getElementById("signup-email").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find((user) => user.username === username);

    if (existingUser) {
      alert("Username already exists");
    } else {
      const newUser = {
        username: username,
        email: email,
        password: password
      };

      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));

      alert("Registration successful! Please login.");
      loginForm.style.display = "block";
      signupForm.style.display = "none";
    }
  });
});
