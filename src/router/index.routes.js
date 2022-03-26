import { views } from '../controllers/index.controller.js';

let content = document.getElementById('root');

const router = (route) => {
  content.innerHTML = "";
  if (route === '') {
    window.location.hash = '#/';
  } else {
    switch (true) {
      case route === '#/':
        return content.appendChild(views.Home());
      case route === '#/login':
        return content.appendChild(views.Login());
      case route === '#/register':
        return content.appendChild(views.Register());
      default:
    }
  }
};

export { router };
