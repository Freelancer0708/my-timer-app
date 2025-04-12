let time = 600; // 10分
let interval;

function updateDisplay() {
  const minutes = String(Math.floor(time / 60)).padStart(2, '0');
  const seconds = String(time % 60).padStart(2, '0');
  document.querySelector('.timer').textContent = `${minutes}:${seconds}`;
}

function startTimer() {
  if (interval) return;
  interval = setInterval(() => {
    if (time > 0) {
      time--;
      updateDisplay();
    } else {
      clearInterval(interval);
      interval = null;
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(interval);
  interval = null;
}

function resetTimer() {
  clearInterval(interval);
  interval = null;
  time = 600;
  updateDisplay();
}

function addTenMinutes() {
  time += 600;
  updateDisplay();
}

updateDisplay();
