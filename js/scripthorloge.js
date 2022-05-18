/* /////////////////////////////////////////////// */
/* /////////////////////////////////////////////// */
/*--------------------- Horloge -------------------*/
/* /////////////////////////////////////////////// */
/* /////////////////////////////////////////////// */
let date, hr, min, sec
function refreshClock() {
    date=new Date()
    hr = date.getHours() //recupere l'heure actuelle
    min = date.getMinutes() //recupere les minutes actuelles
    sec = date.getSeconds()//recupere les secondes actuelles

    document.querySelector(".hr").style.transform=     //rotation de l'aiguille de l'heure
    `translate(-50%,-100%) rotate(${hr * 360 / 12}deg)`
    document.querySelector(".min").style.transform=   //rotation de l'aiguille des minutes
    `translate(-50%,-100%) rotate(${min * 360 / 60}deg)`
    document.querySelector(".sec").style.transform=    //rotation de l'aiguille des secondes
    `translate(-50%,-100%) rotate(${sec * 360 / 60}deg)`

}
refreshClock();
window.setInterval(refreshClock, /*updateTime,*/ 1000);  //raffraichi la fenetre toutes les secondes