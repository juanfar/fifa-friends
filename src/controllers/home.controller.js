import { homeView } from '../views/home.js';

export const Home = () => {
  const divElement = document.createElement('div');
  divElement.innerHTML = homeView;
  return divElement;
};
