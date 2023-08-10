import { setTheme, loadListeners } from './functions.js';

//Home Script
const launchHome = (page) => {
  window.onload = () => {
    if (!localStorage.getItem('theme')) {
      localStorage.setItem('theme', 'dark');
    }
    setTheme(localStorage.getItem('theme'));
    loadListeners();
    console.log('Home page loaded');
  };

  const header = document.querySelector('#header');
  const learnMore = document.querySelector('#learn-more');

  //Learn More button scroll
  learnMore.addEventListener('click', () => {
    window.scroll({
      top: 803,
      left: 0,
      behavior: 'smooth',
    });
  });
};

// Work Page Script

const launchWork = (page) => {
  window.onload = () => {
    if (!localStorage.getItem('theme')) {
      localStorage.setItem('theme', 'dark');
    }
    setTheme(localStorage.getItem('theme'));
    loadListeners();
    console.log('Work page loaded');
  };

  const allTab = document.querySelector('#p-all');
  const sitesTab = document.querySelector('#p-sites');
  const appsTab = document.querySelector('#p-apps');
  const codeTab = document.querySelector('#p-code');

  const siteProjects = document.querySelectorAll('.sites');
  const appProjects = document.querySelectorAll('.apps');
  const codeProjects = document.querySelectorAll('.code');

  allTab.addEventListener('click', () => {
    siteProjects.forEach((item) => {
      item.style.display = 'inline';
    });
    appProjects.forEach((item) => {
      item.style.display = 'inline';
    });
    codeProjects.forEach((item) => {
      item.style.display = 'inline';
    });
  });

  sitesTab.addEventListener('click', () => {
    siteProjects.forEach((item) => {
      item.style.display = 'inline';
    });
    appProjects.forEach((item) => {
      item.style.display = 'none';
    });
    codeProjects.forEach((item) => {
      item.style.display = 'none';
    });
  });

  appsTab.addEventListener('click', () => {
    siteProjects.forEach((item) => {
      item.style.display = 'none';
    });
    appProjects.forEach((item) => {
      item.style.display = 'inline';
    });
    codeProjects.forEach((item) => {
      item.style.display = 'none';
    });
  });

  codeTab.addEventListener('click', () => {
    siteProjects.forEach((item) => {
      item.style.display = 'none';
    });
    appProjects.forEach((item) => {
      item.style.display = 'none';
    });
    codeProjects.forEach((item) => {
      item.style.display = 'inline';
    });
  });
};

//Script manager for pages switching

const pageManager = {
  init: () => {
    let page = document.body.id;
    switch (page) {
      case 'home':
        console.log(page);
        launchHome(page);
        break;
      case 'work':
        console.log(page);
        launchWork(page);
        break;
      default:
      // launchHome(page);
    }
  },
};

pageManager.init();
