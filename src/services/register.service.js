import { createUser, emailVerification } from './auth.service.js';

export const registerHandler = (divElement) => {
  const register = divElement.querySelector('#register');
  if (register) {
    register.addEventListener('submit', async (e) => {
      e.preventDefault();
      let userName = divElement.querySelector('#floatingName');
      let email = divElement.querySelector('#floatingEmail');
      let password = divElement.querySelector('#floatingPassword');
      const registerError = divElement.querySelector('#form-error');
      try {
        createUser(email.value, password.value)
          .then((credentials) => {
            return firebase.firestore().collection('users').doc(credentials.user.uid).set({
              name: userName.value,
              email: email.value,
            }).then(() => {
              register.reset();
              const loginRoute = `${window.location.origin}/#/login`;
              emailVerification();
              window.location.replace(loginRoute);
            }).catch(err => {
              console.log(err.message);
            });
          })
          .catch((error) => {
            const errorCode = error.code;
            switch (errorCode) {
              case 'auth/email-already-in-use':
                registerError.classList.add('error');
                registerError.innerHTML = 'Esta cuenta ya existe!';
                break;
              case 'auth/invalid-email':
                registerError.classList.add('error');
                registerError.innerHTML = 'Correo electrónico no válido!';
                break;
              case 'auth/weak-password':
                registerError.classList.add('error');
                registerError.innerHTML = 'La contraseña debe tener minimo 6 caracteres!';
                break;
              case 'passwords/no-match':
                registerError.classList.add('error');
                registerError.innerHTML = 'Las contraseñas no coinciden!';
                break;
              default:
                break;
            }
            register.reset();
          });
      } catch (error) {
        switch (error.code) {
          case 'passwords/no-match':
            registerError.classList.add('error');
            registerError.innerHTML = 'Las contraseñas no coinciden!';
            register.reset();
            break;
          default:
            break;
        }
      }
    });
  }
}