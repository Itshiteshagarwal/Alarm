const alarmsubmit = document.getElementById('alarmsubmit');

alarmsubmit.addEventListener('click', setalarm);
var audio = new Audio('pubg.mp3');

function ringbell() {
audio.play();
}



function setalarm(e){
    e.preventDefault();
    const alarm =  document.getElementById('alarm')
    alarmDate = new Date(alarm.value);
    console.log(`setting alarm for ${alarmDate}..`);

    now = new Date();
    let timetoalarm = alarmDate - now
    console.log(timetoalarm);

    if(timetoalarm>=0){
        setTimeout(() => {
            console.log("ringing now")
            ringbell();
        }, timetoalarm);
    }

   
}