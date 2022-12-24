import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const btnStart = document.querySelector("button[data-start]");
const spDays = document.querySelector("span[data-days]");
const spHours = document.querySelector("span[data-hours]");
const spMinutes = document.querySelector("span[data-minutes]");
const spSeconds = document.querySelector("span[data-seconds]");


btnStart.setAttribute("disabled", "");

let timerId = null;
let timerFinish;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const timerNow = new Date();
        timerFinish = selectedDates[0].getTime();

        const counterTimer = timerFinish - timerNow.getTime();

        if (counterTimer < 0)
            alert("Please choose a date in the future");
        else {
            btnStart.removeAttribute("disabled");
            return timerFinish;
        }
    },
};

flatpickr('#datetime-picker', options);

btnStart.addEventListener("click", onClickStartTimer);

const logger = timerFinish => {
    let now = new Date();
    let counter = timerFinish - now.getTime();

    if (counter <= 0) {
        clearInterval(timerId);
        btnStart.setAttribute("disabled", "");
        return;
    }

    const objMseconds = convertMs(counter);

    spDays.textContent      = addLeadingZero(objMseconds.days);
    spHours.textContent     = addLeadingZero(objMseconds.hours);
    spMinutes.textContent   = addLeadingZero(objMseconds.minutes);
    spSeconds.textContent   = addLeadingZero(objMseconds.seconds);
}

function onClickStartTimer() {
    timerId = setInterval(logger, 1000, timerFinish);
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

function addLeadingZero(value) {
    return value.toString().padStart(2, "0");
}