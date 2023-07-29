const dom = document;
let theme = 'dark';

const body = dom.querySelector('#body');
// const header = dom.querySelector('#header');
const header = dom.querySelector('#header');
const lightButton = dom.querySelector('.theme-controller').firstElementChild;
const darkButton = dom.querySelector('.theme-controller').lastElementChild;
const logoBackground = dom.querySelector('.logo-back');
const logo = dom.querySelector('.logo');

console.log(logo);

//Event Listners

lightButton.onclick = () => {
  toggleTheme('light');
};

darkButton.onclick = () => {
  toggleTheme('dark');
};

dom.addEventListener('scroll', (e) => {
  console.log(window.scrollY);
  if (window.scrollY != 0) {
    header.classList.add('header-border');
  } else {
    header.classList.remove('header-border');
  }
});

//Theme Toggler
const toggleTheme = (themeColor) => {
  if (themeColor === 'dark') {
    //Dark
    document.documentElement.style.setProperty('--color-text', 'white');
    document.documentElement.style.setProperty('--color-background', '#131931');
    logoBackground.style.backgroundColor = '#131830';
    logoBackground.style.boxShadow = '0 0 8px 1px var(--color-accent-medium)';

    theme = 'dark';

    console.log(theme);
  } else {
    //Light
    document.documentElement.style.setProperty('--color-text', '#131931');
    document.documentElement.style.setProperty(
      '--color-background',
      'var(--gray-1)'
    );
    // document.documentElement.style.setProperty('--color-background', '#f4f4f4');
    logoBackground.style.backgroundColor = '#2a7a4a';
    logoBackground.style.boxShadow = '0 0 8px 1px var(--gray-5)';

    theme = 'light';

    console.log(theme);
  }
};
