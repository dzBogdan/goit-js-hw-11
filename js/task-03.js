


function pad(value){
    return String(value).padStrat(2,0);

}

function setDays(time){
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
  return days;
}

function setHours(time){
const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

return hours;
}    

function setMins(time){
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    return mins;
}

    
function setSecs(time){
    const secs = Math.floor((time % (1000 * 60)) / 1000);

    return secs;
    
}



const refs = {
  days:document.querySelector('.days'),
  hours:document.querySelector('.hours'),
  mins:document.querySelector('.mins'),
  secs:document.querySelector('.secs'),
}

let timestamp=0;

class timeCounter  {

    constructor(datetime){
        let date = datetime;
        timestamp = new Date(date.split(".").reverse().join(".")).getTime();
        let leftDate =  new Date().getTime();
        
        

        let leftTime = timestamp - leftDate ;

        refs.days.textContent = setDays(leftTime);
        refs.hours.textContent = setHours(leftTime);
        refs.mins.textContent = setMins(leftTime);
        refs.secs.textContent = setSecs(leftTime);
    }
    
    Start(){
        
        
        setInterval(()=>{
          const secondTime = Date.now();
          let delta = timestamp-secondTime;
        
          refs.days.textContent = setDays(delta);
          refs.hours.textContent = setHours(delta);
          refs.mins.textContent = setMins(delta);
          refs.secs.textContent = setSecs(delta);
        },1000);

    }
}

const Timer = new timeCounter("25.11.2020");

const date = new Date(2017, 6, 14, 5, 40, 0, 0);


Timer.Start();