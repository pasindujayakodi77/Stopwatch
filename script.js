let timer;
let running = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

// Elements
const timeDisplay = document.getElementById('time-display');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');

// Function to update the time display
function updateTimeDisplay() {
  timeDisplay.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

// Helper function to pad single digits with a leading zero
function pad(value) {
  return value < 10 ? '0' + value : value;
}

// Start or stop the stopwatch
function startStop() {
  if (running) {
    clearInterval(timer);
    startStopBtn.textContent = 'Start';
  } else {
    timer = setInterval(updateStopwatch, 1000);
    startStopBtn.textContent = 'Stop';
  }
  running = !running;
}

// Update the stopwatch time every second
function updateStopwatch() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes >= 60) {
    minutes = 0;
    hours++;
  }
  updateTimeDisplay();
}

// Reset the stopwatch
function reset() {
  clearInterval(timer);
  running = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateTimeDisplay();
  startStopBtn.textContent = 'Start';
}

// Event listeners
startStopBtn.addEventListener('click', startStop);
resetBtn.addEventListener('click', reset);

// Initialize the display
updateTimeDisplay();
