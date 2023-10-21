import { setTheme, setOrb, loadListeners, formListner } from './functions.js';

//Home Script
const launchHome = (page) => {
  window.onload = () => {
    if (!localStorage.getItem('theme')) {
      localStorage.setItem('theme', 'dark');
      localStorage.setItem('toggle', 'left');
    }
    setOrb(localStorage.getItem('toggle'));
    setTheme(localStorage.getItem('theme'));
    loadListeners();
    console.log('Home page loaded');
  };

  const header = document.querySelector('#header');
  // const learnMore = document.querySelector('#learn-more');

  //Learn More button scroll
  // learnMore.addEventListener('click', () => {
  //   window.scroll({
  //     top: 810,
  //     left: 0,
  //     behavior: 'smooth',
  //   });
  // });
};

//About Script
const launchAbout = (page) => {
  window.onload = () => {
    if (!localStorage.getItem('theme')) {
      localStorage.setItem('theme', 'dark');
      localStorage.setItem('toggle', 'left');
    }
    setOrb(localStorage.getItem('toggle'));
    setTheme(localStorage.getItem('theme'));
    loadListeners();
    console.log('About page loaded');
  };

  const header = document.querySelector('#header');
};

// Work Page Script

const launchWork = (page) => {
  window.onload = () => {
    if (!localStorage.getItem('theme')) {
      localStorage.setItem('theme', 'dark');
      localStorage.setItem('toggle', 'left');
    }
    setOrb(localStorage.getItem('toggle'));
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

    allTab.className = 'tab active-tab';
    sitesTab.className = 'tab';
    appsTab.className = 'tab';
    codeTab.className = 'tab';
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

    allTab.className = 'tab';
    sitesTab.className = 'tab active-tab';
    appsTab.className = 'tab';
    codeTab.className = 'tab';
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

    allTab.className = 'tab';
    sitesTab.className = 'tab';
    appsTab.className = 'tab  active-tab';
    codeTab.className = 'tab';
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

    allTab.className = 'tab';
    sitesTab.className = 'tab';
    appsTab.className = 'tab';
    codeTab.className = 'tab active-tab';
  });
  // const header = document.querySelector('#header');
};

//Contact Script
const launchContact = (page) => {
  window.onload = () => {
    if (!localStorage.getItem('theme')) {
      localStorage.setItem('theme', 'dark');
      localStorage.setItem('toggle', 'left');
    }
    setOrb(localStorage.getItem('toggle'));
    setTheme(localStorage.getItem('theme'));
    loadListeners();
    formListner();
    console.log('Contact page loaded');
  };
};

//Script manager for page switching

const pageManager = {
  init: () => {
    let page = document.body.id;
    switch (page) {
      case 'home':
        launchHome(page);
        break;
      case 'work':
        launchWork(page);
        break;
      case 'about':
        launchAbout(page);
        break;
      case 'contact':
        launchContact(page);
        break;
      default:
    }
  },
};

pageManager.init();
