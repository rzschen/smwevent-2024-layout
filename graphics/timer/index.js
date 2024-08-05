nodecg.Replicant("timer").on("change", (newValue, oldValue) => {
  document.getElementById("timer").innerText = newValue;
});