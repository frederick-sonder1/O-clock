/* /////////////////////////////////////////////// */
/* /////////////////////////////////////////////// */
/*------------------------timer--------------------*/
/* /////////////////////////////////////////////// */
/* /////////////////////////////////////////////// */
import Timer from "./timer.js";

new Timer(
    document.querySelector(".timer")
    );

/* /////////////////////////////////////////////// */
/* /////////////////////////////////////////////// */
/*--------------------- Horloge -------------------*/
/* /////////////////////////////////////////////// */
/* /////////////////////////////////////////////// */
// let date, hr, min, sec
// function refreshClock() {
//     date=new Date()
//     hr = date.getHours() //recupere l'heure actuelle
//     min = date.getMinutes() //recupere les minutes actuelles
//     sec = date.getSeconds()//recupere les secondes actuelles

//     document.querySelector(".hr").style.transform=     //rotation de l'aiguille de l'heure
//     `translate(-50%,-100%) rotate(${hr * 360 / 12}deg)`
//     document.querySelector(".min").style.transform=   //rotation de l'aiguille des minutes
//     `translate(-50%,-100%) rotate(${min * 360 / 60}deg)`
//     document.querySelector(".sec").style.transform=    //rotation de l'aiguille des secondes
//     `translate(-50%,-100%) rotate(${sec * 360 / 60}deg)`

// }
// refreshClock();
// window.setInterval(refreshClock, /*updateTime,*/ 1000);  //raffraichi la fenetre toutes les secondes


/* /////////////////////////////////////////////// */
/* /////////////////////////////////////////////// */
/*---------------------- Réveil -------------------*/
/* /////////////////////////////////////////////// */
/* /////////////////////////////////////////////// */

// const display = document.getElementById("clock");
// // const audio = new Audio('http://localhost/oclock/son/0173.ogg'/*'C:\xampp\htdocs\oclock\son\0173.ogg'*/); //charge le son de l'alarm
// audio.loop = true;       
// let alarmTime = null;
// let alarmTimeout = null;

// function updateTime(){ //retourne l'heure dans la div
//     const date = new Date();

//     const hours = formatTime(date.getHours());
//     const minutes = formatTime(date.getMinutes());
//     const seconds = formatTime(date.getSeconds());

//     display.innerHTML = `${hours}:${minutes}:${seconds}`; //integre l'html dans la div

// }

// function formatTime(time){     //ajoute un 0 devant les minutes
//     if(time < 10){             //si les minutes sont inferieures à 10
//         return '0'+time;
//     }
//     return time;
// }


// function setAlarmTime(value){ //defini l'heure de l'alarme
//     alarmTime = value;
//     console.log(alarmTime);
// }
//  window.setInterval(updateTime, 1000);  //raffraichi la fenetre toutes les secondes