const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const startBtn = document.querySelector('.start-btn');
const pauseBtn = document.querySelector('.pause-btn');
const pause = document.querySelector('.pause');
const continueBtn = document.querySelector('.continue');
const resetBtn = document.querySelector('.reset-btn');


let intervalId;

seconds.addEventListener('input', function() {
    if (seconds.value.length > 2) {
        let raqam = seconds.value;
        let oxirgiraqam = raqam.slice(-2);
        seconds.value = oxirgiraqam;
    }

})
minutes.addEventListener('input', function() {
    if (minutes.value.length > 2) {
        let raqam = minutes.value;
        let oxirgiraqam = raqam.slice(-2);
        minutes.value = oxirgiraqam;
    }
})


function time() {
    intervalId = setInterval(() => {
        seconds.value -= 1;
        if (seconds.value < 0) {
            if (minutes.value) {
                minutes.value -= 1;
                seconds.value = 59;
            } else {
                if (hours.value) {
                    hours.value -= 1;
                    minutes.value = 59;
                    seconds.value = 59;
                }
            }
        }
        if ((minutes.value == 0 || minutes.value == "") && (seconds.value == 0 || seconds.value == "") && (hours.value == 0 || hours.value == "")) {
            seconds.value = '';
            clearInterval(intervalId);
        }

    }, 1000);
}

startBtn.addEventListener('click', function() {
    if (seconds.value || minutes.value || hours.value) {
        if (seconds.value >= 60) {
            seconds.value = seconds.value - 60;
            minutes.value = +minutes.value + 1;
        }
        if (minutes.value >= 60) {
            minutes.value = minutes.value - 60;
            hours.value = +hours.value + 1;
        }
        time();
    }
})
resetBtn.addEventListener('click', function() {
    minutes.value = "";
    seconds.value = "";
    hours.value = "";
    clearInterval(intervalId);
})
pauseBtn.addEventListener('click', function() {
    if (intervalId) {
        if (continueBtn.style.display == 'block') {
            pause.style.display = 'block';
            continueBtn.style.display = 'none';
            time();

        } else {
            pause.style.display = 'none';
            continueBtn.style.display = 'block';
            clearInterval(intervalId);
        }
    }
})