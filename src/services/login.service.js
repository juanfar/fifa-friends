import { loginUser } from './aut.service.js';

export const loginHandler = (divElement) => {
  const login = divElement.querySelector('#login');
  if (login) {
    login.addEventListener('submit', async (e) => {
      e.preventDefault();
      let email = divElement.querySelector('#floatingInput');
      let password = divElement.querySelector('#floatingPassword');
      const loginError = divElement.querySelector('#form-error');

      loginUser(email.value, password.value)
        .then((userCredential) => {
          const userLogin = userCredential.user;
          console.log(userLogin);
          if (userLogin) {
            localStorage.setItem("displayName", userLogin.displayName);
            localStorage.setItem("email", userLogin.email);
          }
          login.reset();
          const homeRoute = `${window.location.origin}/#/`;
          window.location.replace(homeRoute);
        })
        .catch((errorLogin) => {
          const errorCodeLogin = errorLogin.code;
          const errorMessageLogin = errorLogin.message;
          console.log(errorCodeLogin, errorMessageLogin);

          switch (errorCodeLogin) {
            case 'auth/wrong-password':
              loginError.classList.add('errorLogin');
              loginError.innerHTML = 'La contraseña no es válida!';
              break;

            case 'auth/user-not-found':
              loginError.classList.add('errorLogin');
              loginError.innerHTML = 'El usuario no esta registrado!';
              break;

            case 'auth/invalid-email':
              loginError.classList.add('errorLogin');
              loginError.innerHTML = 'No corresponde a un correo electrónico!';
              break;

            default:
              break;
          }
          login.reset();
        });
    });

  };
}