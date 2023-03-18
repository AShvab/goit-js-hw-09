const btnStart = document.querySelector("[data-start]");
const btnStop = document.querySelector("[data-stop]");


btnStart.addEventListener('click', handleBtnStartClick);
btnStop.addEventListener('click', handleBtnStopClick);
let timerId = null;

function handleBtnStartClick (){
    disableBtn(btnStart);
    enableBtn(btnStop);
    
    timerId = setInterval(() => {
        const color = getRandomHexColor();
        document.body.style.backgroundColor = color;
    }, 1000);
};

function handleBtnStopClick(){
    enableBtn(btnStart);
    disableBtn(btnStop);

    clearInterval(timerId);
};

function disableBtn(btn) {
    btn.disabled = true;
};
function enableBtn(btn) {
    btn.disabled = false;
};

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};




