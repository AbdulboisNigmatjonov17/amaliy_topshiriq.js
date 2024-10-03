let interval;
let timeHave = 1500;

function timeFunction() {
    let minute = Math.floor(timeHave / 60);
    let second = timeHave % 60;
    let mainTime = `${minute.toString()}:${second.toString()}`;
  
    time.innerHTML = mainTime;
  }

function startTime() {
    interval = setInterval(() => {
        timeHave--;
        timeFunction();
      if (timeHave == -1) {
        clearInterval(interval);
        alert("Vaqt tugadi!");
        timeHave = 1500;
        timeFunction();
      }
    }, 1000);
  }
  function stopTime() {
    clearInterval(interval);
  }
  function resetTime() {
    clearInterval(interval);
    timeHave = 1500;
    timeFunction();
  }