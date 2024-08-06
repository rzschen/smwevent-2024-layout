const watch = document.querySelector('#watch');

// NodeCG Replicants
const timerReplicant = nodecg.Replicant("timer");
const isTimerStartedRep = nodecg.Replicant("isTimerStarted")
const isTimerPausedRep = nodecg.Replicant("isTimerPaused")
const isTimerReseted = nodecg.Replicant("isTimerReseted")

function startTimerButton() {
  isTimerStartedRep.value = true;
};

function pauseTimerButton() {
  isTimerPausedRep.value = true;
};

function resetTimerButton() {
  isTimerReseted.value = true;
};

// Detect button clicks
document.addEventListener('click', (e) =>{
  const el = e.target;
  if (el.id === 'start') startTimerButton();
  if (el.id === 'pause') pauseTimerButton();
  if (el.id === 'reset') resetTimerButton();
});

// Draw timer for every changes on timerReplicant's value
timerReplicant.on("change", (newValue) => {
  watch.innerHTML = newValue;
})