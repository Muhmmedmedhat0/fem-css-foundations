// varibles
const menuIcon = document.querySelector('.menu--icon');
const nav = document.querySelector('.nav');
const closeIcon = document.querySelector('.close--icon');
const body = document.querySelector('body');

// add event listener to the menu icon
menuIcon.addEventListener('click', () => {
  nav.classList.add('nav--visible');
  menuIcon.classList.add('menu--hidden');
  closeIcon.classList.add('close--visible');
  body.classList.add('body--no-scroll');
});

// add event listener to the close icon
closeIcon.addEventListener('click', () => {
  nav.classList.remove('nav--visible');
  menuIcon.classList.remove('menu--hidden');
  closeIcon.classList.remove('close--visible');
  body.classList.remove('body--no-scroll');
});

// add event listener to the escape key
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    nav.classList.remove('nav--visible');
    menuIcon.classList.remove('menu--hidden');
    closeIcon.classList.remove('close--visible');
    body.classList.remove('body--no-scroll');
  }
});

// add event listener when click outside the nav
document.addEventListener('click', (event) => {
  // check if the click is outside the nav and the menu icon
  if (!nav.contains(event.target) && !menuIcon.contains(event.target)) {
    nav.classList.remove('nav--visible');
    menuIcon.classList.remove('menu--hidden');
    closeIcon.classList.remove('close--visible');
    body.classList.remove('body--no-scroll');
  }
});
