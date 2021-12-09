const themeSwitch = document.querySelector('div.toggle');

themeSwitch.addEventListener('change', () => {
  document.body.classList.toggle('darkmode');
});