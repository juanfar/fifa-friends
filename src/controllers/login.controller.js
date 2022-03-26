import { loginView } from '../views/login.js';

export const Login = () => {
  const divElement = document.createElement('div');
  divElement.innerHTML = loginView;
  return divElement;
};
