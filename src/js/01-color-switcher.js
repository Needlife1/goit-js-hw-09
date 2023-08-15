const startBtn = document.querySelector('[data-start]');
const stoptBtn = document.querySelector('[data-stop]');

startBtn.addEventListener('click', startChengeColor);
stoptBtn.addEventListener('click', stopChengeColor);

let intervalId = null;

function startChengeColor() {
  stoptBtn.disabled = false;
  startBtn.disabled = true;
  intervalId = setInterval(chengeBackground, 1000);
}

function stopChengeColor() {
  clearInterval(intervalId);
  stoptBtn.disabled = true;
  startBtn.disabled = false;
}

function chengeBackground() {
  document.body.style.background = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
