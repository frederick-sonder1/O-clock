/* /////////////////////////////////////////////// */
/* /////////////////////////////////////////////// */
/*---------------------- Réveil -------------------*/
/* /////////////////////////////////////////////// */
/* /////////////////////////////////////////////// */

 window.addEventListener("DOMContentLoaded", function(){

    const display = document.getElementById('clock');
    const text = document.getElementById('message');
    const alarmtxt = document.getElementsByClassName('text')[0];
    const setbutton = document.getElementById('set-alarm');
    const clearbutton = document.getElementById('clear-alarm');
    const form = document.getElementById('form');
    const audio = new Audio('../son/spaceship-alarm.wav'); //charge le son de l'alarme
    audio.loop = true;
    let alarmTimeout = null;

    function updateTime(){ //retourne l'heure dans la div
        const date = new Date();

        const hour = formatTime(date.getHours());
        const minutes = formatTime(date.getMinutes());
        const seconds = formatTime(date.getSeconds());

        display.innerHTML = `${hour}:${minutes}:${seconds}`; //integre l'html dans la div
       // console.log(hour, minutes, seconds);
    }

    function formatTime(time){     //ajoute un 0 devant les minutes
        if(time < 10){             //si les minutes sont inferieures à 10
            return '0'+time;
        }
        return time;
    }

    function setAlarm(alarmTime){

            const current = new Date();
            const timeToAlarm = new Date(alarmTime);

            if (current.getTime() < timeToAlarm.getTime()){
                const timeout = timeToAlarm.getTime() - current.getTime(); //defini l'heurede buttoire
                alert("Alarme activée");

                alarmTimeout = setTimeout(() => audio.play(), timeout);    //déclanche l'alarme
                
                alarmTimeout = setTimeout(() =>  alarmtxt.innerHTML = text.value,timeout)  //p

                alarmtxt.innerHTML = 'à venir';

                
            }
            else if(current.getTime() == timeToAlarm.getTime()){
                alarmtxt.innerHTML = '';
                alarmtxt.innerHTML = text.value;
            }
            else if(current.getTime() > timeToAlarm.getTime()){
                alarmtxt.innerHTML = '';
                alarmtxt.innerHTML = 'déjà passé';
            }
    }
    function clearAlarm(){
        audio.pause(); // stop l'alarme
        if(alarmTimeout){
            clearTimeout(alarmTimeout); //réinitialise l'alarme
            alert('Alarme désactivée');
        }
    }
    setbutton.addEventListener('click', (e)=>{      //defini l'heure de l'alarme sur l'event du click 
        e.preventDefault();
        let  alarmTime = form.alarmTime.value;
        setAlarm(alarmTime);

    });
   clearbutton.addEventListener(`click`, clearAlarm);//désactive l'alarme sur l'event du click    

    setInterval(updateTime, 1000);  //raffraichi la fenetre toutes les secondes
 });