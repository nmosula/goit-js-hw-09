const btnStart = document.querySelector("button[data-start]");
const btnStop = document.querySelector("button[data-stop]");
let timerId = null;

btnStart.addEventListener("click", onClickStart);
 btnStop.addEventListener("click", onClickStop);

function onClickStart() {

    btnStart.setAttribute("disabled", "");
    timerId = setInterval (() => {
        let newColor = getRandomHexColor();
        document.body.style.background = newColor;
    }, 1000);
}

function onClickStop() {
    clearInterval(timerId);
    btnStart.removeAttribute("disabled");
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}