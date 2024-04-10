
let setAlaramClock = function () {
    console.log("Set alaram clock");

    let userInputPrompt = prompt('Enter the time for the alarm in HH:MM format (24-hour clock):');
    console.log(userInputPrompt);

    if (!userInputPrompt) {
        alert('please set the HH:MM timeformat not passes the blank value');
        return;
    }

    let currentTime = new Date();
    console.log(currentTime);

    let userInputSplit = userInputPrompt.split(':');
    let clockHours = userInputSplit[0];
    console.log(clockHours);
    let clockMinutes = userInputSplit[1];
    console.log(clockMinutes);

    if (isNaN(userInputPrompt) || isNaN(clockHours) || clockHours < 0 || clockHours > 23 || clockMinutes < 0 || clockMinutes > 59) {
        alert('lease enter valid format.');
        return;
    }

    let newalaramTime = new Date();
    newalaramTime.setHours(clockHours);
    newalaramTime.setMinutes(clockMinutes);
    newalaramTime.setSeconds(0);
    console.log(newalaramTime);

    let timeDiff = newalaramTime.getTime() - currentTime.getTime();

    if (timeDiff <= 0) {
        alert('Invalid alarm time. Please enter a time in the future.');
        return;
    }

    setTimeout(() => {
        alert('Alaram Clock... Times UP!');
    }, timeDiff);

    console.log(timeDiff);
}

setAlaramClock();