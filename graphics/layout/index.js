// Name Replicant
function fetchRunnerName(ReplicantName, ElementId) {
  nodecg.Replicant(ReplicantName).on('change', (newVal) => {
    document.getElementById(ElementId).textContent = newVal;
  })
}

fetchRunnerName('runner-1', 'runnerName-1')
fetchRunnerName('runner-2', 'runnerName-2')
fetchRunnerName('runner-3', 'runnerName-3')
fetchRunnerName('runner-4', 'runnerName-4')
fetchRunnerName('runner-5', 'runnerName-5')

// Timer Replicants
const timerReplicant = nodecg.Replicant("timer");
const isTimerPausedRep = nodecg.Replicant("isTimerPaused")
const isTimerResettedRep = nodecg.Replicant("isTimerResetted")

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

// Remove paused class when timer is resetted.
isTimerResettedRep.on("change", (newValue) => {
  if (newValue === true) {
    document.getElementById("timer").classList.remove("paused")
  }
})

// Complete Time Replicant
function completeTimeDraw(ReplicantName, ElementId) {
  nodecg.Replicant(ReplicantName).on('change', (newVal) => {
    document.getElementById(ElementId).textContent = newVal;
  })
}

completeTimeDraw('timeP1', 'timeP1')
completeTimeDraw('timeP2', 'timeP2')
completeTimeDraw('timeP3', 'timeP3')
completeTimeDraw('timeP4', 'timeP4')
completeTimeDraw('timeP5', 'timeP5')