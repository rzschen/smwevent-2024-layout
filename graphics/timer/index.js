// NodeCG Replicants
const timerReplicant = nodecg.Replicant("timer");
const isTimerPausedRep = nodecg.Replicant("isTimerPaused")
const isTimerResetedRep = nodecg.Replicant("isTimerReseted")


// Draw timer value via timerReplicant
timerReplicant.on("change", (newValue) => {
  document.getElementById("timer").innerText = newValue;
});

isTimerResetedRep.on("change", (newValue) => {
  if (newValue === true) {
    document.getElementById("timer").classList.remove("paused")
  }
})

// Apply paused class when timer is pause
isTimerPausedRep.on("change", (newValue) => {
  if (newValue === true) {
    document.getElementById("timer").classList.add("paused")
  }
})