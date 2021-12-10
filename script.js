const themeSwitch = document.querySelector('div.toggle');

themeSwitch.addEventListener('change', () => {
  document.body.classList.toggle('darkmode');
});

function createImage() {
  return `
  <div><img class="image" src="images/emoji.png" alt="Emoji"></img><div>
  `
}

function renderImage() {
  const div = document.querySelector('div.main')

  div.insertAdjacentHTML('beforeend', createImage())
}

const button = document.querySelector('button.clickerbutton');

function clckLog (evt) {
  renderImage()
}

button.addEventListener('click', clckLog)