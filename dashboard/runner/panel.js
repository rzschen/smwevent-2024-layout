document.getElementById('updateRunnerNameBtn').addEventListener('click', () => {
  const runnerName_1 = document.getElementById('runnerName-1').value;
  const runnerName_2 = document.getElementById('runnerName-2').value;
  const runnerName_3 = document.getElementById('runnerName-3').value;
  const runnerName_4 = document.getElementById('runnerName-4').value;
  const runnerName_5 = document.getElementById('runnerName-5').value;
  nodecg.Replicant('runner-1').value = runnerName_1;
  nodecg.Replicant('runner-2').value = runnerName_2;
  nodecg.Replicant('runner-3').value = runnerName_3;
  nodecg.Replicant('runner-4').value = runnerName_4;
  nodecg.Replicant('runner-5').value = runnerName_5;
})

nodecg.Replicant('runner-1').on('change', (newVal) => {
  document.getElementById('runnerName-1').value = newVal;
})

nodecg.Replicant('runner-2').on('change', (newVal) => {
  document.getElementById('runnerName-2').value = newVal;
})

nodecg.Replicant('runner-3').on('change', (newVal) => {
  document.getElementById('runnerName-3').value = newVal;
})

nodecg.Replicant('runner-4').on('change', (newVal) => {
  document.getElementById('runnerName-4').value = newVal;
})

nodecg.Replicant('runner-5').on('change', (newVal) => {
  document.getElementById('runnerName-5').value = newVal;
})