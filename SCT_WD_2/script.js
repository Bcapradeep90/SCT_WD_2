let minutes = 0;
let seconds = 0;
let centiseconds = 0; 
let interval = null;

function updateDisplay() {
  const min = String(minutes).padStart(2, '0');
  const sec = String(seconds).padStart(2, '0');
  const cs = String(centiseconds).padStart(2, '0');
  document.getElementById('display').textContent = `${min} : ${sec} : ${cs}`;
}

function startTimer() {
  if (interval) return;
  interval = setInterval(() => {
    centiseconds++;
    if (centiseconds >= 100) {
      centiseconds = 0;
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }
    }
    updateDisplay();
  }, 10); 
}

function stopTimer() {
  clearInterval(interval);
  interval = null;
}

function resetTimer() {
  stopTimer();
  minutes = 0;
  seconds = 0;
  centiseconds = 0;
  updateDisplay();
  document.getElementById('laps').innerHTML = '';
}

function lapTime() {
  const lapDisplay = document.getElementById('laps');
  const lap = document.createElement('div');
  lap.classList.add('lap-item');
  const min = String(minutes).padStart(2, '0');
  const sec = String(seconds).padStart(2, '0');
  const cs = String(centiseconds).padStart(2, '0');
  lap.textContent = `${min} : ${sec} : ${cs}`;
  lapDisplay.appendChild(lap);
}
