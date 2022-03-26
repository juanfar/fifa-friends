import { registerView } from '../views/register.js';

export const Register = () => {
  const divElement = document.createElement('div');
  divElement.innerHTML = registerView;
  return divElement;
};
