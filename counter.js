let bodyEl = document.getElementsByTagName("body")[0];
let titleEl = document.getElementById("title");
let minuteurEl = document.getElementById("minuteur");
let daysEl = document.getElementById("d");
let hoursEl = document.getElementById("h");
let minutesEl = document.getElementById("m");
let secondesEl = document.getElementById("s");

let now = new Date();
const dateOffsetInMinute = now.getTimezoneOffset();
const unjoursEnMs = 1000*60*60*24;
const uneheuresEnMs = 1000*60*60;
const uneminuteEnMs = 1000*60;
const unesecondeEnMs = 1000;
letnow = new Date();

const newYear = new Date("2024");
//const newYear =  Date.now() - dateOffsetInMinute * uneminuteEnMs + 3000;

const getcountdown = () => {
    let nowDate = Date.now();
    let tempsRestantsEnMs = newYear - nowDate + dateOffsetInMinute * uneminuteEnMs;
    //jours
    let nbjours = Math.floor(tempsRestantsEnMs / unjoursEnMs);
    //heures
    let resteTempsSansJoursMs = tempsRestantsEnMs - nbjours * unjoursEnMs;
    let nbheures = Math.floor(resteTempsSansJoursMs / uneheuresEnMs);
    //minutes
    let restetempsSansHeureMs = resteTempsSansJoursMs - nbheures * uneheuresEnMs;
    let nbmins = Math.floor(restetempsSansHeureMs / uneminuteEnMs);
    //secondes
    let restetempsSansMinuteMs = restetempsSansHeureMs - nbmins * uneminuteEnMs;
    let nbsecs = Math.floor(restetempsSansMinuteMs / unesecondeEnMs);
    daysEl.textContent = nbjours;
    hoursEl.textContent = nbheures;
    minutesEl.textContent = nbmins;
    secondesEl.textContent = nbsecs;

    if(tempsRestantsEnMs <= 0) {
    clearInterval(countDownInterval);
    bodyEl.style.backgroundImage = 'url(../image/counter4.jpg)';
    daysEl.textContent = 0;
    hoursEl.textContent = 0;
    minutesEl.textContent = 0;
    secondesEl.textContent = 0;
    titleEl.innerHTML = "Happy new year !!!"
    }
};

let countDownInterval = setInterval(getcountdown,1000 );
//initialisation
getcountdown();