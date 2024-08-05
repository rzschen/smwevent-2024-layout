nodecg.Replicant("timer").on("change", (newValue, oldValue) => {
  document.getElementById("timer").innerText = newValue;
});

nodecg.Replicant("timerflag").on("change", (newValue, oldValue) => {
  if (newValue = true) {
    console.log("Started")
  }
});