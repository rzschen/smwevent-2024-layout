module.exports = function (nodecg) {
// Initialize Replicants	
	const timerReplicant = nodecg.Replicant("timer", {
		defaultValue: "00:00:00",
		persistent: false
	});

	const isTimerStartedRep = nodecg.Replicant("isTimerStarted", {
		defaultValue: false,
		persistent: false
	})

	const isTimerPausedRep = nodecg.Replicant("isTimerPaused", {
		defaultValue: false,
		persistent: false
	})

	const isTimerResettedRep = nodecg.Replicant("isTimerResetted", {
		defaultValue: false,
		persistent: false
	})

	// Initialize timer variables
	let milliseconds = 0;
	let timer;
	

	function startTimer() {
		// isPaused Replicant
		isTimerPausedRep.value = false;

		// Timer logic
		clearInterval(timer);
  	timer = setInterval(()=>{ 
    milliseconds += 10;
    let dateTimer = new Date(milliseconds);

		// Combine them all as text
    let combinedDigits = 
    ('0'+dateTimer.getUTCHours()).slice(-2) + ':' +
    ('0'+dateTimer.getUTCMinutes()).slice(-2) + ':' +
    ('0'+dateTimer.getUTCSeconds()).slice(-2)
    timerReplicant.value = combinedDigits;
 	 	},10);
	};

	function pauseTimer() {
		clearInterval(timer);
		// Initialize Replicants' value
		isTimerStartedRep.value = false;
		isTimerPausedRep.value = false;
	}

	function resetTimer() {
		clearInterval(timer);
		milliseconds = 0;
		timerReplicant.value = "00:00:00";
		// Initialize Replicants' value
		isTimerStartedRep.value = false;
		isTimerResettedRep.value = false;
	}

// Start timer when Start button has clicked.
	isTimerStartedRep.on("change", (newValue) => {
		if (newValue === true) {
			startTimer();
			nodecg.log.info("[FEATURE ALERT]:  TIMER IS STARTED.");
		}
	})

	isTimerPausedRep.on("change", (newValue) => {
		if (newValue === true) {
			pauseTimer();
			nodecg.log.info("[FEATURE ALERT]:  TIMER IS PAUSED.");
		}
	})

	isTimerResettedRep.on("change", (newValue) => {
		if (newValue === true) {
			resetTimer();
			nodecg.log.info("[FEATURE ALERT]:  TIMER IS RESETTED.")
		}
	})

};
