import { setTheme, setOrb, loadListeners } from './functions.js';

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
    console.log('Home page loaded');
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
    console.log('Home page loaded');
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
    console.log('Home page loaded');
  };

  const header = document.querySelector('#header');
  const submitButton = document.querySelector('#submit-btn');

  const confirmMessage = document.querySelector('.confirm-message');
  const imageBack = document.querySelector('#mail-icon-glow');

  function test() {
    console.log('test');
  }

  submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    const contactForm = document.querySelector('#cont-form');
    const formData = new FormData(contactForm);

    fetch(
      'https://script.google.com/macros/s/AKfycbxlBdWjUXAoawIDkfNLri0ssMLr7zIpc3SpJAH1-LLBEaYc5xcPTqawYFy8aUNIcrhRNw/exec',
      { method: 'POST', body: formData }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error));

    confirmMessage.style.opacity = '1';
    imageBack.style.opacity = '1';
    submitButton.style.fontSize = '1.3rem';
    setTimeout(() => {
      confirmMessage.style.opacity = '0';
    }, '5000');
    setTimeout(() => {
      imageBack.style.opacity = '0';
    }, '670');
    setTimeout(() => {
      submitButton.style.fontSize = '1.2rem';
    }, '200');
    setTimeout(() => {
      document.querySelector('#name-input').value = '';
      document.querySelector('#subject-input').value = '';
      document.querySelector('#email-input').value = '';
      document.querySelector('#message-input').value = '';
    }, '5000');
    console.log(contactForm);
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
      case 'about':
        console.log(page);
        launchAbout(page);
        break;
      case 'contact':
        console.log(page);
        launchContact(page);
        break;
      default:
      // launchHome(page);
    }
  },
};

pageManager.init();
