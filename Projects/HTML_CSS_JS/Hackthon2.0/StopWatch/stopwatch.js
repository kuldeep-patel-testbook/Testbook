let mins = 0;
let sec = 0;
let miliSec = 0;
let appendMins = document.getElementById("minutes");
let appendSec = document.getElementById("seconds");
let appendMilliSec = document.getElementById("milliseconds");
let btnStart = document.getElementById("btnStart");
let btnStop = document.getElementById("btnStop");
let btnReset = document.getElementById("btnReset");
let setTimeoutID;
let setIntervalID;

btnStart.addEventListener('click', function () {
    // Clear any existing interval
    clearInterval(setIntervalID);

    // Start updating the stopwatch display after a delay of 10 milliseconds
    setTimeoutID = setTimeout(startTimer, 10);

    // Start updating the stopwatch every 10 milliseconds
    setIntervalID = setInterval(updateStopwatch, 10);
});

btnStop.addEventListener('click', function () {
    // Clear the timeout and interval when the stop button is clicked
    clearTimeout(setTimeoutID);
    clearInterval(setIntervalID);
});

btnReset.addEventListener('click', function () {
    // Clear the timeout and interval when the reset button is clicked
    clearTimeout(setTimeoutID);
    clearInterval(setIntervalID);

    appendMilliSec.innerHTML = "00";
    appendSec.innerHTML = "00";
    appendMins.innerHTML = "00";
});

let startTimer =  function() {
    miliSec++;

    // Call the displayTimer function
    displayTimer();
    // Call startTimer again after 10 milliseconds
    setTimeoutID = setTimeout(startTimer, 10);
}

let updatedStopWatch = function() {
    miliSec++;

    // Call the displayTimer function
    displayTimer();
}

let displayTimer = function() {
    
    if (miliSec <= 9) {
        appendMilliSec.innerHTML = "0" + miliSec;
    } else {
        appendMilliSec.innerHTML = miliSec;
    }

    if (miliSec > 99) {
        // Reset mili seconds to 0 and increment seconds
        sec++;
        if (sec <= 9) {
            appendSec.innerHTML = "0" + sec;
        } else {
            appendSec.innerHTML = sec;
        }
        miliSec = 0;
        appendMilliSec.innerHtml = "0" + 0;
    }

    if (sec === 59) {
        // Reset seconds to 0 and increment minutes
        sec = 0;
        mins++;

        if (mins <= 9) {
            appendMins.innerHTML = "0" + mins;
        } else {
            appendMins.innerHTML = mins;
        }
    }

}