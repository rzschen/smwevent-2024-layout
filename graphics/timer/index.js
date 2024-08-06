const timerReplicant = nodecg.Replicant("timer");

timerReplicant.on("change", (newValue) => {
  document.getElementById("timer").innerText = newValue;
});