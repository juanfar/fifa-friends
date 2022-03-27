import { registerView } from '../views/register.js';
import { registerHandler } from '../services/register.service.js';

export const Register = () => {
  const divElement = document.createElement('div');
  divElement.innerHTML = registerView;
  registerHandler(divElement);
  return divElement;
};
