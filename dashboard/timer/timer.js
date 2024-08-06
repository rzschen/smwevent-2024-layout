const timerElem = document.getElementById("timer")

// NodeCG Replicants
const timerReplicant = nodecg.Replicant("timer");
const isTimerStartedRep = nodecg.Replicant("isTimerStarted")
const isTimerPausedRep = nodecg.Replicant("isTimerPaused")
const isTimerResetedRep = nodecg.Replicant("isTimerReseted")


// Update replicants' state
function startTimerButton() {
  isTimerStartedRep.value = true;
  timerElem.classList.remove("paused")
  timerElem.classList.add("onGoing")
};

function pauseTimerButton() {
  isTimerPausedRep.value = true;
  timerElem.classList.add("paused")
};

function resetTimerButton() {
  isTimerResetedRep.value = true;
  timerElem.classList.remove("onGoing")
  timerElem.classList.remove("paused")
};

// Detect button clicks
document.addEventListener('click', (e) =>{
  const el = e.target;
  if (el.id === 'start') startTimerButton();
  if (el.id === 'pause') pauseTimerButton();
  if (el.id === 'reset') resetTimerButton();
});

// Draw timer value via timerReplicant
timerReplicant.on("change", (newValue) => {
  document.getElementById("timer").innerText = newValue;
})