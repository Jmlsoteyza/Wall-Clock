function clock(){
    var today = new Date();

    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();

    if (hours >= 12){
        meridiem = " PM";
    }
    else {
        meridiem = " AM";
    }

    if (hours>12){
        hours = hours - 12;
    }
    else if (hours===0){
        hours = 12;
    }

    if (minutes<10){
        minutes = "0" + minutes;
    }
    else {
        minutes = minutes;
    }

    if (seconds<10){
        seconds = "0" + seconds;
    }
    else {
        seconds = seconds;
    }
    
    document.getElementById("clock").innerHTML = (hours + ":" + minutes + ":" + seconds + meridiem);

}

setInterval('clock()', 1000);



document.addEventListener("DOMContentLoaded", function(){

    const secondHand = document.querySelector('.second-hand');
    const minHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');

    function setDate(){
        const now = new Date();

        const seconds = now.getSeconds();
        const secondsDegrees = ((seconds / 60.0) * 360) + 90;
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

        const mins = now.getMinutes();
        const minsDegrees = ((mins / 60) * 360) + 90;
        minHand.style.transform = `rotate(${minsDegrees}deg)`;
        minHand.style.transition = 'all 0.05s';


        const hour = now.getHours();
        const hoursDegrees = ((hour / 12) * 360) + 90;
        hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    }

    setInterval(setDate, 1000);
});










