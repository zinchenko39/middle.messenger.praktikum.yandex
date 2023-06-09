import { AllPages } from './src/pages/allPages';
import { LoginPage } from './src/pages/login';
import { RegisterPage } from './src/pages/register';
import { ErrorPage } from './src/pages/error';
import { MainPage } from './src/pages/main';
import { ProfileInfoPage } from './src/pages/profile-info';
import { ProfilePasswordPage } from './src/pages/profile-password';
import renderDOM from './src/utils/renderDom';

window.addEventListener('DOMContentLoaded', () => {
  const pages = [
    {
      link: '/register',
      label: 'register',
    },
    {
      link: '/login',
      label: 'login',
    },
    {
      link: '/main',
      label: 'main',
    },
    {
      link: '/profile',
      label: 'profile',
    },
    {
      link: '/profile/password',
      label: 'profile-password',
    },
    {
      link: '/error',
      label: 'error',
    },
  ];

  const loginPage = new LoginPage();
  const registerPage = new RegisterPage();
  const mainPage = new MainPage();
  const profileInfoPage = new ProfileInfoPage({ userName: 'Вадим' });
  const profilePasswordPage = new ProfilePasswordPage({ userName: 'Вадим' });
  const error404 = new ErrorPage({ errorNumber: 404, errorText: 'Упс... не туда попали' });
  const allPages = new AllPages({ pages: pages });

  switch (window.location.pathname) {
    case '/register':
      renderDOM(registerPage);
      break;
    case '/login':
      renderDOM(loginPage);
      break;
    case '/main':
      renderDOM(mainPage);
      break;
    case '/profile':
      renderDOM(profileInfoPage);
      break;
    case '/profile/password':
      renderDOM(profilePasswordPage);
      break;
    case '/error':
      renderDOM(error404);
      break;
    default:
      renderDOM(allPages);
      break;
  }
});
