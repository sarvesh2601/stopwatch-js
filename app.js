
let min = 0;
let hour = 0;
let sec = 0;
let timer;
let laptime = document.getElementById("Lap-timings");

let pastLapTime = {
    hours:0,
    minutes:0,
    seconds:0
    }
function callTimer() {      
    sec++;
    if (sec === 60)  {
        sec = 0;
        min++;
    }
    if( min === 60){
        min = 0;
        hout++;
    }  
    document.getElementById("timer").innerHTML = hour + ":" + min + ":" + sec;
}


function Start() {
    document.getElementById("start").disabled = true;
    timer = setInterval(callTimer, 1000);
}

function Stop() {
    document.getElementById("start").disabled = false;
    clearInterval(timer);
}

function Reset() {
    stop();
    hour = 0;
    min = 0;
    sec = 0;
    document.getElementById("timer").innerHTML = hour + ":" + min + ":" + sec;
    laptime.innerHTML = null;
    pastLapTime.hours = 0;
    pastLapTime.minutes = 0;
    pastLapTime.seconds = 0;
}


function lap(){
    let lapHour = hour - pastLapTime.hours;
    let lapmin = min - pastLapTime.minutes;
    let lapsec = sec - pastLapTime.seconds;
    const currentTime = document.getElementById("timer");
    const prevLapTime = laptime.innerHTML;
    laptime.innerHTML =  laptime.innerHTML + lapHour + ":" + lapmin + ":" + lapsec + "<br>" ;
    pastLapTime.hours = hour;
    pastLapTime.minutes = min;
    pastLapTime.seconds = sec;
}


