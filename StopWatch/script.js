const timer = document.getElementsByClassName('timer')[0];
const playBtn = document.getElementsByClassName('play')[0];
const restartBtn = document.getElementsByClassName('restart')[0];

let seconds = minutes = hours = 0;
let leadingZeroSec = leadingZeroMin = leadingZeroHr = '0';
function stopWatch() {
    seconds++;

    if (seconds > 59) {
        seconds = 0;
        minutes++;
    };

    if (minutes > 59) {
        minutes = 0;
        hours++;
    };

    leadingZeroSec = leadingZeroMin = leadingZeroHr = '';
    if (seconds < 10) leadingZeroSec = '0';
    if (minutes < 10) leadingZeroMin = '0';
    if (hours < 10) leadingZeroHr = '0';

    timer.innerText = leadingZeroHr + hours + ':' + leadingZeroMin + minutes + ':' + leadingZeroSec + seconds;
};

let callingFunction = null;
let isCounting = false;
playBtn.addEventListener('click', () => {
    if (!isCounting) {
        isCounting = true;
        callingFunction = window.setInterval(stopWatch, 1000);
        playBtn.innerHTML = "&#x2016;";
        playBtn.classList.add('paused');
    } else {
        isCounting = false;
        window.clearInterval(callingFunction);
        playBtn.innerHTML = "&#9658;";
        playBtn.classList.remove('paused');
    }
});

restartBtn.addEventListener('click', () => {
    window.clearInterval(callingFunction);
    seconds = minutes = hours = 0;
    timer.innerText = "00:00:00";
    if (isCounting) callingFunction = window.setInterval(stopWatch, 1000);
});