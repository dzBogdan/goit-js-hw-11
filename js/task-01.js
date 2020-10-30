const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ]

let timeId=0;

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

const btnStart = document.querySelector('.btnStart');

btnStart.addEventListener('click',onBtnStartClick);

function onBtnStartClick(){
  timeId = setInterval(()=>document.body.style.backgroundColor = colors[randomIntegerFromInterval(0,5)],1000);
  btnStart.disabled = true;
}
  
const btnStop = document.querySelector('.btnStop');

btnStop.addEventListener('click',onBtnStopClick);

function onBtnStopClick(){
    clearInterval(timeId);
    btnStart.disabled = false;
}




  