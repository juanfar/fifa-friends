import { loginView } from '../views/login.js';
import { loginHandler } from '../services/login.service.js';

export const Login = () => {
  const divElement = document.createElement('div');
  divElement.innerHTML = loginView;
  loginHandler(divElement);
  return divElement;
};
