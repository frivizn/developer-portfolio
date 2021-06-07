/* Theme change */

let theme = localStorage.getItem('theme')

if (theme == null) {
  changeTheme('light')
} else {
  changeTheme(theme)
}

let themeDots = document.getElementsByClassName('nav__theme-btn');

for (var i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener('click', function () {
    let mode = this.dataset.mode;
    console.log('Mode clicked: ', mode);
    changeTheme(mode);
  })
}

// Change theme function

function changeTheme(mode) {
  if (mode == 'light') {
    document.getElementById('theme-style').href = 'css/light-theme.min.css';
  }

  if (mode == 'dark') {
    document.getElementById('theme-style').href = 'css/dark-theme.min.css';
  }

  localStorage.setItem('theme', mode)
}


/* Main navigation */

const menuToggle = document.querySelector('.nav__toggle-button');
const navbarLinks = document.querySelector('.nav__navbar');
const navLinks = document.querySelectorAll('.nav__link');
const skills = document.querySelector('.skills');
const skillsTitle = document.querySelector('.section__title');
const skillsContent = document.querySelector('.skills__content');
const sticky = skills.offsetTop;
const nav = document.querySelector('.nav');
const portfolioTitle = document.querySelector('.portfolio__title');
const portfolioContent = document.querySelector('.portfolio__content');
const portfolioFadeIn = portfolio.offsetTop;

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  navbarLinks.classList.toggle('active');
})

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    navbarLinks.classList.remove('active');
  })
})

/* Sticky navigation */

window.addEventListener('scroll', () => {

  if (window.pageYOffset >= portfolioFadeIn - 600) {
    portfolioTitle.classList.add('fade-in');
    portfolioContent.classList.add('fade-in');
  }

  if (window.pageYOffset >= sticky) {
    nav.classList.add("sticky");
    skillsTitle.classList.add("fade-in");
    skillsContent.classList.add("fade-in");
  } else {
    nav.classList.remove("sticky");
  }
})

