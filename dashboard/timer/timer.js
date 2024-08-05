const watch = document.querySelector('#watch');
let milliseconds = 0;
let timer;
let isTimerStarted;

const timerReplicant = nodecg.Replicant("timer", {
  defaultValue: "00:00:00"
});

const isTimerStartedReplicant = nodecg.Replicant("timerflag");

function updateIsTimerStarted(bool) {
  isTimerStarted = bool;
  console.log(isTimerStarted)
  isTimerStartedReplicant.value = isTimerStarted;
}

function startWatch() {
  watch.classList.remove('paused');
  clearInterval(timer);
  timer = setInterval(()=>{ 
    milliseconds += 10;
    let dateTimer = new Date(milliseconds);

    let stopwatchCombine = 
    ('0'+dateTimer.getUTCHours()).slice(-2) + ':' +
    ('0'+dateTimer.getUTCMinutes()).slice(-2) + ':' +
    ('0'+dateTimer.getUTCSeconds()).slice(-2)

    watch.innerHTML = stopwatchCombine;

    const timerValue = stopwatchCombine;
    timerReplicant.value = timerValue;
  },10);
};

function pauseWatch() {
  watch.classList.add('paused');
  clearInterval(timer);
  timerReplicant.value = timerValue;
};

function resetWatch() {
  watch.classList.remove('paused');
  clearInterval(timer);
  milliseconds = 0;
  watch.innerHTML= '00:00:00';
  timerReplicant.value = '00:00:00';
  updateIsTimerStarted(false)
};

document.addEventListener('click', (e) =>{
  const el = e.target;
  if (el.id === 'start') startWatch(), updateIsTimerStarted(true);
  if (el.id === 'pause') pauseWatch();
  if (el.id === 'reset') resetWatch();
});