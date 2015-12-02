var intervalIds = {};

function startEnergyTimer(){

    startTimer('energy', energyRestoreValue, maxEnergyValue, energyFullRestoreTime);
}

function startHealthTimer(){
    startTimer('health', healthRestoreValue, maxHealthValue, healthFullRestoreTime);
}

function startAmmoTimer(){


    startTimer('ammo', ammoRestoreValue, maxAmmoValue, ammoFullRestoreTime);
}

function startTimer(el, valueToAdd, maxValue, newTimeValue) {
    var timer = document.getElementById(el+'Timer').innerHTML,
        timeArr = timer.split(':'),
        seconds = parseInt(timeArr[0]) * 60 + parseInt(timeArr[1]),
        value = 0;
    seconds--;
    if (seconds == 0) {
        value = parseInt(document.getElementById(el+'Value').innerHTML) + valueToAdd;
        if (value >= maxValue) {
            value = maxValue;
            clearInterval(intervalIds[el]);
            document.getElementById(el + 'Timer').innerHTML = "";
        } else {
            document.getElementById(el + 'Timer').innerHTML = convertSecondsToTime(newTimeValue);
        }
        document.getElementById(el + 'Value').innerHTML = value.toString();

    } else {
        document.getElementById(el + 'Timer').innerHTML = convertSecondsToTime(seconds);
    }
}

function convertSecondsToTime(seconds){
    var min = parseInt(seconds / 60),
        sec = seconds % 60;
    if (min < 10) {
        min = "0" + min;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }
    return min + ":" + sec;
}