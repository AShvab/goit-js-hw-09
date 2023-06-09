import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';


const startBtnEl = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

const inputEl = document.querySelector("#datetime-picker");

startBtnEl.addEventListener('click', onClickStartBtn);
startBtnEl.setAttribute('disabled', true);
let inputDates;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    inputDates = selectedDates[0];
    if (inputDates >= Date.now()) {
        startBtnEl.removeAttribute('disabled');
    } else {
        Notify.failure("Please choose a date in the future");
    }
},
};

flatpickr(inputEl, options);

function onClickStartBtn() {
    startBtnEl.setAttribute('disabled', true);
    const timerId = setInterval(() => {
        const difference = inputDates - Date.now();
        const { days, hours, minutes, seconds } = convertMs(difference);
        daysEl.textContent = `${addLeadingZero(days)}`;
        hoursEl.textContent = `${addLeadingZero(hours)}`;
        minutesEl.textContent = `${addLeadingZero(minutes)}`;
        secondsEl.textContent = `${addLeadingZero(seconds)}`;
        if (difference < 1000) {
            clearInterval(timerId);
        }
    }, 1000);
};

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  
