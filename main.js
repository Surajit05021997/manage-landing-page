document.getElementById('icon-hamburger').addEventListener('click',() => {
  document.querySelector(".mobile-nav").classList.add('d-block');
  document.getElementById('icon-hamburger').classList.add('d-none');
  document.querySelector('body').classList.add('overflow-hidden');
});

document.getElementById('icon-close').addEventListener('click',() => {
  document.querySelector(".mobile-nav").classList.remove('d-block');
  document.getElementById('icon-hamburger').classList.remove('d-none');
  document.querySelector('body').classList.remove('overflow-hidden');
});