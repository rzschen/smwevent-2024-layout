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

	const countPlayerRep = nodecg.Replicant("countPlayer", {
		defaultValue: 0,
		persistent: false
	})

	const countFinishedRep = nodecg.Replicant("countFinished", {
		defaultValue: 0,
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
		nodecg.log.info("[FEATURE ALERT]:  TIMER IS STARTED.");
	};

	function pauseTimer() {
		clearInterval(timer);
		// Initialize Replicants' value
		isTimerStartedRep.value = false;
		isTimerPausedRep.value = false;
		nodecg.log.info("[FEATURE ALERT]:  TIMER IS PAUSED.");
	}

	function resetTimer() {
		clearInterval(timer);
		milliseconds = 0;
		timerReplicant.value = "00:00:00";
		// Initialize Replicants' value
		isTimerStartedRep.value = false;
		isTimerResettedRep.value = false;
		nodecg.log.info("[FEATURE ALERT]:  TIMER IS RESETTED.");
	}

// Start timer when Start button has clicked.
	isTimerStartedRep.on("change", (newValue) => {
		if (newValue === true) {
			startTimer();
		}
	})

	isTimerPausedRep.on("change", (newValue) => {
		if (newValue === true) {
			pauseTimer();
		}
	})

	isTimerResettedRep.on("change", (newValue) => {
		if (newValue === true) {
			resetTimer();
			countFinishedRep.value = 0;
		}
	})

	countPlayerRep.on("change", (newValue) => {
		countPlayerRep.value = newValue;
	})

	countFinishedRep.on("change", (newValue) => {
		nodecg.log.info("Finished count: " + countFinishedRep.value)
		
		if (countFinishedRep.value === countPlayerRep.value) {
			isTimerPausedRep.value = true;
		}
	})

};
