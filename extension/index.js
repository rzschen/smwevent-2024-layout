module.exports = function (nodecg) {
	nodecg.log.info("Hello, from your bundle's extension!");
	nodecg.log.info("I'm where you put all your server-side code.");
	nodecg.log.info(`To edit me, open "${__filename}" in your favorite text editor or IDE.`);
	nodecg.log.info('You can use any libraries, frameworks, and tools you want. There are no limits.');
	nodecg.log.info('Visit https://nodecg.dev for full documentation.');
	nodecg.log.info('Good luck!');

	const timerReplicant = nodecg.Replicant("timer", {
		defaultValue: "00:00:00",
		persistent: false
	});

	const isTimerStartedRep = nodecg.Replicant("isTimerStarted", {
		defaultValue: false,
		persistent: false
	})

	const isTimerPausedRep = nodecg.Replicant("isTimerPaused", {
		defaultValue: true,
		persistent: false
	})

	const isTimerResetedRep = nodecg.Replicant("isTimerReseted", {
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
		isTimerStartedRep.value = false;
	}

	function resetTimer() {
		clearInterval(timer);
		milliseconds = 0;
		timerReplicant.value = "00:00:00";
		isTimerStartedRep.value = false;
		isTimerResetedRep.value = false;
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

	isTimerResetedRep.on("change", (newValue) => {
		if (newValue === true) {
			resetTimer();
			nodecg.log.info("[FEATURE ALERT]:  TIMER IS RESETED.")
		}
	})

};
