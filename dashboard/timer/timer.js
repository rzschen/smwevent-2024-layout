const timerElem = document.getElementById("timer")

// NodeCG Replicants
const timerReplicant = nodecg.Replicant("timer");
const isTimerStartedRep = nodecg.Replicant("isTimerStarted")
const isTimerPausedRep = nodecg.Replicant("isTimerPaused")
const isTimerResettedRep = nodecg.Replicant("isTimerResetted")


// Update timer state replicants on button click.
document.addEventListener('click', (e) =>{
  const el = e.target;
  if (el.id === 'start') isTimerStartedRep.value = true;
  if (el.id === 'pause') isTimerPausedRep.value = true;
  if (el.id === 'reset') isTimerResettedRep.value = true;
});


// Draw timer value via timerReplicant
timerReplicant.on("change", (newValue) => {
  document.getElementById("timer").innerText = newValue;
})


// Timer state replicants
isTimerStartedRep.on("change", (newValue) => {
  if (newValue === true) {
    timerElem.classList.remove("paused")
    timerElem.classList.add("onGoing")
  }
})

isTimerPausedRep.on("change", (newValue) => {
  if (newValue === true) {
    timerElem.classList.add("paused") 
  }
})

isTimerResettedRep.on("change", (newValue) => {
  if (newValue === true) {
    timerElem.classList.remove("onGoing")
    timerElem.classList.remove("paused")
  }
})