// You can access the NodeCG api anytime from the `window.nodecg` object
// Or just `nodecg` for short. Like this!:
nodecg.log.info("Here's an example of using NodeCG's logging API!");

nodecg.Replicant('runner-1').on('change', (newVal) => {
  document.getElementById('runnerName-1').textContent = newVal;
})

nodecg.Replicant('runner-2').on('change', (newVal) => {
  document.getElementById('runnerName-2').textContent = newVal;
})

nodecg.Replicant('runner-3').on('change', (newVal) => {
  document.getElementById('runnerName-3').textContent = newVal;
})

nodecg.Replicant('runner-4').on('change', (newVal) => {
  document.getElementById('runnerName-4').textContent = newVal;
})

nodecg.Replicant('runner-5').on('change', (newVal) => {
  document.getElementById('runnerName-5').textContent = newVal;
})

// NodeCG Replicants
const timerReplicant = nodecg.Replicant("timer");
const isTimerPausedRep = nodecg.Replicant("isTimerPaused")
const isTimerResetedRep = nodecg.Replicant("isTimerReseted")


// Draw timer value via timerReplicant
timerReplicant.on("change", (newValue) => {
  document.getElementById("timer").innerText = newValue;
});

// Apply paused class when timer is pause
isTimerPausedRep.on("change", (newValue) => {
  if (newValue === true) {
    document.getElementById("timer").classList.add("paused")
  }
})

isTimerResetedRep.on("change", (newValue) => {
  if (newValue === true) {
    document.getElementById("timer").classList.remove("paused")
  }
})