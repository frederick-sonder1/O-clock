window.addEventListener('DOMContentLoaded', ()=>{
const playButton = document.getElementsByClassName("play")[0];
const lapButton = document.getElementsByClassName("lap")[0];
const resetButton = document.getElementsByClassName("reset")[0];
const clearButton = document.getElementsByClassName("lap-clearbutton")[0];
const minute = document.getElementsByClassName("minute")[0];
const second = document.getElementsByClassName("sec")[0];
const centiSecond = document.getElementsByClassName("msec")[0];
const laps = document.getElementsByClassName("laps")[0];
const bg = document.getElementsByClassName("outer-circle")[0];

let isPlay = false;
let isReset = false;
let min;
let sec;
let centiSec;
let minCounter = 0;
let secCounter = 0;
let centisecCounter = 0;
let lapItem = 0;

const toogleButton = ()=>{     //Affichage des boutons
    lapButton.classList.remove("hidden"); 
    resetButton.classList.remove("hidden");
}

const play = ()=> {     //Fonction de démarrage
    if(!isPlay && !isReset){
        playButton.innerHTML = "Pause";   // changement du bouton
        bg.classList.add("animation-bg"); 
        min = setInterval(()=>{            // intervale minute
            minute.innerHTML = `${formatTime3(++minCounter)} :&nbsp;`;
            console.log(minute)

        }, 60*1000);
        sec= setInterval(()=>{    // intervale seconde
            if(secCounter === 60){
                secCounter = 0;
            }
            second.innerHTML = `&nbsp;${formatTime(++secCounter)} :`;
            console.log(secCounter)

        }, 1000);
        centiSec = setInterval(()=>{  // intervale centieme de seconde
            if(centisecCounter === 100){
                centisecCounter = 0;
            }
            centiSecond.innerHTML = `${formatTime2(++centisecCounter)}`;
        }, 10)
        isPlay = true;
        isReset = true;
    }
    else{                                // sinon reset
        playButton.innerHTML = "Play";   // changement du bouton
        clear();
        clearInterval(min);
        clearInterval(sec);
        clearInterval(centiSec);
        isPlay = false;
        isReset = false;
        bg.classList.remove("animation-bg");
    }
    toogleButton();
}

const clear = () => {
    clearInterval(min);
    clearInterval(sec);
    clearInterval(centiSec);
    minCounter = 0;
    secCounter = 0;
    centisecCounter = 0;

}
function formatTime3(minute){     //ajoute un 0 devant les minutes
    if(minute < 10){             //si les minutes sont inferieures à 10
        return '0'+minute;
    }
    return minute;
}
function formatTime(second){     //ajoute un 0 devant les secondes
    if(second < 10){             //si les seconde sont inferieures à 10
        return '0'+second;
    }
    return second;
}
function formatTime2(centiSecond){     //ajoute un 0 devant les milisecondes
    if(centiSecond < 10){             //si les milisecondes sont inferieures à 10
        return '0'+centiSecond;
    }
    return centiSecond;
}
const reset = ()=> {     // Remise a zéro de tout le chrono
    isReset = true;
    clear();
    //play(); 
    clearInterval(min);
    clearInterval(sec);
    clearInterval(centiSec);
    clearAll();
    playButton.innerHTML = "Play";
    lapButton.classList.add("hidden");      //On cache les boutons
    resetButton.classList.add("hidden");    //On cache les boutons
    minute.innerHTML = "00 :";
    second.innerHTML = "&nbsp;00 :";
    centiSecond.innerHTML = "&nbsp;00";
}

const lap = ()=> {     //Fonction de sauvegarde du chrono
    const li = document.createElement("li");
    const number = document.createElement("span");
    const timeStamp = document.createElement("span");

    li.setAttribute("class", "lap-item");
    number.setAttribute("class", "number");
    timeStamp.setAttribute("class", "time-stamp");

    number.innerText = `#${++lapItem}`
    timeStamp.innerHTML = `${minCounter} :${secCounter} :${centisecCounter}`;
    
    li.append(number, timeStamp);
    laps.append(li);  
    
    clearButton.classList.remove("hidden");
}

const clearAll = () =>{
    laps.innerHTML = '';
    laps.append(clearButton)
    clearButton.classList.add("hidden");
    lapItem = 0;

}

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
lapButton.addEventListener("click", lap);
clearButton.addEventListener("click", clearAll);

}); 