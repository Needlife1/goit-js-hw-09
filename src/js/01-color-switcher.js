
const CHANGE_COLOR_DELAY = 1000;
let setInt = null;

const refs = {
    btnStart: document.querySelector('button[data-start]'),
    btnStop: document.querySelector('button[data-stop]'),
    body: document.querySelector('body'),

}

refs.btnStop.disabled = true;
refs.btnStart.addEventListener('click', onBtnStartChangeColor);
refs.btnStop.addEventListener('click', onBtnStopChangeColor);

function onBtnStartChangeColor() {
    refs.btnStart.disabled = true;
    refs.btnStop.disabled = false;

setInt = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
}, CHANGE_COLOR_DELAY);
    
}

function onBtnStopChangeColor () {
    refs.btnStart.disabled = false;
    refs.btnStop.disabled = true;

    clearInterval(setInt);
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
