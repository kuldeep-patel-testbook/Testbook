//document.addEventListener('DOMContentLoaded', function () {

    var minutes = "00";
    var seconds = "00";
    var milliseconds = "00";
    var appendMinutes = document.getElementById("minutes");
    var appendSeconds = document.getElementById("seconds");
    var appendMilliSeconds = document.getElementById("milliseconds");
    var btnStart = document.getElementById("mystart");
    var btnStop = document.getElementById("mystop");
    var btnReset = document.getElementById("myreset");
    var Interval;

    btnStart.onclick = function () {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }

    btnStop.onclick = function () {
        clearInterval(Interval);
    }

    btnReset.onclick = function () {
        clearInterval(Interval);
        appendMinutes.textContent = "00";
        appendMilliSeconds.textContent = "00";
        appendSeconds.textContent = "00";
    }


    function startTimer() {
        milliseconds++;

        if (milliseconds <= 9) {
            appendMilliSeconds.innerHTML = "0" + milliseconds;

        }

        if (milliseconds > 9) {
            appendMilliSeconds.innerHTML = milliseconds;
        }

        if (milliseconds > 99) {
            seconds++;

            if (seconds <= 9) {
                appendSeconds.innerHTML = "0" + seconds;
            } else {
                appendSeconds.innerHTML = seconds;
            }

            milliseconds = 0;
            appendMilliSeconds.innerHtml = "0" + 0;
        }

        if (seconds === 60) {
            // Reset seconds to 0 and increment minutes
            seconds = 0;
            minutes++;

            if (minutes <= 9) {
                appendMinutes.innerHtml = "0" + minutes;
            } else {
                appendMinutes.innerHTML = minutes;
            }
        }

        if (seconds > 9) {
            appendSeconds.innerHtml = seconds;
        }

    }

    /*let startBtn = document.getElementById('start'); 
    let stopBtn = document.getElementById('stop'); 
    let resetBtn = document.getElementById('reset'); 

    let hour = "00"; 
    let minute = "00"; 
    let second = "00"; 
    let count = "00"; 

    startBtn.addEventListener('click', function () { 
        timer = true; 
        stopWatch(); 
    }); 

    stopBtn.addEventListener('click', function () { 
        timer = false; 
    }); 

    resetBtn.addEventListener('click', function () { 
        timer = false; 
        hour = 0; 
        minute = 0; 
        second = 0; 
        count = 0; 
        document.getElementById('hr').innerHTML = "00"; 
        document.getElementById('min').innerHTML = "00"; 
        document.getElementById('sec').innerHTML = "00"; 
        document.getElementById('count').innerHTML = "00"; 
    }); 

    function stopWatch() { 
        if (timer) { 
            count++; 

            if (count == 100) { 
                second++; 
                count = 0; 
            } 

            if (second == 60) { 
                minute++; 
                second = 0; 
            } 

            if (minute == 60) { 
                hour++; 
                minute = 0; 
                second = 0; 
            } 

            let hrString = hour; 
            let minString = minute; 
            let secString = second; 
            let countString = count; 

            if (hour < 10) { 
                hrString = "0" + hrString; 
            } 

            if (minute < 10) { 
                minString = "0" + minString; 
            } 

            if (second < 10) { 
                secString = "0" + secString; 
            } 

            if (count < 10) { 
                countString = "0" + countString; 
            } 

            document.getElementById('hr').innerHTML = hrString; 
            document.getElementById('min').innerHTML = minString; 
            document.getElementById('sec').innerHTML = secString; 
            document.getElementById('count').innerHTML = countString; 
            setTimeout(stopWatch, 10); 
        } 
    }*/
//});