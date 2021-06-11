const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const bDay = '1 Nov 2021';

function countdown() {
  const bDayDate = new Date(bDay);
  const currentDate = new Date();

  // Calc seconds
  const totalSeconds = new Date(bDayDate - currentDate) / 1000;

  // Calc Days
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(mins);
  secondsEl.innerHTML = formatTime(seconds);
}

// If < 10 sec/min/hours left, show the 0 in the tens area
// Switch from 10 to 09
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

// initial call
countdown();
setInterval(countdown, 1000);
