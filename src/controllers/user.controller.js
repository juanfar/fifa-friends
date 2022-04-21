import { createLigues } from '../services/user.service.js';
import { userView } from '../views/user.js';

export const User = () => {
  const divElement = document.createElement('div');
  divElement.innerHTML = userView;
  createLigues(divElement);
  return divElement;
};
