let hours = 0;
let minutes = 0;
let seconds = 0;
let ms = 0;
let startTimer;
const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
const resetBtn = document.querySelector('#reset');
const digits = document.querySelectorAll('.digit');
const hoursInput = document.getElementById('hours');
const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('seconds');

const hourTens = document.querySelector('#hourTens');
const hourOnes = document.querySelector('#hourOnes');

const minuteTens = document.querySelector('#minuteTens');
const minuteOnes = document.querySelector('#minuteOnes');

const secondTens = document.querySelector('#secondTens');
const secondOnes = document.querySelector('#secondOnes');

const msHundreds = document.querySelector('#msHundreds');
const msTens = document.querySelector('#msTens');

stopBtn.disabled = true;
resetBtn.disabled = true;

hoursInput.addEventListener("input", function(event) {
    hours = hoursInput.value;
    setDigits(hours, hourTens, hourOnes, 99);
});

minutesInput.addEventListener("input", function(event) {
    minutes = minutesInput.value;
    setDigits(minutes, minuteTens, minuteOnes, 59);
});

secondsInput.addEventListener("input", function(event) {
    seconds = secondsInput.value;
    setDigits(seconds, secondTens, secondOnes, 59);
});

startBtn.addEventListener("click", function(event) {
    startBtn.disabled = true;
    resetBtn.disabled = true;
    stopBtn.disabled = false;
    if (!hoursInput.value) {
        setDigits(hours, hourTens, hourOnes, 99);
    }
    if (!minutesInput.value) {
        setDigits(minutes, minuteTens, minuteOnes, 59);
    }
    if (!secondsInput.value) {
        setDigits(seconds, secondTens, secondOnes, 59);
    }
    startTimer = setInterval(tickDown, 10);
});

stopBtn.addEventListener("click", function(event) {
    startBtn.disabled = false;
    resetBtn.disabled = false;
    stopBtn.disabled = true;
    clearInterval(startTimer);
});
resetBtn.addEventListener("click", function(event) {
    startBtn.disabled = false;
    resetBtn.disabled = true;
    stopBtn.disabled = true;
    if (!hoursInput.value) {
        setDigits(hours, hourTens, hourOnes, 99);
    } else {
        hours = hoursInput.value;
        setDigits(hours, hourTens, hourOnes, 99);
    }
    if (!minutesInput.value) {
        setDigits(minutes, minuteTens, minuteOnes, 59);
    } else {
        minutes = minutesInput.value;
        setDigits(minutes, minuteTens, minuteOnes, 59);
    }
    if (!secondsInput.value) {
        setDigits(seconds, secondTens, secondOnes, 59);
    } else {
        seconds = secondsInput.value;
        setDigits(seconds, secondTens, secondOnes, 59);
    }
    ms = 0;
    setDigits(0, msHundreds, msTens, 99);
});

function setDigits(input, digitTens, digitOnes, max) {
    if (input > max) {
        input = max;
    }
    if (input === null) {
        digitTens.textContent = "0";
        digitOnes.textContent = "0";
    } else if (input < 10) {
        digitTens.textContent = "0";
        digitOnes.textContent = input;
    } else {
        digitTens.textContent = Math.floor(input / 10);
        digitOnes.textContent = input - (Math.floor(input / 10) * 10);
    }
}

function tickDown() {
    if ((hours + minutes + seconds + ms) === 0) {
        for(item of digits) {
            item.style.color = 'red';
        }
        setDigits(0, msHundreds, msTens, 99);
    } else if (ms === 0) {
        ms = 99;
        setDigits(ms, msHundreds, msTens, 99);
        if (seconds === 0 && minutes + hours !== 0) {
            seconds = 59
            setDigits(seconds, secondTens,secondOnes, 59);
            if (minutes === 0 && hours !== 0) {
                minutes = 59
                setDigits(minutes, minuteTens,minuteOnes, 59);
                hours--;
                setDigits(hours,hourTens, hourOnes, 99);
            } else {
                minutes--;
                setDigits(minutes, minuteTens,minuteOnes, 59);
            }
        } else {
            seconds--;
            setDigits(seconds, secondTens,secondOnes, 59);
        }
    } else {
        ms--;
        setDigits(ms, msHundreds, msTens, 99);
    }
}