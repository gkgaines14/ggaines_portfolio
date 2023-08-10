//Set global theme for light or dark mode
export const setTheme = (themeSetting) => {
  const themeButton = document.querySelector('#theme-switch');

  if (themeSetting === 'dark') {
    //Set Dark
    document.documentElement.style.setProperty('--color-text', 'white');
    document.documentElement.style.setProperty('--color-background', '#131931');
    document.querySelector('.logo-back').style.backgroundColor = '#131830';
    document.querySelector('.logo-back').style.boxShadow =
      '0 0 8px 1px var(--color-accent-medium)';
    themeButton.style.backgroundColor = '#f8f8f8';
    themeButton.style.color = '#131830';
    themeButton.style.opacity = '0.8';
    themeButton.innerText = 'LIGHT THEME';
  } else {
    //Set Light
    document.documentElement.style.setProperty('--color-text', '#131931');
    document.documentElement.style.setProperty(
      '--color-background',
      'var(--gray-1)'
    );
    document.querySelector('.logo-back').style.backgroundColor =
      'var(--color-accent-light)';
    document.querySelector('.logo-back').style.boxShadow =
      '0 0 8px 1px var(--gray-5)';
    themeButton.style.backgroundColor = '#1f2952';
    themeButton.style.color = 'var(--gray-1)';
    themeButton.style.opacity = '1.0';
    themeButton.innerText = 'DARK THEME';
  }
};

export const loadListeners = () => {
  //Theme Switch Button
  document.querySelector('#theme-switch').onclick = () => {
    if (localStorage.getItem('theme') === 'dark') {
      localStorage.setItem('theme', 'light');
    } else {
      localStorage.setItem('theme', 'dark');
    }
    setTheme(localStorage.getItem('theme'));
  };

  //Bottom border for fixed navbar
  document.addEventListener('scroll', (e) => {
    if (window.scrollY != 0) {
      header.classList.add('header-border');
    } else {
      header.classList.remove('header-border');
    }
  });
};
