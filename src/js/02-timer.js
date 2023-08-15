import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const startBtn = document.querySelector('[data-start]');
const dataDays = document.querySelector('[data-days]');
const dataHour = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');

startBtn.addEventListener('click', startTiming);

let selectedTime = null;

const datetimePicke = new flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      startBtn.disabled = true;
      Notiflix.Notify.failure('Please choose a date in the future');
      clearInterval(intervalId);
    } else {
      startBtn.disabled = false;
      Notiflix.Notify.success('Everything worked out, well done!!');
      selectedTime = selectedDates[0];
    }
  },
});

let intervalId = null;

function startTiming() {
  intervalId = setInterval(convertMs, 1000, selectedTime);
}

function convertMs(ms) {
  let diff = ms - Date.now();

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(diff / day);
  const hours = Math.floor((diff % day) / hour);
  const minutes = Math.floor(((diff % day) % hour) / minute);
  const seconds = Math.floor((((diff % day) % hour) % minute) / second);

  if (days === 0 && hours === 0 && minutes === 0 && seconds == 0) {
    clearInterval(intervalId);
  }

  dataDays.textContent = addZero(days);
  dataHour.textContent = addZero(hours);
  dataMinutes.textContent = addZero(minutes);
  dataSeconds.textContent = addZero(seconds);
}

function addZero(number) {
  return String(number).padStart(2, 0);
}
