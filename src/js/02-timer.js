import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const btnStart = document.querySelector("button[data-start]");
btnStart.setAttribute("disabled", "");

let timerId = null;
let counterTimer;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const now = new Date();
        counterTimer = selectedDates[0].getTime() - now.getTime();

        if (counterTimer < 0)
            alert("Please choose a date in the future");
        else {
            btnStart.removeAttribute("disabled");
            return counterTimer;
        }
    },
};

flatpickr('#datetime-picker', options);


btnStart.addEventListener("click", onClickStart);

function onClickStart() {
    console.log(convertMs(counterTimer));
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
    return value.padStart(2, "0");
}